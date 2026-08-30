import { SITE } from '@/data/site';

/** Amber is the compliance / governance / regulated hue (README §2). */
const AMBER = '#F5C451';

/**
 * 07 / COMPLIANCE & CONTROL — amber.
 * Two columns: the control statement plus the framework chip field on the
 * left, the eight control surfaces as a two-up ruled list on the right.
 *
 * The design's opener here carries the eyebrow alone — no tapered rule and no
 * chapter caption — so it is written out rather than using <ChapterHeader>.
 */
export default function Chapter07Compliance() {
  return (
    <section>
      <div
        className="container pad-standard"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
          gap: 'clamp(36px,5vw,72px)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 34 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.2em',
                color: AMBER,
              }}
            >
              07 / COMPLIANCE &amp; CONTROL
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
              maxWidth: 480,
              textWrap: 'balance',
            }}
          >
            Your organization stays in control.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-muted)',
              margin: '0 0 8px',
              maxWidth: 460,
            }}
          >
            Not a public communications network. Not a consumer messaging model.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-primary)',
              fontWeight: 500,
              margin: '0 0 30px',
              maxWidth: 460,
            }}
          >
            Your environment. Your policy. Your record.
          </p>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '.14em',
              color: 'var(--text-dim)',
              marginBottom: 14,
            }}
          >
            SUPPORTS PROGRAMS ASSOCIATED WITH
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 520 }}>
            {SITE.frameworks.map((fw) => (
              <span
                key={fw}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.04em',
                  color: '#9FB4E6',
                  border: '1px solid rgba(122,160,255,.22)',
                  padding: '6px 10px',
                }}
              >
                {fw}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0 32px',
            alignContent: 'start',
          }}
        >
          {SITE.controls.map((c) => (
            <div
              key={c}
              style={{
                flex: '1 1 45%',
                minWidth: 150,
                padding: '15px 0',
                borderBottom: '1px solid var(--line)',
                fontSize: 16,
                color: '#C0CBE4',
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
