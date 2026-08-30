import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  // Preview deployments must never be indexed.
  const isProduction = process.env.VERCEL_ENV === 'production' || !process.env.VERCEL_ENV;

  return {
    rules: isProduction
      ? [{ userAgent: '*', allow: '/', disallow: ['/legal/', '/api/'] }]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
