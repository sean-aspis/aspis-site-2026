'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/data/site';

type Screen = 'chat' | 'security' | 'calls' | 'contacts';
const SCREENS: Screen[] = ['chat', 'security', 'calls', 'contacts'];
const CYCLE_MS = 6000;

const S = {
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 9,
    padding: '5px 0',
    borderBottom: '1px solid #F2F3F6',
  } as React.CSSProperties,
  avatar: (bg: string, fg: string): React.CSSProperties => ({
    width: 29,
    height: 29,
    borderRadius: '50%',
    background: bg,
    color: fg,
    fontSize: 10.5,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
  }),
  search: {
    background: '#F1F2F6',
    borderRadius: 10,
    padding: '7px 10px',
    fontSize: 11,
    color: '#9AA0AE',
    display: 'flex',
    gap: 6,
    alignItems: 'center',
  } as React.CSSProperties,
};

const IconSearch = ({ c = '#9AA0AE' }: { c?: string }) => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.5">
    <circle cx="7.2" cy="7.2" r="4.4" />
    <path d="M10.6 10.6 14 14" />
  </svg>
);
const IconLock = ({ c = '#22C55E', s = 9 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.6">
    <rect x="3" y="7" width="10" height="7" rx="1.6" />
    <path d="M5.6 7V5.2a2.4 2.4 0 014.8 0V7" />
  </svg>
);

export default function HeroPhone({ motion }: { motion: boolean }) {
  const [screen, setScreen] = useState<Screen>('chat');
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !motion) return;
    const t = setInterval(
      () => setScreen((s) => SCREENS[(SCREENS.indexOf(s) + 1) % SCREENS.length]),
      CYCLE_MS
    );
    return () => clearInterval(t);
  }, [paused, motion]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 560,
        aspectRatio: '1/1.28',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Orbit rings + travelling signal pulses */}
      <svg
        viewBox="0 0 560 620"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'visible',
        }}
        aria-hidden="true"
      >
        <circle
          cx="280"
          cy="310"
          r="250"
          fill="none"
          stroke="rgba(122,160,255,.16)"
          strokeWidth="1"
          strokeDasharray="2 10"
          style={{ animation: 'spin 90s linear infinite', transformOrigin: '280px 310px' }}
        />
        <circle
          cx="280"
          cy="310"
          r="200"
          fill="none"
          stroke="rgba(103,232,249,.28)"
          strokeWidth="1"
          strokeDasharray="70 360"
          style={{ animation: 'spinback 24s linear infinite', transformOrigin: '280px 310px' }}
        />
        <circle cx="280" cy="310" r="152" fill="none" stroke="rgba(122,160,255,.10)" strokeWidth="1" />
        {motion && (
          <g fill="none" stroke="#67E8F9" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="18 320">
            <path d="M56 148 C 150 190, 200 250, 236 300" style={{ animation: 'signal 4.6s linear infinite' }} />
            <path d="M504 128 C 410 180, 356 240, 324 300" style={{ animation: 'signal 5.4s linear .7s infinite' }} />
            <path d="M38 474 C 140 450, 200 400, 236 350" style={{ animation: 'signal 6s linear 1.3s infinite' }} />
            <path d="M522 484 C 420 460, 358 402, 324 352" style={{ animation: 'signal 5s linear 2s infinite' }} />
          </g>
        )}
        <g fill="#67E8F9">
          <circle cx="56" cy="148" r="3" />
          <circle cx="504" cy="128" r="3" />
          <circle cx="38" cy="474" r="3" />
          <circle cx="522" cy="484" r="3" />
        </g>
      </svg>

      {/* Handset */}
      <div
        style={{
          position: 'relative',
          width: 'min(276px,48%)',
          aspectRatio: '320/660',
          background: 'var(--surface-0)',
          border: '8px solid #0A0F1E',
          borderRadius: 44,
          boxShadow:
            '0 50px 100px rgba(0,0,0,.65),0 0 0 1px rgba(103,232,249,.30),0 0 60px rgba(63,107,255,.25)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 36,
            overflow: 'hidden',
            background: '#ffffff',
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
              padding: '12px 20px 6px',
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

          {screen === 'chat' && <ChatScreen />}
          {screen === 'security' && <SecurityScreen />}
          {screen === 'calls' && <CallsScreen />}
          {screen === 'contacts' && <ContactsScreen />}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '9px 16px 14px',
              borderTop: '1px solid #EDEEF2',
            }}
          >
            {SITE.tabsActive.map((t) => (
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
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {motion && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '16%',
              background:
                'linear-gradient(180deg,rgba(103,232,249,0) 0%,rgba(103,232,249,.12) 60%,rgba(103,232,249,.34) 100%)',
              animation: 'sweep 5.5s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      {/* Screen tabs */}
      <div
        style={{
          // left/right rather than left:50% + translateX: an absolutely
          // positioned box anchored at 50% can only use the remaining half of
          // the container, which forced the four tabs onto two rows and
          // pushed them over the handset.
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          zIndex: 3,
        }}
        role="tablist"
        aria-label="ShieldiT app screens"
      >
        {SITE.screenTabs.map((t, i) => {
          const active = screen === SCREENS[i];
          return (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setScreen(SCREENS[i]);
                setPaused(true);
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.12em',
                padding: '8px 12px',
                cursor: 'pointer',
                background: active ? 'rgba(103,232,249,.14)' : 'transparent',
                color: active ? 'var(--cyan)' : 'var(--text-muted)',
                border: `1px solid ${active ? 'var(--cyan)' : 'rgba(122,160,255,.24)'}`,
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Floating telemetry chips */}
      <div className="hero-chips" style={{ position: 'absolute', inset: '0 -20px', pointerEvents: 'none' }}>
        {[
          { pos: { left: 0, top: '15%' }, edge: '#67E8F9', border: 'rgba(122,160,255,.28)', k: 'IDENTITY', v: 'Verified — Entra ID', anim: 'floatA 7s ease-in-out infinite,chipIn .6s ease-out both' },
          { pos: { right: 0, top: '6%' }, edge: '#2FD4A7', border: 'rgba(122,160,255,.28)', k: 'DEVICE POSTURE', v: 'Verified — no findings', anim: 'floatB 8.5s ease-in-out infinite,chipIn .6s ease-out .1s both' },
          { pos: { left: 0, bottom: '19%' }, edge: '#FF8A6E', border: 'rgba(255,138,110,.35)', k: 'THREAT BLOCKED', v: 'Smishing link — quarantined', anim: 'floatB 7.6s ease-in-out .4s infinite,chipIn .6s ease-out .2s both' },
          { pos: { right: 0, bottom: '8%' }, edge: '#F5C451', border: 'rgba(122,160,255,.28)', k: 'POLICY', v: 'Federation: internal only', anim: 'floatA 9s ease-in-out .8s infinite,chipIn .6s ease-out .3s both' },
        ].map((c) => (
          <div
            key={c.k}
            style={{
              position: 'absolute',
              ...c.pos,
              maxWidth: 146,
              background: 'rgba(10,15,30,.94)',
              border: `1px solid ${c.border}`,
              borderLeft: `2px solid ${c.edge}`,
              padding: '11px 13px',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              animation: motion ? c.anim : undefined,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9.5,
                letterSpacing: '.12em',
                color: c.edge,
              }}
            >
              {c.k}
            </span>
            <span style={{ fontSize: 13, color: '#E6EAF4', fontWeight: 500 }}>{c.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- screens */

function ChatScreen() {
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 11px 8px',
          borderBottom: '1px solid #EDEEF2',
        }}
      >
        <span style={{ color: '#8A8F9C', fontSize: 16, lineHeight: 1 }}>‹</span>
        <span style={{ position: 'relative', width: 27, height: 27, flex: '0 0 auto' }}>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 27,
              height: 27,
              borderRadius: '50%',
              background: 'linear-gradient(140deg,#2F6BFF,#67C8FF)',
              color: '#ffffff',
              fontSize: 10.5,
              fontWeight: 700,
            }}
          >
            IR
          </span>
          <span
            style={{
              position: 'absolute',
              right: -1,
              bottom: -1,
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: '#22C55E',
              border: '1.5px solid #ffffff',
            }}
          />
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 600, letterSpacing: '-.01em' }}>
            Incident Response
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 9.5,
              color: '#8A8F9C',
            }}
          >
            <IconLock />
            End-to-end encrypted · 6 members
          </span>
        </span>
        <span style={{ display: 'flex', gap: 8, color: '#007AFF' }}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="1.5" y="4" width="9" height="8" rx="2" />
            <path d="M10.5 8l4-2.2v4.4z" />
          </svg>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M3.2 3.4c0 5.4 4 9.4 9.4 9.4l.7-2.2-3-1-1 1.1a8.6 8.6 0 01-3.9-4l1.1-1-1-3z" />
          </svg>
        </span>
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
          padding: '9px 10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: 7,
        }}
      >
        <div
          style={{
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 9,
            color: '#8A8F9C',
            background: '#F1F2F6',
            padding: '3px 9px',
            borderRadius: 9,
          }}
        >
          <IconLock c="#8A8F9C" />
          Messages are end-to-end encrypted
        </div>

        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#EDE6FB',
              color: '#6E4BD8',
              fontSize: 8.5,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto',
            }}
          >
            NA
          </span>
          <span
            style={{
              maxWidth: '86%',
              background: '#F1F2F6',
              borderRadius: '15px 15px 15px 4px',
              padding: '8px 10px',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 9.5,
                fontWeight: 700,
                color: '#6E4BD8',
                marginBottom: 2,
              }}
            >
              N. Alvarez
            </span>
            <span style={{ display: 'block', fontSize: 11.5, lineHeight: 1.42 }}>
              Two handsets flagged by Mobile Threat Defense. Both removed from the trading group at
              09:14.
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 9,
                color: '#9AA0AE',
                textAlign: 'right',
                marginTop: 2,
              }}
            >
              9:16
            </span>
          </span>
        </div>

        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
          <span style={{ width: 20, flex: '0 0 auto' }} />
          <span
            style={{
              maxWidth: '86%',
              background: '#F1F2F6',
              borderRadius: 15,
              padding: '8px 10px',
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: 7,
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E04B3A',
                flex: '0 0 auto',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M9 2H4.5A1.5 1.5 0 003 3.5v9A1.5 1.5 0 004.5 14h7a1.5 1.5 0 001.5-1.5V6z" />
                <path d="M9 2v4h4" />
              </svg>
            </span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: 'block', fontSize: 11, fontWeight: 600 }}>
                device-posture-report.pdf
              </span>
              <span style={{ display: 'block', fontSize: 9, color: '#9AA0AE' }}>
                PDF · 240 KB · scanned
              </span>
            </span>
          </span>
        </div>

        <div
          style={{
            alignSelf: 'flex-end',
            maxWidth: '86%',
            background: 'linear-gradient(145deg,#0A84FF,#0066E0)',
            color: '#ffffff',
            borderRadius: '15px 15px 4px 15px',
            padding: '8px 10px',
          }}
        >
          <span style={{ display: 'block', fontSize: 11.5, lineHeight: 1.42 }}>
            Understood. Keep external federation disabled until SentinelIQ closes the review.
          </span>
          <span
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 3,
              fontSize: 9,
              color: 'rgba(255,255,255,.8)',
              marginTop: 2,
            }}
          >
            9:18
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 8.6 5 11.6l5.4-6.2" />
              <path d="M7.6 10.8 9.4 12.6l4.6-5.4" />
            </svg>
          </span>
        </div>

        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#DEF3E9',
              color: '#1F7A55',
              fontSize: 8.5,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto',
            }}
          >
            SO
          </span>
          <span
            style={{
              maxWidth: '86%',
              background: '#F1F2F6',
              borderRadius: '15px 15px 15px 4px',
              padding: '8px 10px',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 9.5,
                fontWeight: 700,
                color: '#1F7A55',
                marginBottom: 2,
              }}
            >
              Security Operations
            </span>
            <span style={{ display: 'block', fontSize: 11.5, lineHeight: 1.42 }}>
              Policy applied. Logged to the compliance record as case IR-2291.
            </span>
            <span style={{ display: 'flex', gap: 4, marginTop: 5 }}>
              {['👍 3', '✓ 2'].map((r) => (
                <span
                  key={r}
                  style={{
                    fontSize: 9,
                    background: '#ffffff',
                    borderRadius: 9,
                    padding: '2px 7px',
                    color: '#5C6270',
                  }}
                >
                  {r}
                </span>
              ))}
            </span>
          </span>
        </div>

        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#E7EEFB',
              color: '#2F6BFF',
              fontSize: 8.5,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 0 auto',
            }}
          >
            CD
          </span>
          <span
            style={{
              background: '#F1F2F6',
              borderRadius: 14,
              padding: '8px 11px',
              display: 'flex',
              gap: 3,
              alignItems: 'center',
            }}
          >
            {[0, 0.2, 0.4].map((d) => (
              <span
                key={d}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: '#B7BCC7',
                  animation: `blip 1.2s ease-in-out ${d}s infinite`,
                }}
              />
            ))}
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 10px 9px',
          borderTop: '1px solid #EDEEF2',
        }}
      >
        <span
          style={{
            width: 25,
            height: 25,
            borderRadius: '50%',
            background: '#007AFF',
            color: '#ffffff',
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
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#007AFF" strokeWidth="1.4">
          <rect x="5.6" y="1.8" width="4.8" height="8" rx="2.4" />
          <path d="M3.4 7.6a4.6 4.6 0 009.2 0M8 12.2V14" />
        </svg>
      </div>
    </div>
  );
}

function SecurityScreen() {
  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        background: '#F2F3F7',
        padding: '6px 12px 9px',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-.025em' }}>Security</span>
        <span style={{ fontSize: 9.5, color: '#8A8F9C' }}>Last scan 09:41</span>
      </div>

      <div
        style={{
          background: '#ffffff',
          borderRadius: 15,
          padding: '11px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span
          style={{
            position: 'relative',
            width: 58,
            height: 58,
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}
          >
            <circle cx="29" cy="29" r="24" fill="none" stroke="#EDEFF4" strokeWidth="6" />
            <circle
              cx="29"
              cy="29"
              r="24"
              fill="none"
              stroke="#22C55E"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="151"
              strokeDashoffset="18"
            />
          </svg>
          <span style={{ position: 'relative', fontSize: 15, fontWeight: 700, letterSpacing: '-.02em' }}>
            88
          </span>
        </span>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 14, fontWeight: 700, letterSpacing: '-.015em' }}>
            Device Protected
          </span>
          <span style={{ display: 'block', fontSize: 10.5, lineHeight: 1.4, color: '#6B7080' }}>
            Posture verified · policy enforced · no active findings
          </span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: 6 }}>
        {[
          { label: 'Scan', bg: '#007AFF', color: '#ffffff', stroke: 'currentColor' },
          { label: 'Links', bg: '#ffffff', color: '#0B0D12', stroke: '#007AFF' },
          { label: 'SOS', bg: '#ffffff', color: '#F0452A', stroke: 'currentColor' },
        ].map((b) => (
          <span
            key={b.label}
            style={{
              flex: 1,
              background: b.bg,
              color: b.color,
              borderRadius: 12,
              padding: '9px 0',
              textAlign: 'center',
              fontSize: 10.5,
              fontWeight: 600,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            {b.label === 'Scan' && (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={b.stroke} strokeWidth="1.5">
                <circle cx="7.2" cy="7.2" r="4.4" />
                <path d="M10.6 10.6 14 14" />
              </svg>
            )}
            {b.label === 'Links' && (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={b.stroke} strokeWidth="1.5">
                <rect x="2" y="2" width="5" height="5" rx="1" />
                <rect x="9" y="2" width="5" height="5" rx="1" />
                <rect x="2" y="9" width="5" height="5" rx="1" />
                <path d="M9 9h2v2H9zM13 13h1M11.5 13h.5" />
              </svg>
            )}
            {b.label === 'SOS' && (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={b.stroke} strokeWidth="1.5">
                <circle cx="8" cy="8" r="6" />
                <path d="M8 5v4M8 10.6v.6" />
              </svg>
            )}
            {b.label}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 6 }}>
        {[
          { t: 'DNA Security', d: 'Device · Network · App' },
          { t: 'Policy', d: 'Federation: internal only' },
        ].map((c) => (
          <span
            key={c.t}
            style={{
              flex: 1,
              background: '#ffffff',
              borderRadius: 12,
              padding: '9px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 600 }}>{c.t}</span>
            <span style={{ fontSize: 9, color: '#8A8F9C' }}>{c.d}</span>
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '-.01em' }}>Threats Log</span>
        <span style={{ fontSize: 9.5, color: '#007AFF' }}>View All</span>
      </div>

      {SITE.heroThreatLog.map((l) => (
        <div
          key={l.title}
          style={{
            background: '#ffffff',
            borderRadius: 11,
            padding: '8px 10px',
            display: 'flex',
            gap: 9,
            alignItems: 'center',
          }}
        >
          <span
            style={{ width: 7, height: 7, borderRadius: '50%', background: l.dot, flex: '0 0 auto' }}
          />
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 11.5, fontWeight: 600 }}>{l.title}</span>
            <span style={{ display: 'block', fontSize: 9, color: '#8A8F9C' }}>{l.meta}</span>
          </span>
          <span style={{ fontSize: 9, color: '#9AA0AE' }}>{l.time}</span>
        </div>
      ))}
    </div>
  );
}

function CallsScreen() {
  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        padding: '6px 12px 9px',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-.025em' }}>Calls</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#007AFF" strokeWidth="1.5">
          <path d="M8 3v10M3 8h10" />
        </svg>
      </div>
      <div style={S.search}>
        <IconSearch />
        Search calls
      </div>
      <div
        style={{
          display: 'flex',
          gap: 14,
          fontSize: 11,
          fontWeight: 600,
          borderBottom: '1px solid #EDEEF2',
        }}
      >
        {['All', 'Missed', 'Groups'].map((t, i) => (
          <span
            key={t}
            style={{
              color: i === 0 ? '#007AFF' : '#9AA0AE',
              borderBottom: i === 0 ? '2px solid #007AFF' : undefined,
              paddingBottom: 5,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      {SITE.heroCalls.map((c) => (
        <div key={c.name + c.time} style={S.row}>
          <span style={S.avatar(c.bg, c.fg)}>{c.i}</span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '-.01em',
                color: c.color,
              }}
            >
              {c.name}
            </span>
            <span style={{ display: 'block', fontSize: 9.5, color: '#8A8F9C' }}>{c.type}</span>
          </span>
          <span style={{ fontSize: 9.5, color: '#9AA0AE' }}>{c.time}</span>
        </div>
      ))}
    </div>
  );
}

function ContactsScreen() {
  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        padding: '6px 12px 9px',
        overflow: 'hidden',
      }}
    >
      <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-.025em' }}>Contacts</span>
      <div
        style={{
          display: 'flex',
          gap: 14,
          fontSize: 11,
          fontWeight: 600,
          borderBottom: '1px solid #EDEEF2',
        }}
      >
        {['ShieldiT', 'Phone'].map((t, i) => (
          <span
            key={t}
            style={{
              color: i === 0 ? '#007AFF' : '#9AA0AE',
              borderBottom: i === 0 ? '2px solid #007AFF' : undefined,
              paddingBottom: 5,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div style={S.search}>
        <IconSearch />
        Search
      </div>
      {SITE.heroContacts.map((p) => (
        <div key={p.name} style={S.row}>
          <span style={S.avatar(p.bg, p.fg)}>{p.i}</span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '-.01em' }}>
              {p.name}
            </span>
            <span style={{ display: 'block', fontSize: 9.5, color: '#8A8F9C' }}>{p.role}</span>
          </span>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#22C55E" strokeWidth="1.6">
            <path d="M2.6 8.4 6 11.8l7.4-8" />
          </svg>
        </div>
      ))}
    </div>
  );
}
