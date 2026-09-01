import Link from 'next/link';
import { SOLUTIONS, SOLUTION_KEYS, type SolutionKey } from '@/data/solutions';
import { ROUTES } from '@/data/nav';
import { readableAccent } from '@/lib/theme';
import { GRID_CELL, SECTION_H2 } from './styles';

/**
 * Related industries.
 *
 * An industry page used to end at its CTA, so the only way from one sector to
 * another was back through the mega menu. This closes that dead end: the four
 * neighboring industries, in the data module's own order, wrapping around so
 * every page shows four regardless of position.
 */
export default function SolutionRelated({ solutionKey }: { solutionKey: SolutionKey }) {
  const i = SOLUTION_KEYS.indexOf(solutionKey);
  const others = [1, 2, 3, 4].map((n) => SOLUTION_KEYS[(i + n) % SOLUTION_KEYS.length]);

  return (
    <section>
      <div className="container pad-standard">
        <div className="eyebrow" style={{ color: 'var(--accent-text, var(--accent))', marginBottom: 20 }}>
          OTHER INDUSTRIES
        </div>
        <h2 style={{ ...SECTION_H2, margin: '0 0 clamp(26px,3vw,40px)', maxWidth: 640 }}>
          The same architecture, a different set of obligations.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
            gap: 0,
          }}
        >
          {others.map((k) => {
            const s = SOLUTIONS[k] as unknown as { name: string; lede: string; accent: string };
            return (
              <Link
                key={k}
                href={`/solutions/${k}`}
                className="tile-hover related-tile"
                style={{ ...GRID_CELL, borderTop: `2px solid ${s.accent}` }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 19,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                    color: 'var(--text-bright)',
                  }}
                >
                  {s.name}
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {s.lede}
                </span>
                <span
                  aria-hidden
                  style={{
                    marginTop: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.14em',
                    // Small mono text takes the AA-safe variant of the tile's
                    // own accent, not the raw palette color.
                    color: readableAccent(s.accent),
                  }}
                >
                  VIEW →
                </span>
              </Link>
            );
          })}
        </div>

        <p style={{ marginTop: 22 }}>
          <Link href={ROUTES.solutions} className="crumb">
            ALL INDUSTRIES →
          </Link>
        </p>
      </div>
    </section>
  );
}
