import { BAND_WASH_IMAGE, type Solution } from './derive';
import { GRID_CELL, SECTION_H2 } from './styles';

/**
 * "What ASPIS Protects" card grid — design file lines 1646–1660.
 * The lede paragraph is gated on hasProtectNote; only two industries carry one.
 */
export default function SolutionProtect({ sol }: { sol: Solution }) {
  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div className="container pad-standard">
        <h2 style={{ ...SECTION_H2, margin: '0 0 clamp(26px,3vw,40px)', maxWidth: 700 }}>
          {sol.protectTitle}
        </h2>
        {sol.hasProtectNote && (
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: '0 0 clamp(28px,3vw,42px)',
              maxWidth: 700,
            }}
          >
            {sol.protectNote}
          </p>
        )}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
            gap: 0,
          }}
        >
          {sol.protect.map((p) => (
            <div
              key={p.n}
              style={{
                ...GRID_CELL,
                padding: 'clamp(24px,2.4vw,32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 11,
                minHeight: 180,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.14em',
                  color: 'var(--accent)',
                }}
              >
                {p.n}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: '-.015em',
                }}
              >
                {p.t}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }}>
                {p.d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
