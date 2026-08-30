import { EXTERNAL } from '@/data/nav';

/**
 * ShieldMe bridge band — coral chapter in the sequence, but the design renders
 * it as a neutral bordered panel with a CONSUMER eyebrow and one outbound link
 * to shieldme.com.
 */
export default function ShieldMeBridge() {
  return (
    <section>
      <div className="container pad-continuation">
        <div
          style={{
            border: '1px solid rgba(122,160,255,.16)',
            background: 'rgba(10,15,30,.55)',
            padding: 'clamp(26px,3vw,40px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
            gap: 26,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--text-dim)',
                marginBottom: 14,
              }}
            >
              CONSUMER
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 25,
                fontWeight: 600,
                letterSpacing: '-.02em',
                margin: '0 0 10px',
              }}
            >
              Looking for personal mobile security?
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                margin: 0,
                maxWidth: 560,
              }}
            >
              ShieldMe brings secure communications and mobile protection to individuals and
              families.
            </p>
          </div>
          <div style={{ justifySelf: 'start' }}>
            <a
              href={EXTERNAL.shieldMe}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: 15, padding: '14px 26px' }}
            >
              Visit ShieldMe ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
