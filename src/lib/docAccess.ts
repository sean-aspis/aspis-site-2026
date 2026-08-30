import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Document access tokens.
 *
 * The published PDFs are gated: a visitor supplies name, email, company and
 * position before any of them can be read. To make that mean something the
 * files live in /private/documents, outside the public directory, so the CDN
 * never serves them and a crawler cannot find them. They are readable only
 * through /api/documents/[slug], which requires the cookie this module issues.
 *
 * The token is HMAC-signed so its contents can be trusted — the recorded email
 * is what the visitor actually submitted, not something typed into devtools.
 *
 * SET `DOC_ACCESS_SECRET` IN THE VERCEL PROJECT. Without it the signature falls
 * back to a constant that is visible in this repository, which leaves the token
 * forgeable by anyone who reads the source. The gate still holds in every other
 * respect — the files are not public, not linkable and not indexable, and no
 * ordinary visitor reaches one without submitting the form — but the signature
 * is only meaningful once the secret is set.
 */

export const ACCESS_COOKIE = 'aspis_doc_access';

/** Readable by the client purely so the UI knows not to re-prompt. Carries no
 *  authority: the API ignores it entirely and checks the signed cookie. */
export const UI_COOKIE = 'aspis_doc_ok';

export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const FALLBACK_SECRET = 'aspis-doc-gate-unsigned-fallback';

const secret = () => process.env.DOC_ACCESS_SECRET || FALLBACK_SECRET;

export type Lead = {
  name: string;
  email: string;
  company: string;
  position: string;
};

const b64 = (s: string) => Buffer.from(s, 'utf8').toString('base64url');
const unb64 = (s: string) => Buffer.from(s, 'base64url').toString('utf8');

const sign = (payload: string) =>
  createHmac('sha256', secret()).update(payload).digest('base64url');

/** `<payload>.<signature>` — the value stored in the HttpOnly cookie. */
export function issueToken(lead: Lead): string {
  const payload = b64(JSON.stringify({ e: lead.email, t: Date.now() }));
  return `${payload}.${sign(payload)}`;
}

/** The token's email if it is well-formed, correctly signed and unexpired. */
export function readToken(token: string | undefined): string | null {
  if (!token) return null;
  const dot = token.lastIndexOf('.');
  if (dot < 1) return null;

  const payload = token.slice(0, dot);
  const given = Buffer.from(token.slice(dot + 1));
  const want = Buffer.from(sign(payload));
  if (given.length !== want.length || !timingSafeEqual(given, want)) return null;

  try {
    const { e, t } = JSON.parse(unb64(payload)) as { e?: string; t?: number };
    if (typeof t !== 'number' || Date.now() - t > ACCESS_MAX_AGE * 1000) return null;
    return typeof e === 'string' ? e : null;
  } catch {
    return null;
  }
}

/**
 * Field validation, applied on the server rather than trusted from the client.
 * Returns the cleaned lead, or the field-keyed errors the form should show.
 */
export function validateLead(input: Record<string, unknown>):
  | { ok: true; lead: Lead }
  | { ok: false; errors: Partial<Record<keyof Lead, string>> } {
  const get = (k: string) => (typeof input[k] === 'string' ? (input[k] as string).trim() : '');

  const lead: Lead = {
    name: get('name').slice(0, 120),
    email: get('email').slice(0, 200),
    company: get('company').slice(0, 160),
    position: get('position').slice(0, 160),
  };

  const errors: Partial<Record<keyof Lead, string>> = {};
  if (lead.name.length < 2) errors.name = 'Please enter your full name.';
  // Deliberately permissive: one @, something either side, a dot in the domain.
  // Anything stricter rejects real addresses.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email))
    errors.email = 'Please enter a valid business email address.';
  if (lead.company.length < 2) errors.company = 'Please enter your organization.';
  if (lead.position.length < 2) errors.position = 'Please enter your job title.';

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, lead };
}
