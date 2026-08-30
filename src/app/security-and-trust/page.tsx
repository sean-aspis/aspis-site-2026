import type { Metadata } from 'next';
import { PAGES } from '@/data/pages';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * Security & Compliance — design file lines 2081–2112. (`/security-and-trust`
 * is the route's own name in the design and the single exception to the
 * site-wide no-"trust" copy rule; the page's visible copy avoids it.)
 *
 * Two sections, both direct children of <main>; the design's inline
 * `border-bottom` on each is dropped in favour of the nth-of-type(n+2) rule.
 * The compliance disclosure carries `id="responsible-disclosure"` — the footer
 * links to that anchor.
 */

export const metadata: Metadata = pageMeta({
  title: 'Security & Compliance',
  description:
    'ASPIS provides transparent information about the principles underlying its platform without exposing sensitive implementation detail.',
  path: ROUTES.trust,
});

export default function SecurityAndCompliancePage() {
  return (
    <main id="main">
      {/* 1 — hero and the security principles grid */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--teal)',
              marginBottom: 24,
            }}
          >
            SECURITY &amp; COMPLIANCE
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 880,
              textWrap: 'balance',
            }}
          >
            Security technology should be able to explain how it protects you.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 clamp(40px,5vw,60px)',
              maxWidth: 700,
            }}
          >
            ASPIS provides transparent information about the principles underlying its platform
            without exposing sensitive implementation detail.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 0,
            }}
          >
            {PAGES.trustPrinciples.map((t) => (
              <div
                key={t.t}
                style={{
                  border: '1px solid rgba(122,160,255,.14)',
                  margin: '0 -1px -1px 0',
                  padding: '26px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  minHeight: 170,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 19,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                  }}
                >
                  {t.t}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {t.d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — compliance frameworks and the disclosure */}
      <section>
        <div className="container pad-standard">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px,3vw,44px)',
              lineHeight: 1.08,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 18px',
              maxWidth: 640,
              textWrap: 'balance',
            }}
          >
            Compliance
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 26px',
              maxWidth: 700,
            }}
          >
            Depending on product, configuration, and deployment, ASPIS capabilities may support
            customer programs associated with:
          </p>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              maxWidth: 820,
              margin: '0 0 clamp(32px,4vw,44px)',
              padding: 0,
              listStyle: 'none',
            }}
          >
            {SITE.frameworks.map((fw) => (
              <li
                key={fw}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.04em',
                  color: '#9FB4E6',
                  border: '1px solid rgba(122,160,255,.22)',
                  padding: '7px 11px',
                }}
              >
                {fw}
              </li>
            ))}
          </ul>
          <div
            id="responsible-disclosure"
            style={{
              borderLeft: '2px solid var(--sev-high)',
              padding: '16px 0 16px 22px',
              maxWidth: 860,
              scrollMarginTop: 96,
            }}
          >
            <p style={{ fontSize: 15.5, lineHeight: 1.62, color: '#C0CBE4', margin: 0 }}>
              Compliance depends on an organization&rsquo;s complete technology environment,
              policies, processes, configuration, implementation, and operational practices. ASPIS
              solutions can support applicable security and compliance requirements but do not, by
              themselves, establish organizational compliance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
