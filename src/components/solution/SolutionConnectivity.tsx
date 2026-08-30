import { BAND_WASH_IMAGE, type Solution } from './derive';
import { FOOTNOTE, GRID_CELL, SECTION_H2 } from './styles';

/**
 * Disconnected-operations grid — design file lines 1683–1701. The whole
 * section is gated on hasConnectivity; only Defense & Intelligence declares a
 * connectivity table, which is exactly why the surface alternation has to come
 * from nth-of-type rather than a source-order index.
 */
export default function SolutionConnectivity({ sol }: { sol: Solution }) {
  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div className="container pad-standard">
        <h2 style={{ ...SECTION_H2, margin: '0 0 clamp(26px,3vw,40px)', maxWidth: 640 }}>
          {sol.connectivityTitle}
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))',
            gap: 0,
          }}
        >
          {sol.connectivityRows.map((c) => (
            <div
              key={c.k}
              style={{
                ...GRID_CELL,
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  aria-hidden
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.12em',
                    color: '#E4E9F5',
                  }}
                >
                  {c.k}
                </span>
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-body)' }}>
                {c.v}
              </span>
            </div>
          ))}
        </div>
        <p style={FOOTNOTE}>{sol.connectivityNote}</p>
      </div>
    </section>
  );
}
