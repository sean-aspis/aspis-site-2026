// AUTO-GENERATED from "ASPIS Website v2.dc.html" (v1.4 design handoff).
// Content is verbatim from the design file — do not paraphrase.

export type NavLink = { name: string; desc: string; href: string; page: string; key: string | null };
export type NavColumn = { title: string; items: NavLink[] };
export type NavGroup = {
  label: string;
  panelId: string;
  footer: { label: string; href: string };
  columns: NavColumn[];
  stack?: { n: string; name: string; verb: string }[];
  promo?: boolean;
};

export const ROUTES = {
  "home": "/",
  "platform": "/platform",
  "solutions": "/solutions",
  "why": "/why-aspis",
  "resources": "/resources",
  "about": "/about",
  "leadership": "/leadership",
  "contact": "/contact",
  "trust": "/security-and-trust",
  "partners": "/partners",
  "shieldme": "/shieldme",
  "dealreg": "/partners/deal-registration",
  "deal-registration": "/partners/deal-registration",
  "newsroom": "/newsroom",
  "support": "/support",
  "whitePapers": "/resources/white-papers",
  "solutionBriefs": "/resources/solution-briefs",
  "threatResearch": "/resources/threat-research",
  "deploymentGuides": "/resources/deployment-guides",
  "complianceResources": "/resources/compliance",
  "platformArchitecture": "/capabilities/platform-architecture"
} as const;

export const NAV_GROUPS: Record<string, NavGroup> = {
  "platform": {
    "label": "Platform",
    "panelId": "mega-platform",
    "footer": {
      "label": "EXPLORE THE ASPIS PLATFORM →",
      "href": "/platform"
    },
    "columns": [
      {
        "title": "BUSINESS SECURITY",
        "items": [
          {
            "name": "ShieldiT Enterprise",
            "desc": "Secure communications and Mobile Threat Defense for enterprise.",
            "href": "/products/enterprise",
            "page": "product",
            "key": "enterprise"
          },
          {
            "name": "ShieldiT FSX",
            "desc": "Regulated communications for financial services.",
            "href": "/products/fsx",
            "page": "product",
            "key": "fsx"
          },
          {
            "name": "ShieldiT Executive",
            "desc": "Secure executive communications, governance, and intelligence.",
            "href": "/products/executive",
            "page": "product",
            "key": "executive"
          }
        ]
      },
      {
        "title": "CONTROL & INTELLIGENCE",
        "items": [
          {
            "name": "ManageiT",
            "desc": "Centralized administration, device posture, policy, risk, federation, and governance.",
            "href": "/products/manageit",
            "page": "product",
            "key": "manageit"
          },
          {
            "name": "SentinelIQ",
            "desc": "Compliance, supervision, investigation, behavioral analytics, and AI intelligence.",
            "href": "/products/sentineliq",
            "page": "product",
            "key": "sentineliq"
          }
        ]
      },
      {
        "title": "GOVERNMENT & DEFENSE",
        "items": [
          {
            "name": "ShieldiT Defense",
            "desc": "Mission-grade secure communications and mobile security.",
            "href": "/products/defense",
            "page": "product",
            "key": "defense"
          }
        ]
      },
      {
        "title": "PLATFORM OVERVIEW",
        "items": [
          {
            "name": "ShieldiT",
            "desc": "The complete secure communications and mobile security architecture.",
            "href": "/platform",
            "page": "platform",
            "key": null
          },
          {
            "name": "Platform Architecture",
            "desc": "How identity, device posture, communication, policy, governance and intelligence connect.",
            "href": "/capabilities/platform-architecture",
            "page": "capability",
            "key": "platform-architecture"
          }
        ]
      }
    ],
    "stack": [
      {
        "n": "01",
        "name": "ShieldiT",
        "verb": "PROTECT"
      },
      {
        "n": "02",
        "name": "ManageiT",
        "verb": "CONTROL"
      },
      {
        "n": "03",
        "name": "SentinelIQ",
        "verb": "ANALYZE"
      }
    ]
  },
  "solutions": {
    "label": "Solutions",
    "panelId": "mega-solutions",
    "footer": {
      "label": "EXPLORE ALL SOLUTIONS →",
      "href": "/solutions"
    },
    "columns": [
      {
        "title": "ENTERPRISE & REGULATED",
        "items": [
          {
            "name": "Enterprise",
            "desc": "Secure distributed workforces, mobile endpoints, and sensitive communications.",
            "href": "/solutions/enterprise",
            "page": "solution",
            "key": "enterprise"
          },
          {
            "name": "Financial Services",
            "desc": "Regulated communications, mobile security, supervision, and compliance.",
            "href": "/solutions/financial-services",
            "page": "solution",
            "key": "financial-services"
          },
          {
            "name": "Healthcare",
            "desc": "Protect clinical mobility, communications, and sensitive healthcare information.",
            "href": "/solutions/healthcare",
            "page": "solution",
            "key": "healthcare"
          },
          {
            "name": "Critical Infrastructure",
            "desc": "Secure communications supporting essential operations.",
            "href": "/solutions/critical-infrastructure",
            "page": "solution",
            "key": "critical-infrastructure"
          },
          {
            "name": "Technology",
            "desc": "Protect intellectual property, distributed teams, and mobile collaboration.",
            "href": "/solutions/technology",
            "page": "solution",
            "key": "technology"
          },
          {
            "name": "Telecommunications",
            "desc": "Carrier-delivered mobile security and secure communications.",
            "href": "/solutions/telecommunications",
            "page": "solution",
            "key": "telecommunications"
          }
        ]
      },
      {
        "title": "BY SECURITY REQUIREMENT",
        "items": [
          {
            "name": "Secure Communications",
            "desc": "Encrypted voice, video, messaging, conferencing, and file exchange.",
            "href": "/capabilities/secure-communications",
            "page": "capability",
            "key": "secure-communications"
          },
          {
            "name": "Mobile Threat Defense",
            "desc": "Protect endpoints against phishing, malicious applications, and unsafe networks.",
            "href": "/capabilities/mobile-threat-defense",
            "page": "capability",
            "key": "mobile-threat-defense"
          },
          {
            "name": "Device Security & Posture",
            "desc": "Continuously understand endpoint security condition and risk.",
            "href": "/capabilities/device-security",
            "page": "capability",
            "key": "device-security"
          },
          {
            "name": "Regulated Communications",
            "desc": "Recording, retention, supervision, policy, and communications governance.",
            "href": "/capabilities/regulated-communications",
            "page": "capability",
            "key": "regulated-communications"
          },
          {
            "name": "Communications Intelligence",
            "desc": "Compliance analytics, investigation, behavioral analysis, and risk intelligence.",
            "href": "/capabilities/communications-intelligence",
            "page": "capability",
            "key": "communications-intelligence"
          },
          {
            "name": "Data Control & Governance",
            "desc": "Centralized policy, administration, communications controls, and oversight.",
            "href": "/capabilities/data-control",
            "page": "capability",
            "key": "data-control"
          }
        ]
      },
      {
        "title": "SPECIALIZED SOLUTIONS",
        "items": [
          {
            "name": "Executive & Board Security",
            "desc": "Protect executive communications, governance, documents, and crisis collaboration.",
            "href": "/solutions/executive-board-security",
            "page": "solution",
            "key": "executive-board-security"
          },
          {
            "name": "MSP / MSSP",
            "desc": "Deliver managed secure communications and Mobile Threat Defense.",
            "href": "/solutions/msp-mssp",
            "page": "solution",
            "key": "msp-mssp"
          },
          {
            "name": "Carrier Security",
            "desc": "Deliver ShieldMe through telecommunications and carrier partnerships.",
            "href": "/solutions/telecommunications",
            "page": "solution",
            "key": "telecommunications"
          },
          {
            "name": "Sovereign & Isolated Deployment",
            "desc": "Private cloud, sovereign, on-premises, government, and isolated architectures.",
            "href": "/capabilities/deployment",
            "page": "capability",
            "key": "deployment"
          }
        ]
      },
      {
        "title": "GOVERNMENT & MISSION",
        "items": [
          {
            "name": "Government",
            "desc": "Secure public-sector mobility and communications.",
            "href": "/solutions/government",
            "page": "solution",
            "key": "government"
          },
          {
            "name": "Defense & Intelligence",
            "desc": "Mission-grade security for high-threat and isolated environments.",
            "href": "/solutions/defense-intelligence",
            "page": "solution",
            "key": "defense-intelligence"
          }
        ]
      }
    ]
  },
  "why": {
    "label": "Why ASPIS",
    "panelId": "mega-why",
    "footer": {
      "label": "WHY ASPIS →",
      "href": "/why-aspis"
    },
    "columns": [
      {
        "title": "CORE TECHNOLOGY",
        "items": [
          {
            "name": "Secure Communications",
            "desc": "Enterprise-controlled voice, video, messaging, conferencing, and file collaboration.",
            "href": "/capabilities/secure-communications",
            "page": "capability",
            "key": "secure-communications"
          },
          {
            "name": "Mobile Threat Defense",
            "desc": "On-device protection against mobile threats.",
            "href": "/capabilities/mobile-threat-defense",
            "page": "capability",
            "key": "mobile-threat-defense"
          },
          {
            "name": "Device Security & Posture",
            "desc": "Bring endpoint security context into communications policy.",
            "href": "/capabilities/device-security",
            "page": "capability",
            "key": "device-security"
          },
          {
            "name": "Data Control & Governance",
            "desc": "Centralized control over communications, security policy, and administration.",
            "href": "/capabilities/data-control",
            "page": "capability",
            "key": "data-control"
          }
        ]
      },
      {
        "title": "ENTERPRISE ARCHITECTURE",
        "items": [
          {
            "name": "Platform Architecture",
            "desc": "How ShieldiT, ManageiT, and SentinelIQ work together.",
            "href": "/capabilities/platform-architecture",
            "page": "capability",
            "key": "platform-architecture"
          },
          {
            "name": "Compliance & Governance",
            "desc": "Recording, retention, supervision, policy, and communications governance.",
            "href": "/capabilities/regulated-communications",
            "page": "capability",
            "key": "regulated-communications"
          },
          {
            "name": "Deployment & Sovereignty",
            "desc": "SaaS, dedicated, private cloud, sovereign, on-premises, and isolated deployment.",
            "href": "/capabilities/deployment",
            "page": "capability",
            "key": "deployment"
          },
          {
            "name": "Integrations",
            "desc": "Identity, MDM/EMM, SIEM/XDR, compliance, and enterprise systems.",
            "href": "/capabilities/integrations",
            "page": "capability",
            "key": "integrations"
          },
          {
            "name": "Security & Compliance",
            "desc": "Security architecture, data protection, and compliance support.",
            "href": "/security-and-trust",
            "page": "trust",
            "key": null
          }
        ]
      }
    ],
    "promo": true
  },
  "resources": {
    "label": "Resources",
    "panelId": "mega-resources",
    "footer": {
      "label": "VIEW ALL RESOURCES →",
      "href": "/resources"
    },
    "columns": [
      {
        "title": "RESEARCH & INSIGHTS",
        "items": [
          {
            "name": "Resource Center",
            "desc": "Every ASPIS paper, brief and guide in one place.",
            "href": "/resources",
            "page": "resources",
            "key": null
          },
          {
            "name": "White Papers",
            "desc": "Technical and strategic research for enterprise and government security leaders.",
            "href": "/resources/white-papers",
            "page": "resources",
            "key": "white-papers"
          },
          {
            "name": "Threat Research",
            "desc": "Research into mobile, communications, phishing, fraud, and emerging threats.",
            "href": "/resources/threat-research",
            "page": "resources",
            "key": "threat-research"
          }
        ]
      },
      {
        "title": "TECHNICAL RESOURCES",
        "items": [
          {
            "name": "Solution Briefs",
            "desc": "Product and industry-specific solution documents.",
            "href": "/resources/solution-briefs",
            "page": "resources",
            "key": "solution-briefs"
          },
          {
            "name": "Deployment Guides",
            "desc": "Architecture and deployment guidance.",
            "href": "/resources/deployment-guides",
            "page": "resources",
            "key": "deployment-guides"
          },
          {
            "name": "Compliance Resources",
            "desc": "Security architecture and compliance material.",
            "href": "/resources/compliance",
            "page": "resources",
            "key": "compliance"
          }
        ]
      },
      {
        "title": "COMPANY",
        "items": [
          {
            "name": "Newsroom",
            "desc": "ASPIS announcements and company news.",
            "href": "/newsroom",
            "page": "newsroom",
            "key": null
          },
          {
            "name": "Partners",
            "desc": "Technology, managed service, carrier, and channel ecosystem.",
            "href": "/partners",
            "page": "partners",
            "key": null
          },
          {
            "name": "Deal Registration",
            "desc": "Existing partners: register and protect an opportunity.",
            "href": "/partners/deal-registration",
            "page": "deal-registration",
            "key": null
          }
        ]
      }
    ]
  },
  "company": {
    "label": "Company",
    "panelId": "mega-company",
    "footer": {
      "label": "CONTACT ASPIS →",
      "href": "/contact"
    },
    "columns": [
      {
        "title": "ABOUT ASPIS",
        "items": [
          {
            "name": "About ASPIS",
            "desc": "Company mission, technology focus, and corporate story.",
            "href": "/about",
            "page": "about",
            "key": null
          },
          {
            "name": "Leadership",
            "desc": "Executive leadership, Board of Directors, and strategic advisors.",
            "href": "/leadership",
            "page": "leadership",
            "key": null
          },
          {
            "name": "Partners",
            "desc": "The ASPIS technology and strategic ecosystem.",
            "href": "/partners",
            "page": "partners",
            "key": null
          }
        ]
      },
      {
        "title": "WORK WITH ASPIS",
        "items": [
          {
            "name": "Contact",
            "desc": "General corporate contact.",
            "href": "/contact",
            "page": "contact",
            "key": null
          },
          {
            "name": "Enterprise Sales",
            "desc": "Talk to ASPIS about enterprise requirements.",
            "href": "/contact#enterprise-sales",
            "page": "contact",
            "key": null
          },
          {
            "name": "Government & Defense Sales",
            "desc": "Government and mission-specific inquiries.",
            "href": "/contact#government-and-defense",
            "page": "contact",
            "key": null
          },
          {
            "name": "Financial Services Sales",
            "desc": "Financial-services security and compliance inquiries.",
            "href": "/contact#financial-services",
            "page": "contact",
            "key": null
          },
          {
            "name": "Partner With ASPIS",
            "desc": "MSP/MSSP, carrier, reseller, integrator, and technology partnerships.",
            "href": "/partners",
            "page": "partners",
            "key": null
          }
        ]
      },
      {
        "title": "CUSTOMER & SECURITY",
        "items": [
          {
            "name": "Support",
            "desc": "Technical assistance for existing ASPIS customers.",
            "href": "/support",
            "page": "contact",
            "key": null
          },
          {
            "name": "Security & Responsible Disclosure",
            "desc": "Report a security issue to the ASPIS security team.",
            "href": "/security-and-trust",
            "page": "trust",
            "key": null
          },
          {
            "name": "Deal Registration",
            "desc": "Partner opportunity registration.",
            "href": "/partners/deal-registration",
            "page": "deal-registration",
            "key": null
          }
        ]
      }
    ]
  }
};

export const NAV_ORDER = ['platform', 'solutions', 'why', 'resources', 'company'] as const;

/*
 * Utility bar. Three of these four pointed somewhere other than what the label
 * promised:
 *
 *  - "Experiencing an incident?" is the most urgent link on the site and went
 *    to the general contact page, between "Enterprise Sales" and "Partnerships".
 *    It now goes to the incident section of the support page.
 *  - "Threat Research" went to /resources, the index, even though
 *    /resources/threat-research exists.
 *  - "Partner Portal" named a portal. There is no partner portal — the
 *    destination is the partner program page — so the label says that
 *    instead of implying a log-in that does not exist.
 */
export const UTILITY_LINKS = [
  { label: 'Experiencing an incident?', href: `${ROUTES.support}#incident`, incident: true },
  { label: 'Threat Research', href: ROUTES.threatResearch },
  { label: 'Partner Program', href: ROUTES.partners },
  { label: 'Company', href: ROUTES.about },
];

export const FOOTER_LINK_MAP: Record<string, string> = {
  // Platform
  'ShieldiT': '/platform',
  'ShieldiT Enterprise': '/products/enterprise',
  'ShieldiT FSX': '/products/fsx',
  'ShieldiT Defense': '/products/defense',
  'ShieldiT Executive': '/products/executive',
  'ManageiT': '/products/manageit',
  'SentinelIQ': '/products/sentineliq',
  'ShieldMe': '/shieldme',
  // Solutions
  'Enterprise': '/solutions/enterprise',
  'Financial Services': '/solutions/financial-services',
  'Government': '/solutions/government',
  'Defense & Intelligence': '/solutions/defense-intelligence',
  'Healthcare': '/solutions/healthcare',
  'Critical Infrastructure': '/solutions/critical-infrastructure',
  'Technology': '/solutions/technology',
  'Telecommunications': '/solutions/telecommunications',
  'Executive & Board Security': '/solutions/executive-board-security',
  'MSP / MSSP': '/solutions/msp-mssp',
  // Why ASPIS
  'Platform Architecture': '/capabilities/platform-architecture',
  'Mobile Threat Defense': '/capabilities/mobile-threat-defense',
  'Secure Communications': '/capabilities/secure-communications',
  'Compliance & Governance': '/capabilities/regulated-communications',
  'Deployment & Sovereignty': '/capabilities/deployment',
  'Integrations': '/capabilities/integrations',
  'Security & Compliance': '/security-and-trust',
  // Resources
  'Resource Center': '/resources',
  'White Papers': '/resources/white-papers',
  'Solution Briefs': '/resources/solution-briefs',
  'Threat Research': '/resources/threat-research',
  'Newsroom': '/newsroom',
  // Company
  'About ASPIS': '/about',
  'Leadership': '/leadership',
  'Partners': '/partners',
  'Contact': '/contact',
  'Support': '/support',
  // Legal — no source content in the design file; these render as explicit
  // "not yet published" placeholders rather than invented policy text.
  'Privacy Policy': '/legal/privacy-policy',
  'Terms of Use': '/legal/terms-of-use',
  'Cookie Policy': '/legal/cookie-policy',
  'Accessibility': '/legal/accessibility',
  'Security': '/security-and-trust',
  'Responsible Disclosure': '/security-and-trust#responsible-disclosure',
};

// LEGAL_SLUGS now lives in data/legal.ts, derived from the documents themselves
// so the route list and the content cannot drift apart.

export const EXTERNAL = {
  shieldMe: 'https://shieldme.com',
  manageIt: 'https://manageit.aspiscyber.net/',
  formspree: 'https://formspree.io/f/xbgrqybq',
};
