import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SOLUTIONS, SOLUTION_KEYS, type SolutionKey } from '@/data/solutions';
import { accentVars } from '@/lib/theme';
import { pageMeta } from '@/lib/seo';
import { deriveSolution } from '@/components/solution/derive';
import SolutionHero from '@/components/solution/SolutionHero';
import SolutionShift from '@/components/solution/SolutionShift';
import SolutionProtect from '@/components/solution/SolutionProtect';
import SolutionPipeline from '@/components/solution/SolutionPipeline';
import SolutionConnectivity from '@/components/solution/SolutionConnectivity';
import SolutionGovernance from '@/components/solution/SolutionGovernance';
import SolutionProducts from '@/components/solution/SolutionProducts';
import SolutionCta from '@/components/solution/SolutionCta';

type Params = { key: string };

export function generateStaticParams(): Params[] {
  return SOLUTION_KEYS.map((key) => ({ key }));
}

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
 * kept rather than recomputed: on nine of the ten palettes the dark ink beats
 * white on contrast, in several cases decisively (Defense & Intelligence
 * #7EA184 is 7.05:1 dark against 2.87:1 white).
 *
 * Section order is fixed; three of the eight sections are conditional
 * (connectivity, governance, and the notes inside protect / pipeline /
 * products). Surfaces and hairlines are therefore left entirely to the
 * nth-of-type rules in globals.css — nothing here assigns a background by
 * source-order index.
 */
export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { key } = await params;
  if (!isSolutionKey(key)) notFound();

  const sol = deriveSolution(key);

  const mainStyle = {
    ...accentVars(sol.accent),
    ['--band-wash']: sol.bandWash,
    ['--accent-ink']: '#04060E',
  } as CSSProperties;

  return (
    <main id="main" style={mainStyle}>
      <SolutionHero sol={sol} />
      <SolutionShift sol={sol} />
      <SolutionProtect sol={sol} />
      <SolutionPipeline sol={sol} />
      {sol.hasConnectivity && <SolutionConnectivity sol={sol} />}
      {sol.hasGov && <SolutionGovernance sol={sol} />}
      <SolutionProducts sol={sol} />
      <SolutionCta sol={sol} />
    </main>
  );
}
