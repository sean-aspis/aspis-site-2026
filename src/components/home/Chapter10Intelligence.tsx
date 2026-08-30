import { Fragment } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/site';

/** Violet is the intelligence / SentinelIQ / UNDERSTAND hue (README §2). */
const VIOLET = '#A78BFA';

/** Escalation chain to the right of the graph panel, verbatim from the design. */
const CHAIN = ['REVIEW', 'INVESTIGATION', 'CASE', 'LEGAL HOLD'];

const chip: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 10.5,
  letterSpacing: '.08em',
  padding: '8px 12px',
};

/**
 * 10 / INTELLIGENCE — violet.
 * The graph panel lists the six entities SentinelIQ correlates. Each node
 * carries a `breathe` halo staggered by index so the pulses do not sync — the
 * same (3 + i*0.4)s / (i*0.3)s stagger the design file uses for its solution
 * topology halos.
 *
 * The design's opener here carries the eyebrow alone — no tapered rule and no
 * chapter caption — so it is written out rather than using <ChapterHeader>.
 */
export default function Chapter10Intelligence() {
  return (
    <section>
      <div
        className="container pad-standard"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
          gap: 'clamp(36px,5vw,64px)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 34 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.2em',
                color: VIOLET,
              }}
            >
              10 / INTELLIGENCE
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,3.2vw,48px)',
              lineHeight: 1.07,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 24px',
              maxWidth: 520,
              textWrap: 'balance',
            }}
          >
            Understand communications in the context in which they occurred.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 32px',
              maxWidth: 520,
            }}
          >
            SentinelIQ combines communication information with security and governance context to
            help organizations identify compliance risk, suspicious behavior, fraud indicators,
            policy violations, investigative relationships, and governance history.
          </p>
          <Link
            href="/products/sentineliq"
            className="btn-ghost"
            style={{ fontSize: 15, padding: '14px 26px' }}
          >
            Explore SentinelIQ
          </Link>
        </div>

        <div style={{ alignSelf: 'center', display: 'grid', gap: 22 }}>
          <div
            style={{
              border: '1px solid rgba(103,232,249,.30)',
              background: 'rgba(10,15,30,.7)',
              padding: '26px 24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.14em',
                color: VIOLET,
                marginBottom: 18,
              }}
            >
              HIGH-RISK COMMUNICATION
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
              {SITE.graphNodes.map((n, i) => (
                <div
                  key={n}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    flex: '1 1 120px',
                    minWidth: 120,
                    border: '1px solid rgba(122,160,255,.16)',
                    margin: '0 -1px -1px 0',
                    padding: '14px 12px',
                    fontSize: 13.5,
                    color: '#C0CBE4',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(ellipse at 50% 50%,rgba(167,139,250,.24),rgba(167,139,250,0) 72%)',
                      animation: `breathe ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                      pointerEvents: 'none',
                    }}
                  />
                  <span style={{ position: 'relative' }}>{n}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            <span style={{ ...chip, color: '#04060E', background: VIOLET }}>AI RISK FINDING</span>
            {CHAIN.map((step) => (
              <Fragment key={step}>
                <span style={{ color: '#4C5877' }}>→</span>
                <span
                  style={{
                    ...chip,
                    color: '#C0CBE4',
                    border: '1px solid rgba(122,160,255,.24)',
                  }}
                >
                  {step}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
