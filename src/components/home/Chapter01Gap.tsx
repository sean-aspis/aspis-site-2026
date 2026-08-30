import { ChapterHeader, Panel, SectionIntro } from '@/components/ui/Primitives';

/**
 * 01 / THE GAP — coral. Three cards: two "today" positions and the ASPIS one.
 * The third card takes a cyan border over a blue wash; that pairing is in the
 * design file and is not what Panel's `accent` shorthand produces on its own,
 * so the background is overridden explicitly.
 */
const CARDS = [
  {
    label: 'TODAY — SECURE MESSAGING',
    body: 'Protects the conversation, and generally assumes the endpoint behind it is secure.',
  },
  {
    label: 'TODAY — MOBILE SECURITY',
    body: 'Protects the endpoint, and does not govern the communications taking place on it.',
  },
];

const CARD_BOX: React.CSSProperties = {
  flex: '1 1 30%',
  minWidth: 250,
  maxWidth: 'calc(50% - 12px)',
};

export default function Chapter01Gap() {
  return (
    <section>
      <div className="container pad-chapter">
        <ChapterHeader
          eyebrow="01 / THE GAP"
          accent="#FF7A5C"
          caption="CHAPTER 01 — THE PROBLEM"
        />
        <SectionIntro title="Encryption is not enough when the device is compromised." />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,2vw,28px)' }}>
          {CARDS.map((c) => (
            <Panel key={c.label} style={CARD_BOX}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.16em',
                  color: 'var(--text-dim)',
                  marginBottom: 16,
                }}
              >
                {c.label}
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: '#C0CBE4', margin: 0 }}>
                {c.body}
              </p>
            </Panel>
          ))}

          <Panel
            accent="#67E8F9"
            style={{
              ...CARD_BOX,
              background: 'linear-gradient(180deg,rgba(63,107,255,.18),rgba(10,15,30,.2))',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--cyan)',
                marginBottom: 16,
              }}
            >
              ASPIS
            </div>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: 'var(--text-primary)',
                margin: 0,
                fontWeight: 500,
              }}
            >
              ShieldiT connects communication security with device posture, identity, policy,
              governance, and the compliance record.
            </p>
          </Panel>
        </div>
      </div>
    </section>
  );
}
