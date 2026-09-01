import Link from 'next/link';
import { ChapterHeader, Chip, SectionIntro } from '@/components/ui/Primitives';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/nav';

/**
 * 02 / ARCHITECTURE — cyan. Protect / Govern / Understand cards over the
 * six-layer stack table.
 *
 * The domain cards hover to a cyan border in the design. `.card-hover` drives
 * its border color from `--accent`, so the card sets that variable locally
 * rather than reaching for a JS mouse handler.
 */
export default function Chapter02Architecture() {
  return (
    <section>
      <div className="container pad-chapter">
        <ChapterHeader
          eyebrow="02 / ARCHITECTURE"
          accent="#67E8F9"
          caption="CHAPTER 02 — THE PLATFORM"
        />
        <SectionIntro
          title="Protect. Govern. Understand."
          titleSize="clamp(30px,3.4vw,50px)"
          maxWidth={760}
          lede="Three layers, one architecture. Identity and device posture flow upward into every communication, policy decision, and audit record."
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,2vw,26px)' }}>
          {SITE.domains.map((d) => (
            <Link
              key={d.name}
              href={d.open.key ? `/products/${d.open.key}` : ROUTES.platform}
              className="card-hover"
              style={{
                ['--accent' as string]: '#67E8F9',
                flex: '1 1 30%',
                minWidth: 260,
                maxWidth: 'calc(50% - 13px)',
                border: '1px solid rgba(122,160,255,.18)',
                background: 'rgba(10,15,30,.6)',
                padding: 'clamp(26px,2.6vw,38px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                color: 'var(--text-primary)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.18em',
                  color: d.color,
                }}
              >
                {d.verb}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: '-.02em',
                }}
              >
                {d.name}
              </span>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>
                {d.desc}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 7,
                  marginTop: 'auto',
                  paddingTop: 8,
                }}
              >
                {d.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            marginTop: 'clamp(36px,4vw,56px)',
            border: '1px solid rgba(122,160,255,.16)',
            background: 'rgba(4,6,14,.7)',
            padding: 'clamp(24px,3vw,40px)',
            display: 'grid',
            gap: 0,
          }}
        >
          {SITE.stack.map((s) => (
            <div
              key={s.layer}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))',
                gap: 12,
                alignItems: 'center',
                padding: '18px 0',
                borderBottom: '1px solid var(--hairline)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.16em',
                  color: 'var(--text-dim)',
                }}
              >
                {s.layer}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: '-.015em',
                  color: 'var(--text-primary)',
                }}
              >
                {s.name}
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-body)' }}>
                {s.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
