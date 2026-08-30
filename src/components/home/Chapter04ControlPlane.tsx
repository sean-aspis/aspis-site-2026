import { ChapterHeader } from '@/components/ui/Primitives';
import { CONSOLE } from '@/data/console';
import ManageItConsole from './ManageItConsole';

/**
 * 04 / CONTROL PLANE — cyan. Heading pair, the ManageiT console mock, and the
 * five console areas as a collapsed-border strip.
 *
 * The section keeps the design file's `id="manageit"` so in-page anchors from
 * elsewhere on the homepage still land.
 */
export default function Chapter04ControlPlane() {
  return (
    <section id="manageit">
      <div className="container pad-standard">
        <ChapterHeader eyebrow="04 / CONTROL PLANE" accent="#67E8F9" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
            gap: 'clamp(28px,4vw,64px)',
            marginBottom: 'clamp(32px,4vw,48px)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,3.2vw,48px)',
              lineHeight: 1.07,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: 0,
              maxWidth: 560,
              textWrap: 'balance',
            }}
          >
            See, govern, and enforce from one console.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: 0,
              maxWidth: 560,
              alignSelf: 'end',
            }}
          >
            ManageiT gives authorized security and administrative teams one environment for users,
            devices, mobile risk, communications policy, federation, compliance, and administrative
            activity.
          </p>
        </div>

        {/* The console is a desktop UI mock and cannot compress below ~720px.
            Per the responsive rule, wide content scrolls inside its own
            container rather than making the page scroll horizontally. */}
        <div
          className="console-scroll"
          style={{ overflowX: 'auto', overflowY: 'hidden', WebkitOverflowScrolling: 'touch' }}
          tabIndex={0}
          role="group"
          aria-label="ManageiT console"
        >
          <div style={{ minWidth: 720 }}>
            <ManageItConsole />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0,
            marginTop: 'clamp(28px,3vw,40px)',
          }}
        >
          {CONSOLE.consoleAreas.map((a) => (
            <div
              key={a.tag}
              style={{
                flex: '1 1 220px',
                border: '1px solid rgba(122,160,255,.16)',
                margin: '0 -1px -1px 0',
                padding: '22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '.14em',
                  color: 'var(--cyan)',
                }}
              >
                {a.tag}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: '-.01em',
                }}
              >
                {a.name}
              </span>
              <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>
                {a.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
