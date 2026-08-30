import type { SolutionContent } from '@/data/solutionContent';
import { GRID_CELL, SECTION_H2, gridCols } from './styles';

/**
 * Industry challenges — the problem statement the rest of the page answers.
 *
 * Content is sourced from the ASPIS-published industry documents; see the
 * header of src/data/solutionContent.ts for what was deliberately excluded.
 * These are statements about the sector's threat environment, not claims about
 * ASPIS.
 */
export default function SolutionChallenges({ content }: { content: SolutionContent }) {
  return (
    <section>
      <div className="container pad-standard">
        <div className="eyebrow" style={{ color: 'var(--accent-text, var(--accent))', marginBottom: 20 }}>
          THE PROBLEM
        </div>
        <h2 style={{ ...SECTION_H2, margin: '0 0 18px', maxWidth: 740 }}>
          {content.challengesTitle}
        </h2>
        <p
          className="lede"
          style={{ maxWidth: 660, margin: '0 0 clamp(30px,3.4vw,46px)' }}
        >
          {content.challengesLede}
        </p>

        <div className="auto-grid" style={gridCols(content.challenges.length)}>
          {content.challenges.map((c, i) => (
            <div
              key={c.t}
              className="tile-hover"
              style={{
                ...GRID_CELL,
                padding: 'clamp(24px,2.4vw,32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 11,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.14em',
                  color: 'var(--accent-text, var(--accent))',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18.5,
                  fontWeight: 600,
                  letterSpacing: '-.015em',
                  lineHeight: 1.24,
                  color: 'var(--text-bright)',
                }}
              >
                {c.t}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>
                {c.d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
