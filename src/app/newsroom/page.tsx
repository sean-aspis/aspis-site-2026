import Link from 'next/link';
import type { Metadata } from 'next';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = pageMeta({
  title: 'Newsroom',
  description: 'ASPIS Cyber announcements, company news, and media contact.',
  path: '/newsroom',
});

/**
 * The Newsroom label previously resolved to /resources. It now has its own
 * route. There are no announcements in the design file, so the page says so
 * rather than carrying invented press releases or dates.
 */
export default function Newsroom() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--periwinkle)' } as React.CSSProperties}>
      <section>
        <div className="container pad-chapter">
          <Breadcrumbs trail={[{ name: 'Company', href: ROUTES.about }, { name: 'Newsroom' }]} />
          <div className="eyebrow" style={{ color: 'var(--periwinkle)', marginBottom: 20 }}>
            NEWSROOM
          </div>
          <h1 className="h1" style={{ maxWidth: 900, marginBottom: 22 }}>
            ASPIS announcements and company news.
          </h1>
          <p className="lede" style={{ maxWidth: 680 }}>
            Product releases, platform milestones, partnerships, and research publications.
          </p>
        </div>
      </section>

      <section>
        <div className="container pad-standard">
          <div
            style={{
              border: '1px solid var(--line)',
              background: 'rgba(16,23,51,.35)',
              padding: 'clamp(24px,2.6vw,36px)',
              maxWidth: 720,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--text-muted)',
                marginBottom: 12,
              }}
            >
              NO ANNOUNCEMENTS PUBLISHED YET
            </div>
            <p className="body" style={{ marginBottom: 20 }}>
              Announcements will be posted here as they are released. For media enquiries,
              analyst briefings, or interview requests, contact ASPIS directly.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href={ROUTES.contact} className="btn-ghost">
                Media enquiries
              </Link>
              <Link href={ROUTES.resources} className="btn-ghost">
                Resource Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
