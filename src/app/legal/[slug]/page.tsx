import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { LEGAL_DOCS, LEGAL_SLUGS, type LegalBlock, type LegalDoc } from '@/data/legal';

/**
 * The legal templates. Content lives in data/legal.ts, including the sourcing
 * rules that govern what may be asserted in it.
 *
 * Two things worth knowing about this page:
 *
 * 1. A published policy is INDEXABLE. These routes used to be noindex, which
 *    made sense while they carried a "not yet published" placeholder — there was
 *    nothing to find. A real privacy policy is a document people and regulators
 *    are entitled to locate, so a document with content is indexed and only a
 *    still-pending one stays hidden.
 *
 * 2. Measure is capped at ~72 characters. These are long documents read in one
 *    pass rather than scanned, and the site's default container is far wider
 *    than is comfortable for that.
 */

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
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

const MEASURE = 760;

function Block({ block }: { block: LegalBlock }) {
  if ('p' in block) {
    return (
      <p className="body" style={{ marginBottom: 16, maxWidth: MEASURE }}>
        {block.p}
      </p>
    );
  }

  if ('list' in block) {
    return (
      <ul
        style={{
          margin: '0 0 18px',
          paddingLeft: 20,
          maxWidth: MEASURE,
          display: 'flex',
          flexDirection: 'column',
          gap: 9,
        }}
      >
        {block.list.map((item) => (
          <li key={item} className="body" style={{ paddingLeft: 2 }}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if ('defs' in block) {
    return (
      <dl style={{ margin: '0 0 18px', maxWidth: MEASURE }}>
        {block.defs.map((d) => (
          <div
            key={d.t}
            style={{
              borderLeft: '2px solid var(--line-strong)',
              paddingLeft: 16,
              marginBottom: 16,
            }}
          >
            <dt
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: '-.01em',
                color: 'var(--text-bright)',
                marginBottom: 5,
              }}
            >
              {d.t}
            </dt>
            <dd className="body" style={{ margin: 0 }}>
              {d.d}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  if ('links' in block) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, margin: '4px 0 20px' }}>
        {block.links.map((l) => (
          <Link key={l.href} href={l.href} className="btn-ghost" style={{ fontSize: 13.5 }}>
            {l.label}
          </Link>
        ))}
      </div>
    );
  }

  // A cookie table is genuinely tabular data, so it is a real <table> with real
  // headers rather than a grid of divs. It scrolls inside its own container so
  // the page body never scrolls sideways on a phone.
  return (
    // A horizontally scrolling region has to be reachable by keyboard, or a
    // keyboard-only user cannot see the columns that sit off-screen — axe flags
    // this as scrollable-region-focusable and it is a real WCAG 2.1.1 failure at
    // phone widths. tabIndex makes it focusable; role and aria-label give it a
    // name so a screen reader announces what is being scrolled.
    <div
      className="console-scroll"
      style={{ overflowX: 'auto', margin: '0 0 20px' }}
      tabIndex={0}
      role="region"
      aria-label={block.table.label}
    >
      <table
        style={{
          borderCollapse: 'collapse',
          fontSize: 13.5,
          lineHeight: 1.6,
          minWidth: 520,
          width: '100%',
        }}
      >
        <thead>
          <tr>
            {block.table.head.map((h) => (
              <th
                key={h}
                scope="col"
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '.14em',
                  color: 'var(--text-muted)',
                  fontWeight: 400,
                  padding: '0 16px 10px 0',
                  borderBottom: '1px solid var(--line-strong)',
                  whiteSpace: 'nowrap',
                }}
              >
                {h.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  style={{
                    padding: '14px 16px 14px 0',
                    borderBottom: '1px solid var(--line)',
                    color: i === 0 ? 'var(--text-bright)' : 'var(--text-body)',
                    fontFamily: i === 0 ? 'var(--font-mono)' : 'inherit',
                    fontSize: i === 0 ? 12 : 13.5,
                    verticalAlign: 'top',
                    minWidth: i === 0 ? 150 : undefined,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Published({ doc }: { doc: LegalDoc }) {
  return (
    <>
      {/* Contents. These documents run to fifteen sections; a reader looking for
          one clause should not have to scroll for it. */}
      <nav
        aria-label={`${doc.title} contents`}
        style={{
          border: '1px solid var(--line)',
          background: 'rgba(16,23,51,.35)',
          padding: 'clamp(18px,2vw,26px)',
          marginBottom: 'clamp(34px,3.4vw,48px)',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 14 }}>
          CONTENTS
        </div>
        <ol
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))',
            gap: '2px 28px',
          }}
        >
          {doc.sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="lnk-soft"
                style={{
                  display: 'block',
                  padding: '6px 0',
                  minHeight: 24,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: 'var(--text-body)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--text-faint)',
                    marginRight: 8,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.h}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {doc.sections.map((s, i) => (
        <section key={s.id} id={s.id} style={{ scrollMarginTop: 120, marginBottom: 'clamp(32px,3vw,44px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px,2vw,25px)',
              fontWeight: 700,
              letterSpacing: '-.02em',
              lineHeight: 1.2,
              margin: '0 0 16px',
              maxWidth: MEASURE,
              display: 'flex',
              gap: 12,
              alignItems: 'baseline',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                fontWeight: 400,
                color: 'var(--text-faint)',
                flex: '0 0 auto',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            {s.h}
          </h2>
          {s.blocks.map((b, j) => (
            <Block key={j} block={b} />
          ))}
        </section>
      ))}
    </>
  );
}

function Pending({ doc }: { doc: LegalDoc }) {
  return (
    <div
      style={{
        border: '1px solid var(--line)',
        background: 'rgba(16,23,51,.45)',
        padding: 'clamp(22px,2.4vw,32px)',
        maxWidth: MEASURE,
      }}
    >
      <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>
        NOT YET PUBLISHED
      </div>
      <p className="body" style={{ marginBottom: 18 }}>
        This document has not been published yet. For questions about{' '}
        {doc.title.toLowerCase()} in the meantime, contact ASPIS directly and the request will be
        routed to the appropriate team.
      </p>
      <Link href={ROUTES.contact} className="btn-ghost">
        Contact ASPIS
      </Link>
    </div>
  );
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = LEGAL_DOCS[slug];
  if (!doc) notFound();

  return (
    <main id="main">
      <section className="pad-chapter">
        <div className="container" style={{ maxWidth: 900 }}>
          <Breadcrumbs trail={[{ name: 'Legal' }, { name: doc.title }]} />
          <div className="eyebrow" style={{ color: 'var(--text-dim)', marginBottom: 18 }}>
            LEGAL
          </div>
          <h1 className="h1" style={{ marginBottom: 20, maxWidth: MEASURE }}>
            {doc.title}
          </h1>
          {doc.lede ? (
            <p className="lede" style={{ marginBottom: 18, maxWidth: MEASURE }}>
              {doc.lede}
            </p>
          ) : (
            <p className="lede" style={{ marginBottom: 18, maxWidth: MEASURE }}>
              {doc.blurb}
            </p>
          )}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.1em',
              color: 'var(--text-muted)',
              margin: '0 0 clamp(34px,3.4vw,48px)',
            }}
          >
            LAST UPDATED {doc.updated.toUpperCase()}
          </p>

          {doc.pending ? <Pending doc={doc} /> : <Published doc={doc} />}
        </div>
      </section>
    </main>
  );
}
