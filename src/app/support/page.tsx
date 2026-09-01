import Link from 'next/link';
import type { Metadata } from 'next';
import { ROUTES, EXTERNAL } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { DIRECT_ROUTES } from '@/lib/contact';

export const metadata: Metadata = pageMeta({
  title: 'Support',
  description:
    'Support for organizations already running ASPIS. How to reach support, report an active incident, reach the ManageiT administration portal, and report a security vulnerability.',
  path: '/support',
});

/**
 * Support, for organizations that already run ASPIS.
 *
 * Why this page exists: the "Support — existing customer support" entry in the
 * Company menu resolved to /contact#support, so a customer with a live problem
 * landed on a sales inquiry form alongside "Enterprise Sales" and "Government &
 * Defense". The utility bar's "Experiencing an incident?" — the most urgent link
 * on the site — went to the same general contact page. Both now arrive here.
 *
 * CLAIMS DISCIPLINE. Everything on this page is either published by ASPIS or
 * verifiable in this codebase. Deliberately NOT stated, because ASPIS has not
 * published it and inventing it would create a commitment the company has not
 * made:
 *
 *   - response times, target resolution times, or any named SLA
 *   - support hours, on-call coverage, or a 24/7 claim
 *   - severity or priority definitions tied to a response commitment
 *   - a telephone number or a support hotline
 *   - a ticketing portal, case numbers, or a status page
 *   - support tiers, plans, or entitlements
 *   - named escalation contacts or an escalation path
 *
 * What IS stated: the support address, which ASPIS publishes in its own white
 * papers (see the source note on DIRECT_ROUTES in lib/contact.ts); the ManageiT
 * administration portal, which is the destination of the site's own log-in
 * link; the contact form; the published document library; and the existing
 * responsible-disclosure route. The "what to include" list is practical
 * guidance for the person writing the message, not a statement of ASPIS policy
 * or a precondition of support.
 */

const SUPPORT_EMAIL =
  DIRECT_ROUTES.find((r) => r.label === 'Existing customers')?.email ?? 'support@aspiscyber.com';

/** What helps a first reply be useful. Guidance for the sender, not policy. */
const INCLUDE = [
  {
    t: 'Organization and tenant',
    d: 'The organization name and, if you know it, the tenant the affected users sit in. ManageiT shows this on the dashboard header.',
  },
  {
    t: 'Product and edition',
    d: 'Which ASPIS product is involved — ShieldiT Enterprise, FSX, Executive, Defense, ManageiT or SentinelIQ — and the edition, where you know it.',
  },
  {
    t: 'Scope',
    d: 'One user, one group, one device platform, or the whole estate. Whether it started after a policy change, an OS update or a new deployment.',
  },
  {
    t: 'What you observe',
    d: 'What happens, what you expected instead, and when it began. Exact on-screen text is more useful than a paraphrase.',
  },
  {
    t: 'Devices and platforms',
    d: 'Operating system and version on the affected devices, and whether they are corporate-managed or BYOD.',
  },
  {
    t: 'What you have already tried',
    d: 'Steps already taken, and anything that changed the behavior. It saves a round trip.',
  },
];

const SELF_SERVE = [
  {
    t: 'ManageiT',
    d: 'Tenant and user administration, security policy, alerts, audit logs and integration status. Where an administrator can see current state before raising anything.',
    cta: 'Open ManageiT',
    href: EXTERNAL.manageIt,
    external: true,
  },
  {
    t: 'Document library',
    d: 'Product white papers and use-case documents covering architecture, deployment and configuration.',
    cta: 'Browse documents',
    href: ROUTES.resources,
  },
  {
    t: 'Deployment guides',
    d: 'Deployment, identity-provider integration and rollout material.',
    cta: 'Deployment guides',
    href: ROUTES.deploymentGuides,
  },
  {
    t: 'Platform architecture',
    d: 'How the products fit together, what runs where, and which controls apply at which layer.',
    cta: 'Platform architecture',
    href: ROUTES.platformArchitecture,
  },
];

const CARD: React.CSSProperties = {
  border: '1px solid var(--line)',
  background: 'rgba(16,23,51,.35)',
  padding: 'clamp(20px,2vw,28px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

export default function SupportPage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--periwinkle)' } as React.CSSProperties}>
      <section>
        <div className="container pad-chapter">
          <Breadcrumbs trail={[{ name: 'Company', href: ROUTES.about }, { name: 'Support' }]} />
          <div className="eyebrow" style={{ color: 'var(--periwinkle)', marginBottom: 20 }}>
            SUPPORT
          </div>
          <h1 className="h1" style={{ maxWidth: 900, marginBottom: 22 }}>
            Support for organizations already running ASPIS.
          </h1>
          <p className="lede" style={{ maxWidth: 720 }}>
            Technical assistance for existing customers: configuration and policy questions,
            deployment problems, integration behavior, and anything that needs an ASPIS engineer
            rather than a sales conversation.
          </p>
        </div>
      </section>

      {/* ── active incident ─────────────────────────────────────────────────── */}
      <section>
        <div className="container pad-standard">
          <div
            id="incident"
            style={{
              border: '1px solid rgba(255,138,110,.42)',
              background:
                'linear-gradient(180deg,rgba(240,69,42,.10),rgba(16,23,51,.35))',
              padding: 'clamp(24px,2.6vw,36px)',
              scrollMarginTop: 120,
            }}
          >
            <div
              className="eyebrow"
              style={{ color: 'var(--sev-high)', marginBottom: 14 }}
            >
              REPORTING AN ACTIVE INCIDENT
            </div>
            <h2 className="h2" style={{ maxWidth: 760, marginBottom: 16 }}>
              If something is happening right now, say so in the first line.
            </h2>
            <p className="body" style={{ maxWidth: 720, marginBottom: 18 }}>
              Email{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="lnk-inline">
                {SUPPORT_EMAIL}
              </a>{' '}
              and lead with the word <strong>incident</strong>, the organization name, and what you
              are seeing. Include the detail below if you have it, but do not wait to gather all of
              it — send what you know and follow up.
            </p>
            <p className="body" style={{ maxWidth: 720, marginBottom: 22 }}>
              If you administer the tenant, ManageiT shows current alerts, affected devices and
              recent policy and administrative changes, which is usually the fastest way to
              establish scope while the conversation starts.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-primary">
                Email support
              </a>
              <a
                href={EXTERNAL.manageIt}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                title="ManageiT is the ASPIS administration portal"
              >
                Open ManageiT ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── how to reach support ────────────────────────────────────────────── */}
      <section>
        <div className="container pad-standard">
          <h2 className="h2" style={{ maxWidth: 760, marginBottom: 14 }}>
            How to reach support
          </h2>
          <p className="body" style={{ maxWidth: 700, marginBottom: 'clamp(24px,2.4vw,34px)' }}>
            Any of these routes reach the same team. Email is the most direct if you already know
            what you need; the form is there if you would rather describe the situation in
            structured fields.
          </p>
          <div className="auto-grid">
            <div style={CARD}>
              <h3 className="h3">Email support</h3>
              <p className="body" style={{ flex: 1 }}>
                Direct to the support address ASPIS publishes for existing customers.
              </p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-ghost" style={{ alignSelf: 'flex-start' }}>
                {SUPPORT_EMAIL}
              </a>
            </div>
            <div style={CARD}>
              <h3 className="h3">Support inquiry form</h3>
              <p className="body" style={{ flex: 1 }}>
                The contact form with Support already selected, so the inquiry is routed rather than
                triaged.
              </p>
              <Link href={`${ROUTES.contact}#support`} className="btn-ghost" style={{ alignSelf: 'flex-start' }}>
                Open the form
              </Link>
            </div>
            <div style={CARD}>
              <h3 className="h3">Administrator access</h3>
              <p className="body" style={{ flex: 1 }}>
                ManageiT, the ASPIS administration portal, for tenant administrators.
              </p>
              <a
                href={EXTERNAL.manageIt}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ alignSelf: 'flex-start' }}
              >
                ManageiT Log In ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── what to include ─────────────────────────────────────────────────── */}
      <section>
        <div className="container pad-standard">
          <h2 className="h2" style={{ maxWidth: 760, marginBottom: 14 }}>
            What to include
          </h2>
          <p className="body" style={{ maxWidth: 700, marginBottom: 'clamp(24px,2.4vw,34px)' }}>
            None of this is required to open a conversation. It is simply what tends to make the
            first reply useful rather than a request for more information.
          </p>
          <div className="auto-grid">
            {INCLUDE.map((i) => (
              <div key={i.t} style={CARD}>
                <h3 className="h3">{i.t}</h3>
                <p className="body">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── self-service ────────────────────────────────────────────────────── */}
      <section>
        <div className="container pad-standard">
          <h2 className="h2" style={{ maxWidth: 760, marginBottom: 14 }}>
            Before you raise it
          </h2>
          <p className="body" style={{ maxWidth: 700, marginBottom: 'clamp(24px,2.4vw,34px)' }}>
            Configuration, deployment and architecture questions are often answered by the
            published material or visible in the console.
          </p>
          <div className="auto-grid">
            {SELF_SERVE.map((s) => (
              <div key={s.t} style={CARD}>
                <h3 className="h3">{s.t}</h3>
                <p className="body" style={{ flex: 1 }}>
                  {s.d}
                </p>
                {s.external ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    {s.cta} ↗
                  </a>
                ) : (
                  <Link href={s.href} className="btn-ghost" style={{ alignSelf: 'flex-start' }}>
                    {s.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── vulnerability vs support ────────────────────────────────────────── */}
      <section>
        <div className="container pad-standard">
          <div className="auto-grid">
            <div style={CARD}>
              <h3 className="h3">Reporting a security vulnerability</h3>
              <p className="body" style={{ flex: 1 }}>
                A suspected vulnerability in an ASPIS product is a different route from a support
                request, and should go through responsible disclosure rather than the support
                address.
              </p>
              <Link
                href={`${ROUTES.trust}#responsible-disclosure`}
                className="btn-ghost"
                style={{ alignSelf: 'flex-start' }}
              >
                Responsible disclosure
              </Link>
            </div>
            <div style={CARD}>
              <h3 className="h3">Not an ASPIS customer yet</h3>
              <p className="body" style={{ flex: 1 }}>
                Evaluations, pricing, architecture reviews and demonstrations are handled by the
                sales and specialist teams, not by support.
              </p>
              <Link href={ROUTES.contact} className="btn-ghost" style={{ alignSelf: 'flex-start' }}>
                Contact ASPIS
              </Link>
            </div>
            <div style={CARD}>
              <h3 className="h3">Partners</h3>
              <p className="body" style={{ flex: 1 }}>
                MSPs, MSSPs, carriers, resellers and integrators supporting their own customers on
                ASPIS have a separate route.
              </p>
              <Link href={ROUTES.partners} className="btn-ghost" style={{ alignSelf: 'flex-start' }}>
                Partner program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
