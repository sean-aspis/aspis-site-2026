import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';

/**
 * The design file ships no legal copy — these routes exist so the footer's
 * Legal column resolves instead of 404-ing. Each page states plainly that the
 * document is not yet published rather than presenting invented policy text.
 * Replace the body of each entry with the reviewed document when it lands.
 */
const LEGAL: Record<string, { title: string; blurb: string }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    blurb:
      'The ASPIS privacy policy describing what personal information is collected through this website, how it is used, and the choices available to you.',
  },
  'terms-of-use': {
    title: 'Terms of Use',
    blurb: 'The terms governing use of this website and the material published on it.',
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    blurb:
      'How this website uses cookies and similar technologies, and how to control them in your browser.',
  },
  accessibility: {
    title: 'Accessibility',
    blurb:
      'The ASPIS approach to digital accessibility, the standard this site is measured against, and how to report a barrier.',
  },
};

export function generateStaticParams() {
  return Object.keys(LEGAL).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = LEGAL[slug];
  if (!entry) return {};
  return {
    ...pageMeta({ title: entry.title, description: entry.blurb, path: `/legal/${slug}` }),
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = LEGAL[slug];
  if (!entry) notFound();

  return (
    <main id="main">
      <section className="pad-chapter">
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '.18em',
              color: 'var(--text-dim)',
              marginBottom: 18,
            }}
          >
            LEGAL
          </div>
          <h1 className="h1" style={{ marginBottom: 20 }}>
            {entry.title}
          </h1>
          <p className="lede" style={{ marginBottom: 28 }}>
            {entry.blurb}
          </p>
          <div
            style={{
              border: '1px solid var(--line)',
              background: 'rgba(16,23,51,.45)',
              padding: 'clamp(22px,2.4vw,32px)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '.16em',
                color: 'var(--amber)',
                marginBottom: 12,
              }}
            >
              NOT YET PUBLISHED
            </div>
            <p className="body" style={{ marginBottom: 18 }}>
              This document has not been published yet. For questions about {entry.title.toLowerCase()}{' '}
              in the meantime, contact ASPIS directly and the request will be routed to the
              appropriate team.
            </p>
            <Link href={ROUTES.contact} className="btn-ghost">
              Contact ASPIS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
