import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import { DOCUMENTS } from '@/data/documents';
import DocumentCard from '@/components/ui/DocumentCard';
import FeaturedDocumentButton from '@/components/documents/FeaturedDocumentButton';
import { ChapterHeader } from '@/components/ui/Primitives';

/**
 * Resources — design file lines 1798–1853, now backed by a real library.
 *
 * The design file had no CMS and no documents: it carried a placeholder
 * featured paper whose only action was "Request the paper". Nine published
 * ASPIS PDFs were supplied on 30 Aug 2026 and are served from
 * /public/documents; every card below points at a file that exists, with its
 * measured page count and file size. See src/data/documents.ts.
 */

const LEDE =
  'Technical depth and enterprise credibility, organized by what security, compliance, and procurement teams actually need to evaluate.';

const CATEGORY_LINKS = [
  { name: 'White Papers', href: ROUTES.whitePapers, accent: 'var(--cyan)' },
  { name: 'Solution Briefs', href: ROUTES.solutionBriefs, accent: 'var(--blue)' },
  { name: 'Compliance', href: ROUTES.complianceResources, accent: 'var(--amber)' },
  { name: 'Threat Research', href: ROUTES.threatResearch, accent: 'var(--coral)' },
  { name: 'Deployment Guides', href: ROUTES.deploymentGuides, accent: 'var(--teal)' },
];

export const metadata = pageMeta({
  title: 'Resources',
  description: `${DOCUMENTS.length} published ASPIS white papers and industry use cases covering secure communications, mobile threat defense, governance and deployment.`,
  path: ROUTES.resources,
});

const featured = DOCUMENTS[0];
const rest = DOCUMENTS.slice(1);
const totalPages = DOCUMENTS.reduce((n, d) => n + d.pages, 0);

export default function ResourcesPage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--amber)' } as React.CSSProperties}>
      {/* 1 — hero + library index */}
      <section>
        <div className="container pad-chapter">
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 22 }}>
            RESOURCES
          </div>
          <h1 className="h1" style={{ maxWidth: 860, marginBottom: 20 }}>
            Security intelligence for the mobile enterprise.
          </h1>
          <p className="lede" style={{ maxWidth: 680, marginBottom: 30 }}>
            {LEDE}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.14em',
              color: 'var(--text-muted)',
              margin: '0 0 clamp(30px,3.4vw,44px)',
            }}
          >
            {DOCUMENTS.length} DOCUMENTS · {totalPages} PAGES · FREE, WITH YOUR DETAILS
          </p>

          <nav aria-label="Resource categories" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {CATEGORY_LINKS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="btn-ghost"
                style={{ fontSize: 13.5, padding: '11px 18px' }}
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* 2 — featured document */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="01 / FEATURED" accent="var(--amber)" caption="MOST DETAILED" />
          <span id="featured" style={{ display: 'block' }} />
          <div className="doc-featured">
            <div className="doc-featured-body">
              <span
                className="doc-kind"
                style={{ color: featured.accent, display: 'block', marginBottom: 14 }}
              >
                {featured.kind}
              </span>
              <h2
                className="h2"
                style={{ maxWidth: 640, marginBottom: 16, fontSize: 'clamp(26px,3vw,42px)' }}
              >
                {featured.title}
              </h2>
              <p className="lede" style={{ maxWidth: 620, marginBottom: 18 }}>
                {featured.subtitle}
              </p>
              <p className="body" style={{ maxWidth: 620, marginBottom: 22 }}>
                {featured.summary}
              </p>
              <div className="doc-topics" style={{ marginBottom: 26 }}>
                {featured.topics.map((t) => (
                  <span key={t} className="doc-topic">
                    {t}
                  </span>
                ))}
              </div>
              <FeaturedDocumentButton doc={featured} />
            </div>
          </div>
        </div>
      </section>

      {/* 3 — the rest of the library */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="02 / THE LIBRARY" accent="var(--cyan)" caption="ALL DOCUMENTS" />
          <div className="doc-grid">
            {rest.map((d) => (
              <DocumentCard key={d.slug} doc={d} />
            ))}
          </div>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: 'var(--text-faint)',
              margin: '26px 0 0',
              maxWidth: 720,
            }}
          >
            Additional material — including deployment guides and threat research — is published as
            it clears technical and legal review. Some documents are provided under NDA or to
            qualified enterprise and government evaluators.
          </p>
        </div>
      </section>

      {/* 4 — resource types + topics (design file) */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader eyebrow="03 / WHAT WE PUBLISH" accent="var(--violet)" caption="BY TYPE" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
              gap: 0,
            }}
          >
            {PAGES.resourceTypes.map((r) => (
              <div
                key={r.t}
                className="tile-hover"
                style={{
                  border: '1px solid var(--line)',
                  margin: '0 -1px -1px 0',
                  padding: 'clamp(26px,2.6vw,34px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
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
                  {r.t}
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {r.d}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'clamp(32px,3.6vw,48px)' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--text-dim)',
                marginBottom: 16,
              }}
            >
              FEATURED TOPICS
            </div>
            <div className="doc-topics">
              {PAGES.resourceTopics.map((t) => (
                <span key={t} className="doc-topic">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — CTA */}
      <section>
        <div className="container pad-standard">
          <h2 className="h2" style={{ maxWidth: 700, marginBottom: 16 }}>
            Need something that isn&rsquo;t here?
          </h2>
          <p className="lede" style={{ maxWidth: 620, marginBottom: 28 }}>
            Architecture documentation, deployment detail and compliance mapping are available to
            teams running an evaluation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href={ROUTES.contact} className="btn-primary" style={{ fontSize: 15, padding: '14px 26px' }}>
              Request a document
            </Link>
            <Link href={ROUTES.platform} className="btn-ghost" style={{ fontSize: 15, padding: '14px 26px' }}>
              Explore the platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
