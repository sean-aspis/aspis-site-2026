import { NextResponse } from 'next/server';
import { EXTERNAL } from '@/data/nav';
import { DOC_BY_SLUG } from '@/data/documents';
import {
  ACCESS_COOKIE,
  ACCESS_MAX_AGE,
  UI_COOKIE,
  issueToken,
  validateLead,
} from '@/lib/docAccess';

/**
 * Grants document access in exchange for a lead.
 *
 * The four fields are validated here, not merely in the browser, and the lead
 * is forwarded to the same Formspree endpoint the site's other forms use so it
 * lands wherever those land. Access is granted even if Formspree is
 * unreachable: a visitor who filled the form in good faith should not be
 * refused a white paper because a third-party service is down. The failure is
 * reported back in the response so it is visible rather than silent.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: 'Malformed request.' }, { status: 400 });
  }

  // Honeypot, matching the site's other forms. A bot fills every field it sees.
  if (typeof body._gotcha === 'string' && body._gotcha.trim() !== '') {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const result = validateLead(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });
  }
  const { lead } = result;

  const slug = typeof body.slug === 'string' ? body.slug : '';
  const doc = DOC_BY_SLUG[slug];

  let delivered = true;
  try {
    const res = await fetch(EXTERNAL.formspree, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: 'ASPIS — Document download',
        name: lead.name,
        email: lead.email,
        organization: lead.company,
        'job title': lead.position,
        document: doc ? `${doc.title} (${doc.kind})` : slug || 'Not specified',
        source: 'Resource library download gate',
      }),
    });
    delivered = res.ok;
  } catch {
    delivered = false;
  }

  const response = NextResponse.json({ ok: true, delivered });
  const common = {
    path: '/',
    maxAge: ACCESS_MAX_AGE,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
  };
  response.cookies.set(ACCESS_COOKIE, issueToken(lead), { ...common, httpOnly: true });
  // Readable companion so the UI can skip the prompt on a return visit. It
  // confers nothing — the download route reads only the signed cookie above.
  response.cookies.set(UI_COOKIE, '1', { ...common, httpOnly: false });
  return response;
}
