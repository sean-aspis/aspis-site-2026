import { ChapterHeader } from '@/components/ui/Primitives';
import { SITE } from '@/data/site';

/** Teal is the deployment / verified-state / integrations hue (README §2). */
const TEAL = '#2FD4A7';

/**
 * 06 / DEPLOYMENT — teal.
 * Full-bleed chapter opener, then the seven deployment architectures as a
 * hairline-collapsed cell grid under a teal→cyan 2px rule.
 */
export default function Chapter06Deployment() {
  return (
    <section>
      <div className="container pad-continuation">
        <ChapterHeader eyebrow="06 / DEPLOYMENT" accent={TEAL} />

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,3.2vw,48px)',
            lineHeight: 1.07,
            letterSpacing: '-.03em',
            fontWeight: 700,
            margin: '0 0 16px',
            maxWidth: 760,
            textWrap: 'balance',
          }}
        >
          From enterprise cloud to mission-isolated infrastructure.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: '0 0 clamp(36px,4vw,52px)',
            maxWidth: 620,
          }}
        >
          Deployment architecture varies by product and customer requirement, from rapid SaaS
          onboarding through customer-controlled and applicable isolated environments.
        </p>

        <div
          aria-hidden
          style={{
            height: 2,
            background: 'linear-gradient(90deg,#2FD4A7,#67E8F9,rgba(47,212,167,.12))',
            marginBottom: 0,
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
          {SITE.deployments.map((d) => (
            <div
              key={d.n}
              className="cell-hover"
              style={{
                flex: '1 1 170px',
                minWidth: 170,
                border: '1px solid var(--line)',
                borderTop: 'none',
                margin: '0 -1px -1px 0',
                padding: '24px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                minHeight: 170,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  color: TEAL,
                  letterSpacing: '.12em',
                }}
              >
                {d.n}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 17,
                  fontWeight: 600,
                  lineHeight: 1.25,
                  letterSpacing: '-.01em',
                }}
              >
                {d.name}
              </span>
              <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>
                {d.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
