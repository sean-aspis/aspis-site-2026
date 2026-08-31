import Link from 'next/link';
import { SOLUTIONS, SOLUTION_KEYS } from '@/data/solutions';
import { pageMeta } from '@/lib/seo';
import { readableAccent } from '@/lib/theme';

const LEDE =
  'Each industry faces a different threat, a different regulator, and a different definition of acceptable risk. The architecture stays the same; the policy, deployment, and evidence requirements change.';

export const metadata = pageMeta({
  title: 'Solutions',
  description: LEDE,
  path: '/solutions',
});

/**
 * Solutions index — design file lines 1570–1588.
 * Ten industry cards in one shared-hairline grid; each card carries a 2px top
 * edge in its own industry accent, which is the only place the index shows the
 * per-industry palette.
 */
export default function SolutionsIndexPage() {
  return (
    <main id="main">
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--periwinkle)',
              marginBottom: 24,
            }}
          >
            SOLUTIONS
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 860,
              textWrap: 'balance',
            }}
          >
            Security for the environments that cannot afford a compromised conversation.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 clamp(40px,5vw,60px)',
              maxWidth: 680,
            }}
          >
            {LEDE}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
              gap: 0,
            }}
          >
            {SOLUTION_KEYS.map((key) => {
              const s = SOLUTIONS[key];
              return (
                <Link
                  key={key}
                  href={`/solutions/${key}`}
                  className="card-hover"
                  style={{
                    borderTop: `2px solid ${s.accent}`,
                    borderRight: '1px solid rgba(122,160,255,.14)',
                    borderBottom: '1px solid rgba(122,160,255,.14)',
                    borderLeft: '1px solid rgba(122,160,255,.14)',
                    margin: '0 -1px -1px 0',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    color: 'var(--text-primary)',
                    minHeight: 150,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 19,
                      fontWeight: 600,
                      letterSpacing: '-.015em',
                    }}
                  >
                    {s.name}
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>
                    {s.lede}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10.5,
                      letterSpacing: '.1em',
                      // Small mono text takes the AA-safe variant of the tile's
                      // own accent, not the raw palette colour — the same rule
                      // SolutionRelated already applies. Financial Services
                      // #4776B9 is 4.37:1 on this ground untouched.
                      color: readableAccent(s.accent),
                      marginTop: 'auto',
                    }}
                  >
                    VIEW →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
