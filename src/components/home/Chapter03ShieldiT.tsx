import Link from 'next/link';
import { ChapterHeader, SectionIntro } from '@/components/ui/Primitives';
import { SITE } from '@/data/site';

/**
 * 03 / SHIELDIT — blue. The four ShieldiT editions, each card topped with its
 * own product accent (Defense stays military green).
 *
 * The cards hover to a cyan border in the design; `.card-hover` reads
 * `--accent`, so each card sets it locally.
 */
export default function Chapter03ShieldiT() {
  return (
    <section>
      <div className="container pad-continuation">
        <ChapterHeader eyebrow="03 / SHIELDIT" accent="#4C7DFF" />
        <SectionIntro
          title="Purpose-built for the environment you need to protect."
          titleSize="clamp(30px,3.4vw,50px)"
          maxWidth={820}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(290px,100%),1fr))',
            gap: 'clamp(20px,2vw,26px)',
          }}
        >
          {SITE.products.map((p) => (
            <Link
              key={p.name}
              href={`/products/${p.open.key}`}
              className="card-hover"
              style={{
                ['--accent' as string]: '#67E8F9',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                border: '1px solid rgba(122,160,255,.18)',
                borderTop: `2px solid ${p.accent}`,
                background: 'rgba(10,15,30,.55)',
                padding: 'clamp(24px,2.4vw,34px)',
                color: 'var(--text-primary)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.14em',
                  color: 'var(--text-dim)',
                }}
              >
                {p.tag}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 23,
                  fontWeight: 700,
                  letterSpacing: '-.02em',
                }}
              >
                {p.name}
              </span>
              <span style={{ fontSize: 15.5, lineHeight: 1.58, color: 'var(--text-body)' }}>
                {p.desc}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.1em',
                  color: 'var(--cyan)',
                  marginTop: 'auto',
                  paddingTop: 10,
                }}
              >
                EXPLORE →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
