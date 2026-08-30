import PlatformTabs from './PlatformTabs';

/**
 * "THE PLATFORM IN USE" — blue, sits between chapters 02 and 03.
 *
 * Server component. The header rule is hand-rolled rather than using
 * ChapterHeader because this band's rule sits 22px above the heading, not the
 * 34px every numbered chapter uses, and it carries no caption.
 */
export default function PlatformInUse() {
  return (
    <section>
      <div className="container pad-standard">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--blue)',
              whiteSpace: 'nowrap',
            }}
          >
            THE PLATFORM IN USE
          </span>
          <span
            aria-hidden
            style={{
              flex: 1,
              height: 1,
              background:
                'linear-gradient(90deg,rgba(76,125,255,.55),rgba(122,160,255,.14) 45%,rgba(122,160,255,0))',
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,3.2vw,46px)',
            lineHeight: 1.06,
            letterSpacing: '-.032em',
            fontWeight: 700,
            margin: '0 0 clamp(30px,3.5vw,44px)',
            maxWidth: 820,
            textWrap: 'balance',
          }}
        >
          Three products. One security architecture.
        </h2>

        <PlatformTabs />
      </div>
    </section>
  );
}
