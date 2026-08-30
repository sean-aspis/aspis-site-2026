import type { Metadata } from 'next';

/**
 * The canonical production origin.
 *
 * Canonicals, the sitemap and OG tags must always point at the final
 * production domain — never at `new.aspiscyber.com` or a Vercel hostname.
 * Pointing them at a staging host teaches search engines to index the staging
 * copy and splits ranking signal between two origins, which is painful to
 * unwind after cutover.
 *
 * So production is hard-defaulted to aspiscyber.com and only an explicit
 * NEXT_PUBLIC_SITE_URL overrides it. Non-production deploys fall back to their
 * own Vercel URL, and robots.ts blocks them from indexing entirely, so a
 * preview never competes with production.
 */
export const PRODUCTION_ORIGIN = 'https://aspiscyber.com';

const isProduction =
  process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === undefined;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isProduction
    ? PRODUCTION_ORIGIN
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : PRODUCTION_ORIGIN);

export const SITE_NAME = 'ASPIS Cyber';

export const DEFAULT_DESCRIPTION =
  'Secure communications, Mobile Threat Defense, device posture, policy control, and communications intelligence for enterprise and government.';

/**
 * Content rule enforced site-wide: no "trust" terminology in copy or metadata.
 * Use concrete terms — Secure Communications, Device Security, Device Posture,
 * Mobile Threat Defense, Security Architecture, Policy Control, Data Control,
 * Governance, Communications Intelligence.
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
      url,
      type: 'website',
      ...(opts.image ? { images: [{ url: opts.image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${opts.title} | ${SITE_NAME}`,
      description: opts.description,
    },
  };
}
