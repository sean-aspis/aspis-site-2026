import { BAND_WASH_IMAGE, type Solution } from './derive';
import { SECTION_H2 } from './styles';

/**
 * The architecture / pipeline strip — design file lines 1662–1681.
 * First step is the neutral input; every later step carries the accent. The
 * dashed boundary note below the strip is gated on hasBoundary (only
 * Defense & Intelligence declares one).
 */
export default function SolutionPipeline({ sol }: { sol: Solution }) {
  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div className="container pad-standard">
        <h2 style={{ ...SECTION_H2, margin: '0 0 clamp(26px,3vw,40px)', maxWidth: 700 }}>
          {sol.pipelineTitle}
        </h2>
        {sol.hasPipelineNote && (
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: '0 0 clamp(28px,3vw,42px)',
              maxWidth: 640,
            }}
          >
            {sol.pipelineNote}
          </p>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'stretch' }}>
          {sol.pipelineSteps.map((p) => (
            <span key={p.t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  border: `1px solid ${p.border}`,
                  background: p.bg,
                  padding: '16px 18px',
                  minWidth: 150,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '.1em',
                    color: p.color,
                  }}
                >
                  {p.t}
                </span>
                <span style={{ fontSize: 12.5, lineHeight: 1.45, color: 'var(--text-muted)' }}>
                  {p.d}
                </span>
              </span>
              {p.arrow && (
                <span aria-hidden style={{ fontSize: 14, color: '#4A5573' }}>
                  {p.arrow}
                </span>
              )}
            </span>
          ))}
        </div>
        {sol.hasBoundary && (
          <div
            style={{
              marginTop: 22,
              border: '1px dashed var(--accent-line)',
              padding: '14px 18px',
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '.14em',
              color: 'var(--accent)',
            }}
          >
            {sol.boundary}
          </div>
        )}
      </div>
    </section>
  );
}
