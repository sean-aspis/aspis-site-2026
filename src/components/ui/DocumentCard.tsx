'use client';

import { type Doc, fileSize } from '@/data/documents';
import { rgba, readableAccent } from '@/lib/theme';
import { useDocumentGate } from '@/components/documents/DocumentGate';

/**
 * One gated document.
 *
 * A button rather than an anchor: there is no URL to put in an href — the PDFs
 * are not public, and the route that serves them requires the access cookie.
 * Clicking opens the gate, or goes straight to the document if this visitor has
 * already been through it.
 *
 * The card says so before the click ("Requires your details"), so nobody is
 * surprised by a form appearing.
 */
export default function DocumentCard({ doc, compact = false }: { doc: Doc; compact?: boolean }) {
  const { open, unlocked } = useDocumentGate();

  return (
    <button
      type="button"
      onClick={() => open(doc)}
      className="doc-card card-hover"
      style={{
        borderTop: `2px solid ${doc.accent}`,
        // The card's rules and top edge use the document's own color; its
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
          {!unlocked && ' · REQUIRES YOUR DETAILS'}
        </span>
        <span className="doc-action" aria-hidden>
          READ →
        </span>
      </span>
    </button>
  );
}
