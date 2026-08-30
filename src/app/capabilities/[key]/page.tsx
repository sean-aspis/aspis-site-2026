import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CAPABILITIES, CAPABILITY_KEYS, type CapabilityKey } from '@/data/capabilities';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * Capability detail — design file lines 2342–2377. Eight routes off one file.
 *
 * Two sections, both direct children of <main>; the design's inline
 * `border-bottom` is dropped so the nth-of-type(n+2) rule owns the hairline.
 * The hero's grid wash is a positioned child div declared as background-image,
 * so it never touches the section's background-color.
 *
 * Capabilities are not accent-themed the way products are: the design paints
 * every capability page periwinkle (the cross-cutting hue) and closes on a
 * cyan-ruled note, so there is no accentVars() call here.
 */

/** The data module is `as const`, so CAPABILITIES[key] is a union of eight
 *  literal shapes. One cast keeps the template working against one type. */
type CapabilityRecord = {
  name: string;
  lede: string;
  intro: string;
  blocks: readonly { title: string; items: readonly string[] }[];
  note: string;
};

const getCapability = (key: CapabilityKey) =>
  CAPABILITIES[key] as unknown as CapabilityRecord;

const isKey = (k: string): k is CapabilityKey => (CAPABILITY_KEYS as string[]).includes(k);

export function generateStaticParams() {
  return CAPABILITY_KEYS.map((key) => ({ key }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  if (!isKey(key)) return {};
  const c = getCapability(key);
  return pageMeta({
    title: c.name,
    description: c.intro,
    path: `/capabilities/${key}`,
  });
}

export default async function CapabilityPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  if (!isKey(key)) notFound();
  const c = getCapability(key);

  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--periwinkle)' } as React.CSSProperties}>
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
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 30% 40%,#000 30%,transparent 80%)',
          }}
        />
        <div className="container pad-standard" style={{ position: 'relative' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--periwinkle)',
              marginBottom: 24,
            }}
          >
            CAPABILITY
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 900,
              textWrap: 'balance',
            }}
          >
            {c.name}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px,1.6vw,26px)',
              lineHeight: 1.35,
              color: 'var(--periwinkle)',
              margin: '0 0 26px',
              maxWidth: 760,
              fontWeight: 500,
              letterSpacing: '-.015em',
            }}
          >
            {c.lede}
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 34px',
              maxWidth: 720,
            }}
          >
            {c.intro}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link
              href={ROUTES.contact}
              className="btn-primary"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Request a Demo
            </Link>
            <Link
              href={ROUTES.platform}
              className="btn-ghost"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              See the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — capability blocks + closing note */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 0,
            }}
          >
            {c.blocks.map((b) => (
              <div
                key={b.title}
                style={{
                  border: '1px solid rgba(122,160,255,.16)',
                  margin: '0 -1px -1px 0',
                  padding: 'clamp(26px,2.6vw,36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                  }}
                >
                  {b.title}
                </span>
                <div style={{ display: 'grid', gap: 0 }}>
                  {b.items.map((it) => (
                    <span
                      key={it}
                      style={{
                        fontSize: 15,
                        lineHeight: 1.5,
                        color: '#C0CBE4',
                        padding: '9px 0',
                        borderBottom: '1px solid var(--line-soft)',
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 'clamp(32px,4vw,48px)',
              borderLeft: '2px solid var(--cyan)',
              padding: '18px 0 18px 22px',
              maxWidth: 820,
            }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#C0CBE4', margin: 0 }}>{c.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
