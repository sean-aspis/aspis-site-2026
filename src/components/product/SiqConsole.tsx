'use client';

import { useState } from 'react';
import { CONSOLE } from '@/data/console';
import { SIQ_VIEWS, type SiqView } from '@/data/sentineliq';

/**
 * The SentinelIQ console: three views (Compliance / Audit Logs / Files &
 * Sharing) behind a switcher. This is the only stateful leaf on the product
 * route — the surrounding section stays a server component.
 */

type Kpi = { label: string; value: string; hot?: boolean; warn?: boolean; ok?: boolean };
type SubRow = { label: string; pct: string; value: string; fill: string };
type SideItem = { sev: string; age: string; title: string; note: string; ok?: boolean; warn?: boolean };
type View = {
  title: string;
  scope: string;
  heading: string;
  sub: string;
  asOf: string;
  kpis: readonly Kpi[];
  mainTitle: string;
  mainMeta: string;
  chart: string;
  subTitle: string;
  subMeta: string;
  subRows: readonly SubRow[];
  aiTitle: string;
  aiBody: string;
  aiCta: string;
  sideTitle: string;
  side: readonly SideItem[];
};

const VIEWS = SIQ_VIEWS as unknown as Record<SiqView, View>;

const SWITCHER: { id: SiqView; label: string }[] = [
  { id: 'compliance', label: 'COMPLIANCE' },
  { id: 'audit', label: 'AUDIT LOGS' },
  { id: 'files', label: 'FILES & SHARING' },
];

export default function SiqConsole() {
  const [active, setActive] = useState<SiqView>('compliance');
  const v = VIEWS[active];

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {SWITCHER.map((s) => {
          const on = s.id === active;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s.id)}
              aria-pressed={on}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.1em',
                color: on ? 'var(--accent-ink)' : 'var(--text-muted)',
                background: on ? 'var(--accent)' : 'transparent',
                border: `1px solid ${on ? 'var(--accent)' : 'rgba(122,160,255,.20)'}`,
                padding: '10px 15px',
                cursor: 'pointer',
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          border: '1px solid rgba(139,92,246,.28)',
          borderRadius: 10,
          background: '#0A0F20',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,.55)',
        }}
      >
        {/* console chrome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '13px 18px',
            borderBottom: '1px solid rgba(122,160,255,.14)',
            background: 'var(--chrome)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 9, flex: '0 0 auto' }}>
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: 'var(--accent)',
                color: 'var(--accent-ink)',
                fontSize: 12,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ◈
            </span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '-.01em',
                }}
              >
                {v.title}
              </span>
              <span
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-faint)' }}
              >
                Meridian Financial Group · 948884af-e231-5f53
              </span>
            </span>
          </span>
          <span
            style={{
              flex: 1,
              minWidth: 0,
              background: 'var(--panel)',
              border: '1px solid rgba(122,160,255,.14)',
              borderRadius: 7,
              padding: '8px 13px',
              fontSize: 12,
              color: 'var(--text-faint)',
            }}
          >
            Search communications, meetings, cases…
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 9, flex: '0 0 auto' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9.5,
                letterSpacing: '.08em',
                color: 'var(--text-muted)',
                border: '1px solid rgba(122,160,255,.18)',
                borderRadius: 6,
                padding: '6px 10px',
              }}
            >
              {v.scope}
            </span>
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'rgba(139,92,246,.24)',
                color: 'var(--sev-ai)',
                fontSize: 10,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              A
            </span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'stretch', minHeight: 430 }}>
          {/* icon rail */}
          <div
            style={{
              flex: '0 0 52px',
              borderRight: '1px solid rgba(122,160,255,.12)',
              background: '#080D1C',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 5,
              padding: '14px 0',
            }}
          >
            {CONSOLE.siqRail.map((r) => (
              <span
                key={r.name}
                title={r.name}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 7,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  color: r.color,
                  background: r.bg,
                }}
              >
                {r.icon}
              </span>
            ))}
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 0,
              padding: '22px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 23,
                    fontWeight: 700,
                    letterSpacing: '-.025em',
                  }}
                >
                  {v.heading}
                </span>
                <span style={{ fontSize: 12.5, color: '#7E8CAE' }}>{v.sub}</span>
              </span>
              <span style={{ display: 'flex', gap: 8 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '.08em',
                    color: '#C0CBE4',
                    border: '1px solid rgba(122,160,255,.20)',
                    borderRadius: 6,
                    padding: '7px 12px',
                  }}
                >
                  Export
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '.08em',
                    color: 'var(--text-faint)',
                    border: '1px solid rgba(122,160,255,.14)',
                    borderRadius: 6,
                    padding: '7px 12px',
                  }}
                >
                  {v.asOf}
                </span>
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {v.kpis.map((k) => (
                <span
                  key={k.label}
                  style={{
                    flex: '1 1 108px',
                    minWidth: 108,
                    border: `1px solid ${kpiBorder(k)}`,
                    borderRadius: 8,
                    background: kpiBg(k),
                    padding: '13px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{k.label}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 24,
                      fontWeight: 700,
                      letterSpacing: '-.03em',
                      lineHeight: 1,
                      color: kpiColor(k),
                    }}
                  >
                    {k.value}
                  </span>
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'flex-start' }}>
              <div
                style={{
                  flex: '1 1 400px',
                  minWidth: 0,
                  border: '1px solid rgba(122,160,255,.14)',
                  borderRadius: 9,
                  background: 'var(--panel-2)',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <span
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span
                    style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600 }}
                  >
                    {v.mainTitle}
                  </span>
                  <span
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-faint)' }}
                  >
                    {v.mainMeta}
                  </span>
                </span>

                <SiqChart chart={v.chart} />

                <span
                  style={{
                    borderTop: '1px solid rgba(122,160,255,.12)',
                    paddingTop: 14,
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 11,
                    flex: '0 0 auto',
                  }}
                >
                  <span
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span
                      style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600 }}
                    >
                      {v.subTitle}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: 'var(--text-faint)',
                      }}
                    >
                      {v.subMeta}
                    </span>
                  </span>
                  {v.subRows.map((r) => {
                    const narrow = parseFloat(r.pct) < 22;
                    return (
                      <span
                        key={r.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 11,
                          flex: '0 0 auto',
                          height: 24,
                        }}
                      >
                        <span
                          style={{
                            flex: '0 0 116px',
                            fontSize: 11.5,
                            lineHeight: 1.3,
                            color: '#C0CBE4',
                            textAlign: 'right',
                          }}
                        >
                          {r.label}
                        </span>
                        <span
                          style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            borderRadius: 4,
                            background: 'rgba(122,160,255,.07)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'block',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              top: 0,
                              bottom: 0,
                              left: 0,
                              width: r.pct,
                              background: r.fill,
                              borderRadius: 4,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                              paddingRight: narrow ? 0 : 7,
                              fontSize: 10.5,
                              fontWeight: 700,
                              color: '#04060E',
                            }}
                          >
                            {narrow ? '' : r.value}
                          </span>
                        </span>
                        <span
                          style={{
                            flex: '0 0 auto',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 10.5,
                            fontWeight: 500,
                            color: '#C0CBE4',
                            minWidth: 30,
                          }}
                        >
                          {narrow ? r.value : ''}
                        </span>
                      </span>
                    );
                  })}
                </span>
              </div>

              <div
                style={{
                  flex: '1 1 280px',
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    border: '1px solid rgba(139,92,246,.35)',
                    borderRadius: 9,
                    background: 'linear-gradient(180deg,rgba(139,92,246,.15),#0A1024)',
                    padding: '15px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 9,
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      fontFamily: 'var(--font-display)',
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: 'var(--sev-ai)',
                    }}
                  >
                    ✦ {v.aiTitle}
                  </span>
                  <span
                    style={{
                      fontSize: 10.5,
                      color: '#9FA8C6',
                      background: 'rgba(4,6,14,.5)',
                      borderRadius: 5,
                      padding: '6px 9px',
                    }}
                  >
                    AI-generated — verify before action.
                  </span>
                  <span style={{ fontSize: 12.5, lineHeight: 1.5, color: '#DDD6FE' }}>{v.aiBody}</span>
                  <span style={{ display: 'flex', gap: 7, marginTop: 2 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'var(--sev-ai)',
                        border: '1px solid rgba(139,92,246,.5)',
                        borderRadius: 6,
                        padding: '7px 11px',
                      }}
                    >
                      {v.aiCta}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(122,160,255,.18)',
                        borderRadius: 6,
                        padding: '7px 11px',
                      }}
                    >
                      Email brief
                    </span>
                  </span>
                </div>

                <div
                  style={{
                    flex: 1,
                    border: '1px solid rgba(122,160,255,.14)',
                    borderRadius: 9,
                    background: 'var(--panel-2)',
                    padding: '15px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 11,
                  }}
                >
                  <span
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span
                      style={{ fontFamily: 'var(--font-display)', fontSize: 13.5, fontWeight: 600 }}
                    >
                      {v.sideTitle}
                    </span>
                    <span style={{ fontSize: 10.5, color: 'var(--accent)' }}>View all</span>
                  </span>
                  {v.side.map((s) => (
                    <span
                      key={s.title}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                        border: `1px solid ${sideBorder(s)}`,
                        borderRadius: 7,
                        background: sideBg(s),
                        padding: '11px 12px',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 5,
                            fontFamily: 'var(--font-mono)',
                            fontSize: 9.5,
                            letterSpacing: '.08em',
                            color: sevColor(s),
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: '50%',
                              background: sevColor(s),
                              display: 'block',
                            }}
                          />
                          {s.sev}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 9.5,
                            color: 'var(--text-faint)',
                          }}
                        >
                          {s.age}
                        </span>
                      </span>
                      <span
                        style={{
                          fontSize: 12.5,
                          lineHeight: 1.45,
                          color: '#E4E9F5',
                          fontWeight: 500,
                        }}
                      >
                        {s.title}
                      </span>
                      <span style={{ fontSize: 11, lineHeight: 1.45, color: 'var(--text-muted)' }}>
                        {s.note}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------- derived styling */

const kpiColor = (k: Kpi) =>
  k.hot ? 'var(--sev-ai)' : k.warn ? 'var(--sev-medium)' : k.ok ? 'var(--sev-ok)' : 'var(--text-primary)';
const kpiBorder = (k: Kpi) =>
  k.hot ? 'rgba(139,92,246,.40)' : k.warn ? 'rgba(245,196,81,.35)' : 'rgba(122,160,255,.16)';
const kpiBg = (k: Kpi) =>
  k.hot
    ? 'linear-gradient(180deg,rgba(139,92,246,.16),#0A1024)'
    : k.warn
      ? 'linear-gradient(180deg,rgba(245,196,81,.10),#0A1024)'
      : '#0A1024';

const sevColor = (s: SideItem) =>
  s.ok ? 'var(--sev-ok)' : s.warn ? 'var(--sev-medium)' : 'var(--sev-critical)';
const sideBorder = (s: SideItem) =>
  s.ok ? 'rgba(34,197,94,.28)' : s.warn ? 'rgba(245,196,81,.28)' : 'rgba(240,69,42,.30)';
const sideBg = (s: SideItem) =>
  s.ok ? 'rgba(34,197,94,.06)' : s.warn ? 'rgba(245,196,81,.06)' : 'rgba(240,69,42,.07)';

/* ------------------------------------------------------------- the chart */

/** Ported from siqChart() — three shapes, selected by the view's `chart` key. */
function SiqChart({ chart }: { chart: string }) {
  if (chart === 'lines') return <LineChart />;
  if (chart === 'bars') return <BarChart />;
  return <AuditTable />;
}

function LineChart() {
  const W = 560;
  const H = 180;
  const pad = 26;
  const series = [
    { c: '#4C7DFF', pts: [0, 0.55, 0.62, 0.62, 0.62, 0.62, 0.62, 0.58, 0.04], name: 'Reviewed on time' },
    { c: '#35C8F4', pts: [0, 0.3, 0.32, 0.32, 0.32, 0.32, 0.46, 0.4, 0.06], name: 'Escalated' },
    { c: '#A855F7', pts: [0, 0.46, 0.47, 0.47, 0.47, 0.62, 0.92, 0.7, 0.1], name: 'AI-flagged' },
  ];
  const x = (i: number) => pad + (i / 8) * (W - pad * 2);
  const y = (v: number) => H - pad - v * (H - pad * 2);
  const path = (pts: number[]) =>
    pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', display: 'block' }} role="img" aria-label="Review throughput and SLA by month">
        <line
          x1={pad}
          y1={H - pad}
          x2={W - pad}
          y2={H - pad}
          stroke="rgba(122,160,255,.20)"
          strokeWidth={1}
        />
        {series.map((s) => (
          <path
            key={s.name}
            d={path(s.pts)}
            fill="none"
            stroke={s.c}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {series.flatMap((s) =>
          s.pts.map((v, i) => <circle key={`${s.name}-${i}`} cx={x(i)} cy={y(v)} r={3} fill={s.c} />)
        )}
      </svg>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        {series.map((s) => (
          <span
            key={s.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11,
              color: 'var(--text-muted)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.c }} />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function BarChart() {
  const rows = [
    { l: 'Confidential', p: 33, c: 'linear-gradient(90deg,rgba(214,139,50,.25),#F59E0B)' },
    { l: 'Internal', p: 33, c: 'linear-gradient(90deg,rgba(234,179,8,.22),#EAB308)' },
    { l: 'Restricted', p: 33, c: 'linear-gradient(90deg,rgba(240,69,42,.25),#F0452A)' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {rows.map((r) => (
        <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ flex: '0 0 88px', fontSize: 12, color: '#C0CBE4', textAlign: 'right' }}>
            {r.l}
          </span>
          <span
            style={{
              flex: 1,
              height: 26,
              borderRadius: 4,
              background: 'rgba(122,160,255,.07)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                position: 'absolute',
                inset: 0,
                width: `${r.p}%`,
                background: r.c,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: 8,
                fontSize: 11,
                fontWeight: 700,
                color: '#04060E',
              }}
            >
              {r.p}%
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

function AuditTable() {
  const rows = [
    ['16:00:00', 'Trevor Nguyen', 'alert.escalate', 'seed-demo-msg-8-0'],
    ['19:54:29', 'Amelia Lang', 'case.task_update', '583008f5-7acc-5076-92b7'],
    ['19:54:28', 'Amelia Lang', 'case.stage_update', '94172148-863a-5d08-8117'],
    ['19:54:10', 'Amelia Lang', 'alert.unassign', '47f4c25c-5465-5632-8873'],
    ['19:53:51', 'Amelia Lang', 'alert.dismiss', '08b7e495-97c8-52f3-bab4'],
    ['19:48:53', 'Amelia Lang', 'alert.review', '08b7e495-97c8-52f3-bab4'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          gap: 12,
          padding: '0 0 9px',
          borderBottom: '1px solid rgba(122,160,255,.16)',
          fontFamily: 'var(--font-mono)',
          fontSize: 9.5,
          letterSpacing: '.1em',
          color: 'var(--text-faint)',
        }}
      >
        <span style={{ flex: '0 0 68px' }}>TIME</span>
        <span style={{ flex: '0 0 108px' }}>ACTOR</span>
        <span style={{ flex: 1 }}>ACTION</span>
        <span style={{ flex: '0 0 44px', textAlign: 'right' }}>RESULT</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            padding: '9px 0',
            borderBottom: '1px solid rgba(122,160,255,.08)',
          }}
        >
          <span
            style={{
              flex: '0 0 68px',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-muted)',
            }}
          >
            {r[0]}
          </span>
          <span style={{ flex: '0 0 108px', fontSize: 12, color: '#E4E9F5' }}>{r[1]}</span>
          <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--violet)' }}
            >
              {r[2]}
            </span>
            <span
              style={{
                fontSize: 10,
                color: 'var(--text-faint)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {r[3]}
            </span>
          </span>
          <span
            style={{ flex: '0 0 44px', textAlign: 'right', color: 'var(--sev-ok)', fontSize: 13 }}
          >
            ✓
          </span>
        </div>
      ))}
    </div>
  );
}
