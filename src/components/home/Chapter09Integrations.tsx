import { ChapterHeader } from '@/components/ui/Primitives';
import { SITE } from '@/data/site';

/** Teal is the deployment / verified-state / integrations hue (README §2). */
const TEAL = '#2FD4A7';

/**
 * 09 / INTEGRATIONS — teal.
 * Four category columns, each a teal-ruled mono header over a plain list.
 */
export default function Chapter09Integrations() {
  return (
    <section>
      <div className="container pad-continuation">
        <ChapterHeader eyebrow="09 / INTEGRATIONS" accent={TEAL} />

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,3.2vw,48px)',
            lineHeight: 1.07,
            letterSpacing: '-.03em',
            fontWeight: 700,
            margin: '0 0 clamp(36px,4vw,52px)',
            maxWidth: 700,
            textWrap: 'balance',
          }}
        >
          Integrate security. Don&rsquo;t create another silo.
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,3vw,40px)' }}>
          {SITE.integrations.map((g) => (
            <div key={g.cat} style={{ flex: '1 1 40%', minWidth: 230 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.14em',
                  color: TEAL,
                  paddingBottom: 14,
                  borderBottom: '1px solid rgba(47,212,167,.4)',
                  marginBottom: 14,
                }}
              >
                {g.cat}
              </div>
              {g.items.map((it) => (
                <div
                  key={it}
                  style={{ fontSize: 15.5, lineHeight: 1.5, color: '#C0CBE4', padding: '7px 0' }}
                >
                  {it}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
