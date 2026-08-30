import Image from 'next/image';
import { CONSOLE } from '@/data/console';
import { PAGES } from '@/data/pages';
import { initials as toInitials, msgVals, type ProductRecord } from './derive';

/**
 * The handset in the product hero. Two variants, exactly as the design file
 * gates them: ManageiT (`isConsole`) shows the dark control-plane screen,
 * every other product (`isChat`) shows the light secure-messaging screen.
 *
 * Server component — nothing here has state.
 */
export default function ProductPhone({
  product,
  console: consoleVariant,
}: {
  product: ProductRecord;
  console: boolean;
}) {
  return (
    <div
      data-mock
      role="img"
      aria-label={
        consoleVariant
          ? `Mock-up of the ${product.name} control plane on a handset: KPI tiles, a world map, a threat sparkline and an AI insight card.`
          : `Mock-up of the ${product.name} app showing a secure conversation.`
      }
      style={{
        position: 'relative',
        width: 'min(300px,86%)',
        aspectRatio: '320/660',
        background: 'var(--surface-0)',
        border: '8px solid #0A0F1E',
        borderRadius: 44,
        boxShadow:
          '0 40px 90px rgba(0,0,0,.6),0 0 0 1px var(--accent),0 0 70px var(--accent-soft)',
        overflow: 'hidden',
      }}
    >
      {consoleVariant ? <ConsoleScreen product={product} /> : <ChatScreen product={product} />}
    </div>
  );
}

const SCREEN: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  borderRadius: 36,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

/* --------------------------------------------------------- chat handset */

function ChatScreen({ product }: { product: ProductRecord }) {
  const msgs = msgVals(product.app.msgs, product.ctaText);
  return (
    <div style={{ ...SCREEN, background: '#ffffff', color: '#0B0D12' }}>
      <StatusBar ink="#0B0D12" />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          padding: '7px 12px 9px',
          borderBottom: '1px solid #EDEEF2',
        }}
      >
        <span
          style={{
            width: 27,
            height: 27,
            borderRadius: '50%',
            background: 'var(--accent-soft)',
            color: 'var(--accent)',
            fontSize: 9,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '0 0 auto',
          }}
        >
          {toInitials(product.name)}
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 12.5, fontWeight: 600, letterSpacing: '-.01em' }}>
            {product.app.title}
          </span>
          <span style={{ display: 'block', fontSize: 9.5, color: '#8A8F9C' }}>{product.app.sub}</span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 8,
            letterSpacing: '.1em',
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
            padding: '3px 6px',
            borderRadius: 4,
          }}
        >
          {product.app.badge}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
          padding: 11,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: 8,
        }}
      >
        <span
          style={{
            alignSelf: 'center',
            fontSize: 9,
            color: '#8A8F9C',
            background: '#F1F2F6',
            padding: '3px 9px',
            borderRadius: 9,
          }}
        >
          Today
        </span>
        <span
          style={{
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 8.5,
            color: '#8A8F9C',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Messages are end-to-end encrypted
        </span>
        {msgs.map((m, i) => (
          <span
            key={i}
            style={{
              maxWidth: '88%',
              alignSelf: m.align,
              background: m.bg,
              color: m.fg,
              borderRadius: 15,
              padding: '9px 11px',
              display: 'block',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 9.5,
                fontWeight: 700,
                color: m.whoColor,
                marginBottom: 3,
              }}
            >
              {m.who}
            </span>
            <span style={{ display: 'block', fontSize: 11.5, lineHeight: 1.42 }}>{m.text}</span>
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '9px 11px',
          borderTop: '1px solid #EDEEF2',
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          +
        </span>
        <span
          style={{
            flex: 1,
            background: '#F3F4F7',
            borderRadius: 13,
            padding: '7px 11px',
            fontSize: 11,
            color: '#9AA0AE',
          }}
        >
          Message…
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '8px 16px 13px',
          borderTop: '1px solid #EDEEF2',
        }}
      >
        {PAGES.productTabs.map((t) => (
          <span
            key={t.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              fontSize: 8.5,
              color: '#8A8F9C',
            }}
          >
            <TabIcon name={t.name} active={t.name === 'Chat'} />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------ console handset */

function ConsoleScreen({ product }: { product: ProductRecord }) {
  return (
    <div style={{ ...SCREEN, background: 'var(--panel)', color: 'var(--text-primary)' }}>
      <StatusBar ink="#C0CBE4" muted />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 13px 9px',
          borderBottom: '1px solid rgba(122,160,255,.14)',
        }}
      >
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            fontSize: 10,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '0 0 auto',
          }}
        >
          A
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '-.01em',
            }}
          >
            {product.app.title}
          </span>
          <span style={{ display: 'block', fontSize: 8.5, color: '#7E8CAE' }}>{product.app.sub}</span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 7.5,
            letterSpacing: '.1em',
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
            padding: '3px 5px',
            borderRadius: 4,
          }}
        >
          {product.app.badge}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
          padding: '10px 11px',
          display: 'flex',
          flexDirection: 'column',
          gap: 9,
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 7.5,
              letterSpacing: '.12em',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              padding: '2px 6px',
              borderRadius: 3,
            }}
          >
            THIS WEEK
          </span>
          <span style={{ fontSize: 8, color: 'var(--text-faint)' }}>Master Tenant · Department</span>
        </span>

        <span style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {CONSOLE.consoleKpiPhone.map((k) => (
            <span
              key={k.label}
              style={{
                flex: '1 1 44%',
                minWidth: 64,
                border: `1px solid ${k.border}`,
                background: k.bg,
                borderRadius: 6,
                padding: '6px 7px',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <span
                style={{
                  fontSize: 7,
                  letterSpacing: '.06em',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {k.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '-.02em',
                  lineHeight: 1,
                }}
              >
                {k.value}
              </span>
              <span
                style={{
                  height: 2,
                  borderRadius: 2,
                  background: 'rgba(122,160,255,.14)',
                  display: 'block',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    height: 2,
                    borderRadius: 2,
                    background: k.bar,
                    width: k.width,
                  }}
                />
              </span>
            </span>
          ))}
        </span>

        <span
          style={{
            border: '1px solid rgba(122,160,255,.14)',
            borderRadius: 7,
            background: '#050A19',
            padding: '7px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 9, fontWeight: 600 }}>Global attack activity</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: 'var(--text-faint)' }}>
              100,947
            </span>
          </span>
          <span
            style={{
              position: 'relative',
              display: 'block',
              height: 56,
              borderRadius: 5,
              overflow: 'hidden',
              background: '#040814',
            }}
          >
            <Image
              src="/assets/world-map.svg"
              alt=""
              width={1000}
              height={460}
              unoptimized
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.8,
              }}
            />
            {[
              { left: '26%', top: '34%', size: 6, c: 'var(--sev-critical)' },
              { left: '47%', top: '26%', size: 5, c: 'var(--sev-high)' },
              { left: '68%', top: '40%', size: 5, c: 'var(--sev-medium)' },
              { left: '78%', top: '60%', size: 4, c: 'var(--accent)' },
            ].map((d) => (
              <span
                key={d.left}
                style={{
                  position: 'absolute',
                  left: d.left,
                  top: d.top,
                  width: d.size,
                  height: d.size,
                  borderRadius: '50%',
                  background: d.c,
                }}
              />
            ))}
          </span>
          <span style={{ display: 'flex', gap: 6 }}>
            {CONSOLE.consoleSeverity.map((s) => (
              <span
                key={s.l}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  fontSize: 7,
                  color: 'var(--text-muted)',
                }}
              >
                <span
                  style={{ width: 4, height: 4, borderRadius: '50%', background: s.c, display: 'block' }}
                />
                {s.l}
              </span>
            ))}
          </span>
        </span>

        <span
          style={{
            border: '1px solid rgba(122,160,255,.14)',
            borderRadius: 7,
            background: 'var(--panel-2)',
            padding: '7px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span style={{ fontSize: 9, fontWeight: 600 }}>Threat timeline</span>
          <span style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 30 }}>
            {CONSOLE.consoleSpark.map((s, i) => (
              <span
                key={i}
                style={{
                  flex: 1,
                  minWidth: 1,
                  borderRadius: '1px 1px 0 0',
                  background: 'linear-gradient(180deg,var(--accent),#3F6BFF)',
                  height: s,
                }}
              />
            ))}
          </span>
        </span>

        <span
          style={{
            border: '1px solid rgba(122,160,255,.14)',
            borderRadius: 7,
            background: 'var(--panel-2)',
            padding: '7px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 9, fontWeight: 600 }}>Top attack types</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7, color: 'var(--text-faint)' }}>
              5 of 78
            </span>
          </span>
          {CONSOLE.consoleBars.map((b) => (
            <span key={b.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 8,
                  color: '#C0CBE4',
                }}
              >
                {b.label}
                <span style={{ color: '#7E8CAE' }}>{b.pct}</span>
              </span>
              <span
                style={{
                  height: 4,
                  borderRadius: 2,
                  background: 'rgba(122,160,255,.10)',
                  display: 'block',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    height: 4,
                    borderRadius: 2,
                    background: 'linear-gradient(90deg,#3F6BFF,#67E8F9)',
                    width: b.pct,
                  }}
                />
              </span>
            </span>
          ))}
        </span>

        <span
          style={{
            border: '1px solid rgba(139,92,246,.35)',
            borderRadius: 7,
            background: 'linear-gradient(180deg,rgba(139,92,246,.16),#0A1024)',
            padding: '7px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--sev-ai)' }}>AI insights</span>
          <span style={{ fontSize: 8, fontWeight: 600, color: '#DDD6FE' }}>AI-detected anomaly</span>
          <span style={{ fontSize: 7.5, lineHeight: 1.45, color: '#9FA8C6' }}>
            Unusual concentration of high-severity alerts in one department.
          </span>
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '7px 14px 12px',
          borderTop: '1px solid rgba(122,160,255,.14)',
        }}
      >
        {CONSOLE.consoleTabs.map((t) => (
          <span
            key={t.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              fontSize: 7.5,
              color: t.color,
            }}
          >
            {t.icon}
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- fragments */

function StatusBar({ ink, muted }: { ink: string; muted?: boolean }) {
  const chrome = muted ? '#8B98B8' : ink;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: muted ? '12px 16px 5px' : '12px 18px 5px',
        fontSize: muted ? 11 : 11.5,
        fontWeight: 600,
        color: muted ? '#C0CBE4' : undefined,
      }}
    >
      <span>9:41</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <span
          style={{
            width: 14,
            height: 8,
            border: `1px solid ${chrome}`,
            borderRadius: 2,
            display: 'inline-block',
          }}
        />
        <span
          style={{ width: 4, height: 8, background: chrome, display: 'inline-block', borderRadius: 1 }}
        />
      </span>
    </div>
  );
}

/** Icon set from tabIcons() in the design file — the active tab takes the accent. */
function TabIcon({ name, active }: { name: string; active: boolean }) {
  const paths: Record<string, React.ReactNode> = {
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
  return (
    <span style={{ color: active ? 'var(--accent)' : '#8A8F9C', display: 'flex' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
        {paths[name]}
      </svg>
    </span>
  );
}
