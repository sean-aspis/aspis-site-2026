'use client';

import { fileSize, type Doc } from '@/data/documents';
import { useDocumentGate } from './DocumentGate';

/**
 * The featured document's call to action. A button for the same reason the
 * cards are: the PDF has no public URL, so there is no href to give it.
 */
export default function FeaturedDocumentButton({ doc }: { doc: Doc }) {
  const { open, unlocked } = useDocumentGate();

  return (
    <>
      <button
        type="button"
        onClick={() => open(doc)}
        className="btn-primary"
        style={{ fontSize: 15, padding: '14px 26px' }}
      >
        Read the white paper
      </button>
      <span
        style={{
          display: 'block',
          marginTop: 14,
          fontFamily: 'var(--font-mono)',
          fontSize: 10.5,
          letterSpacing: '.1em',
          color: 'var(--text-muted)',
        }}
      >
        PDF · {doc.pages} PAGES · {fileSize(doc.bytes)}
        {!unlocked && ' · NAME, EMAIL, ORGANIZATION AND JOB TITLE REQUIRED'}
      </span>
    </>
  );
}
