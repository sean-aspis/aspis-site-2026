import type { Metadata } from 'next';

/**
 * Set NEXT_PUBLIC_SITE_URL in Vercel (Project → Settings → Environment
 * Variables) to the production domain. Preview deployments fall back to the
 * Vercel-provided URL so canonical tags and the sitemap stay coherent.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://www.aspiscyber.com');

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
