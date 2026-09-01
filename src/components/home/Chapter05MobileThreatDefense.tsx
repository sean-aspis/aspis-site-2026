import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/Primitives';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/nav';
import Icon, { type IconName } from '@/components/mock/Icon';
import AspisMark from '@/components/brand/AspisMark';

/**
 * The three actions the real ShieldiT security screen offers, in its order and
 * with its icon-over-label treatment.
 */
const ACTIONS: { label: string; icon: IconName; solid?: boolean; ink: string }[] = [
  { label: 'Start Scan', icon: 'search', solid: true, ink: '#ffffff' },
  { label: 'Link Scanner', icon: 'grid', ink: '#0069DB' },
  { label: 'SOS', icon: 'support', ink: '#F0452A' },
];

/**
 * 05 / MOBILE THREAT DEFENSE — coral. Copy and the eight-threat grid on the
 * left, a hand-built ShieldiT "Device at High Risk" phone on the right.
 *
 * The in-phone UI is light by design (#F2F3F7 over a #0A0F1E bezel), so its
 * one-off hex values are kept literally — there are no tokens for them.
 */

/** Bottom-tab glyphs, transcribed from `tabIcons()` in the design file. */
const TAB_ICON: Record<string, React.ReactNode> = {
  Security: <path d="M8 1.8 13.4 4v4.3c0 3.2-2.4 5-5.4 5.9-3-.9-5.4-2.7-5.4-5.9V4z" />,
  Contacts: (
    <>
      <circle cx="8" cy="5.6" r="2.6" />
      <path d="M3 13.6c.5-2.6 2.4-4 5-4s4.5 1.4 5 4" />
    </>
  ),
  Chat: (
    <path d="M13.6 8.4c0 2.7-2.5 4.8-5.6 4.8-.7 0-1.4-.1-2-.3l-3 1 1-2.4c-.9-.8-1.6-2-1.6-3.1 0-2.7 2.5-4.8 5.6-4.8s5.6 2.1 5.6 4.8z" />
  ),
  Calls: (
    <path d="M3.2 3.4c0 5.4 4 9.4 9.4 9.4l.7-2.2-3-1-1 1.1a8.6 8.6 0 01-3.9-4l1.1-1-1-3z" />
  ),
  Settings: (
    <>
      <circle cx="8" cy="8" r="5.2" />
      <circle cx="8" cy="8" r="1.8" />
    </>
  ),
};

const PILL: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 22,
  padding: '9px 0',
  textAlign: 'center',
  fontSize: 11.5,
  fontWeight: 600,
};

export default function Chapter05MobileThreatDefense() {
  return (
    <section>
      <div
        className="container pad-chapter"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
          gap: 'clamp(36px,5vw,72px)',
          alignItems: 'center',
        }}
      >
        <div>
          <ChapterHeader
            eyebrow="05 / MOBILE THREAT DEFENSE"
            accent="#FF7A5C"
            caption="CHAPTER 03"
          />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,3.2vw,48px)',
              lineHeight: 1.07,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 24px',
              maxWidth: 520,
              textWrap: 'balance',
            }}
          >
            Protect the endpoint behind the communication.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: '#C0CBE4',
              margin: '0 0 20px',
              maxWidth: 520,
            }}
          >
            Detect mobile risk associated with phishing, malicious applications, unsafe networks,
            device compromise, spyware indicators, and other mobile threats.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-muted)',
              margin: '0 0 32px',
              maxWidth: 520,
            }}
          >
            Use endpoint security context to help determine whether a device should retain access to
            sensitive communications.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, marginBottom: 32 }}>
            {SITE.threats.map((t) => (
              <div
                key={t.code}
                style={{
                  flex: '1 1 180px',
                  minWidth: 180,
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: '16px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '.12em',
                    color: 'var(--coral)',
                  }}
                >
                  {t.code}
                </span>
                <span style={{ fontSize: 14, lineHeight: 1.4, color: '#DCE4F5' }}>{t.label}</span>
              </div>
            ))}
          </div>

          <Link href={ROUTES.why} className="btn-ghost" style={{ fontSize: 15, padding: '14px 26px' }}>
            Explore Mobile Threat Defense
          </Link>
        </div>

        {/* ShieldiT security screen — light in-phone UI on a dark bezel */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* An illustration of the ShieldiT security screen, not real UI —
              exposed as a single image the way every other mock on the site
              is, so a screen reader gets one description instead of reading
              out the simulated threat log line by line. */}
          <div
            data-mock
            role="img"
            aria-label="Mock-up of the ShieldiT mobile app security screen: a protection status header, a scan summary, action buttons, and a threat log listing network, application and device findings with their severity and status."
            style={{
              position: 'relative',
              width: 'min(300px,100%)',
              aspectRatio: '320/660',
              background: 'var(--surface-0)',
              border: '8px solid #0A0F1E',
              borderRadius: 44,
              boxShadow:
                '0 40px 90px rgba(0,0,0,.6),0 0 0 1px rgba(255,138,110,.28),0 0 60px rgba(255,138,110,.16)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 36,
                overflow: 'hidden',
                background: '#F2F3F7',
                display: 'flex',
                flexDirection: 'column',
                color: '#0B0D12',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 20px 4px',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                <span>9:41</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span
                    style={{
                      width: 14,
                      height: 8,
                      border: '1px solid #0B0D12',
                      borderRadius: 2,
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      width: 4,
                      height: 8,
                      background: '#0B0D12',
                      display: 'inline-block',
                      borderRadius: 1,
                    }}
                  />
                </span>
              </div>

              <div
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  padding: '8px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  // The threat log runs past the bottom of the handset. Left as
                  // a hard cut it sliced the last card in half and left a blank
                  // white box, which reads as a broken render; fading it says
                  // "the list continues", which is what the real screen does.
                  maskImage:
                    'linear-gradient(180deg, #000 0, #000 calc(100% - 30px), transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(180deg, #000 0, #000 calc(100% - 30px), transparent 100%)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    paddingTop: 4,
                  }}
                >
                  {/* The real ASPIS mark carrying the risk state, rather than a
                      generic shield outline. #F0452A on this near-white panel
                      measures 4.0:1, and the state is also carried by the
                      heading text, so it is not color-only. */}
                  <span style={{ position: 'relative', display: 'flex', color: '#F0452A' }}>
                    <AspisMark size={52} />
                    <span
                      aria-hidden
                      style={{
                        position: 'absolute',
                        right: -7,
                        bottom: -3,
                        width: 21,
                        height: 21,
                        borderRadius: '50%',
                        background: '#F0452A',
                        border: '2.5px solid #F4F5F8',
                        color: '#ffffff',
                        fontSize: 13,
                        fontWeight: 800,
                        lineHeight: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      !
                    </span>
                  </span>
                  <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-.02em' }}>
                    Device at High Risk
                  </div>
                  <div style={{ fontSize: 11.5, color: '#6A6E78' }}>Last scan today · 09:14</div>
                </div>

                <div style={{ background: '#ffffff', borderRadius: 14, padding: '11px 12px' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                    AI Security Insight
                  </div>
                  <div style={{ fontSize: 11.5, lineHeight: 1.45, color: '#6B7080' }}>
                    Man-in-the-middle indicators detected on the current network. Communications
                    policy has restricted this device from the regulated trading group until the
                    session is verified.
                  </div>
                </div>

                {/* The real app lays these out as three equal actions with the
                    icon inside a round button and the label underneath, so the
                    mock matches that rather than using bare text pills. */}
                <div style={{ display: 'flex', gap: 8 }}>
                  {ACTIONS.map((a) => (
                    <span
                      key={a.label}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      <span
                        style={{
                          ...PILL,
                          width: '100%',
                          padding: '9px 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: a.solid ? '#0069DB' : '#ffffff',
                          color: a.solid ? '#ffffff' : a.ink,
                        }}
                      >
                        <Icon name={a.icon} size={17} strokeWidth={1.8} />
                      </span>
                      <span style={{ fontSize: 10.5, color: '#3C4250', fontWeight: 500 }}>
                        {a.label}
                      </span>
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    paddingTop: 2,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-.01em' }}>
                    Threats Log
                  </span>
                  <span style={{ fontSize: 11, color: '#6A6E78' }}>View All</span>
                </div>

                <div style={{ display: 'grid', gap: 8 }}>
                  {SITE.threatLog.map((l) => (
                    <div
                      key={l.title}
                      style={{ background: '#ffffff', borderRadius: 12, padding: '10px 12px' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: 10,
                          color: '#6A6E78',
                          marginBottom: 4,
                        }}
                      >
                        <span>{l.meta}</span>
                        <span>{l.time}</span>
                      </div>
                      <div style={{ fontSize: 12.5, fontWeight: 600 }}>{l.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '9px 16px 14px',
                  borderTop: '1px solid #E4E6EC',
                  background: '#ffffff',
                }}
              >
                {SITE.tabsSecurity.map((t) => (
                  <span
                    key={t.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 3,
                      fontSize: 8.5,
                      color: '#6A6E78',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke={t.name === 'Security' ? '#0069DB' : '#6A6E78'}
                      strokeWidth="1.4"
                      aria-hidden
                    >
                      {TAB_ICON[t.name]}
                    </svg>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
