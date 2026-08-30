import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PAGES } from '@/data/pages';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import { ChapterHeader } from '@/components/ui/Primitives';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

/**
 * Resource categories previously all resolved to /resources, so five distinct
 * nav labels led to one page. Each now has its own route.
 *
 * A category lists the real items the design file carries for it and says
 * plainly when more is coming. No documents, dates or research are invented.
 */
const CATEGORIES = {
  'white-papers': {
    name: 'White Papers',
    kind: 'WHITE PAPER',
    accent: 'var(--cyan)',
    lede: 'Technical and strategic guidance for CISOs, security architects, compliance leaders, and government security professionals.',
  },
  'solution-briefs': {
    name: 'Solution Briefs',
    kind: 'SOLUTION BRIEF',
    accent: 'var(--blue)',
    lede: 'Organized by product and mission: Enterprise, FSX, Defense, Executive, ManageiT, SentinelIQ.',
  },
  'threat-research': {
    name: 'Threat Research',
    kind: 'THREAT RESEARCH',
    accent: 'var(--coral)',
    lede: 'Emerging threats affecting enterprise mobility and secure communications.',
  },
  'deployment-guides': {
    name: 'Deployment Guides',
    kind: 'DEPLOYMENT GUIDE',
    accent: 'var(--teal)',
    lede: 'Onboarding, identity integration, provisioning, validation, hardening, and administrator enablement.',
  },
  compliance: {
    name: 'Compliance Resources',
    kind: 'COMPLIANCE',
    accent: 'var(--amber)',
    lede: 'How ASPIS capabilities support customer programs across regulated frameworks.',
  },
} as const;

type Category = keyof typeof CATEGORIES;
const isCategory = (k: string): k is Category => k in CATEGORIES;

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const c = CATEGORIES[category];
  return pageMeta({ title: c.name, description: c.lede, path: `/resources/${category}` });
}

export default async function ResourceCategory({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isCategory(category)) notFound();
  const c = CATEGORIES[category];
  const items = PAGES.resourceItems.filter((i) => i.kind === c.kind);

  return (
    <main id="main" style={{ ['--ghost-hover' as string]: c.accent } as React.CSSProperties}>
      <section>
        <div className="container pad-chapter">
          <Breadcrumbs trail={[{ name: 'Resources', href: ROUTES.resources }, { name: c.name }]} />
          <div className="eyebrow" style={{ color: c.accent, marginBottom: 20 }}>
            RESOURCE CENTER
          </div>
          <h1 className="h1" style={{ maxWidth: 900, marginBottom: 22 }}>
            {c.name}
          </h1>
          <p className="lede" style={{ maxWidth: 680 }}>
            {c.lede}
          </p>
        </div>
      </section>

      <section>
        <div className="container pad-standard">
          <ChapterHeader
            eyebrow={`${items.length} AVAILABLE`}
            accent={c.accent}
            caption={c.name.toUpperCase()}
          />

          {items.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
                gap: 'clamp(16px,1.8vw,22px)',
                marginBottom: 'clamp(36px,4vw,56px)',
              }}
            >
              {items.map((i) => (
                <article
                  key={i.t}
                  className="card-hover"
                  style={{
                    border: '1px solid var(--line)',
                    borderTop: `2px solid ${i.c}`,
                    background: 'rgba(16,23,51,.45)',
                    padding: 'clamp(22px,2.2vw,30px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '.16em',
                      color: i.c,
                    }}
                  >
                    {i.kind}
                  </span>
                  <h2 className="h3" style={{ fontSize: 19 }}>
                    {i.t}
                  </h2>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10.5,
                      color: 'var(--text-muted)',
                      marginTop: 'auto',
                    }}
                  >
                    {i.meta}
                  </span>
                </article>
              ))}
            </div>
          )}

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
              MORE {c.name.toUpperCase()} COMING SOON
            </div>
            <p className="body" style={{ marginBottom: 20 }}>
              ASPIS publishes new material as it clears technical and legal review. To be notified,
              or to request a specific document for an evaluation, contact the team directly.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href={ROUTES.contact} className="btn-ghost">
                Request a document
              </Link>
              <Link href={ROUTES.resources} className="btn-ghost">
                All resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
