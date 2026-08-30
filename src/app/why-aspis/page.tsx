import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * Why ASPIS — design file lines 1760–1795.
 *
 * Two sections, both direct children of <main>. The design carries an inline
 * `border-bottom` on each; it is dropped here so the nth-of-type(n+2) rule in
 * globals.css owns the hairline (the inline one doubles it to 2px).
 *
 * Both the capability blocks and the layered questions are collapsed-border
 * grids — each cell pulls a pixel of margin so adjacent borders overlap into a
 * single shared hairline. The design file gives neither grid a hover state, so
 * neither gets a hover class here.
 */

const LEDE =
  'The market contains secure messaging platforms, Mobile Threat Defense platforms, MDM platforms, compliance archives, and board portals. ASPIS builds an integrated architecture across those traditionally separate domains.';

export const metadata = pageMeta({
  title: 'Why ASPIS',
  description: LEDE,
  path: ROUTES.why,
});

export default function WhyAspisPage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--periwinkle)' } as React.CSSProperties}>
      {/* 1 — the six capability blocks */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--periwinkle)',
              marginBottom: 24,
            }}
          >
            WHY ASPIS
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 900,
              textWrap: 'balance',
            }}
          >
            Security at the intersection of communications and device security.
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
            {LEDE}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
              gap: 0,
            }}
          >
            {PAGES.whyBlocks.map((w) => (
              <div
                key={w.n}
                style={{
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: 'clamp(26px,2.6vw,36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  minHeight: 200,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '.16em',
                    color: w.c,
                  }}
                >
                  {w.n}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 21,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                  }}
                >
                  {w.t}
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.58, color: 'var(--text-body)' }}>
                  {w.d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — the seven layered questions */}
      <section>
        <div className="container pad-standard">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px,3vw,44px)',
              lineHeight: 1.08,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 clamp(32px,4vw,48px)',
              maxWidth: 760,
              textWrap: 'balance',
            }}
          >
            Zero Trust, extended into the conversation.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {SITE.questions.map((q) => (
              <div
                key={q.layer}
                style={{
                  flex: '1 1 230px',
                  minWidth: 230,
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: '26px 22px',
                  minHeight: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.14em',
                    color: q.c,
                  }}
                >
                  {q.layer}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    lineHeight: 1.35,
                    fontWeight: 600,
                    letterSpacing: '-.01em',
                  }}
                >
                  {q.q}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 'clamp(32px,4vw,48px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 14,
            }}
          >
            <Link href={ROUTES.trust} className="btn-ghost" style={{ fontSize: 15, padding: '15px 28px' }}>
              Security &amp; Compliance
            </Link>
            <Link href={ROUTES.contact} className="btn-primary" style={{ fontSize: 15, padding: '15px 28px' }}>
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
