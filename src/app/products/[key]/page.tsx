import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCT_KEYS, type ProductKey } from '@/data/products';
import { ROUTES } from '@/data/nav';
import { accentVars, bandWash } from '@/lib/theme';
import { pageMeta } from '@/lib/seo';
import ProductHero from '@/components/product/ProductHero';
import ProductExperience from '@/components/product/ProductExperience';
import ProductBlocks from '@/components/product/ProductBlocks';
import SentinelIQSection from '@/components/product/SentinelIQSection';
import { getProduct, isConsole, isSentinelIQ } from '@/components/product/derive';

/**
 * The accent-themed product template — six routes off one file.
 *
 * The accent is set once, on <main>, from the product record: hue, on-accent
 * ink (by luminance, carried in the data as `ctaText`) and the soft wash.
 * Everything below reads var(--accent) / var(--accent-ink), so ShieldiT
 * Defense renders in its military green with white ink without a single
 * per-product branch.
 *
 * Two sections are gated — the SentinelIQ console and, inside the hero, the
 * ManageiT console handset — so surfaces come from the nth-of-type rules in
 * globals.css rather than any source-order index.
 */

const isKey = (k: string): k is ProductKey => (PRODUCT_KEYS as string[]).includes(k);

export function generateStaticParams() {
  return PRODUCT_KEYS.map((key) => ({ key }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  if (!isKey(key)) return {};
  const p = getProduct(key);
  return pageMeta({
    title: p.name,
    description: p.lede,
    path: `/products/${key}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  if (!isKey(key)) notFound();
  const p = getProduct(key);

  return (
    <main
      id="main"
      style={accentVars(p.accent, { ink: p.ctaText, soft: p.accentSoft })}
    >
      <ProductHero product={p} console={isConsole(key)} />

      {isSentinelIQ(key) && <SentinelIQSection product={p} />}

      <ProductExperience product={p} />

      <ProductBlocks product={p} />

      <section style={{ backgroundImage: bandWash(p.accent) }}>
        <div className="container pad-standard" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px,3vw,44px)',
              lineHeight: 1.08,
              letterSpacing: '-.03em',
              fontWeight: 700,
              margin: '0 0 28px',
              textWrap: 'balance',
            }}
          >
            Discuss your requirements with an ASPIS specialist.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Link href={ROUTES.contact} className="btn-primary" style={{ fontSize: 15, padding: '15px 28px' }}>
              Request a Demo
            </Link>
            <Link href={ROUTES.contact} className="btn-ghost" style={{ fontSize: 15, padding: '15px 28px' }}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
