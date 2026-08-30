import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import { ChapterHeader } from '@/components/ui/Primitives';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DocumentCard from '@/components/ui/DocumentCard';
import { docsForCategory, type DocCategory } from '@/data/documents';

/**
 * Resource categories previously all resolved to /resources, so five distinct
 * nav labels led to one page. Each now has its own route, and each lists the
 * real documents filed under it (src/data/documents.ts).
 *
 * Two categories — threat research and deployment guides — have no published
 * document yet. They say so plainly and point at what does exist rather than
 * inventing a listing.
 */
const CATEGORIES = {
  'white-papers': {
    name: 'White Papers',
    accent: 'var(--cyan)',
    lede: 'Technical and strategic guidance for CISOs, security architects, compliance leaders, and government security professionals.',
  },
  'solution-briefs': {
    name: 'Solution Briefs',
    accent: 'var(--blue)',
    lede: 'Industry use cases: the threat picture a sector actually faces, and what the platform does about it.',
  },
  'threat-research': {
    name: 'Threat Research',
    accent: 'var(--coral)',
    lede: 'Emerging threats affecting enterprise mobility and secure communications.',
  },
  'deployment-guides': {
    name: 'Deployment Guides',
    accent: 'var(--teal)',
    lede: 'Onboarding, identity integration, provisioning, validation, hardening, and administrator enablement.',
  },
  compliance: {
    name: 'Compliance Resources',
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
  const n = docsForCategory(category as DocCategory).length;
  return pageMeta({
    title: c.name,
    description: n ? `${n} published ASPIS documents. ${c.lede}` : c.lede,
    path: `/resources/${category}`,
  });
}

export default async function ResourceCategory({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isCategory(category)) notFound();
  const c = CATEGORIES[category];
  const docs = docsForCategory(category as DocCategory);

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
            eyebrow={docs.length ? `${docs.length} AVAILABLE` : 'NONE PUBLISHED YET'}
            accent={c.accent}
            caption={c.name.toUpperCase()}
          />

          {docs.length > 0 ? (
            <div className="doc-grid" style={{ marginBottom: 'clamp(32px,3.6vw,50px)' }}>
              {docs.map((d) => (
                <DocumentCard key={d.slug} doc={d} />
              ))}
            </div>
          ) : (
            <div
              style={{
                border: '1px solid var(--line)',
                background: 'rgba(16,23,51,.35)',
                padding: 'clamp(26px,3vw,40px)',
                maxWidth: 760,
                marginBottom: 'clamp(28px,3vw,40px)',
              }}
            >
              <p className="lede" style={{ marginBottom: 14 }}>
                Nothing is published under {c.name.toLowerCase()} yet.
              </p>
              <p className="body">
                Rather than list material that does not exist, this page stays empty until it does.
                The published library — {docsForCategory('white-papers').length} white papers and{' '}
                {docsForCategory('solution-briefs').length} industry use cases — is available now.
              </p>
            </div>
          )}

          <div
            style={{
              border: '1px solid var(--line)',
              background: 'rgba(16,23,51,.35)',
              padding: 'clamp(24px,2.6vw,36px)',
              maxWidth: 760,
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
              REQUEST SOMETHING SPECIFIC
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
