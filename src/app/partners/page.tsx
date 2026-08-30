import type { Metadata } from 'next';
import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * Partners — design file lines 2116–2137. A single section, a direct child of
 * <main>; the design's inline `border-bottom` is dropped.
 *
 * Both CTAs route to /contact, matching the design's `goContact` handlers.
 */

export const metadata: Metadata = pageMeta({
  title: 'Partners',
  description:
    'ASPIS works with organizations that integrate, deliver, resell, manage, or embed secure communications and mobile security.',
  path: ROUTES.partners,
});

export default function PartnersPage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--amber)' } as React.CSSProperties}>
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--amber)',
              marginBottom: 24,
            }}
          >
            PARTNERS
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 880,
              textWrap: 'balance',
            }}
          >
            Extend secure communications and mobile security to your customers.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 clamp(40px,5vw,60px)',
              maxWidth: 700,
            }}
          >
            ASPIS works with organizations that integrate, deliver, resell, manage, or embed secure
            communications and mobile security. Commercial structures are discussed directly with
            qualified partners.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 0,
            }}
          >
            {PAGES.partnerTypes.map((p) => (
              <div
                key={p.t}
                style={{
                  border: '1px solid rgba(122,160,255,.14)',
                  margin: '0 -1px -1px 0',
                  padding: 'clamp(26px,2.6vw,34px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  minHeight: 190,
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
                  {p.t}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.58, color: 'var(--text-body)' }}>
                  {p.d}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 'clamp(32px,4vw,48px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 14,
            }}
          >
            <Link
              href={ROUTES.contact}
              className="btn-primary"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Become a Partner
            </Link>
            <Link
              href={ROUTES.contact}
              className="btn-ghost"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Talk to Channel Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
