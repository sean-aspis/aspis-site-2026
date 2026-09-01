import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { PRODUCT_KEYS } from '@/data/products';
import { SOLUTION_KEYS } from '@/data/solutions';
import { CAPABILITY_KEYS } from '@/data/capabilities';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly') => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry('/', 1, 'weekly'),
    entry('/platform', 0.9, 'monthly'),
    entry('/solutions', 0.9, 'monthly'),
    entry('/why-aspis', 0.8, 'monthly'),
    entry('/resources', 0.8, 'weekly'),
    entry('/resources/white-papers', 0.7, 'weekly'),
    entry('/resources/solution-briefs', 0.7, 'weekly'),
    entry('/resources/threat-research', 0.7, 'weekly'),
    entry('/resources/deployment-guides', 0.6, 'monthly'),
    entry('/resources/compliance', 0.6, 'monthly'),
    entry('/newsroom', 0.6, 'weekly'),
    entry('/about', 0.6, 'monthly'),
    entry('/leadership', 0.6, 'monthly'),
    entry('/partners', 0.6, 'monthly'),
    entry('/partners/deal-registration', 0.5, 'monthly'),
    entry('/security-and-trust', 0.6, 'monthly'),
    entry('/shieldme', 0.5, 'monthly'),
    entry('/contact', 0.7, 'monthly'),
    entry('/support', 0.6, 'monthly'),
    // The published legal documents are indexable, so they belong here. The
    // accessibility statement is still a placeholder and is left out until it
    // has content — listing an empty page invites it to be indexed.
    entry('/legal/privacy-policy', 0.4, 'monthly'),
    entry('/legal/terms-of-use', 0.4, 'monthly'),
    entry('/legal/cookie-policy', 0.4, 'monthly'),
    ...PRODUCT_KEYS.map((k) => entry(`/products/${k}`, 0.9, 'monthly')),
    ...SOLUTION_KEYS.map((k) => entry(`/solutions/${k}`, 0.8, 'monthly')),
    entry('/capabilities/platform-architecture', 0.9, 'monthly'),
    ...CAPABILITY_KEYS.map((k) => entry(`/capabilities/${k}`, 0.7, 'monthly')),
  ];
}
