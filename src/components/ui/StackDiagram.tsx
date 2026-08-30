import { rgba } from '@/lib/theme';

export type StackLayer = {
  band: string;
  name: string;
  note: string;
  color: string;
  chips?: readonly string[];
};

/**
 * Vertical architecture flow: one band per layer, connected top to bottom.
 *
 * Built as a stacked list rather than a fixed-size SVG so it reflows instead
 * of shrinking — a desktop diagram scaled down to 390px is unreadable, which
 * is the failure mode the brief calls out. The connector between bands is a
 * CSS pseudo-element, so nothing needs to be re-measured on resize.
 */
export default function StackDiagram({
  layers,
  caption,
}: {
  layers: StackLayer[];
  caption?: string;
}) {
  return (
    <div className="stack-diagram" role="list">
      {layers.map((l, i) => (
        <div
          role="listitem"
          key={l.name}
          className="stack-band"
          data-last={i === layers.length - 1}
          style={{
            borderColor: rgba(l.color, 0.34),
            background: `linear-gradient(100deg, ${rgba(l.color, 0.11)}, rgba(10,15,30,.35) 62%)`,
            ['--band-color' as string]: l.color,
          }}
        >
          <div className="stack-band-head">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '.16em',
                color: l.color,
                whiteSpace: 'nowrap',
              }}
            >
              {l.band}
            </span>
            <span
              className="h3"
              style={{ fontSize: 'clamp(18px,1.7vw,23px)', color: 'var(--text-primary)' }}
            >
              {l.name}
            </span>
          </div>
          <p className="body" style={{ fontSize: 14.5, maxWidth: 560 }}>
            {l.note}
          </p>
          {l.chips && l.chips.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {l.chips.map((c) => (
                <span
                  key={c}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '.06em',
                    color: '#9FB4E6',
                    border: `1px solid ${rgba(l.color, 0.3)}`,
                    padding: '4px 8px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
      {caption && (
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10.5,
            letterSpacing: '.12em',
            color: 'var(--text-muted)',
            marginTop: 18,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
