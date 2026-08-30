import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { PRODUCT_KEYS } from '@/data/products';
import { SOLUTION_KEYS } from '@/data/solutions';
import { CAPABILITY_KEYS } from '@/data/capabilities';
import { DOCUMENTS } from '@/data/documents';

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
    ...PRODUCT_KEYS.map((k) => entry(`/products/${k}`, 0.9, 'monthly')),
    ...SOLUTION_KEYS.map((k) => entry(`/solutions/${k}`, 0.8, 'monthly')),
    entry('/capabilities/platform-architecture', 0.9, 'monthly'),
    ...CAPABILITY_KEYS.map((k) => entry(`/capabilities/${k}`, 0.7, 'monthly')),
    // The published PDFs. They are indexable content in their own right and
    // are the deepest technical material on the site.
    ...DOCUMENTS.map((d) => entry(d.file, 0.6, 'monthly')),
  ];
}
