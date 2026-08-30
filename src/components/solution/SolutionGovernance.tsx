import { BAND_WASH_IMAGE, type Solution } from './derive';
import { GRID_CELL } from './styles';

/**
 * Governance requirements + ecosystem integration — design file lines
 * 1703–1729. The section is gated on hasGov (a non-empty `gov` array — four of
 * the ten industries), and the ecosystem block inside it on hasEcosystem
 * (Financial Services only). The chips deliberately use `accent2`, the
 * industry's secondary hue, not the primary accent.
 */
export default function SolutionGovernance({ sol }: { sol: Solution }) {
  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div
        className="container pad-standard"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
          gap: 'clamp(28px,4vw,60px)',
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px,2.4vw,36px)',
              lineHeight: 1.1,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 16px',
              maxWidth: 420,
              textWrap: 'balance',
            }}
          >
            {sol.govTitle}
          </h2>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.62,
              color: 'var(--text-muted)',
              margin: 0,
              maxWidth: 460,
            }}
          >
            {sol.govNote}
          </p>
        </div>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
            {sol.gov.map((g) => (
              <span
                key={g}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11.5,
                  letterSpacing: '.06em',
                  color: sol.accent2,
                  border: '1px solid var(--accent-line)',
                  padding: '10px 14px',
                }}
              >
                {g}
              </span>
            ))}
          </div>
          {sol.hasEcosystem && (
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
                {sol.ecosystemTitle}
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(150px,100%),1fr))',
                  gap: 0,
                }}
              >
                {sol.ecosystem.map((x) => (
                  <span
                    key={x}
                    style={{
                      ...GRID_CELL,
                      padding: '15px 16px',
                      fontSize: 14,
                      color: '#C0CBE4',
                    }}
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
