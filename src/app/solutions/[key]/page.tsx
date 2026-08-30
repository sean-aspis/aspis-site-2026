import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SOLUTIONS, SOLUTION_KEYS, type SolutionKey } from '@/data/solutions';
import { SOLUTION_CONTENT } from '@/data/solutionContent';
import { accentVars, bestInk } from '@/lib/theme';
import { pageMeta } from '@/lib/seo';
import { deriveSolution } from '@/components/solution/derive';
import SolutionHero from '@/components/solution/SolutionHero';
import SolutionShift from '@/components/solution/SolutionShift';
import SolutionChallenges from '@/components/solution/SolutionChallenges';
import SolutionProtect from '@/components/solution/SolutionProtect';
import SolutionCapabilities from '@/components/solution/SolutionCapabilities';
import SolutionPipeline from '@/components/solution/SolutionPipeline';
import SolutionConnectivity from '@/components/solution/SolutionConnectivity';
import SolutionGovernance from '@/components/solution/SolutionGovernance';
import SolutionFrameworks from '@/components/solution/SolutionFrameworks';
import SolutionOutcomes from '@/components/solution/SolutionOutcomes';
import SolutionProducts from '@/components/solution/SolutionProducts';
import SolutionDocuments from '@/components/solution/SolutionDocuments';
import SolutionRelated from '@/components/solution/SolutionRelated';
import SolutionCta from '@/components/solution/SolutionCta';
import ProductExperience from '@/components/product/ProductExperience';
import type { ProductRecord } from '@/components/product/derive';

type Params = { key: string };

export function generateStaticParams(): Params[] {
  return SOLUTION_KEYS.map((key) => ({ key }));
}
export const dynamicParams = false;

const isSolutionKey = (k: string): k is SolutionKey =>
  Object.prototype.hasOwnProperty.call(SOLUTIONS, k);

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { key } = await params;
  if (!isSolutionKey(key)) return {};
  const sol = SOLUTIONS[key];
  return pageMeta({
    title: `${sol.name} Solutions`,
    description: sol.intro,
    path: `/solutions/${key}`,
  });
}

/**
 * Industry solution template — design file lines 1591–1757, ten industries.
 *
 * The accent is set once here, on <main>, as CSS custom properties; every
 * section below reads var(--accent) / var(--accent-line) / var(--accent-wash)
 * / var(--band-wash). The solution band wash is .045 alpha, slightly lighter
 * than the .05 accentVars() uses elsewhere, so it is overridden explicitly.
 *
 * The design file paints its CTA ink #04060E on every industry accent. That is
 * now measured rather than assumed (see bestInk): it holds on nine of the ten
 * palettes, in several cases decisively (Defense & Intelligence #7EA184 is
 * 7.05:1 dark against 2.87:1 white), and flips to white on Financial Services,
 * where #4776B9 gives the dark ink only 4.39:1.
 *
 * 2026-08-30 — the design file gave each industry roughly 250 words across
 * eight sections, which read as a lot of vertical space carrying very little.
 * Five sections were added (challenges, capabilities, regulatory context,
 * outcomes, documents) sourced from the nine ASPIS-published PDFs, plus a
 * related-industries rail so a page is no longer a dead end. The claims
 * discipline applied to that material is documented at the top of
 * src/data/solutionContent.ts and is not optional.
 *
 * Section order is fixed; several sections are conditional. Surfaces and
 * hairlines are therefore left entirely to the nth-of-type rules in
 * globals.css — nothing here assigns a background by source-order index.
 */
export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { key } = await params;
  if (!isSolutionKey(key)) notFound();

  const sol = deriveSolution(key);
  const content = SOLUTION_CONTENT[key];

  // Only the enterprise entry carries screenshots. The design file included
  // them and never rendered them anywhere.
  const shots = (SOLUTIONS[key] as { shots?: ProductRecord['shots'] }).shots;

  const mainStyle = {
    ...accentVars(sol.accent),
    ['--band-wash']: sol.bandWash,
    // The design file hard-codes #04060E here. That is measured per industry
    // instead: it stays #04060E on nine of the ten, and flips to white on
    // Financial Services, where the dark ink comes in at 4.39:1 — under AA.
    ['--accent-ink']: bestInk(sol.accent),
  } as CSSProperties;

  return (
    <main id="main" style={mainStyle}>
      <SolutionHero sol={sol} />
      <SolutionShift sol={sol} />
      {content && <SolutionChallenges content={content} />}
      <SolutionProtect sol={sol} />
      {content && <SolutionCapabilities content={content} />}
      <SolutionPipeline sol={sol} />
      {sol.hasConnectivity && <SolutionConnectivity sol={sol} />}
      {shots?.length ? (
        <ProductExperience
          product={{ shots, accent: sol.accent }}
          eyebrow="IN PRACTICE"
          title="What the platform actually looks like."
        />
      ) : null}
      {sol.hasGov && <SolutionGovernance sol={sol} />}
      {content && <SolutionFrameworks content={content} />}
      {content && <SolutionOutcomes content={content} />}
      <SolutionProducts sol={sol} />
      <SolutionDocuments solutionKey={key} />
      <SolutionRelated solutionKey={key} />
      <SolutionCta sol={sol} />
    </main>
  );
}
