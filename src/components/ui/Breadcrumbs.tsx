import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';

export type Crumb = { name: string; href?: string };

/**
 * Wayfinding for the deep templates. A visitor arriving on
 * /solutions/healthcare from search has no way back up to the index and no
 * sense of where they are in a 39-page site; the trigger highlight in the
 * header only shows the group.
 *
 * Emits BreadcrumbList structured data alongside the visible trail so the
 * hierarchy shows in search results too.
 */
export default function Breadcrumbs({ trail, span }: { trail: Crumb[]; span?: boolean }) {
  const items = [{ name: 'Home', href: '/' }, ...trail];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.name,
              ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
            })),
          }),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        style={{
          marginBottom: 'clamp(20px,2.4vw,30px)',
          position: 'relative',
          zIndex: 1,
          ...(span ? { gridColumn: '1 / -1' } : {}),
        }}
      >
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '4px 8px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: 10.5,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
          }}
        >
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '4px 8px' }}>
                {i > 0 && (
                  <span aria-hidden style={{ color: 'var(--text-faint)' }}>
                    /
                  </span>
                )}
                {last || !c.href ? (
                  <span aria-current="page" style={{ color: 'var(--text-bright)' }}>
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="crumb">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
