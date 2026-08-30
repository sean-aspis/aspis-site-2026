import { PAGES } from '@/data/pages';

/** Slug for a contact route, used as the deep-link hash from the navigation. */
export const areaSlug = (t: string) =>
  t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const CONTACT_AREAS = PAGES.contactRoutes.map((c) => ({
  ...c,
  slug: areaSlug(c.t),
}));

export const AREA_OPTIONS = [...CONTACT_AREAS.map((c) => c.t), 'Other'];
