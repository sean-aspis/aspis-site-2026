import type { Metadata } from 'next';
import { PAGES } from '@/data/pages';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import DemoForm from '@/components/forms/DemoForm';

/**
 * Contact — design file lines 2019–2078.
 *
 * Two sections, both direct children of <main>. The form is the only client
 * leaf on the route; everything around it is a server component. The design's
 * inline `border-bottom` on both sections is dropped — the nth-of-type(n+2)
 * rule in globals.css already draws the hairline.
 */

export const metadata: Metadata = pageMeta({
  title: 'Contact',
  description:
    'Talk to ASPIS about secure enterprise communications, mobile threat defense, regulated communications, executive protection, communications intelligence, or a high-assurance government deployment.',
  path: ROUTES.contact,
});

export default function ContactPage() {
  return (
    <main id="main">
      {/* 1 — hero and the routing grid */}
      <section>
        <div className="container pad-standard">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--coral)',
              marginBottom: 24,
            }}
          >
            CONTACT
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 860,
              textWrap: 'balance',
            }}
          >
            Let&rsquo;s secure what your organization depends on.
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
            Whether you are evaluating secure enterprise communications, mobile threat defense,
            regulated communications, executive protection, communications intelligence, or a
            high-assurance government deployment, our team can help determine the right architecture
            for your environment.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))',
              gap: 0,
            }}
          >
            {PAGES.contactRoutes.map((c) => (
              <div
                key={c.t}
                style={{
                  border: '1px solid rgba(122,160,255,.14)',
                  margin: '0 -1px -1px 0',
                  padding: '26px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  minHeight: 180,
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
                  {c.t}
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {c.d}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.1em',
                    color: 'var(--coral)',
                    marginTop: 'auto',
                  }}
                >
                  {c.cta} →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — demo request */}
      <section>
        <div
          className="container pad-standard"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
            gap: 'clamp(32px,5vw,64px)',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px,3vw,44px)',
                lineHeight: 1.08,
                letterSpacing: '-.03em',
                fontWeight: 700,
                margin: '0 0 18px',
                maxWidth: 460,
                textWrap: 'balance',
              }}
            >
              Request a demo
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.62,
                color: 'var(--text-body)',
                margin: '0 0 20px',
                maxWidth: 460,
              }}
            >
              Tell us about your security requirements and an ASPIS specialist will help determine
              the appropriate product and deployment architecture.
            </p>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.6,
                color: 'var(--text-dim)',
                margin: 0,
                maxWidth: 460,
              }}
            >
              ASPIS engages commercially through consultation. There is no public pricing,
              self-service checkout, or trial signup.
            </p>
          </div>

          <DemoForm />
        </div>
      </section>
    </main>
  );
}
