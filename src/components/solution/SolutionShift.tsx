import { BAND_WASH_IMAGE, type Solution } from './derive';
import { SECTION_H2 } from './styles';

/**
 * The two-column before/after strip — design file lines 1621–1644.
 * Column labels are industry-specific (THREAT VECTORS / REGULATORY LAYER and
 * so on) and fall back to TRADITIONAL / MODERN.
 */
export default function SolutionShift({ sol }: { sol: Solution }) {
  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div className="container pad-standard">
        <h2 style={{ ...SECTION_H2, margin: '0 0 18px', maxWidth: 760 }}>{sol.shiftTitle}</h2>
        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.62,
            color: 'var(--text-body)',
            margin: '0 0 clamp(32px,4vw,48px)',
            maxWidth: 720,
          }}
        >
          {sol.shiftNote}
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
            gap: 'clamp(20px,3vw,40px)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--text-dim)',
                paddingBottom: 12,
                borderBottom: '1px solid rgba(122,160,255,.18)',
                marginBottom: 14,
              }}
            >
              {sol.beforeLabel}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {sol.before.map((x) => (
                <span
                  key={x}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '.06em',
                    color: 'var(--text-muted)',
                    border: '1px solid rgba(122,160,255,.16)',
                    padding: '9px 12px',
                  }}
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--accent-text, var(--accent))',
                paddingBottom: 12,
                borderBottom: '1px solid var(--accent-line)',
                marginBottom: 14,
              }}
            >
              {sol.afterLabel}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {sol.after.map((x) => (
                <span
                  key={x}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '.06em',
                    color: '#E4E9F5',
                    border: '1px solid var(--accent-line)',
                    background: 'var(--accent-wash)',
                    padding: '9px 12px',
                  }}
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
