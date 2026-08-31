import { CONSOLE } from '@/data/console';
import Icon from '@/components/mock/Icon';
import AspisMark, { MARK_ON_DARK } from '@/components/brand/AspisMark';

/**
 * Dot offsets for a hotspot cluster, in map units at r=26. Deliberately a fixed
 * lattice rather than Math.random(): a random layout would differ between the
 * server render and hydration and trip a mismatch.
 */
const CLUSTER: [number, number][] = [
  [0, 0], [7, -4], [-6, -5], [4, 6], [-8, 4], [12, 2], [-2, 10], [9, 9], [-12, -1], [2, -10],
];

/**
 * ManageiT security-operations console mock — icon rail, integration pills,
 * seven KPIs, the dotted world map, and the analytics row beneath it.
 *
 * Entirely static: no state, so it stays a server component.
 *
 * The map is `public/assets/world-map-dotted.svg`, a generated halftone. It is
 * served with a plain <img> rather than next/image: the optimizer refuses SVG
 * unless `dangerouslyAllowSVG` is enabled, and the file is already a few KB.
 */

const chip: React.CSSProperties = {
  width: 22,
  height: 22,
  borderRadius: 5,
  border: '1px solid rgba(122,160,255,.22)',
  background: 'rgba(10,16,36,.85)',
  color: 'var(--text-muted)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardBase: React.CSSProperties = {
  flex: '1 1 30%',
  minWidth: 165,
  maxWidth: 'calc(50% - 4px)',
  border: '1px solid rgba(122,160,255,.12)',
  borderRadius: 8,
  background: 'var(--panel-2)',
  padding: '11px 13px',
  display: 'flex',
  flexDirection: 'column',
};

const cardTitle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--text-primary)',
};

const railHead: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 9,
  letterSpacing: '.08em',
  color: 'var(--text-faint)',
};

export default function ManageItConsole() {
  return (
    <div
      data-mock
      role="img"
      aria-label="Mock-up of the ManageiT security operations console: an icon rail, integration pills, seven KPI tiles, a dotted world map with regional threat counts, a threat timeline, top attack types, and top attack sources and destinations."

      style={{
        border: '1px solid rgba(122,160,255,.22)',
        background: '#070B18',
        padding: 10,
        boxShadow: '0 40px 90px rgba(0,0,0,.6),0 0 70px rgba(63,107,255,.12)',
      }}
    >
      {/* window chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px 12px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2A3358' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2A3358' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2A3358' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10.5,
            letterSpacing: '.14em',
            color: 'var(--text-dim)',
            marginLeft: 10,
          }}
        >
          MANAGEIT — SECURITY OPERATIONS DASHBOARD
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '52px 1fr',
          gap: 0,
          background: '#080D1F',
          minHeight: 520,
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* icon rail */}
        <div
          style={{
            background: 'var(--panel-2)',
            borderRight: '1px solid var(--line-soft)',
            padding: '12px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* The real product puts the mark AND the ASPIS wordmark at the top of
              this rail, so the mock does too. MARK_ON_DARK rather than the brand
              hex: #2D449C measures 2.32:1 against this surface. */}
          <span
            style={{
              color: MARK_ON_DARK,
              marginBottom: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <AspisMark size={22} />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 8.5,
                fontWeight: 800,
                letterSpacing: '.1em',
                lineHeight: 1,
              }}
            >
              ASPIS
            </span>
          </span>
          {CONSOLE.consoleNav.map((n) => (
            <span
              key={n.label}
              title={n.label}
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                color: n.color,
                background: n.bg,
              }}
            >
              <Icon name={n.icon} size={15} />
            </span>
          ))}
        </div>

        {/* main pane */}
        <div
          style={{
            padding: '12px 16px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            minWidth: 0,
          }}
        >
          {/* toolbar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              flexWrap: 'wrap',
              paddingBottom: 9,
              borderBottom: '1px solid var(--line-soft)',
            }}
          >
            <span
              style={{
                fontSize: 10.5,
                color: '#04060E',
                background: 'var(--blue)',
                borderRadius: 5,
                padding: '5px 10px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              <Icon name="calendar" size={11} strokeWidth={2} />
              This week
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '.06em',
                color: 'var(--text-faint)',
                whiteSpace: 'nowrap',
              }}
            >
              Master Tenant › Client Tenant › Department › Group
            </span>
            <span style={{ flex: 1, minWidth: 8 }} />
            <span style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {CONSOLE.consolePills.map((p) => (
                <span
                  key={p.l}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    border: `1px solid ${p.c}`,
                    borderRadius: 5,
                    background: p.bg,
                    padding: '3px 7px',
                    lineHeight: 1.1,
                  }}
                >
                  <span style={{ color: p.c }}>
                    <Icon name={p.i} size={10} strokeWidth={1.9} />
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 8,
                      letterSpacing: '.04em',
                      color: p.c,
                    }}
                  >
                    {p.l}
                  </span>
                </span>
              ))}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: 'var(--text-muted)' }}>
                <Icon name="search" size={13} />
              </span>
              <span style={{ position: 'relative', color: 'var(--text-muted)', display: 'flex' }}>
                <Icon name="bell" size={13} />
                <span
                  style={{
                    position: 'absolute',
                    top: -4,
                    right: -6,
                    minWidth: 11,
                    height: 11,
                    borderRadius: 6,
                    background: 'var(--sev-critical)',
                    color: '#fff',
                    fontSize: 7.5,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 2px',
                  }}
                >
                  8
                </span>
              </span>
              <span
                style={{
                  width: 19,
                  height: 19,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,#8B5CF6,#F0452A)',
                }}
              />
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: '-.015em',
            }}
          >
            Dashboard
          </span>

          {/* KPIs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CONSOLE.consoleKpis.map((k) => (
              <div
                key={k.label}
                style={{
                  flex: '1 1 86px',
                  minWidth: 0,
                  border: `1px solid ${k.border}`,
                  background: k.bg,
                  borderRadius: 7,
                  padding: '9px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 5,
                }}
              >
                {/* Label row with its leading icon, as the real dashboard has. */}
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    minWidth: 0,
                  }}
                >
                  <span style={{ color: k.valueColor ?? 'var(--accent)', display: 'flex' }}>
                    <Icon name={k.icon} size={11} strokeWidth={1.9} />
                  </span>
                  <span
                    style={{
                      fontSize: 9.5,
                      color: 'var(--text-muted)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {k.label}
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    fontWeight: 700,
                    letterSpacing: '-.02em',
                    color: k.valueColor ?? 'var(--text-primary)',
                  }}
                >
                  {k.value}
                </span>
                <span
                  style={{
                    display: 'block',
                    height: 3,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,.08)',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      height: 3,
                      borderRadius: 2,
                      width: k.width,
                      background: k.bar,
                    }}
                  />
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: 9,
                    color: k.deltaColor,
                  }}
                >
                  {k.arrow && (
                    <span
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `color-mix(in srgb, ${k.deltaColor} 22%, transparent)`,
                        flex: '0 0 auto',
                      }}
                    >
                      <Icon
                        name={k.arrow === 'up' ? 'arrow-up' : 'arrow-down'}
                        size={7}
                        strokeWidth={2.6}
                      />
                    </span>
                  )}
                  {/* The design data carries ▲/▼ inside the string; the badge
                      above now says the direction, so strip the duplicate. */}
                  {k.delta.replace(/^[▲▼]\s*/, '')}
                </span>
              </div>
            ))}
          </div>

          {/* world map */}
          <div
            style={{
              position: 'relative',
              border: '1px solid var(--line)',
              borderRadius: 8,
              background: '#050A19',
              overflow: 'hidden',
              minHeight: 250,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/world-map-dotted.svg"
              alt="World map of attack activity"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <svg
              viewBox="0 0 1000 460"
              preserveAspectRatio="xMidYMid slice"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              aria-hidden
            >
              <g fill="none" stroke="rgba(103,232,249,.30)" strokeWidth="1" strokeDasharray="4 7">
                <path d="M300 190 C 420 110, 640 110, 760 168" />
                <path d="M700 250 C 600 305, 440 300, 320 214" />
                <path d="M497 150 C 600 96, 720 116, 820 300" />
              </g>
              <g>
                {CONSOLE.consoleBlobs.map((b, i) => (
                  <circle
                    key={i}
                    cx={b.x}
                    cy={b.y}
                    r={b.r}
                    fill={b.c}
                    opacity={b.o}
                    style={{ filter: 'blur(15px)' }}
                  />
                ))}
                {/* The real dashboard marks each hotspot with a tight cluster of
                    lit map dots inside the glow, which is what makes it read as
                    activity on a map rather than as coloured haze. The offsets
                    are a fixed lattice, not random, so the mock is stable
                    between renders and between server and client. */}
                {CONSOLE.consoleBlobs.map((b, i) => (
                  <g key={`c${i}`} fill={b.c} opacity={Math.min(1, b.o + 0.35)}>
                    {CLUSTER.map(([dx, dy], j) => (
                      <circle
                        key={j}
                        cx={b.x + dx * (b.r / 26)}
                        cy={b.y + dy * (b.r / 26)}
                        r={1.9}
                      />
                    ))}
                  </g>
                ))}
              </g>
            </svg>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg,rgba(5,10,25,.90) 0%,rgba(5,10,25,.35) 30%,rgba(5,10,25,0) 52%)',
              }}
            />

            <span style={{ ...chip, position: 'absolute', top: 10, left: 11, display: 'flex' }}>
              <Icon name="layers" size={11} />
            </span>
            <span
              style={{
                position: 'absolute',
                top: 10,
                right: 11,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
              }}
            >
              <span style={{ ...chip, fontSize: 10 }}>⤢</span>
              <span style={{ ...chip, fontSize: 12 }}>−</span>
              <span style={{ ...chip, fontSize: 12 }}>+</span>
            </span>
            <span style={{ ...chip, position: 'absolute', bottom: 10, right: 11, fontSize: 10 }}>
              ⇩
            </span>

            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 12,
                padding: '12px 14px',
                minHeight: 250,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  justifyContent: 'center',
                  alignSelf: 'stretch',
                }}
              >
                {CONSOLE.consoleMapStats.map((m) => (
                  <span key={m.l} style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 17,
                        fontWeight: 700,
                        letterSpacing: '-.02em',
                      }}
                    >
                      {m.v}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        fontSize: 9.5,
                        color: 'var(--text-muted)',
                      }}
                    >
                      <span style={{ color: m.c, display: 'flex' }}>
                        <Icon name={m.i} size={11} strokeWidth={2} />
                      </span>
                      {m.l}
                    </span>
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  alignSelf: 'flex-start',
                  gap: 8,
                  paddingRight: 32,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '.1em',
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  GLOBAL ATTACK ACTIVITY
                </span>
              </div>
            </div>

            <span
              style={{
                position: 'absolute',
                bottom: 11,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexWrap: 'nowrap',
                gap: 6,
              }}
            >
              {CONSOLE.consoleSeverity.map((s) => (
                <span
                  key={s.l}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    fontSize: 9.5,
                    whiteSpace: 'nowrap',
                    color: s.c,
                    background: s.bg,
                    border: `1px solid ${s.bd}`,
                    borderRadius: 11,
                    padding: '4px 9px',
                  }}
                >
                  <span
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `color-mix(in srgb, ${s.c} 26%, transparent)`,
                      flex: '0 0 auto',
                    }}
                  >
                    <Icon name={s.i} size={8} strokeWidth={2.4} />
                  </span>
                  {s.l}
                </span>
              ))}
            </span>
          </div>

          {/* analytics row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <div style={{ ...cardBase, gap: 9 }}>
              <span style={cardTitle}>Threat Timeline</span>
              <span style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 68 }}>
                {CONSOLE.consoleSpark.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      flex: 1,
                      minWidth: 2,
                      borderRadius: '2px 2px 0 0',
                      background: 'linear-gradient(180deg,#67E8F9,#3F6BFF)',
                      height: s,
                      display: 'block',
                    }}
                  />
                ))}
              </span>
              <span style={{ display: 'flex', gap: 10, fontSize: 9, color: 'var(--text-faint)' }}>
                {[
                  { l: 'Device', c: '#3F6BFF' },
                  { l: 'Endpoint', c: '#67E8F9' },
                  { l: 'Common', c: '#8B5CF6' },
                ].map((g) => (
                  <span key={g.l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span
                      style={{ width: 6, height: 6, borderRadius: '50%', background: g.c }}
                    />
                    {g.l}
                  </span>
                ))}
              </span>
            </div>

            <div style={{ ...cardBase, gap: 10 }}>
              <span style={cardTitle}>Top Attack Types</span>
              {CONSOLE.consoleBars.map((b) => (
                <span key={b.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 10.5,
                      color: '#C0CBE4',
                    }}
                  >
                    {b.label}
                    <span style={{ color: 'var(--text-faint)' }}>{b.pct}</span>
                  </span>
                  <span
                    style={{
                      height: 6,
                      borderRadius: 3,
                      background: 'var(--line-soft)',
                      display: 'block',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        height: 6,
                        borderRadius: 3,
                        width: b.pct,
                        background: 'linear-gradient(90deg,#3F6BFF,#67E8F9)',
                      }}
                    />
                  </span>
                </span>
              ))}
            </div>

            <div
              style={{
                ...cardBase,
                gap: 9,
                border: '1px solid rgba(139,92,246,.35)',
                background: 'linear-gradient(180deg,rgba(139,92,246,.14),rgba(10,16,36,.9))',
              }}
            >
              <span style={{ ...cardTitle, color: 'var(--sev-ai)' }}>AI Insights</span>
              {CONSOLE.consoleInsights.map((ai) => (
                <span
                  key={ai.t}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    paddingBottom: 8,
                    borderBottom: '1px solid rgba(139,92,246,.18)',
                  }}
                >
                  <span style={{ fontSize: 10.5, fontWeight: 600, color: '#DDD6FE' }}>{ai.t}</span>
                  <span style={{ fontSize: 9.5, lineHeight: 1.5, color: '#9FA8C6' }}>{ai.d}</span>
                  <span style={{ fontSize: 9.5, color: 'var(--sev-ai)' }}>
                    Recommended action: {ai.a}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* sources & destinations */}
          <div
            style={{
              border: '1px solid rgba(122,160,255,.12)',
              borderRadius: 8,
              background: 'var(--panel-2)',
              padding: '11px 13px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <span
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                ...cardTitle,
              }}
            >
              Top Attack Sources &amp; Destinations
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: '.08em',
                  color: 'var(--text-faint)',
                }}
              >
                VIEW BY DEPARTMENT ↗
              </span>
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(150px,100%),1fr))',
                gap: 14,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={railHead}>SOURCES</span>
                {CONSOLE.consoleSources.map((s) => (
                  <span key={s.l} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 10.5,
                        color: '#C0CBE4',
                      }}
                    >
                      {s.l}
                      <span style={{ color: 'var(--text-faint)' }}>{s.p}</span>
                    </span>
                    <span
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: 'var(--line-soft)',
                        display: 'block',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          height: 5,
                          borderRadius: 3,
                          width: s.p,
                          background: 'linear-gradient(90deg,#3F6BFF,#8B5CF6)',
                        }}
                      />
                    </span>
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <span style={railHead}>TOP ATTACKS</span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: '-.02em',
                    color: 'var(--text-primary)',
                  }}
                >
                  987,287
                </span>
                <span style={{ fontSize: 9.5, color: 'var(--sev-high)' }}>
                  ▲ 15% week over week
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={railHead}>DESTINATIONS</span>
                {CONSOLE.consoleDests.map((d) => (
                  <span key={d.l} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <span
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 10.5,
                        color: '#C0CBE4',
                      }}
                    >
                      {d.l}
                      <span style={{ color: 'var(--text-faint)' }}>{d.p}</span>
                    </span>
                    <span
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: 'var(--line-soft)',
                        display: 'block',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          height: 5,
                          borderRadius: 3,
                          width: d.p,
                          background: 'linear-gradient(90deg,#67E8F9,#22C55E)',
                        }}
                      />
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
