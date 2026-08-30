import Link from 'next/link';
import { ROUTES } from '@/data/nav';
import { docsForSolution } from '@/data/documents';
import DocumentCard from '@/components/ui/DocumentCard';
import { SECTION_H2 } from './styles';

/**
 * The published ASPIS documents that cover this industry. Real PDFs from
 * /public/documents — see src/data/documents.ts. Renders nothing when the
 * industry has no document filed against it rather than showing an empty rail.
 */
export default function SolutionDocuments({ solutionKey }: { solutionKey: string }) {
  const docs = docsForSolution(solutionKey);
  if (!docs.length) return null;

  return (
    <section>
      <div className="container pad-standard">
        <div className="eyebrow" style={{ color: 'var(--accent-text, var(--accent))', marginBottom: 20 }}>
          GO DEEPER
        </div>
        <h2 style={{ ...SECTION_H2, margin: '0 0 18px', maxWidth: 700 }}>
          {docs.length === 1 ? 'The document behind this page.' : 'The documents behind this page.'}
        </h2>
        <p className="lede" style={{ maxWidth: 640, margin: '0 0 clamp(28px,3.2vw,42px)' }}>
          Published ASPIS material, free and without registration.
        </p>

        <div className="doc-grid">
          {docs.map((d) => (
            <DocumentCard key={d.slug} doc={d} compact />
          ))}
        </div>

        <p style={{ marginTop: 22 }}>
          <Link href={ROUTES.resources} className="crumb">
            ALL RESOURCES →
          </Link>
        </p>
      </div>
    </section>
  );
}
