import type { SolutionContent } from '@/data/solutionContent';
import { GRID_CELL, FOOTNOTE, SECTION_H2, gridCols } from './styles';

/**
 * Outcomes.
 *
 * Deliberately framed as design intent. The source documents state outcomes as
 * achieved results ("significant reduction in fraud", "within the first 90
 * days"); under the claims-governance rule none of that is reproduced here, and
 * the lede says so on the page rather than only in a comment.
 */
export default function SolutionOutcomes({ content }: { content: SolutionContent }) {
  return (
    <section>
      <div className="container pad-standard">
        <div className="eyebrow" style={{ color: 'var(--accent-text, var(--accent))', marginBottom: 20 }}>
          OUTCOMES
        </div>
        <h2 style={{ ...SECTION_H2, margin: '0 0 18px', maxWidth: 740 }}>
          {content.outcomesTitle}
        </h2>
        <p className="lede" style={{ maxWidth: 660, margin: '0 0 clamp(30px,3.4vw,46px)' }}>
          {content.outcomesLede}
        </p>

        <div className="auto-grid" style={gridCols(content.outcomes.length)}>
          {content.outcomes.map((o, i) => (
            <div
              key={o.t}
              className="tile-hover"
              style={{
                ...GRID_CELL,
                padding: 'clamp(24px,2.4vw,32px)',
                display: 'grid',
                gap: 10,
                alignContent: 'start',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  color: 'var(--accent-text, var(--accent))',
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: '-.015em',
                  lineHeight: 1.26,
                  color: 'var(--text-bright)',
                }}
              >
                {o.t}
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>
                {o.d}
              </span>
            </div>
          ))}
        </div>

        <p style={FOOTNOTE}>
          These describe what the architecture is designed to do. ASPIS makes no representation
          about results in any particular environment.
        </p>
      </div>
    </section>
  );
}
