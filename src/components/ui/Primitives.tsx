import { rgba } from '@/lib/theme';

/**
 * Chapter opener: numbered eyebrow, tapered rule, chapter caption.
 * The rule fades from the chapter's accent into the neutral hairline.
 */
export function ChapterHeader({
  eyebrow,
  accent,
  caption,
}: {
  eyebrow: string;
  accent: string;
  caption?: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 34 }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '.2em',
          color: accent,
          whiteSpace: 'nowrap',
        }}
      >
        {eyebrow}
      </span>
      <span
        aria-hidden
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg,${rgba(accent, 0.55)},rgba(122,160,255,.14) 45%,rgba(122,160,255,0))`,
        }}
      />
      {caption && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '.16em',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap',
          }}
          className="chapter-caption"
        >
          {caption}
        </span>
      )}
    </div>
  );
}

/** Mono eyebrow without the rule. */
export function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '.18em',
        color: color ?? 'var(--accent)',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  );
}

/** Bordered panel on the dark ground. */
export function Panel({
  children,
  style,
  accent,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { accent?: string }) {
  return (
    <div
      {...rest}
      style={{
        border: `1px solid ${accent ? rgba(accent, 0.4) : 'rgba(122,160,255,.16)'}`,
        background: accent
          ? `linear-gradient(180deg,${rgba(accent, 0.18)},rgba(10,15,30,.2))`
          : 'linear-gradient(180deg,rgba(16,23,51,.55),rgba(10,15,30,.2))',
        padding: 'clamp(24px,2.4vw,34px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Mono chip used for capability tags. */
export function Chip({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '.06em',
        color: color ?? '#9FB4E6',
        border: `1px solid ${color ? rgba(color, 0.35) : 'rgba(122,160,255,.22)'}`,
        padding: '5px 9px',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}

/** Section heading + optional lede, used across chapters and inner pages. */
export function SectionIntro({
  title,
  lede,
  maxWidth = 900,
  titleSize = 'clamp(30px,3.6vw,54px)',
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  maxWidth?: number;
  titleSize?: string;
}) {
  return (
    <>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: titleSize,
          lineHeight: 1.06,
          letterSpacing: '-.03em',
          fontWeight: 700,
          margin: lede ? '0 0 18px' : '0 0 clamp(40px,5vw,64px)',
          maxWidth,
          textWrap: 'balance',
        }}
      >
        {title}
      </h2>
      {lede && (
        <p
          style={{
            fontSize: 17.5,
            lineHeight: 1.6,
            color: 'var(--text-body)',
            margin: '0 0 clamp(40px,5vw,64px)',
            maxWidth: 640,
          }}
        >
          {lede}
        </p>
      )}
    </>
  );
}

/**
 * Dark bezel for the light ShieldiT phone screenshots.
 * The phone screens have a mean luminance around 209 — placed raw on the dark
 * page they read as a white blob. The ManageiT and SentinelIQ shots are
 * already dark (luminance 24–31) and sit directly in a bordered stage.
 */
export function DeviceBezel({
  accent,
  children,
  style,
}: {
  accent: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: '#0A0F1E',
        border: `1px solid ${rgba(accent, 0.45)}`,
        borderRadius: 'clamp(18px,2.4vw,34px)',
        boxShadow: `0 40px 90px rgba(0,0,0,.55), 0 0 60px ${rgba(accent, 0.22)}`,
        padding: 10,
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Bordered stage for the already-dark console screenshots. */
export function Stage({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        border: '1px solid rgba(122,160,255,.18)',
        borderRadius: 10,
        overflow: 'hidden',
        background: 'rgba(4,6,14,.7)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Key/value telemetry row set used beside product screenshots. */
export function Telemetry({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <div style={{ display: 'grid', gap: 0 }}>
      {rows.map((r) => (
        <div
          key={r.k}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            padding: '10px 0',
            borderBottom: '1px solid var(--line-soft)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '.14em',
              color: 'var(--text-faint)',
            }}
          >
            {r.k}
          </span>
          <span style={{ fontSize: 13.5, color: 'var(--text-bright)', textAlign: 'right' }}>
            {r.v}
          </span>
        </div>
      ))}
    </div>
  );
}
