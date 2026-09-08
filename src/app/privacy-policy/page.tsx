import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import LegalDocument from '@/components/legal/LegalDocument';
import { LEGAL_DOCS } from '@/data/legal';

/**
 * The privacy policy's published address. App store listings and the ShieldiT
 * apps point here, so this URL must stay stable. Content and sourcing rules are
 * in data/legal.ts.
 */

const doc = LEGAL_DOCS['privacy-policy'];

export const metadata: Metadata = {
  ...pageMeta({ title: doc.title, description: doc.blurb, path: '/privacy-policy' }),
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={doc} />;
}
