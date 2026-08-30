import type { Metadata } from 'next';
import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import DealRegistrationForm from '@/components/forms/DealRegistrationForm';

/**
 * Partner deal registration — design file lines 2177–2338. One section, a
 * direct child of <main>; the design's inline `border-bottom` is dropped.
 *
 * The closing note sits outside the design's `sc-if` on the form, so it stays
 * on the page after the form swaps to its success panel.
 */

export const metadata: Metadata = pageMeta({
  title: 'Deal Registration',
  description:
    'For existing ASPIS partners. Register an opportunity to confirm account protection, align on architecture, and engage ASPIS technical resources.',
  path: ROUTES.dealreg,
});

export default function DealRegistrationPage() {
  return (
    <main id="main">
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
            PARTNER PORTAL
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
            Deal registration
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 clamp(36px,4vw,52px)',
              maxWidth: 700,
            }}
          >
            For existing ASPIS partners. Register an opportunity to confirm account protection,
            align on architecture, and engage ASPIS technical resources. Registrations are reviewed
            by channel operations and confirmed by email.
          </p>

          <ol
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))',
              gap: 0,
              margin: '0 0 clamp(36px,4vw,52px)',
              padding: 0,
              listStyle: 'none',
            }}
          >
            {PAGES.dealSteps.map((s) => (
              <li
                key={s.n}
                style={{
                  border: '1px solid rgba(122,160,255,.14)',
                  margin: '0 -1px -1px 0',
                  padding: '22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10.5,
                    letterSpacing: '.14em',
                    color: 'var(--amber)',
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    fontWeight: 600,
                    letterSpacing: '-.01em',
                  }}
                >
                  {s.t}
                </span>
                <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-muted)' }}>
                  {s.d}
                </span>
              </li>
            ))}
          </ol>

          <DealRegistrationForm />

          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.6,
              color: 'var(--text-dim)',
              margin: '26px 0 0',
              maxWidth: 720,
            }}
          >
            Not yet a partner?{' '}
            <Link href={ROUTES.partners} className="lnk-inline" style={{ color: 'var(--amber)' }}>
              Apply to the ASPIS partner program
            </Link>
            . Existing partners can also reach channel operations through the contact page.
          </p>
        </div>
      </section>
    </main>
  );
}
