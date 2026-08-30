/**
 * Document library.
 *
 * These are the real ASPIS-published PDFs supplied by the client on
 * 30 Aug 2026. Every title, page count and description below describes a file
 * that actually exists in /public/documents — nothing here is a placeholder.
 *
 * Titles and subtitles are the documents' own cover text. Descriptions
 * summarise what is inside; they assert no capability the document does not
 * already assert, and no certification, customer or metric is introduced here.
 *
 * `bytes` and `pages` are measured from the files themselves. Re-measure them
 * if a document is ever replaced — they are shown to the user as download
 * metadata and must not drift.
 */

export type DocCategory =
  | 'white-papers'
  | 'solution-briefs'
  | 'threat-research'
  | 'deployment-guides'
  | 'compliance';

export type DocKind = 'WHITE PAPER' | 'USE CASE' | 'SOLUTION BRIEF';

export type Doc = {
  slug: string;
  title: string;
  subtitle: string;
  kind: DocKind;
  /** Primary category — the one whose route lists it first. */
  category: DocCategory;
  /** Additional categories this document is surfaced under. */
  also: DocCategory[];
  file: string;
  pages: number;
  bytes: number;
  /** One-paragraph summary shown on the card. */
  summary: string;
  /** Three to five headline topics, for the card's chip row. */
  topics: string[];
  /** Product route keys this document is about. */
  products: string[];
  /** Industry route keys whose page links to this document. */
  solutions: string[];
  accent: string;
};

export const DOCUMENTS: Doc[] = [
  {
    slug: 'shieldit-fsx',
    title: 'ShieldiT FSX',
    subtitle:
      'Compliance-driven secure communications and mobile threat defense for financial services, federal deployments, and highly regulated environments.',
    kind: 'WHITE PAPER',
    category: 'white-papers',
    also: ['compliance'],
    file: '/documents/aspis-shieldit-fsx-white-paper.pdf',
    pages: 17,
    bytes: 358711,
    summary:
      'The most detailed document in the library. Covers encrypted call and video recording with policy-based retention, SRTP-over-TLS media protection, AuditBot privileged-action logging, federation and communication-boundary controls, unified mobile and desktop endpoint security, and the full deployment range from cloud to air-gapped. Includes an architecture overview and the licensing model.',
    topics: [
      'Encrypted recording & retention',
      'SRTP-over-TLS',
      'AuditBot',
      'Federation controls',
      'Sovereign & air-gapped deployment',
    ],
    products: ['fsx'],
    solutions: ['financial-services', 'government', 'executive-board-security'],
    accent: '#F5C451',
  },
  {
    slug: 'shieldit-enterprise',
    title: 'ShieldiT Enterprise',
    subtitle:
      'Comprehensive secure communications and mobile threat defense for modern enterprises.',
    kind: 'WHITE PAPER',
    category: 'white-papers',
    also: [],
    file: '/documents/aspis-shieldit-enterprise-white-paper.pdf',
    pages: 7,
    bytes: 1503504,
    summary:
      'The platform overview for enterprise buyers: encrypted chat, voice, video and file sharing; on-device mobile threat defense; the ManageiT admin console; AuditBot compliance logging; identity integration with Entra ID, Okta, Google Workspace and SAML/OIDC; and the SaaS, private-cloud and dedicated-infrastructure deployment options.',
    topics: [
      'Encrypted communications',
      'Mobile Threat Defense',
      'ManageiT console',
      'Identity integration',
      'Deployment models',
    ],
    products: ['enterprise'],
    solutions: ['enterprise', 'technology', 'telecommunications'],
    accent: '#4C7DFF',
  },
  {
    slug: 'shieldit-protect',
    title: 'ShieldiT Protect',
    subtitle: 'Advanced mobile threat defense for enterprise and public sector organizations.',
    kind: 'WHITE PAPER',
    category: 'white-papers',
    also: [],
    file: '/documents/aspis-shieldit-protect-white-paper.pdf',
    pages: 7,
    bytes: 1001516,
    summary:
      'Mobile Threat Defense on its own terms: on-device detection of phishing across SMS, email, apps and QR codes; malicious application identification; rogue access point and man-in-the-middle detection; device risk posture monitoring; and coexistence with Intune, Workspace ONE and MobileIron alongside SIEM and XDR forwarding.',
    topics: [
      'On-device detection',
      'Phishing protection',
      'Network threat detection',
      'Device posture',
      'MDM/EMM compatibility',
    ],
    products: ['enterprise'],
    solutions: ['enterprise', 'healthcare', 'technology', 'critical-infrastructure'],
    accent: '#67E8F9',
  },
  {
    slug: 'shieldit-defense',
    title: 'ShieldiT Defense',
    subtitle:
      'Complete secure communications and mobile threat defense for mission-critical government and defense operations.',
    kind: 'WHITE PAPER',
    category: 'white-papers',
    also: [],
    file: '/documents/aspis-shieldit-defense-white-paper.pdf',
    pages: 7,
    bytes: 1037189,
    summary:
      'Written for national security and mission-critical operations: isolated and air-gapped deployment, offline synchronisation and deferred communications, on-device threat defense in denied-network conditions, ShieldiT Black hardened devices, the ManageiT command console, and custom integration with legacy mission systems and CAC/PIV authentication.',
    topics: [
      'Air-gapped deployment',
      'Offline sync',
      'ShieldiT Black',
      'Command console',
      'CAC/PIV integration',
    ],
    products: ['defense'],
    solutions: ['defense-intelligence', 'government', 'critical-infrastructure'],
    accent: '#7EA184',
  },
  {
    slug: 'shieldit-enterprise-for-msps-mssps',
    title: 'ShieldiT Enterprise for MSSPs & MSPs',
    subtitle:
      'Multi-tenant secure communications and mobile threat defense for managed service providers.',
    kind: 'WHITE PAPER',
    category: 'white-papers',
    also: ['solution-briefs'],
    file: '/documents/aspis-shieldit-enterprise-for-msps-mssps.pdf',
    pages: 6,
    bytes: 1159265,
    summary:
      'The partner document: multi-tenant architecture with isolated tenants and delegated administrator roles, full white-labelling of branding, domains and notifications, the ManageiT console across customers, and the tiered volume licensing, reseller discount and partner enablement model.',
    topics: [
      'Multi-tenant architecture',
      'White-labelling',
      'Delegated administration',
      'Partner licensing',
      'Service packaging',
    ],
    products: ['enterprise', 'manageit'],
    solutions: ['msp-mssp'],
    accent: '#A78BFA',
  },
  {
    slug: 'financial-services-use-case',
    title: 'Financial Services, Banking & Capital Markets',
    subtitle: 'ShieldiT use case.',
    kind: 'USE CASE',
    category: 'solution-briefs',
    also: ['compliance'],
    file: '/documents/aspis-shieldit-financial-services-use-case.pdf',
    pages: 6,
    bytes: 555184,
    summary:
      'The threat picture facing executives, traders, wealth managers and client advisors, and what a purpose-built response looks like: federated secure collaboration with role-based visibility, deal rooms for M&A and IPO activity, mobile threat defense against SIM swap and rogue applications, DLP enforcement, and compliance-grade logging with export to Purview, Smarsh and Global Relay.',
    topics: [
      'Federated collaboration',
      'Deal rooms',
      'SIM swap detection',
      'DLP enforcement',
      'Retention & export',
    ],
    products: ['fsx', 'sentineliq'],
    solutions: ['financial-services', 'executive-board-security'],
    accent: '#5BD6C0',
  },
  {
    slug: 'sled-federal-government-use-case',
    title: 'SLED & Federal Government',
    subtitle: 'ShieldiT use case.',
    kind: 'USE CASE',
    category: 'solution-briefs',
    also: ['compliance'],
    file: '/documents/aspis-shieldit-sled-federal-government-use-case.pdf',
    pages: 7,
    bytes: 1142856,
    summary:
      'State, local, education and federal agency requirements: nation-state and ransomware exposure, mobile espionage including SIM swaps, rogue base stations and zero-click exploits, insider risk, and the operational complexity of air-gapped and classified environments. Covers RBAC by clearance and mission role, Azure Government AD and CAC/PIV interoperability, and immutable logging for evidentiary use.',
    topics: [
      'Zero-click exploits',
      'Clearance-based RBAC',
      'Azure Government AD',
      'Immutable logging',
      'Multi-agency federation',
    ],
    products: ['defense'],
    solutions: ['government', 'defense-intelligence'],
    accent: '#8B9BFF',
  },
  {
    slug: 'healthcare-use-case',
    title: 'Healthcare Networks',
    subtitle: 'Mobile, tablet and endpoint threat defense — ShieldiT use case.',
    kind: 'USE CASE',
    category: 'solution-briefs',
    also: ['compliance'],
    file: '/documents/aspis-shieldit-healthcare-use-case.pdf',
    pages: 5,
    bytes: 301798,
    summary:
      'Care delivery on smartphones, iPads, laptops and connected clinical devices, and the exposure that comes with it: unprotected endpoints in care environments, phishing aimed at frontline teams, rogue Wi-Fi in hospital and clinic settings, and fragmented visibility across BYOD. Covers endpoint coverage, role-based clinical messaging, and ManageiT oversight.',
    topics: [
      'EMR/EHR workflows',
      'Tablet & BYOD coverage',
      'Rogue Wi-Fi detection',
      'Role-based messaging',
      'Clinical governance',
    ],
    products: ['enterprise'],
    solutions: ['healthcare'],
    accent: '#67E8F9',
  },
  {
    slug: 'retail-consumer-goods-use-case',
    title: 'Retail & Consumer Goods',
    subtitle: 'ShieldiT use case.',
    kind: 'USE CASE',
    category: 'solution-briefs',
    also: [],
    file: '/documents/aspis-shieldit-retail-consumer-goods-use-case.pdf',
    pages: 7,
    bytes: 623716,
    summary:
      'Distributed, customer-facing estates: mobile point-of-sale terminals, self-checkout kiosks and tablets, store-office laptops and associate BYOD. Covers threat defense for mPOS and kiosk devices, secure broadcast channels between headquarters, regional managers and stores, federation with logistics providers and vendors, and DLP for payment and customer data.',
    topics: [
      'mPOS & kiosk defense',
      'Store-to-HQ comms',
      'Vendor federation',
      'DLP for payment data',
      'Distributed governance',
    ],
    products: ['enterprise'],
    solutions: [],
    accent: '#F2836B',
  },
];

export const DOC_BY_SLUG = Object.fromEntries(DOCUMENTS.map((d) => [d.slug, d]));

/** Documents surfaced under a resource category, primary listings first. */
export function docsForCategory(category: DocCategory): Doc[] {
  return [
    ...DOCUMENTS.filter((d) => d.category === category),
    ...DOCUMENTS.filter((d) => d.also.includes(category)),
  ];
}

/** Documents an industry page should link to. */
export function docsForSolution(key: string): Doc[] {
  return DOCUMENTS.filter((d) => d.solutions.includes(key));
}

/** Documents a product page should link to. */
export function docsForProduct(key: string): Doc[] {
  return DOCUMENTS.filter((d) => d.products.includes(key));
}

/** "1.5 MB" / "350 KB" — the size shown next to a download link. */
export function fileSize(bytes: number): string {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}
