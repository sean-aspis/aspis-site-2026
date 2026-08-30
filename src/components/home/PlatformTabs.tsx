'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DeviceBezel } from '@/components/ui/Primitives';
import { SITE } from '@/data/site';
import { ROUTES, EXTERNAL } from '@/data/nav';

/**
 * Client leaf for the "THE PLATFORM IN USE" band. Owns nothing but the active
 * index; the surrounding section stays a server component.
 *
 * The per-tab payload (title, body, four points, captions, CTAs) has no home in
 * `src/data`, so it is transcribed verbatim from `homeTab` in the design file.
 * Tab styling is derived from the active index, never stored.
 */
type Tab = {
  shot: string;
  alt: string;
  accent: string;
  title: string;
  body: string;
  points: string[];
  caption: string;
  cta1: string;
  cta2: string;
  href1: string;
  href2: string;
  isLogin: boolean;
  width: number;
  height: number;
};

const TABS: Tab[] = [
  {
    shot: '/assets/shot-shieldit-security-blue.png',
    alt: 'ShieldiT security screen showing device posture and threat checks',
    accent: '#4C7DFF',
    title: 'Secure every conversation. Protect every device.',
    body: 'Encrypted messaging, voice, video, and file exchange combined with on-device threat detection, so the endpoint carrying the conversation is evaluated alongside it.',
    points: [
      'Detect phishing, malicious applications, unsafe networks, and device compromise',
      'Feed device security condition into communication policy',
      'Enterprise identity, RBAC, and federation across the workforce',
      'Four editions: Enterprise, FSX, Defense, and Executive',
    ],
    caption: 'SHIELDIT — DEVICE SECURITY',
    cta1: 'Explore ShieldiT',
    cta2: 'See the editions',
    href1: '/products/enterprise',
    href2: ROUTES.platform,
    isLogin: false,
    width: 414,
    height: 845,
  },
  {
    shot: '/assets/shot-manageit-dashboard.png',
    alt: 'ManageiT security operations dashboard with global attack activity',
    accent: '#67E8F9',
    title: 'One console for policy, posture, and response.',
    body: 'Centralized administration across tenants, users, devices, and groups — with global attack activity, alert triage, and the policy actions that follow, in the same place.',
    points: [
      'Multi-tenant administration from master tenant down to group',
      'Device posture, risk scoring, and compliance visibility',
      'Policy enforcement, federation control, and audit history',
      'Integrations across identity, MDM/EMM, SIEM/XDR, and compliance',
    ],
    caption: 'MANAGEIT — SECURITY OPERATIONS',
    cta1: 'Explore ManageiT',
    cta2: 'Log in to ManageiT',
    href1: '/products/manageit',
    href2: EXTERNAL.manageIt,
    isLogin: true,
    width: 1694,
    height: 847,
  },
  {
    shot: '/assets/shot-sentineliq-compliance.png',
    alt: 'SentinelIQ compliance dashboard with flagged communications and AI findings',
    accent: '#8B5CF6',
    title: 'Understand what actually happened.',
    body: 'Communications compliance, supervision, investigation, and behavioral risk — with an immutable audit trail and evidence packages ready for legal hold.',
    points: [
      'Supervision queues, review sampling, and retention policy',
      'AI findings surfaced with confidence and reviewer context',
      'Case management from finding through investigation to hold',
      'File-share analytics with external-domain exposure',
    ],
    caption: 'SENTINELIQ — COMPLIANCE DASHBOARD',
    cta1: 'Explore SentinelIQ',
    cta2: 'See the console',
    href1: '/products/sentineliq',
    href2: '/products/sentineliq',
    isLogin: false,
    width: 2902,
    height: 1510,
  },
];

const CONTAIN: React.CSSProperties = {
  position: 'relative',
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'auto',
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
};

export default function PlatformTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <>
      <div
        role="tablist"
        aria-label="Platform products"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 'clamp(24px,3vw,34px)',
        }}
      >
        {SITE.homeTabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14.5,
                fontWeight: 600,
                letterSpacing: '-.01em',
                color: on ? 'var(--text-primary)' : 'var(--text-muted)',
                background: on ? 'rgba(76,125,255,.12)' : 'transparent',
                border: `1px solid ${on ? 'var(--blue)' : 'rgba(122,160,255,.16)'}`,
                padding: '12px 20px',
                cursor: 'pointer',
                transition: 'all .16s ease',
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          position: 'relative',
          border: '1px solid rgba(122,160,255,.18)',
          background: 'var(--panel)',
          overflow: 'hidden',
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(10px,1.4vw,20px)',
          marginBottom: 'clamp(26px,3vw,40px)',
        }}
      >
        <span
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 70% 70% at 50% 0%,${tab.accent},rgba(5,7,14,0) 72%)`,
            opacity: 0.13,
          }}
        />
        <span
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(122,160,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(122,160,255,.045) 1px,transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {active === 0 ? (
          <span
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(18px,3vw,54px)',
              height: '100%',
              padding: 'clamp(14px,2vw,26px) 0',
            }}
          >
            <DeviceBezel
              accent={tab.accent}
              style={{
                position: 'relative',
                flex: '0 0 auto',
                height: '100%',
                aspectRatio: '414/845',
                border: '1px solid rgba(122,160,255,.28)',
                boxShadow: '0 30px 70px rgba(0,0,0,.6),0 0 60px rgba(76,125,255,.16)',
                padding: 'clamp(5px,.7vw,9px)',
                display: 'block',
              }}
            >
              <Image
                src={tab.shot}
                alt={tab.alt}
                width={tab.width}
                height={tab.height}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'clamp(14px,1.9vw,26px)',
                  display: 'block',
                }}
              />
            </DeviceBezel>

            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                minWidth: 0,
                maxWidth: 340,
              }}
            >
              {SITE.shieldItStageNotes.map((s) => (
                <span
                  key={s.k}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    borderLeft: `2px solid ${s.c}`,
                    background: 'rgba(10,15,30,.72)',
                    padding: '9px 13px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9.5,
                      letterSpacing: '.12em',
                      color: s.c,
                    }}
                  >
                    {s.k}
                  </span>
                  <span style={{ fontSize: 12.5, lineHeight: 1.4, color: 'var(--text-bright)' }}>
                    {s.v}
                  </span>
                </span>
              ))}
            </span>
          </span>
        ) : (
          <Image
            src={tab.shot}
            alt={tab.alt}
            width={tab.width}
            height={tab.height}
            style={CONTAIN}
          />
        )}

        <span
          style={{
            position: 'absolute',
            bottom: 10,
            left: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 9.5,
            letterSpacing: '.12em',
            color: 'var(--text-faint)',
            background: 'rgba(4,6,14,.72)',
            padding: '4px 8px',
          }}
        >
          {tab.caption}
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
          gap: 'clamp(26px,3.5vw,56px)',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px,2.3vw,32px)',
              lineHeight: 1.1,
              letterSpacing: '-.028em',
              fontWeight: 700,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            {tab.title}
          </h3>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: 0,
              maxWidth: 560,
            }}
          >
            {tab.body}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
            <Link
              href={tab.href1}
              className="btn-accent"
              style={{
                ['--accent' as string]: tab.accent,
                ['--accent-ink' as string]: '#04060E',
                fontSize: 14.5,
                padding: '14px 24px',
              }}
            >
              {tab.cta1}
            </Link>
            {tab.isLogin ? (
              <a
                href={tab.href2}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                style={{ fontSize: 14.5, padding: '14px 24px' }}
              >
                {tab.cta2} ↗
              </a>
            ) : (
              <Link
                href={tab.href2}
                className="btn-ghost"
                style={{ fontSize: 14.5, padding: '14px 24px' }}
              >
                {tab.cta2}
              </Link>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {tab.points.map((p, i) => (
            <span
              key={p}
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'baseline',
                padding: '13px 0',
                borderBottom: '1px solid var(--line-soft)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '.1em',
                  color: tab.accent,
                  flex: '0 0 20px',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 15.5, lineHeight: 1.5, color: 'var(--text-bright)' }}>
                {p}
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
