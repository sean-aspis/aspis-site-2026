import Image from 'next/image';
import { DeviceBezel, Stage } from '@/components/ui/Primitives';
import { bandWash } from '@/lib/theme';
import { EXPERIENCE_TITLE, shotVals, type ProductRecord, type ShotVals } from './derive';

/**
 * "Product experience" — the screenshot walk-through. Layout comes entirely
 * from the shot derivation (see derive.ts): wide shots stack full-width with a
 * two-column caption underneath, everything else alternates media/text by
 * position.
 */
export default function ProductExperience({
  product,
  eyebrow = 'PRODUCT EXPERIENCE',
  title = EXPERIENCE_TITLE,
}: {
  /** Only `shots` and `accent` are read, so an industry page can pass its own. */
  product: Pick<ProductRecord, 'shots' | 'accent'>;
  eyebrow?: string;
  title?: string;
}) {
  const shots = product.shots.map(shotVals);
  return (
    <section style={{ backgroundImage: bandWash(product.accent) }}>
      <div className="container pad-standard">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.2em',
            color: 'var(--accent)',
            marginBottom: 22,
          }}
        >
          {eyebrow}
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px,2.9vw,42px)',
            lineHeight: 1.08,
            letterSpacing: '-.03em',
            fontWeight: 700,
            margin: '0 0 clamp(36px,4vw,60px)',
            maxWidth: 640,
            textWrap: 'balance',
          }}
        >
          {title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,80px)' }}>
          {shots.map((s) => (
            <div
              key={s.n}
              style={{
                display: 'grid',
                gridTemplateColumns: s.cols,
                gap: 'clamp(28px,4vw,56px)',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  order: s.mediaOrder,
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: '12% 6%',
                    background:
                      'radial-gradient(ellipse at center,var(--accent-soft),rgba(5,7,14,0) 70%)',
                    filter: 'blur(24px)',
                  }}
                />
                <Media shot={s} accent={product.accent} />
              </div>

              <div
                style={{
                  order: s.textOrder,
                  ...(s.wide
                    ? {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
                        gap: 'clamp(20px,3vw,44px)',
                        alignItems: 'start',
                      }
                    : null),
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 18,
                    gridColumn: '1/-1',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--accent-ink)',
                      background: 'var(--accent)',
                      padding: '4px 8px',
                    }}
                  >
                    {s.n}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10.5,
                      letterSpacing: '.16em',
                      color: 'var(--accent)',
                    }}
                  >
                    {s.label}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(21px,2vw,30px)',
                      lineHeight: 1.15,
                      letterSpacing: '-.025em',
                      fontWeight: 700,
                      margin: '0 0 16px',
                      maxWidth: 480,
                      textWrap: 'balance',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 16.5,
                      lineHeight: 1.62,
                      color: 'var(--text-body)',
                      margin: 0,
                      maxWidth: 520,
                    }}
                  >
                    {s.body}
                  </p>
                </div>

                <div style={{ display: 'grid', gap: 0, maxWidth: 460 }}>
                  {s.tel.map((t) => (
                    <span
                      key={t.k}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: 16,
                        padding: '11px 0',
                        borderBottom: '1px solid var(--line)',
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
                        {t.k}
                      </span>
                      <span style={{ fontSize: 14, color: 'var(--accent)', textAlign: 'right' }}>
                        {t.v}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Screenshot treatment, decided by the image rather than by `kind`:
 *
 *  - light shots (the ShieldiT / Defense device screens, mean luminance
 *    213–243) go inside a `DeviceBezel` — raw on the dark page they read as a
 *    white blob;
 *  - dark opaque console shots sit in a `Stage` carrying the derived radius
 *    and border;
 *  - a dark transparent cutout (shot-defense-chat) needs neither, and the
 *    derivation gives it no radius and no border, so it stands on its own.
 */
function Media({ shot, accent }: { shot: ShotVals; accent: string }) {
  // Inside a Stage the frame itself carries the derived radius and border, so
  // the image must not draw a second one.
  const staged = !shot.light && shot.border !== 'none';
  const img = (
    <Image
      src={shot.src}
      alt={shot.title}
      width={shot.width}
      height={shot.height}
      sizes={shot.wide ? '(max-width: 1240px) 100vw, 1180px' : '(max-width: 720px) 90vw, 430px'}
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        ...(staged
          ? null
          : {
              borderRadius: shot.radius,
              border: shot.border,
              boxShadow: shot.light ? undefined : '0 30px 70px rgba(0,0,0,.55)',
            }),
      }}
    />
  );

  const frame = shot.light ? (
    <DeviceBezel accent={accent}>{img}</DeviceBezel>
  ) : staged ? (
    <Stage style={{ borderRadius: shot.radius, boxShadow: '0 30px 70px rgba(0,0,0,.55)' }}>
      {img}
    </Stage>
  ) : (
    img
  );

  return <div style={{ position: 'relative', width: '100%', maxWidth: shot.maxW }}>{frame}</div>;
}
