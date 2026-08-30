import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/Primitives';
import { SITE } from '@/data/site';

/** Periwinkle is the industries / cross-cutting hue (README §2). */
const PERIWINKLE = '#8B9BFF';

/**
 * 08 / INDUSTRIES — periwinkle. Opens "CHAPTER 04 — PROOF".
 * Eight industry cards, each linking to its solution detail route. The design
 * navigates via `i.open` ({ page: 'solution', key }) — that maps to
 * /solutions/[key].
 */
export default function Chapter08Industries() {
  return (
    <section>
      <div className="container pad-chapter">
        <ChapterHeader
          eyebrow="08 / INDUSTRIES"
          accent={PERIWINKLE}
          caption="CHAPTER 04 — PROOF"
        />

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,3.2vw,48px)',
            lineHeight: 1.07,
            letterSpacing: '-.03em',
            fontWeight: 700,
            margin: '0 0 clamp(36px,4vw,52px)',
            maxWidth: 760,
            textWrap: 'balance',
          }}
        >
          Built for regulated and high-assurance environments.
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
          {SITE.industries.map((i) => (
            <Link
              key={i.open.key}
              href={`/solutions/${i.open.key}`}
              className="industry-card"
              style={{
                flex: '1 1 190px',
                minWidth: 190,
                border: '1px solid var(--line)',
                margin: '0 -1px -1px 0',
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                color: 'var(--text-primary)',
                minHeight: 140,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: '-.01em',
                }}
              >
                {i.name}
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-muted)' }}>
                {i.note}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
