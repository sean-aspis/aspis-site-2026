import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { PRODUCTS, PRODUCT_KEYS } from '@/data/products';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * About ASPIS — design file lines 1856–1902.
 *
 * Three sections, all direct children of <main>; the design's inline
 * `border-bottom` is dropped so the nth-of-type(n+2) rule owns the hairline.
 * The hero bloom is a positioned child div, not a section background, so the
 * alternation rules are untouched.
 *
 * The "what we build" grid is the design's `productNav`, which renderVals()
 * derives from the product records (`productKeys.map(k => ({ name, kicker,
 * lede, open: nav('product', k) }))`) rather than storing separately — so it
 * is rebuilt here from PRODUCTS instead of being retyped.
 */

const INTRO =
  'ASPIS Cyber Technologies develops cybersecurity solutions designed to protect one of the most important—and increasingly targeted—layers of modern digital infrastructure: the intersection of people, mobile devices, and secure communications.';

export const metadata = pageMeta({
  title: 'About ASPIS',
  description: INTRO,
  path: ROUTES.about,
});

const PRODUCT_NAV = PRODUCT_KEYS.map((key) => ({
  key,
  name: PRODUCTS[key].name,
  kicker: PRODUCTS[key].kicker,
  lede: PRODUCTS[key].lede,
  href: `/products/${key}`,
}));

export default function AboutPage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--teal)' } as React.CSSProperties}>
      {/* 1 — company hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse 60% 70% at 70% 0%,rgba(63,107,255,.20),rgba(5,7,14,0) 65%)',
          }}
        />
        <div className="container pad-standard" style={{ position: 'relative' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--teal)',
              marginBottom: 24,
            }}
          >
            COMPANY
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 24px',
              maxWidth: 900,
              textWrap: 'balance',
            }}
          >
            ASPIS Cyber Technologies
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px,1.7vw,28px)',
              lineHeight: 1.3,
              color: 'var(--teal)',
              margin: '0 0 28px',
              maxWidth: 800,
              fontWeight: 500,
              letterSpacing: '-.02em',
            }}
          >
            Securing communications in a mobile-first world.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
              gap: 'clamp(28px,4vw,56px)',
              maxWidth: 1100,
            }}
          >
            <p style={{ fontSize: 17, lineHeight: 1.62, color: 'var(--text-body)', margin: 0 }}>
              {INTRO}
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.62, color: 'var(--text-body)', margin: 0 }}>
              Workforces are distributed. Executives are mobile. Critical decisions happen through
              smartphones. Sensitive information moves through voice, video, messaging, and file
              collaboration. Security architecture must evolve with them.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — the approach */}
      <section>
        <div className="container pad-standard">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px,3vw,44px)',
              lineHeight: 1.08,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 18px',
              maxWidth: 700,
              textWrap: 'balance',
            }}
          >
            Protect the device. Protect the conversation. Protect the organization.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 clamp(36px,4vw,52px)',
              maxWidth: 680,
            }}
          >
            ASPIS exists to help organizations communicate and operate securely in environments
            where traditional security boundaries no longer provide sufficient protection.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))',
              gap: 0,
            }}
          >
            {PAGES.approach.map((a) => (
              <div
                key={a.t}
                style={{
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: '26px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  minHeight: 160,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 19,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                  }}
                >
                  {a.t}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {a.d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — what we build */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '.16em',
              color: 'var(--teal)',
              marginBottom: 20,
            }}
          >
            WHAT WE BUILD
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 0,
            }}
          >
            {PRODUCT_NAV.map((p) => (
              <Link
                key={p.key}
                href={p.href}
                className="card-hover"
                style={{
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: '26px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 9,
                  color: 'var(--text-primary)',
                  minHeight: 150,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.14em',
                    color: 'var(--text-label)',
                  }}
                >
                  {p.kicker}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                  }}
                >
                  {p.name}
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-body)' }}>
                  {p.lede}
                </span>
              </Link>
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
              href={ROUTES.leadership}
              className="btn-primary"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Meet the Leadership Team
            </Link>
            <Link
              href={ROUTES.contact}
              className="btn-ghost"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Contact ASPIS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
