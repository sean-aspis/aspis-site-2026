import Link from 'next/link';
import type { Metadata } from 'next';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { DIRECT_ROUTES } from '@/lib/contact';

export const metadata: Metadata = pageMeta({
  title: 'Account Deletion Request',
  description:
    'How to ask ASPIS to delete your ShieldiT or ShieldiT Defense account and the personal data associated with it, what is deleted, and what may be retained.',
  path: '/account-deletion-request',
});

/**
 * Account deletion for the ShieldiT mobile apps.
 *
 * The app stores require a public web page, reachable without signing in,
 * that tells a user how to have their account deleted and what happens to
 * their data. This is that page for ShieldiT and ShieldiT Defense; both apps
 * and both store listings point at /account-deletion-request/ (trailing slash
 * included — see src/proxy.ts), so the address must stay stable.
 *
 * CLAIMS DISCIPLINE, as on the rest of the site: the contact address is the
 * one ASPIS publishes (DIRECT_ROUTES); the data categories are the general
 * ones an account carries and name no internal system; the 30-day completion
 * window is the only numeric commitment on the page and must be confirmed by
 * ASPIS before this is submitted to a store.
 */

const SUPPORT_EMAIL =
  DIRECT_ROUTES.find((r) => r.label === 'Existing customers')?.email ?? 'support@aspiscyber.com';

const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Account deletion request')}`;

const APPS = ['ShieldiT', 'ShieldiT Defense'];

const INCLUDE = [
  {
    t: 'Which app',
    d: 'ShieldiT or ShieldiT Defense, and whether you use it on iOS or Android.',
  },
  {
    t: 'The account to delete',
    d: 'The email address, phone number or username you sign in with. Sending the request from the email address on the account is the quickest way for us to verify it.',
  },
  {
    t: 'Your organization, if any',
    d: 'If the account was issued to you by your employer or another organization, its name. See below for how those requests are handled.',
  },
];

const STEPS = [
  {
    t: 'We confirm receipt',
    d: 'You receive an acknowledgement at the address you wrote from.',
  },
  {
    t: 'We verify the request',
    d: 'We check that the request comes from the account holder. If we cannot match it to an account, we will ask for the details we need and take no other action.',
  },
  {
    t: 'We delete the account',
    d: 'The account is closed, you are signed out on all devices, and the data listed below is deleted within 30 days of verification.',
  },
  {
    t: 'We confirm completion',
    d: 'You receive a final message when the deletion is complete.',
  },
];

const DELETED = [
  'Account and profile information: name, email address, phone number and account identifiers.',
  'Device enrollment records linking your devices to the account.',
  'Device security state and threat-scan history associated with the account.',
  'App settings and preferences.',
];

const RETAINED = [
  'Records we are required by law to keep, for example for tax, accounting or a legal proceeding, for as long as that obligation lasts.',
  'Security-incident records where an account was involved in a confirmed security event, kept as long as needed to protect the service.',
  'Aggregated or anonymized statistics that no longer identify you.',
];

const MEASURE = 760;

const CARD: React.CSSProperties = {
  border: '1px solid var(--line)',
  background: 'rgba(16,23,51,.35)',
  padding: 'clamp(20px,2vw,28px)',
  maxWidth: MEASURE,
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(20px,2vw,25px)',
        fontWeight: 700,
        letterSpacing: '-.02em',
        lineHeight: 1.2,
        margin: '0 0 16px',
        maxWidth: MEASURE,
      }}
    >
      {children}
    </h2>
  );
}

function Defs({ items }: { items: { t: string; d: string }[] }) {
  return (
    <dl style={{ margin: '0 0 18px', maxWidth: MEASURE }}>
      {items.map((item) => (
        <div
          key={item.t}
          style={{ borderLeft: '2px solid var(--line-strong)', paddingLeft: 16, marginBottom: 16 }}
        >
          <dt
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '-.01em',
              color: 'var(--text-bright)',
              marginBottom: 5,
            }}
          >
            {item.t}
          </dt>
          <dd className="body" style={{ margin: 0 }}>
            {item.d}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        margin: '0 0 18px',
        paddingLeft: 20,
        maxWidth: MEASURE,
        display: 'flex',
        flexDirection: 'column',
        gap: 9,
      }}
    >
      {items.map((item) => (
        <li key={item} className="body" style={{ paddingLeft: 2 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

const SECTION: React.CSSProperties = { marginBottom: 'clamp(32px,3vw,44px)' };

export default function AccountDeletionRequestPage() {
  return (
    <main id="main">
      <section className="pad-chapter">
        <div className="container" style={{ maxWidth: 900 }}>
          <Breadcrumbs
            trail={[
              { name: 'Company', href: ROUTES.about },
              { name: 'Support', href: ROUTES.support },
              { name: 'Account Deletion Request' },
            ]}
          />
          <div className="eyebrow" style={{ color: 'var(--text-dim)', marginBottom: 18 }}>
            {APPS.join(' · ').toUpperCase()}
          </div>
          <h1 className="h1" style={{ marginBottom: 20, maxWidth: MEASURE }}>
            Account Deletion Request
          </h1>
          <p className="lede" style={{ marginBottom: 'clamp(34px,3.4vw,48px)', maxWidth: MEASURE }}>
            How to ask ASPIS to delete your ShieldiT or ShieldiT Defense account and the personal
            data associated with it. You do not need to be signed in to make the request.
          </p>

          <section style={SECTION}>
            <Heading>How to request deletion</Heading>
            <p className="body" style={{ marginBottom: 16, maxWidth: MEASURE }}>
              Email {SUPPORT_EMAIL} with the subject &ldquo;Account deletion request&rdquo;. The
              request is handled by the ASPIS support team; there is no form to fill in and no
              phone call required.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '4px 0 24px' }}>
              <a href={MAILTO} className="btn-primary">
                Request account deletion
              </a>
            </div>
            <p className="body" style={{ marginBottom: 12, maxWidth: MEASURE }}>
              Please include:
            </p>
            <Defs items={INCLUDE} />
          </section>

          <section style={SECTION}>
            <Heading>What happens next</Heading>
            <Defs items={STEPS} />
          </section>

          <section style={SECTION}>
            <Heading>What is deleted</Heading>
            <Bullets items={DELETED} />
            <Heading>What may be retained</Heading>
            <p className="body" style={{ marginBottom: 12, maxWidth: MEASURE }}>
              Some records are kept after the account is closed, only for as long as the reason
              for keeping them lasts, and are then deleted:
            </p>
            <Bullets items={RETAINED} />
          </section>

          <section style={SECTION}>
            <Heading>Accounts issued by an organization</Heading>
            <p className="body" style={{ marginBottom: 16, maxWidth: MEASURE }}>
              ShieldiT is deployed by organizations to their own people. If your account was
              issued by your employer or another organization, that organization controls the
              account and the data in it, and ASPIS acts on its instructions. We will forward your
              request to the organization&rsquo;s administrator, who can also remove the account
              directly, and we will let you know that we have done so.
            </p>
          </section>

          <section style={SECTION}>
            <Heading>Deleting data without closing the account</Heading>
            <p className="body" style={{ marginBottom: 16, maxWidth: MEASURE }}>
              If you want specific data removed but wish to keep using the app, write to the same
              address and say what you would like deleted. The rights available to you, and how we
              handle personal information generally, are described in the privacy policy.
            </p>
            <div style={CARD}>
              <div className="eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 12 }}>
                RELATED
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <Link href="/privacy-policy" className="btn-ghost" style={{ fontSize: 13.5 }}>
                  Privacy Policy
                </Link>
                <Link href={ROUTES.support} className="btn-ghost" style={{ fontSize: 13.5 }}>
                  Support
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
