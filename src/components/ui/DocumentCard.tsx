import { type Doc, fileSize } from '@/data/documents';
import { rgba, readableAccent } from '@/lib/theme';

/**
 * One downloadable document.
 *
 * The whole card is an anchor to the PDF. `download` is deliberately absent —
 * these are readable in-browser and forcing a save is worse for evaluation —
 * but `type` and the visible size/page metadata tell the reader exactly what
 * they are opening before they open it.
 */
export default function DocumentCard({ doc, compact = false }: { doc: Doc; compact?: boolean }) {
  return (
    <a
      href={doc.file}
      target="_blank"
      rel="noopener noreferrer"
      type="application/pdf"
      className="doc-card card-hover"
      style={{
        borderTop: `2px solid ${doc.accent}`,
        // The card's rules and top edge use the document's own colour; its
        // small mono text uses the AA-safe variant of it.
        ['--doc-accent' as string]: doc.accent,
        ['--doc-accent-text' as string]: readableAccent(doc.accent, '#0a0f1e'),
        ['--doc-wash' as string]: rgba(doc.accent, 0.09),
      }}
    >
      <span className="doc-kind" style={{ color: readableAccent(doc.accent, '#0a0f1e') }}>
        {doc.kind}
      </span>

      <span className="doc-title">{doc.title}</span>
      <span className="doc-sub">{doc.subtitle}</span>

      {!compact && <span className="doc-summary">{doc.summary}</span>}

      {!compact && (
        <span className="doc-topics">
          {doc.topics.map((t) => (
            <span key={t} className="doc-topic">
              {t}
            </span>
          ))}
        </span>
      )}

      <span className="doc-foot">
        <span className="doc-meta">
          PDF · {doc.pages} {doc.pages === 1 ? 'PAGE' : 'PAGES'} · {fileSize(doc.bytes)}
        </span>
        <span className="doc-action" aria-hidden>
          READ →
        </span>
      </span>
    </a>
  );
}
