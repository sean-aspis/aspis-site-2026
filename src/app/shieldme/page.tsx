import type { Metadata } from 'next';
import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { EXTERNAL, ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * ShieldMe — design file lines 2140–2173. The consumer bridge: one section, a
 * direct child of <main>, that hands off to the dedicated consumer site.
 * The design's inline `border-bottom` is dropped; the bloom stays a
 * `background` on an absolutely-positioned overlay div, never on the section.
 */

export const metadata: Metadata = pageMeta({
  title: 'ShieldMe',
  description:
    'ShieldMe brings secure communications and mobile threat protection to individuals and families. The full consumer experience lives on a dedicated site.',
  path: ROUTES.shieldme,
});

const CARD: React.CSSProperties = {
  border: '1px solid rgba(122,160,255,.14)',
  margin: '0 -1px -1px 0',
  padding: '26px 22px',
};

const CARD_EYEBROW: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 10.5,
  letterSpacing: '.16em',
  color: 'var(--coral)',
  marginBottom: 16,
};

const LIST_ROW: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.5,
  color: '#C0CBE4',
  padding: '9px 0',
  borderBottom: '1px solid rgba(122,160,255,.10)',
};

export default function ShieldMePage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--coral)' } as React.CSSProperties}>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 50% 70% at 75% 10%,rgba(63,107,255,.18),rgba(5,7,14,0) 65%)',
          }}
        />
        <div className="container pad-standard" style={{ position: 'relative' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--coral)',
              marginBottom: 24,
            }}
          >
            CONSUMER
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 820,
              textWrap: 'balance',
            }}
          >
            ShieldMe by ASPIS
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px,1.6vw,26px)',
              lineHeight: 1.35,
              color: 'var(--coral)',
              margin: '0 0 26px',
              maxWidth: 700,
              fontWeight: 500,
              letterSpacing: '-.015em',
            }}
          >
            Mobile security for your digital life.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 clamp(36px,4vw,52px)',
              maxWidth: 660,
            }}
          >
            ShieldMe brings secure communications and mobile threat protection to individuals and
            families. The full consumer experience lives on a dedicated site.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))',
              gap: 0,
              marginBottom: 'clamp(32px,4vw,44px)',
            }}
          >
            <div style={CARD}>
              <h2 style={CARD_EYEBROW}>PROTECT AGAINST</h2>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {PAGES.shieldMeThreats.map((x) => (
                  <li key={x} style={LIST_ROW}>
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div style={CARD}>
              <h2 style={CARD_EYEBROW}>COMMUNICATE THROUGH</h2>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {PAGES.shieldMeComms.map((x) => (
                  <li key={x} style={LIST_ROW}>
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div style={CARD}>
              <h2 style={CARD_EYEBROW}>FOR CARRIERS</h2>
              <p style={{ fontSize: 15, lineHeight: 1.58, color: 'var(--text-body)', margin: 0 }}>
                ShieldMe can be delivered through carrier partnerships as a white-label or
                co-branded subscriber security service for consumers, families, and business
                subscribers.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a
              href={EXTERNAL.shieldMe}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Visit ShieldMe ↗
            </a>
            <Link
              href="/solutions/telecommunications"
              className="btn-ghost"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Discuss a Carrier Partnership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
