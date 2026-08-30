import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import { ChapterHeader, Chip } from '@/components/ui/Primitives';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StackDiagram from '@/components/ui/StackDiagram';
import { rgba } from '@/lib/theme';

/**
 * Platform Architecture.
 *
 * "Platform Architecture" appeared twice in the navigation and both entries
 * resolved to /why-aspis. It is now a route of its own.
 *
 * Every statement here is drawn from the v1.4 design file — the six-layer
 * stack, the Protect / Govern / Understand domains, the context graph nodes,
 * the integration categories and the deployment continuum. No capability is
 * asserted that the design file does not already assert.
 */
export const metadata: Metadata = pageMeta({
  title: 'Platform Architecture',
  description:
    'How identity, device posture, communication, policy, governance and intelligence connect across ShieldiT, ManageiT and SentinelIQ.',
  path: '/capabilities/platform-architecture',
});

const LAYERS = [
  {
    band: 'LAYER 01 — 02',
    name: 'Identity + Device',
    note: 'Authenticate the user; evaluate endpoint security and integrity.',
    color: '#8B9BFF',
    chips: ['Entra ID / Azure AD', 'Active Directory', 'Okta', 'Device posture'],
  },
  {
    band: 'LAYER 03',
    name: 'ShieldiT',
    note: 'Secure communication and Mobile Threat Defense.',
    color: '#4C7DFF',
    chips: ['Enterprise', 'FSX', 'Defense', 'Executive'],
  },
  {
    band: 'LAYER 04 — 05',
    name: 'ManageiT',
    note: 'Policy, administration, federation, and governance.',
    color: '#67E8F9',
    chips: ['Identity', 'Devices', 'Policies', 'Risk', 'Federation', 'Integrations'],
  },
  {
    band: 'LAYER 06',
    name: 'SentinelIQ',
    note: 'Compliance, intelligence, supervision, and investigation.',
    color: '#A78BFA',
    chips: ['Supervision', 'Audit', 'Investigation'],
  },
];

export default function PlatformArchitecture() {
  return (
    <main
      id="main"
      style={{ ['--ghost-hover' as string]: 'var(--cyan)' } as React.CSSProperties}
    >
      {/* 1 — hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(122,160,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(122,160,255,.05) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 30% 40%,#000 30%,transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 30% 40%,#000 30%,transparent 80%)',
          }}
        />
        <div className="container pad-chapter" style={{ position: 'relative' }}>
          <Breadcrumbs trail={[{ name: 'Why ASPIS', href: ROUTES.why }, { name: 'Platform Architecture' }]} />
          <div className="eyebrow" style={{ color: 'var(--cyan)', marginBottom: 22 }}>
            PLATFORM ARCHITECTURE
          </div>
          <h1 className="h1" style={{ maxWidth: 940, marginBottom: 24 }}>
            One architecture for secure, compliant communications.
          </h1>
          <p className="lede" style={{ maxWidth: 700 }}>
            Identity and device posture flow upward into every communication, policy decision, and
            audit record. Three layers, one architecture.
          </p>
        </div>
      </section>

      {/* 2 — the layer stack */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="01 / THE STACK" accent="var(--cyan)" caption="LOGICAL ARCHITECTURE" />
          <h2 className="h2" style={{ maxWidth: 820, marginBottom: 'clamp(32px,4vw,52px)' }}>
            Security context travels with the conversation.
          </h2>
          <StackDiagram
            layers={LAYERS}
            caption="LAYER BEHAVIOUR VARIES BY EDITION, DEPLOYMENT AND CONFIGURATION."
          />
        </div>
      </section>

      {/* 3 — Protect / Govern / Understand */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="02 / DOMAINS" accent="var(--blue)" caption="PROTECT · GOVERN · UNDERSTAND" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 'clamp(18px,2vw,26px)',
            }}
          >
            {SITE.domains.map((d) => (
              <div
                key={d.name}
                className="card-hover"
                style={{
                  border: '1px solid var(--line)',
                  borderTop: `2px solid ${d.color}`,
                  background: 'rgba(10,15,30,.6)',
                  padding: 'clamp(24px,2.4vw,34px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.18em',
                    color: d.color,
                  }}
                >
                  {d.verb}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 26,
                    fontWeight: 700,
                    letterSpacing: '-.02em',
                  }}
                >
                  {d.name}
                </span>
                <p className="body" style={{ fontSize: 15 }}>
                  {d.desc}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 7,
                    marginTop: 'auto',
                    paddingTop: 8,
                  }}
                >
                  {d.chips.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — the context considered around a communication */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="03 / CONTEXT" accent="var(--violet)" caption="WHAT IS EVALUATED" />
          <h2 className="h2" style={{ maxWidth: 780, marginBottom: 18 }}>
            Communication is evaluated with the context around it.
          </h2>
          <p className="lede" style={{ maxWidth: 660, marginBottom: 'clamp(32px,4vw,48px)' }}>
            SentinelIQ relates communication activity to the user, the endpoint, the policy that
            applied, and the parties involved.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(160px,100%),1fr))',
              gap: 'clamp(12px,1.4vw,18px)',
            }}
          >
            {SITE.graphNodes.map((n, i) => (
              <div
                key={n}
                style={{
                  border: `1px solid ${rgba('#A78BFA', 0.3)}`,
                  background: rgba('#A78BFA', 0.06),
                  padding: '20px 18px',
                  display: 'grid',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9.5,
                    letterSpacing: '.16em',
                    color: 'var(--violet)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text-bright)' }}>
                  {n}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — integration layer */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="04 / INTEGRATION LAYER" accent="var(--teal)" caption="EXISTING INVESTMENTS" />
          <h2 className="h2" style={{ maxWidth: 780, marginBottom: 'clamp(32px,4vw,48px)' }}>
            Designed to strengthen the security architecture you already operate.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
              gap: 0,
              border: '1px solid var(--line)',
            }}
          >
            {SITE.integrations.map((g) => (
              <div
                key={g.cat}
                className="tile-hover"
                style={{
                  padding: 'clamp(22px,2.2vw,30px)',
                  borderRight: '1px solid var(--line-soft)',
                  borderBottom: '1px solid var(--line-soft)',
                  display: 'grid',
                  gap: 12,
                  alignContent: 'start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '.16em',
                    color: 'var(--teal)',
                  }}
                >
                  {g.cat}
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 7 }}>
                  {g.items.map((i) => (
                    <li key={i} style={{ fontSize: 14.5, color: 'var(--text-bright)' }}>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/capabilities/integrations" className="crumb">
              INTEGRATIONS IN DETAIL →
            </Link>
          </p>
        </div>
      </section>

      {/* 6 — deployment continuum */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="05 / DEPLOYMENT LAYER" accent="var(--amber)" caption="ARCHITECTURE CONTINUUM" />
          <h2 className="h2" style={{ maxWidth: 800, marginBottom: 'clamp(32px,4vw,48px)' }}>
            From rapid deployment to full infrastructure control.
          </h2>
          <div className="flow-row">
            {SITE.deployments.map((d, i) => (
              <div key={d.n} style={{ display: 'contents' }}>
                <div
                  className="flow-step cell-hover"
                  style={{ borderColor: rgba('#F5C451', 0.22) }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9.5,
                      letterSpacing: '.16em',
                      color: 'var(--amber)',
                    }}
                  >
                    {d.n}
                  </span>
                  <span style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text-primary)' }}>
                    {d.name}
                  </span>
                  <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-body)' }}>
                    {d.note}
                  </span>
                </div>
                {i < SITE.deployments.length - 1 && (
                  <span className="flow-arrow" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/capabilities/deployment" className="crumb">
              DEPLOYMENT &amp; SOVEREIGNTY →
            </Link>
          </p>
        </div>
      </section>

      {/* 7 — CTA */}
      <section>
        <div className="container pad-standard">
          <h2 className="h2" style={{ maxWidth: 760, marginBottom: 18 }}>
            Request an architecture briefing.
          </h2>
          <p className="lede" style={{ maxWidth: 640, marginBottom: 30 }}>
            ASPIS architects walk security, identity and compliance teams through how the platform
            maps onto an existing environment.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href={ROUTES.contact} className="btn-primary" style={{ fontSize: 15, padding: '14px 26px' }}>
              Request an architecture briefing
            </Link>
            <Link href={ROUTES.platform} className="btn-ghost" style={{ fontSize: 15, padding: '14px 26px' }}>
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
