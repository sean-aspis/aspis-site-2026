import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * Platform overview — Protect / Govern / Understand.
 *
 * Five sections, all direct children of <main>: surfaces and hairlines come
 * from the three nth-of-type rules in globals.css. The design file carries an
 * inline `background:linear-gradient(180deg,#0E1524,#05070E)` on the products
 * band and an inline `border-bottom` on most sections; both are dropped here —
 * the shorthand would reset background-color and defeat the alternation, and
 * the inline border doubles the hairline against the nth-of-type(n+2) rule.
 */

export const metadata: Metadata = pageMeta({
  title: 'Platform',
  description:
    'One architecture for secure, compliant communications. The ASPIS platform connects protection at the user, device, and conversation; centralized control of policy and administration; and the compliance record of what actually happened.',
  path: ROUTES.platform,
});

/** The design's nav() handlers become hrefs: domains and products both open products. */
const openHref = (o: { page: string; key: string | null }) =>
  o.page === 'product' && o.key ? `/products/${o.key}` : ROUTES.platform;

export default function PlatformPage() {
  return (
    <main id="main">
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
            maskImage: 'radial-gradient(ellipse 70% 60% at 40% 40%,#000 30%,transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 40% 40%,#000 30%,transparent 80%)',
          }}
        />
        <div className="container pad-standard" style={{ position: 'relative' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--cyan)',
              marginBottom: 26,
            }}
          >
            PLATFORM
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(38px,4.8vw,68px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 24px',
              maxWidth: 900,
              textWrap: 'balance',
            }}
          >
            One architecture for secure, compliant communications.
          </h1>
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: '0 0 36px',
              maxWidth: 660,
            }}
          >
            The ASPIS platform connects three security domains: protection at the user, device, and
            conversation; centralized control of policy and administration; and the compliance record
            of what actually happened.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href={ROUTES.contact} className="btn-primary" style={{ fontSize: 15, padding: '15px 28px' }}>
              Request a Demo
            </Link>
            <Link href={ROUTES.home} className="btn-ghost" style={{ fontSize: 15, padding: '15px 28px' }}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — the three domains, then the layer stack */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
              gap: 'clamp(20px,2vw,26px)',
              marginBottom: 'clamp(36px,4vw,56px)',
            }}
          >
            {SITE.domains.map((d) => (
              <div
                key={d.name}
                style={{
                  border: '1px solid rgba(122,160,255,.18)',
                  background: 'rgba(10,15,30,.6)',
                  padding: 'clamp(26px,2.6vw,38px)',
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
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              border: '1px solid rgba(122,160,255,.16)',
              background: 'rgba(7,11,24,.8)',
              padding: 'clamp(24px,3vw,40px)',
            }}
          >
            {SITE.stack.map((s) => (
              <div
                key={s.layer}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))',
                  gap: 12,
                  alignItems: 'center',
                  padding: '18px 0',
                  borderBottom: '1px solid var(--hairline)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.16em',
                    color: 'var(--text-dim)',
                  }}
                >
                  {s.layer}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: '-.015em',
                  }}
                >
                  {s.name}
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-body)' }}>
                  {s.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — mission profiles */}
      <section>
        <div className="container pad-standard">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,3.2vw,46px)',
              lineHeight: 1.07,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 16px',
              maxWidth: 640,
              textWrap: 'balance',
            }}
          >
            One foundation. Multiple mission profiles.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: '0 0 clamp(36px,4vw,52px)',
              maxWidth: 620,
            }}
          >
            Product capabilities and deployment options vary by edition and customer architecture.
          </p>
          {/*
            Collapsed-border tile grid: each cell pulls a pixel of margin so
            adjacent borders overlap. The design's hover is a background tint
            (`background:rgba(16,23,51,.7)`); there is no shared class for that
            yet and `.card-hover` is wrong here — its border-color is beaten by
            the inline accent top edge and its lift breaks the collapsed grid.
            Left un-hovered pending a `.tile-hover` rule in globals.css.
          */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 0,
            }}
          >
            {SITE.products.map((p) => (
              <Link
                key={p.name}
                href={openHref(p.open)}
                style={{
                  border: '1px solid rgba(122,160,255,.16)',
                  borderTop: `2px solid ${p.accent}`,
                  margin: '0 -1px -1px 0',
                  padding: 'clamp(26px,2.6vw,36px)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.14em',
                    color: 'var(--text-dim)',
                  }}
                >
                  {p.tag}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 21,
                    fontWeight: 700,
                    letterSpacing: '-.02em',
                  }}
                >
                  {p.name}
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.58, color: 'var(--text-body)' }}>
                  {p.short}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '.1em',
                    color: 'var(--cyan)',
                    marginTop: 'auto',
                    paddingTop: 10,
                  }}
                >
                  EXPLORE →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — the questions each layer answers */}
      <section>
        <div className="container pad-standard">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,3.2vw,46px)',
              lineHeight: 1.07,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 16px',
              maxWidth: 680,
              textWrap: 'balance',
            }}
          >
            Secure messaging protects information in transit.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: '0 0 clamp(36px,5vw,56px)',
              maxWidth: 620,
            }}
          >
            ShieldiT is designed to protect the broader environment surrounding that communication.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {SITE.questions.map((q) => (
              <div
                key={q.layer}
                style={{
                  flex: '1 1 230px',
                  minWidth: 230,
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: '26px 22px',
                  minHeight: 150,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.14em',
                    color: 'var(--cyan)',
                  }}
                >
                  {q.layer}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    lineHeight: 1.35,
                    fontWeight: 600,
                    letterSpacing: '-.01em',
                  }}
                >
                  {q.q}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CTA */}
      <section>
        <div className="container pad-standard" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,3.6vw,54px)',
              lineHeight: 1.06,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 30px',
              textWrap: 'balance',
            }}
          >
            Find the ShieldiT architecture for your mission.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Link href={ROUTES.contact} className="btn-primary" style={{ fontSize: 15.5, padding: '16px 30px' }}>
              Request a Demo
            </Link>
            <Link href={ROUTES.contact} className="btn-ghost" style={{ fontSize: 15.5, padding: '16px 30px' }}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
