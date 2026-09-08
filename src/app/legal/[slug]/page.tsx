import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import LegalDocument from '@/components/legal/LegalDocument';
import { LEGAL_DOCS, LEGAL_SLUGS } from '@/data/legal';

/**
 * The legal documents other than the privacy policy, which has its own
 * published address at /privacy-policy (the URL given to the app stores);
 * /legal/privacy-policy redirects there in next.config.ts.
 *
 * A published policy is INDEXABLE. A real policy is a document people and
 * regulators are entitled to locate, so only a still-pending placeholder stays
 * hidden.
 */

const SLUGS = LEGAL_SLUGS.filter((slug) => slug !== 'privacy-policy');

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  if (!doc) return {};
  return {
    ...pageMeta({ title: doc.title, description: doc.blurb, path: `/legal/${slug}` }),
    robots: doc.pending ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  if (!doc || !SLUGS.includes(slug)) notFound();
  return <LegalDocument doc={doc} />;
}
