import { PAGES } from '@/data/pages';

/** Slug for a contact route, used as the deep-link hash from the navigation. */
export const areaSlug = (t: string) =>
  t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const CONTACT_AREAS = PAGES.contactRoutes.map((c) => ({
  ...c,
  slug: areaSlug(c.t),
}));

export const AREA_OPTIONS = [...CONTACT_AREAS.map((c) => c.t), 'Other'];

/**
 * Direct routes, for people who would rather send an email than fill in a
 * form. These are the addresses ASPIS publishes in its own white papers
 * (ShieldiT Enterprise, Defense, and the MSSP/MSP paper) — no address is
 * invented here, and none should be added without a published source.
 */
export const DIRECT_ROUTES = [
  { label: 'Sales and evaluations', email: 'sales@aspiscyber.com' },
  { label: 'Government and defense', email: 'defense@aspiscyber.com' },
  { label: 'Partner program', email: 'partners@aspiscyber.com' },
  { label: 'Existing customers', email: 'support@aspiscyber.com' },
];

/**
 * What a submission actually leads to. Deliberately free of commitments ASPIS
 * has not made: no response-time promise, no named SLA.
 */
export const WHAT_HAPPENS_NEXT = [
  {
    t: 'An ASPIS specialist reviews the enquiry',
    d: 'Routed by the area of interest selected above, so the first conversation is with someone who works on it.',
  },
  {
    t: 'A scoping conversation',
    d: 'Environment, identity provider, device estate, deployment constraints and any regulatory obligations that shape the architecture.',
  },
  {
    t: 'A demonstration against your requirements',
    d: 'The products and configuration relevant to what you described, rather than a standard walkthrough.',
  },
];
