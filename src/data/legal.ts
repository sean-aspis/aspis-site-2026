/**
 * Legal document content.
 *
 * NOT auto-generated from the design file — the design file ships no legal copy.
 *
 * SOURCING RULE, and it matters more here than anywhere else on the site: every
 * factual statement in these documents is verifiable against this codebase. The
 * data-collection list is the actual set of form fields; the cookie table is the
 * actual set of cookies with their real attributes and lifetime; the "what we do
 * not do" section is true because there is no analytics package, no advertising
 * tag and no remote font request anywhere in the build.
 *
 * What is deliberately NOT stated, because ASPIS has not published it and a
 * privacy policy is a binding representation to users and regulators:
 *
 *   - a registered office address or company registration number
 *   - the identity of a Data Protection Officer or EU/UK representative
 *   - numeric retention periods for form submissions (the cookie lifetime IS
 *     stated, because it is in the code)
 *   - participation in any transfer framework (DPF, Privacy Shield successor),
 *     or reliance on a specific instrument such as SCCs
 *   - any certification, audit, attestation or compliance status
 *   - a security-incident notification timeframe
 *
 * Where a fact of that kind would normally appear, the text states the
 * obligation and points the reader at a contact address instead of inventing a
 * specific. Anything added here later must clear the same bar.
 *
 * Governing law is Delaware, and the privacy contact is support@aspiscyber.com,
 * both confirmed by the client. Reviewed-by-counsel status: NOT reviewed. The
 * client chose to publish and have counsel revise afterwards; `updated` is the
 * date to bump when that happens.
 */

export type LegalBlock =
  | { p: string }
  | { list: string[] }
  | { defs: { t: string; d: string }[] }
  | { table: { head: string[]; rows: string[][]; label: string } }
  /** Pages this section refers to, rendered as a row of links beneath it. */
  | { links: { label: string; href: string }[] };

export type LegalSection = { id: string; h: string; blocks: LegalBlock[] };

export type LegalDoc = {
  title: string;
  blurb: string;
  updated: string;
  lede: string;
  sections: LegalSection[];
  /** Placeholder documents render the "not yet published" panel instead. */
  pending?: true;
};

const UPDATED = 'September 1, 2026';
const ENTITY = 'ASPIS Cyber Technologies, Inc.';
const PRIVACY_EMAIL = 'support@aspiscyber.com';

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  /* ──────────────────────────────────────────────────── privacy policy ── */
  'privacy-policy': {
    title: 'Privacy Policy',
    blurb:
      'What personal information ASPIS collects through this website, why, who it is shared with, and the rights available to you.',
    updated: UPDATED,
    lede: `This policy explains what personal information ${ENTITY} ("ASPIS", "we", "us") collects through this website, why we collect it, who we share it with, and what you can ask us to do about it.`,
    sections: [
      {
        id: 'scope',
        h: 'What this policy covers',
        blocks: [
          {
            p: 'This policy covers the ASPIS public website and the forms and document downloads published on it.',
          },
          {
            p: 'It does not cover the ASPIS products. When an organization deploys ShieldiT, ManageiT or SentinelIQ, ASPIS processes data on that organization’s behalf under the agreement between ASPIS and that organization, and that organization — not ASPIS — decides what is collected and why. If you are a user of a deployed ASPIS product and want to know how your data is handled, ask the organization that provided it to you.',
          },
          {
            p: 'It also does not cover websites we link to. ShieldMe, the ManageiT administration portal and LinkedIn are separate services with their own privacy terms.',
          },
        ],
      },
      {
        id: 'what-we-collect',
        h: 'Information we collect',
        blocks: [
          { p: 'There are three ways this website collects information about you.' },
          {
            defs: [
              {
                t: 'Information you submit in a form',
                d: 'Our contact and demonstration forms ask for your name, business email address, organization and job title, the area of interest you select, and whatever you choose to write in the free-text field. The partner deal-registration form additionally asks for partner type, customer industry, organization size, estimated number of users, expected decision date, opportunity stage and details, deployment requirement, the products you are interested in, and whether ASPIS support is requested.',
              },
              {
                t: 'Information you submit to open a document',
                d: 'The published white papers and use-case documents are gated. To open one you provide your name, business email address, organization and job title. We use this to understand who is evaluating the platform and to respond if you get in touch.',
              },
              {
                t: 'Information collected automatically by our hosting provider',
                d: 'Like any website, requests to this site are logged by the infrastructure serving it. Those logs typically include the requesting IP address, the page requested, a timestamp, and the browser user-agent string. We use them to operate and secure the site.',
              },
            ],
          },
          {
            p: 'Our forms also contain a hidden field that legitimate visitors never see or fill in. It exists to catch automated submissions and collects nothing about you.',
          },
        ],
      },
      {
        id: 'what-we-do-not-do',
        h: 'What this website does not do',
        blocks: [
          {
            p: 'Several things a visitor might reasonably expect from a corporate website are absent here, deliberately. Stated plainly so you do not have to take it on trust:',
          },
          {
            list: [
              'There is no third-party analytics on this site. No Google Analytics, no product-analytics SDK, no session recording, no heatmapping.',
              'There are no advertising or marketing cookies, no tracking pixels and no conversion tags.',
              'There is no cross-site tracking, and nothing on this site profiles you or makes automated decisions about you.',
              'Typefaces are served from our own infrastructure rather than a font network, so loading a page does not disclose your IP address to a font provider.',
              'We do not sell the personal information collected through this website, and we do not share it for cross-context behavioral advertising or targeted advertising.',
            ],
          },
          {
            p: 'This is also why you are not asked to dismiss a cookie banner. The only cookies this site sets are the two functional ones described below.',
          },
        ],
      },
      {
        id: 'cookies',
        h: 'Cookies',
        blocks: [
          {
            p: 'This site sets exactly two cookies, both first-party, and both only after you submit the document-access form. Until you do that, this site sets no cookies at all.',
          },
          {
            table: {
              label: 'Cookies set by this website',
              head: ['Cookie', 'Purpose', 'Lifetime'],
              rows: [
                [
                  'aspis_doc_access',
                  'Records that the document-access form has been completed, so published documents can be opened. Signed and marked HttpOnly, so it cannot be read by scripts in your browser.',
                  '30 days',
                ],
                [
                  'aspis_doc_ok',
                  'A readable flag that tells the page not to ask for your details again on a return visit. It grants no access on its own.',
                  '30 days',
                ],
              ],
            },
          },
          {
            p: 'Both are restricted to this site, sent only over HTTPS in production, and set with SameSite=Lax so they are not sent from third-party contexts. You can delete them at any time in your browser settings; the only effect is that you will be asked for your details again the next time you open a document.',
          },
          { links: [{ label: 'Cookie Policy', href: '/legal/cookie-policy' }] },
        ],
      },
      {
        id: 'how-we-use-it',
        h: 'How we use your information, and our legal basis',
        blocks: [
          { p: 'We use the information described above for the following purposes.' },
          {
            defs: [
              {
                t: 'Responding to you',
                d: 'Routing your inquiry to the right team and replying to it. Where you contacted us, our basis is your consent or the steps necessary to enter into a contract; otherwise our legitimate interest in responding to inquiries about our products.',
              },
              {
                t: 'Providing access to published documents',
                d: 'Confirming the form has been completed and serving the document. Our basis is the performance of your request, and our legitimate interest in knowing who is evaluating the platform.',
              },
              {
                t: 'Following up about our products',
                d: 'Contacting you about the subject of your inquiry. Our basis is legitimate interest, or consent where the applicable law requires it. You can ask us to stop at any time and we will.',
              },
              {
                t: 'Operating and securing the site',
                d: 'Keeping the site available, diagnosing faults, and detecting abuse and automated submissions. Our basis is legitimate interest, and compliance with our legal obligations where they apply.',
              },
              {
                t: 'Meeting legal obligations',
                d: 'Retaining records where the law requires it, and responding to lawful requests. Our basis is compliance with a legal obligation.',
              },
            ],
          },
          {
            p: 'We do not use the information collected through this website to make automated decisions about you that have a legal or similarly significant effect.',
          },
        ],
      },
      {
        id: 'sharing',
        h: 'Who we share it with',
        blocks: [
          { p: 'We share personal information only in the following circumstances.' },
          {
            defs: [
              {
                t: 'Our form-delivery provider',
                d: 'Submissions from the forms on this site are delivered to us through Formspree, which processes them on our instructions in order to pass them to us.',
              },
              {
                t: 'Our hosting provider',
                d: 'This site is hosted on infrastructure operated by a third-party hosting provider, which processes request logs in order to serve and secure the site.',
              },
              {
                t: 'Within ASPIS',
                d: 'The ASPIS personnel who need it to respond to you — typically the team covering the area of interest you selected.',
              },
              {
                t: 'Professional advisers and corporate transactions',
                d: 'Our auditors, lawyers and insurers where they need it, and a counterparty in connection with a merger, acquisition or sale of assets, subject to appropriate confidentiality.',
              },
              {
                t: 'When the law requires it',
                d: 'Where we are legally compelled to disclose information, or where disclosure is necessary to establish or defend legal claims, or to protect the rights and safety of others.',
              },
            ],
          },
          {
            p: 'We do not give your information to advertising networks, data brokers or list vendors.',
          },
        ],
      },
      {
        id: 'transfers',
        h: 'International transfers',
        blocks: [
          {
            p: 'ASPIS operates internationally, and the service providers described above may process information outside the country you are in — including in the United States.',
          },
          {
            p: `Where personal information is transferred out of the European Economic Area, the United Kingdom or Switzerland, we take steps to ensure it remains protected by a transfer mechanism recognized under applicable law. If you want to know which mechanism applies to a particular transfer, write to ${PRIVACY_EMAIL} and we will tell you.`,
          },
        ],
      },
      {
        id: 'retention',
        h: 'How long we keep it',
        blocks: [
          {
            p: 'We keep personal information only as long as we need it for the purpose we collected it for, and then delete it or stop being able to identify you from it.',
          },
          {
            list: [
              'The two cookies described above expire 30 days after they are set.',
              'Form submissions are kept for as long as needed to respond to you and to keep a record of the inquiry and our reply, and longer only where a legal obligation requires it.',
              'Request logs are kept for the period our hosting provider retains them for operational and security purposes.',
            ],
          },
          {
            p: `If you want your information deleted sooner, ask us at ${PRIVACY_EMAIL} and we will do so unless we are required to keep it.`,
          },
        ],
      },
      {
        id: 'rights-eu-uk',
        h: 'Your rights in the EEA, the UK and Switzerland',
        blocks: [
          {
            p: 'If data-protection law in the EEA, the UK or Switzerland applies to our handling of your information, you have the following rights. They are not absolute, and in some cases we may be entitled or required to decline — we will tell you why if we do.',
          },
          {
            list: [
              'Access — to be told whether we hold personal information about you, and to receive a copy.',
              'Rectification — to have inaccurate information corrected and incomplete information completed.',
              'Erasure — to have your information deleted where there is no overriding reason for us to keep it.',
              'Restriction — to have us limit what we do with your information while a dispute about it is resolved.',
              'Objection — to object to processing we carry out on the basis of legitimate interest, including for direct marketing, which we will always stop on request.',
              'Portability — to receive information you gave us in a structured, commonly used, machine-readable format.',
              'Withdrawal of consent — to withdraw consent at any time where consent is our basis, without affecting processing that already took place.',
              'Complaint — to lodge a complaint with your national data-protection authority. We would rather you raised it with us first so we can put it right.',
            ],
          },
          {
            p: `To exercise any of these, write to ${PRIVACY_EMAIL}. We will respond within the period the applicable law allows. We may need to ask you for enough information to confirm who you are before we act, so that we do not disclose your information to someone else.`,
          },
        ],
      },
      {
        id: 'rights-us',
        h: 'Your rights in California and other US states',
        blocks: [
          {
            p: 'If you are a resident of California or of another US state with a comprehensive privacy law, you may have the following rights in relation to the personal information described in this policy.',
          },
          {
            list: [
              'To know what personal information we have collected about you, the categories of sources, the purposes, and the categories of third parties we disclosed it to.',
              'To obtain a copy of the personal information you provided to us.',
              'To have your personal information corrected if it is inaccurate.',
              'To have your personal information deleted, subject to the exceptions the statute allows.',
              'To opt out of the sale of personal information and of sharing it for cross-context behavioral advertising. As stated above, this website does neither, so there is nothing to opt out of.',
              'To opt out of profiling in furtherance of decisions with legal or similarly significant effects. As stated above, we do not do this.',
              'Not to be discriminated against for exercising any of these rights. We will not deny you anything, charge you a different price, or give you a lower level of service because you asked.',
            ],
          },
          {
            p: `Send a request to ${PRIVACY_EMAIL}, stating which right you are exercising. You may use an authorized agent, in which case we will ask for proof of their authority. We do not knowingly collect or process the sensitive personal information categories those statutes single out through this website, and we do not use personal information for purposes incompatible with those described here.`,
          },
        ],
      },
      {
        id: 'security',
        h: 'How we protect it',
        blocks: [
          {
            p: 'We take reasonable technical and organizational measures appropriate to the risk. On this website that includes serving every page over HTTPS, restricting the two cookies to this site and to secure connections, marking the access cookie HttpOnly and signing it so it cannot be forged, serving gated documents only to a request carrying a valid signed cookie, and instructing browsers and search engines not to cache or index those documents.',
          },
          {
            p: 'No method of transmission or storage is completely secure, and we do not claim otherwise. Please do not send us confidential technical detail, credentials or sensitive personal information through a web form.',
          },
          {
            p: 'If you believe you have found a security vulnerability in an ASPIS product or in this website, please use our responsible-disclosure route rather than a contact form.',
          },
          {
            links: [
              { label: 'Responsible disclosure', href: '/security-and-trust#responsible-disclosure' },
            ],
          },
        ],
      },
      {
        id: 'children',
        h: 'Children',
        blocks: [
          {
            p: 'This is a business-to-business website intended for professional use. It is not directed at children, and we do not knowingly collect personal information from children. If you believe a child has given us personal information, contact us and we will delete it.',
          },
        ],
      },
      {
        id: 'changes',
        h: 'Changes to this policy',
        blocks: [
          {
            p: `We may update this policy as our practices, our providers or the law change. The date at the top of this page is the date of the current version. Where a change materially affects how we handle information you have already given us, we will take reasonable steps to tell you rather than relying on this page alone.`,
          },
        ],
      },
      {
        id: 'contact',
        h: 'Contacting us',
        blocks: [
          {
            p: `${ENTITY} is responsible for the personal information described in this policy. For any privacy question, or to exercise any right described above, write to ${PRIVACY_EMAIL} and put "Privacy" in the subject line.`,
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────── terms of use ── */
  'terms-of-use': {
    title: 'Terms of Use',
    blurb:
      'The terms on which ASPIS makes this website and the material published on it available to you.',
    updated: UPDATED,
    lede: `These terms govern your use of the ASPIS public website. By using this site you accept them. If you do not accept them, please do not use the site.`,
    sections: [
      {
        id: 'who',
        h: 'Who these terms are with',
        blocks: [
          {
            p: `This site is operated by ${ENTITY} ("ASPIS", "we", "us"). "You" means you personally, and also any organization you are acting for when you use this site in the course of your work — in which case you confirm you have authority to accept these terms on its behalf.`,
          },
        ],
      },
      {
        id: 'scope',
        h: 'What these terms cover, and what they do not',
        blocks: [
          {
            p: 'These terms cover this website and the material published on it, including the documents available for download.',
          },
          {
            p: 'They do not govern the ASPIS products. ShieldiT, ManageiT, SentinelIQ and the rest of the platform are licensed under separate written agreements, and nothing on this site varies, replaces or adds to those agreements. Where anything here conflicts with a signed agreement between ASPIS and your organization, that agreement governs.',
          },
          {
            p: 'They also do not cover the ManageiT administration portal, ShieldMe, or any other site we link to. Those have their own terms.',
          },
        ],
      },
      {
        id: 'use',
        h: 'How you may use this site',
        blocks: [
          {
            p: 'We give you permission to view this site, and to download and print a reasonable number of copies of material published on it, for your own internal evaluation and information — including on behalf of your organization. That permission is revocable and does not transfer ownership of anything.',
          },
          { p: 'You agree not to do the following.' },
          {
            list: [
              'Copy, republish, redistribute, sell, license or exploit any part of this site or its content commercially, or make it available to anyone outside your organization, without our written permission.',
              'Remove, obscure or alter any copyright, trademark or other proprietary notice.',
              'Present our material as your own, or in a way that misrepresents what our products do.',
              'Use automated means to scrape, harvest, index or bulk-download this site or the documents on it, other than a search-engine crawler acting in accordance with our robots directives.',
              'Submit false information in a form, impersonate anyone, or use another person’s details.',
              'Interfere with the operation of this site, circumvent the document-access controls, or attempt to obtain material you have not been given access to.',
              'Introduce malicious code, or use this site in a way that breaks any applicable law.',
            ],
          },
        ],
      },
      {
        id: 'security-testing',
        h: 'Security testing and responsible disclosure',
        blocks: [
          {
            p: 'We are a security company, so we will be direct about this. Do not conduct penetration testing, vulnerability scanning, load testing or any other intrusive security assessment against this website or ASPIS infrastructure without our prior written authorization. Unauthorized testing is a breach of these terms and may be unlawful regardless of intent.',
          },
          {
            p: 'If you find a vulnerability, we want to hear about it. Report it through our responsible-disclosure route and we will work with you.',
          },
          {
            links: [
              { label: 'Responsible disclosure', href: '/security-and-trust#responsible-disclosure' },
            ],
          },
        ],
      },
      {
        id: 'documents',
        h: 'Gated documents',
        blocks: [
          {
            p: 'Some documents on this site are available only after you provide your name, business email address, organization and job title. By requesting one you confirm that the details you give are accurate and that you are authorized to give them.',
          },
          {
            p: 'Those documents are made available for your evaluation and internal use. They remain the property of ASPIS, they may not be redistributed outside your organization or published, and the access granted may be withdrawn.',
          },
        ],
      },
      {
        id: 'ip',
        h: 'Intellectual property',
        blocks: [
          {
            p: 'This site and everything on it — text, layout, graphics, diagrams, code, documents and the arrangement of them — is owned by ASPIS or its licensors and is protected by intellectual-property law. Nothing in these terms transfers any of it to you.',
          },
          {
            p: 'ASPIS, ShieldiT, ManageiT, SentinelIQ, ShieldMe and the ASPIS logo are marks of ASPIS. You may not use them without our written permission, except to refer accurately to our products. Other names and marks on this site belong to their respective owners, and their appearance does not imply any endorsement or relationship unless we say so explicitly.',
          },
        ],
      },
      {
        id: 'product-information',
        h: 'Product information on this site',
        blocks: [
          {
            p: 'The product and capability descriptions on this site are general information, written to help you decide whether to talk to us. They are not a specification, a warranty, or a commitment to deliver any particular feature.',
          },
          {
            p: 'What a given deployment actually does depends on the product edition, how it is configured, how it is deployed, and the integrations in place. Availability of individual capabilities varies accordingly. Where a page says a capability applies "where configured", "where applicable", or "depending on deployment", that qualification is meant literally.',
          },
          {
            p: 'Nothing on this site is legal, regulatory or compliance advice. Where we describe how our products can support a compliance program, that is a statement about the products, not a representation that using them makes your organization compliant with any framework. Assessing your own obligations remains yours.',
          },
          {
            p: 'Statements about our plans or intentions are forward-looking and may change. We are not obliged to update them.',
          },
        ],
      },
      {
        id: 'links',
        h: 'Links to and from this site',
        blocks: [
          {
            p: 'This site links to services we do not control, including the ManageiT administration portal, ShieldMe and LinkedIn. We are not responsible for their content, their availability or their handling of your data, and a link is not an endorsement.',
          },
          {
            p: 'You may link to our home page from your own site provided you do so fairly, without implying an endorsement or relationship we have not agreed to, and without framing our pages inside your own. We may ask you to remove a link and you agree to do so.',
          },
        ],
      },
      {
        id: 'availability',
        h: 'Availability',
        blocks: [
          {
            p: 'We aim to keep this site available but we do not guarantee it. We may change, suspend, restrict or withdraw any part of it, or the whole of it, at any time and without notice. We may also withdraw your access to gated material if you breach these terms.',
          },
        ],
      },
      {
        id: 'no-warranty',
        h: 'No warranty',
        blocks: [
          {
            p: 'This site and its content are provided "as is" and "as available". To the fullest extent permitted by law, ASPIS disclaims all warranties, express or implied, including any implied warranty of merchantability, fitness for a particular purpose, non-infringement, accuracy, or that the site will be uninterrupted, timely, secure or error-free.',
          },
          {
            p: 'We take care over what we publish, but we do not warrant that the content is complete, current or free of error, and you should not rely on it as the sole basis for a decision. Where a decision matters, talk to us.',
          },
        ],
      },
      {
        id: 'liability',
        h: 'Limitation of liability',
        blocks: [
          {
            p: 'To the fullest extent permitted by law, ASPIS will not be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, or for any loss of profit, revenue, business, goodwill, anticipated savings or data, arising out of or in connection with your use of this site — whether in contract, tort, negligence, strict liability or otherwise, and whether or not we were advised of the possibility.',
          },
          {
            p: 'To the fullest extent permitted by law, our total aggregate liability arising out of or in connection with this site will not exceed one hundred United States dollars (US$100).',
          },
          {
            p: 'Nothing in these terms excludes or limits any liability that cannot lawfully be excluded or limited, including liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation. Some jurisdictions do not allow certain exclusions or limitations, in which case the exclusions and limitations above apply to the maximum extent their law permits.',
          },
        ],
      },
      {
        id: 'indemnity',
        h: 'Indemnity',
        blocks: [
          {
            p: 'You agree to indemnify ASPIS against any claim, loss, liability, cost or expense (including reasonable legal fees) arising from your breach of these terms or your misuse of this site.',
          },
        ],
      },
      {
        id: 'privacy',
        h: 'Privacy',
        blocks: [
          {
            p: 'Our Privacy Policy explains what personal information this site collects and how we handle it. By using this site you acknowledge that policy.',
          },
          {
            links: [
              { label: 'Privacy Policy', href: '/legal/privacy-policy' },
              { label: 'Cookie Policy', href: '/legal/cookie-policy' },
            ],
          },
        ],
      },
      {
        id: 'law',
        h: 'Governing law and jurisdiction',
        blocks: [
          {
            p: 'These terms, and any dispute or claim arising out of or in connection with them or your use of this site, are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws rules.',
          },
          {
            p: 'You and ASPIS submit to the exclusive jurisdiction of the state and federal courts located in the State of Delaware for the resolution of any such dispute, and you waive any objection to those courts on grounds of venue or inconvenient forum. Where the mandatory law of your country of residence gives you the right to bring proceedings elsewhere, this clause does not remove that right.',
          },
        ],
      },
      {
        id: 'general',
        h: 'General',
        blocks: [
          {
            p: 'If any provision of these terms is held unenforceable, the rest continues in force and the unenforceable provision applies to the maximum extent permitted. Our failure to enforce a provision is not a waiver of it. You may not assign these terms; we may assign them in connection with a corporate transaction. These terms, together with our Privacy Policy, are the entire agreement between you and us about this website.',
          },
        ],
      },
      {
        id: 'changes',
        h: 'Changes to these terms',
        blocks: [
          {
            p: 'We may revise these terms. The date at the top of this page is the date of the current version, and the version in force is the one published when you use the site. Please check it from time to time.',
          },
        ],
      },
      {
        id: 'contact',
        h: 'Contacting us',
        blocks: [
          {
            p: `Questions about these terms, or requests for permission to use our material, can be sent to ${PRIVACY_EMAIL}.`,
          },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────── cookie policy ── */
  'cookie-policy': {
    title: 'Cookie Policy',
    blurb: 'Every cookie this website sets, what it does, and how to remove it.',
    updated: UPDATED,
    lede:
      'There are two, both first-party, both functional, and neither is set until you ask to open a document. This page is short because there is very little to disclose.',
    sections: [
      {
        id: 'what',
        h: 'What we set, and when',
        blocks: [
          {
            p: 'Arriving at this site, browsing it and reading it sets no cookies at all. The two cookies below are set only when you submit the form that opens a published document, and only because the document gate cannot work without them.',
          },
          {
            table: {
              label: 'Cookies set by this website',
              head: ['Cookie', 'Type', 'Purpose', 'Lifetime'],
              rows: [
                [
                  'aspis_doc_access',
                  'First-party, functional',
                  'Records that the document-access form has been completed, so documents can be opened. Signed, and marked HttpOnly so scripts in your browser cannot read it.',
                  '30 days',
                ],
                [
                  'aspis_doc_ok',
                  'First-party, functional',
                  'A readable flag so the page does not ask for your details again on a return visit. It grants no access by itself.',
                  '30 days',
                ],
              ],
            },
          },
          {
            p: 'Both are scoped to this site, sent only over HTTPS in production, and set with SameSite=Lax so they are not sent from third-party contexts.',
          },
        ],
      },
      {
        id: 'not-used',
        h: 'What we do not set',
        blocks: [
          {
            list: [
              'No analytics cookies. There is no third-party analytics on this site.',
              'No advertising, marketing or retargeting cookies, and no tracking pixels or conversion tags.',
              'No cross-site or cross-context tracking of any kind.',
              'No social-media cookies. We link to LinkedIn; we do not embed it.',
              'No local storage or similar technology used to identify or profile you.',
            ],
          },
          {
            p: 'This is why the site does not present a consent banner. There is no non-essential cookie to consent to.',
          },
        ],
      },
      {
        id: 'control',
        h: 'How to remove them',
        blocks: [
          {
            p: 'Every mainstream browser lets you view and delete cookies for a specific site, and block them entirely. Blocking or deleting these two has one consequence and no other: you will be asked for your details again the next time you open a document.',
          },
        ],
      },
      {
        id: 'more',
        h: 'More detail',
        blocks: [
          {
            p: `Our Privacy Policy explains what happens to the details you submit with that form. Any question about cookies can go to ${PRIVACY_EMAIL}.`,
          },
          { links: [{ label: 'Privacy Policy', href: '/legal/privacy-policy' }] },
        ],
      },
    ],
  },

  /* ───────────────────────────────────────────────── still to be written ── */
  accessibility: {
    title: 'Accessibility',
    blurb:
      'The ASPIS approach to digital accessibility, the standard this site is measured against, and how to report a barrier.',
    updated: UPDATED,
    lede: '',
    pending: true,
    sections: [],
  },
};

export const LEGAL_SLUGS = Object.keys(LEGAL_DOCS);
