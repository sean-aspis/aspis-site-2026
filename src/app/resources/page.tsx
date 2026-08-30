import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * Resources — design file lines 1798–1853.
 *
 * Two sections, both direct children of <main>; the design's inline
 * `border-bottom` is dropped so the nth-of-type(n+2) rule owns the hairline.
 *
 * There is no CMS (README §8): the type index, the featured white paper and
 * the "also available" list are static content straight out of the design
 * file. Nothing here is a real download — the featured paper's only action is
 * "Request the paper", which routes to contact exactly as the design's
 * `goContact` handler did.
 */

const LEDE =
  'Technical depth and enterprise credibility, organized by what security, compliance, and procurement teams actually need to evaluate.';

export const metadata = pageMeta({
  title: 'Resources',
  description: LEDE,
  path: ROUTES.resources,
});

export default function ResourcesPage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--amber)' } as React.CSSProperties}>
      {/* 1 — resource types + featured topics */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--amber)',
              marginBottom: 24,
            }}
          >
            RESOURCES
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 860,
              textWrap: 'balance',
            }}
          >
            Security intelligence for the mobile enterprise.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 clamp(40px,5vw,60px)',
              maxWidth: 680,
            }}
          >
            {LEDE}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 0,
            }}
          >
            {PAGES.resourceTypes.map((r) => (
              <div
                key={r.t}
                style={{
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: 'clamp(26px,2.6vw,34px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  minHeight: 170,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                  }}
                >
                  {r.t}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {r.d}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'clamp(36px,4vw,56px)' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--text-dim)',
                marginBottom: 16,
              }}
            >
              FEATURED TOPICS
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {PAGES.resourceTopics.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '.04em',
                    color: '#9FB4E6',
                    border: '1px solid rgba(122,160,255,.22)',
                    padding: '8px 12px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2 — featured paper + listing */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--amber)',
              marginBottom: 22,
            }}
          >
            FEATURED
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
              gap: 0,
            }}
          >
            <div
              style={{
                border: '1px solid rgba(122,160,255,.16)',
                margin: '0 -1px -1px 0',
                padding: 'clamp(28px,3vw,44px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                backgroundImage: 'linear-gradient(160deg,rgba(63,107,255,.10),#05070E)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.16em',
                  color: 'var(--amber)',
                }}
              >
                WHITE PAPER
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px,2.2vw,32px)',
                  lineHeight: 1.12,
                  letterSpacing: '-.025em',
                  fontWeight: 700,
                }}
              >
                Encryption Is Not Enough: Closing the Gap Between Secure Messaging and Device
                Security
              </span>
              <span style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>
                Why communication security and endpoint security have to be evaluated together, and
                what an architecture that connects them looks like in practice.
              </span>
              <span
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.08em',
                  color: 'var(--text-dim)',
                  marginTop: 4,
                }}
              >
                <span>28 PAGES</span>
                <span>ENTERPRISE &amp; GOVERNMENT SECURITY LEADERS</span>
              </span>
              <Link
                href={ROUTES.contact}
                className="btn-ghost"
                style={{ alignSelf: 'flex-start', marginTop: 6, fontSize: 14.5, padding: '13px 22px' }}
              >
                Request the paper
              </Link>
            </div>

            <div
              style={{
                border: '1px solid rgba(122,160,255,.16)',
                margin: '0 -1px -1px 0',
                padding: 'clamp(26px,2.6vw,36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.16em',
                  color: 'var(--text-dim)',
                  paddingBottom: 14,
                  borderBottom: '1px solid rgba(122,160,255,.16)',
                }}
              >
                ALSO AVAILABLE
              </span>
              {PAGES.resourceItems.map((r) => (
                <span
                  key={r.t}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(122,160,255,.08)',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9.5,
                        letterSpacing: '.12em',
                        color: r.c,
                      }}
                    >
                      {r.kind}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9.5,
                        color: 'var(--text-faint)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {r.meta}
                    </span>
                  </span>
                  <span
                    style={{ fontSize: 15, lineHeight: 1.45, color: '#E4E9F5', fontWeight: 500 }}
                  >
                    {r.t}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: 'var(--text-faint)',
              margin: '18px 0 0',
              maxWidth: 720,
            }}
          >
            Resource availability varies. Some documents are provided under NDA or to qualified
            enterprise and government evaluators.
          </p>
        </div>
      </section>
    </main>
  );
}
