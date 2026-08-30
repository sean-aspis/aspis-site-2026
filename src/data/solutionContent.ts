/**
 * Industry page expansion content.
 *
 * SOURCE: the nine ASPIS-published PDFs supplied by the client on 30 Aug 2026
 * (see src/data/documents.ts). Every capability statement below traces to one
 * of those documents. Nothing is invented.
 *
 * CLAIMS DISCIPLINE — what was deliberately left out of the source material:
 *
 *  · Customer results. The healthcare document is written as a case study of an
 *    unnamed provider and reports outcomes ("within the first 90 days",
 *    "independent audits confirmed continuous compliance with zero endpoint
 *    security gaps"). None of that appears here: no customer, no deployment, no
 *    detection rate, no time-to-value.
 *  · Achieved-reduction claims. The source's impact sections say fraud and
 *    compromise are "significantly reduced". Outcomes here are stated as what
 *    the architecture is designed to do, not as measured results.
 *  · Certification. The source says "designed to support" and "compliance
 *    alignment" for ISO 27001, SOC 2 Type II, FedRAMP and the rest. That
 *    qualification is preserved everywhere; ASPIS is never described as
 *    certified, authorized or accredited, and is never said to make a customer
 *    compliant.
 *  · Third-party technology providers are not named.
 *
 * Framework names are the customer's obligations, listed so a reader can see
 * which regime the page is speaking to. `frameworkNote` carries the qualifier
 * and must not be dropped.
 */

export type Challenge = { t: string; d: string };
export type CapabilityGroup = { t: string; points: string[] };
export type Outcome = { t: string; d: string };

export type SolutionContent = {
  challengesTitle: string;
  challengesLede: string;
  challenges: Challenge[];
  capabilitiesTitle: string;
  capabilitiesLede: string;
  capabilities: CapabilityGroup[];
  outcomesTitle: string;
  outcomesLede: string;
  outcomes: Outcome[];
  frameworks?: string[];
  frameworkNote?: string;
};

const ALIGNMENT_NOTE =
  'ASPIS supports customer programs aligned with these frameworks. Coverage depends on edition, configuration and deployment model; the obligation to demonstrate compliance remains with the customer.';

export const SOLUTION_CONTENT: Record<string, SolutionContent> = {
  /* ─────────────────────────────────────────────────────────── ENTERPRISE */
  enterprise: {
    challengesTitle: 'Where enterprise mobility breaks down',
    challengesLede:
      'The device that carries a corporate identity also carries the messages, the files and the network the employee happened to join this morning.',
    challenges: [
      {
        t: 'Communication outside the sanctioned stack',
        d: 'Teams fall back on consumer messaging when the approved tool is slower than the moment. That traffic leaves the organization with no policy, no record and no visibility into the endpoint that sent it.',
      },
      {
        t: 'Phishing that never touches email',
        d: 'Delivery has moved to SMS, messaging apps, QR codes and malicious URLs — channels the mail gateway never sees and the user is conditioned to trust.',
      },
      {
        t: 'BYOD and COPE on the same footing',
        d: 'Personal and corporate-owned devices reach the same systems. Applying one standard of protection to both, without taking the personal device hostage, is the practical problem.',
      },
      {
        t: 'Networks the organization does not control',
        d: 'Hotels, airports, cafés and customer sites. Rogue access points and spoofed networks are cheap to stand up and hard for a user to distinguish from the real one.',
      },
      {
        t: 'Fragmented tooling, fragmented picture',
        d: 'Device management, threat defense, messaging and archiving bought separately produce four partial views and no single answer to whether an endpoint should be trusted right now.',
      },
      {
        t: 'Evidence assembled after the fact',
        d: 'When governance or an investigation asks what happened, the answer has to be reconstructed from systems that were never designed to agree with each other.',
      },
    ],
    capabilitiesTitle: 'What the platform does',
    capabilitiesLede:
      'Drawn from the ShieldiT Enterprise and ShieldiT Protect white papers. Availability varies by edition and configuration.',
    capabilities: [
      {
        t: 'Encrypted communications',
        points: [
          'End-to-end encrypted chat, voice, video and media sharing.',
          'AES-256 with Olm/Megolm protocols and Double Ratchet key management.',
          'Forward and backward secrecy, so a key compromise does not expose the history.',
          'Group membership, external federation and file movement follow policy rather than user choice.',
        ],
      },
      {
        t: 'Mobile Threat Defense',
        points: [
          'On-device AI analysis of device behaviour, applications, networks and phishing indicators.',
          'Phishing detection across SMS, email, in-app links and QR codes.',
          'Malicious and non-compliant application identification through on-device heuristics.',
          'Rogue access point, spoofed network and man-in-the-middle detection.',
          'Continuous device risk posture monitoring, including OS integrity.',
        ],
      },
      {
        t: 'Administration and governance',
        points: [
          'Centralised administration of communications, device security and policy through the ManageiT console.',
          'AuditBot logging of device events, user activity and policy enforcement.',
          'Policy enforcement and threat remediation issued directly from the console.',
        ],
      },
      {
        t: 'Fits the estate you already run',
        points: [
          'Identity: Entra ID / Azure AD, Okta, Google Workspace and SAML/OIDC for single sign-on and role-based access.',
          'Endpoint management: coexistence and policy synchronisation with Intune, Workspace ONE and MobileIron.',
          'Security operations: telemetry and incident forwarding to SIEM and XDR platforms.',
          'Compliance: export into Microsoft Purview and comparable archives.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede:
      'Design intent, not measured results. What any given organization sees depends on its estate, its policy and how it deploys.',
    outcomes: [
      {
        t: 'One standard across every endpoint',
        d: 'Corporate, BYOD, remote and on-site devices evaluated against the same posture requirements before they carry sensitive communication.',
      },
      {
        t: 'A sanctioned channel people will actually use',
        d: 'Encrypted chat, voice, video and file exchange across mobile and desktop under one enterprise identity, so the workaround stops being the fast path.',
      },
      {
        t: 'Consolidation of overlapping tools',
        d: 'Secure communications and mobile threat defense in one platform rather than separate purchases producing separate partial views.',
      },
      {
        t: 'Threats handled on the device',
        d: 'Detection runs on the endpoint rather than depending on constant cloud connectivity, so protection holds where the network does not.',
      },
      {
        t: 'A record that already exists',
        d: 'Device events, user activity and policy enforcement captured continuously, so governance questions are answered from a log rather than a reconstruction.',
      },
      {
        t: 'Deployment shaped to the organization',
        d: 'Multi-tenant SaaS, private cloud or dedicated infrastructure, supporting centralised, decentralised and hybrid IT structures.',
      },
    ],
    frameworks: ['ISO 27001', 'SOC 2 Type II'],
    frameworkNote: ALIGNMENT_NOTE,
  },

  /* ────────────────────────────────────────────────────── FINANCIAL SERVICES */
  'financial-services': {
    challengesTitle: 'The problem financial institutions actually have',
    challengesLede:
      'Two obligations at once: keep high-value communication confidential, and be able to produce it years later in a form a regulator accepts.',
    challenges: [
      {
        t: 'The people holding the value are the targets',
        d: 'Executives, traders, wealth managers and client advisors are pursued through compromised devices, SIM swaps and advanced phishing across SMS and consumer messaging platforms.',
      },
      {
        t: 'Off-channel communication',
        d: 'WhatsApp, Signal, Telegram and personal email carry business that supervisory policy requires to be captured. Every message on those channels is a gap in the record.',
      },
      {
        t: 'Retention regimes with teeth',
        d: 'SEC 17a-4 and FINRA retention mandates require confidentiality, retention and auditable communications across all channels — not only the ones IT provisioned.',
      },
      {
        t: 'MDM alone does not answer the question',
        d: 'Device management can tell you a device is enrolled. It does not tell you the endpoint is uncompromised at the moment a confidential conversation begins.',
      },
      {
        t: 'Communication that crosses boundaries',
        d: 'Deal teams span banks, subsidiaries, fund administrators, advisors and clients. Who may speak to whom is a policy question, and most tooling has no way to express it.',
      },
      {
        t: 'Audits assembled by hand',
        d: 'Where logging, archiving and device telemetry live in separate systems, supervisory review and eDiscovery become manual reconstruction exercises.',
      },
    ],
    capabilitiesTitle: 'Capabilities for financial institutions',
    capabilitiesLede:
      'Drawn from the ShieldiT FSX white paper and the Financial Services use case. Availability varies by edition and configuration.',
    capabilities: [
      {
        t: 'Federated secure collaboration',
        points: [
          'End-to-end encrypted communication across internal teams, external investors, fund administrators, banks and clients.',
          'Federation controls defining who may initiate or receive communication across domains, firms and business units.',
          'Role-based visibility to enforce confidentiality policy — trader to compliance only, advisor to client, and so on.',
          'Compliance-controlled channels and secure deal rooms for M&A, IPO and high-value trading activity.',
        ],
      },
      {
        t: 'Recording and retention',
        points: [
          'Policy-driven call and video recording with encryption in transit and at rest.',
          'SRTP-over-TLS protection for real-time media streams.',
          'Role-based recording controls — for example, recording trading desks while exempting privileged legal roles.',
          'Retention policies aligned with SEC 17a-4, FINRA, SOX, GLBA, PCI DSS and FFIEC supervisory expectations.',
          'Recordings indexed, time-stamped and exportable for compliance review or eDiscovery.',
        ],
      },
      {
        t: 'Supervision and audit',
        points: [
          'AuditBot logging of privileged actions, administrative changes and configuration modifications.',
          'Immutable, cryptographically signed audit logs supporting evidentiary integrity and litigation hold.',
          'Off-channel communication detection, identifying unauthorized messaging pathways.',
          'Compliance-ready archival and export to Microsoft Purview, Smarsh, Global Relay or customer-designated systems.',
        ],
      },
      {
        t: 'Endpoint and data control',
        points: [
          'On-device detection of SIM swaps, rogue applications, man-in-the-middle attacks and device compromise.',
          'Root and jailbreak detection with OS integrity monitoring and automated remediation.',
          'Device quarantine and conditional access for high-risk or non-compliant endpoints.',
          'DLP controls on copy, paste, screenshots and external file sharing across regulated channels.',
          'Geo-fencing aligned to trading floors and advisory zones; workspace isolation for BYOD.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede:
      'Design intent, not measured results. Regulatory outcomes depend on the institution’s own program, policy and supervision.',
    outcomes: [
      {
        t: 'Confidential collaboration with boundaries that hold',
        d: 'Auditable communication across banks, investment firms, fund administrators and clients, governed by fine-grained federation policy rather than convention.',
      },
      {
        t: 'A replacement for the risky consumer app',
        d: 'A sanctioned channel fast enough that WhatsApp, Signal, Telegram and personal email stop being the path of least resistance for sensitive business.',
      },
      {
        t: 'Audit work that starts from a record',
        d: 'Immutable logging, automated export and supervisory reporting, so review begins with evidence rather than reconstruction.',
      },
      {
        t: 'Compromise addressed at the endpoint',
        d: 'On-device detection and posture enforcement applied continuously, so a compromised phone is caught before it joins a confidential conversation.',
      },
      {
        t: 'Mobility for front, middle and back office',
        d: 'Trading desks, advisory teams and executive leadership operating mobile while auditability and supervisory control are preserved.',
      },
      {
        t: 'Fewer systems to govern',
        d: 'Communications, threat defense, recording and export consolidated into one platform, reducing the surface a compliance program has to reason about.',
      },
    ],
    frameworks: [
      'SEC 17a-4',
      'FINRA',
      'GLBA',
      'SOX',
      'PCI DSS',
      'FFIEC',
      'MiFID II where applicable',
    ],
    frameworkNote: ALIGNMENT_NOTE,
  },

  /* ─────────────────────────────────────────────────────────── GOVERNMENT */
  government: {
    challengesTitle: 'What agencies are defending against',
    challengesLede:
      'State, local, education and federal agencies operate in some of the most targeted environments there are, under some of the most explicit mandates.',
    challenges: [
      {
        t: 'Nation-state and ransomware campaigns',
        d: 'Aimed at disrupting operations, compromising sensitive data and destabilising public infrastructure — not at extracting a payment from a single office.',
      },
      {
        t: 'Mobile espionage tradecraft',
        d: 'SIM swaps, rogue base stations and zero-click exploits designed specifically to bypass defenses built for laptops and email.',
      },
      {
        t: 'Insider risk and unmanaged devices',
        d: 'Unauthorized data exfiltration from compromised or unmanaged endpoints, often in sensitive or classified environments where the consequence is disproportionate.',
      },
      {
        t: 'Mandates that specify the evidence',
        d: 'FISMA, FedRAMP, CJIS, CMMC and NIST 800-53 require data confidentiality, integrity, authenticity and traceability — not a general assurance of good practice.',
      },
      {
        t: 'Environments that resist modern tooling',
        d: 'Air-gapped networks, classified facilities and legacy systems make secure mobile communication and endpoint protection genuinely hard to implement at scale.',
      },
      {
        t: 'Consumer platforms filling the gap',
        d: 'Where no sanctioned mobile channel exists, coordination moves to public messaging apps — outside agency control, outside the record.',
      },
    ],
    capabilitiesTitle: 'Capabilities for public sector',
    capabilitiesLede:
      'Drawn from the SLED & Federal Government use case and the ShieldiT Defense white paper. Availability varies by deployment.',
    capabilities: [
      {
        t: 'Mission-grade communications',
        points: [
          'End-to-end encrypted voice, video and messaging designed for government environments.',
          'Federation controls managing communication across departments, agencies, contractors and partners.',
          'Complete isolation from public messaging platforms.',
        ],
      },
      {
        t: 'Mobile threat defense',
        points: [
          'Continuous protection against mobile malware, spyware and zero-click exploits targeting government personnel.',
          'Defense against SIM swaps, rogue access points and device tampering.',
          'Enforced device health checks and posture verification before access to sensitive systems is granted.',
        ],
      },
      {
        t: 'Identity and access',
        points: [
          'Granular role-based access mapped by agency, department, clearance level and mission role.',
          'Secure provisioning and rapid deactivation across multiple government domains.',
          'Interoperability with Azure Government AD, CAC/PIV authentication and other approved identity providers.',
        ],
      },
      {
        t: 'Deployment and oversight',
        points: [
          'On-premises, air-gapped, private cloud or government cloud deployment.',
          'Operates with or without MDM/EMM integration.',
          'AuditBot logging and privileged action monitoring; secure export to government compliance databases, SIEM and XDR.',
          'Tamper-resistant, immutable audit logs for investigations and after-action review.',
          'Multi-tenant governance separating users by region, department or clearance level.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede:
      'Design intent, not measured results, and not a statement of any authorization status.',
    outcomes: [
      {
        t: 'Zero-trust mobile operations',
        d: 'Only compliant, trusted devices reach sensitive systems, across classified and unclassified communication alike.',
      },
      {
        t: 'Controlled multi-agency collaboration',
        d: 'Auditable communication between agencies, departments, contractors and vetted external partners without relying on public platforms.',
      },
      {
        t: 'A reduced mobile attack surface',
        d: 'Continuous posture enforcement and on-device threat defense in place of consumer applications operating outside agency control.',
      },
      {
        t: 'Evidence built for oversight',
        d: 'Immutable logging and export designed to support audit readiness against U.S. federal and state standards.',
      },
      {
        t: 'Continuity in degraded conditions',
        d: 'Operation in disconnected, low-bandwidth and tactical environments, so a network failure is not a communications failure.',
      },
      {
        t: 'One platform instead of several',
        d: 'Voice, video, chat, mobile threat defense and governance consolidated rather than assembled from separate procurements.',
      },
    ],
    frameworks: ['FISMA', 'FedRAMP', 'CJIS', 'CMMC', 'NIST 800-53'],
    frameworkNote:
      'ASPIS supports customer programs aligned with these frameworks and is designed to help address requirements associated with them. ASPIS does not represent that it holds authorization under any of them; coverage depends on edition, configuration and deployment model.',
  },

  /* ────────────────────────────────────────────────── DEFENSE & INTELLIGENCE */
  'defense-intelligence': {
    challengesTitle: 'The operating conditions',
    challengesLede:
      'Sophisticated adversaries, a device that concentrates identity and location in one object, and networks that cannot be assumed.',
    challenges: [
      {
        t: 'The mission device is the target',
        d: 'It carries identity, location, contacts and communication together. Adversary tradecraft goes after it directly rather than through the network.',
      },
      {
        t: 'Zero-click and spyware exposure',
        d: 'Exploitation that requires no user action and leaves little trace, aimed at personnel whose communications carry operational consequence.',
      },
      {
        t: 'Denied and degraded networks',
        d: 'Field and tactical operations run in low-bandwidth, disconnected or air-gapped conditions where cloud-dependent security simply stops working.',
      },
      {
        t: 'Sovereignty over data and keys',
        d: 'Data residency, encryption key custody and infrastructure control are requirements, not preferences, and shared tenancy is often disqualifying.',
      },
      {
        t: 'Legacy mission systems',
        d: 'Integration with existing systems and authentication methods such as CAC/PIV determines whether a platform can be fielded at all.',
      },
      {
        t: 'Contractor and supply-chain access',
        d: 'Third parties need to communicate into the mission without inheriting the access of the people inside it.',
      },
    ],
    capabilitiesTitle: 'Mission capabilities',
    capabilitiesLede:
      'Drawn from the ShieldiT Defense white paper. Availability varies by deployment and configuration.',
    capabilities: [
      {
        t: 'Communications built for the environment',
        points: [
          'AES-256 encrypted chat, voice, video and file sharing using Olm and Megolm protocols with Double Ratchet key management.',
          'Forward and backward secrecy.',
          'Offline synchronisation: messages securely queued and synchronised in denied-network conditions without compromising encryption integrity.',
        ],
      },
      {
        t: 'On-device threat defense',
        points: [
          'AI-powered detection of phishing, malicious applications, rogue networks and device compromise.',
          'Processed entirely on the device, eliminating cloud dependency.',
          'Operates in tactical and hostile environments where connectivity cannot be assumed.',
        ],
      },
      {
        t: 'Isolated infrastructure',
        points: [
          'Dedicated infrastructure: on-premises, air-gapped or secure government cloud.',
          'No shared tenancy or cross-customer federation unless explicitly authorized.',
          'Third-party analytics and external telemetry forwarding disabled by default.',
          'Microservices architecture able to operate with full autonomy when disconnected from external networks.',
        ],
      },
      {
        t: 'Devices, policy and integration',
        points: [
          'ShieldiT Black hardened Android devices, preconfigured with policy lockdowns and mission-specific security profiles.',
          'ManageiT command console: granular control of users, devices and policy with real-time alerts and remote intervention.',
          'Mission-specific policy enforcement at device and network level.',
          'Custom engineering for legacy mission system integration and CAC/PIV authentication.',
          'Optional AuditBot for deployments requiring continuous auditing under heightened security policy.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede: 'Design intent, not measured results.',
    outcomes: [
      {
        t: 'Operational security without operational cost',
        d: 'Protection of communications and endpoints in connected and air-gapped environments without constraining mission readiness.',
      },
      {
        t: 'Full sovereignty',
        d: 'Control over data residency, encryption keys and infrastructure, with private cloud and on-premise options.',
      },
      {
        t: 'Capability that survives the network',
        d: 'Full operational capability in denied-network environments through secure offline synchronisation and on-device detection.',
      },
      {
        t: 'Rapid mission deployment',
        d: 'Fast provisioning and configuration for urgent operational requirements and short-notice readiness.',
      },
      {
        t: 'Controlled partner access',
        d: 'Secure communication and endpoint protection extended to contractors and supply-chain partners under strict federation and role-based control.',
      },
      {
        t: 'Evidence for after-action review',
        d: 'Tamper-resistant, immutable audit logs suitable for investigations and evidentiary use.',
      },
    ],
    frameworks: ['FedRAMP', 'NIST', 'CMMC', 'FIPS 140-2'],
    frameworkNote:
      'ShieldiT Defense is designed to meet defense-grade frameworks including these. ASPIS does not represent that it holds authorization or validation under any of them; alignment depends on deployment and configuration.',
  },

  /* ─────────────────────────────────────────────────────────── HEALTHCARE */
  healthcare: {
    challengesTitle: 'The clinical attack surface',
    challengesLede:
      'Smartphones, tablets, laptops and connected clinical devices carry EMR access, telehealth and patient coordination — and are the first thing an attacker reaches.',
    challenges: [
      {
        t: 'Unprotected endpoints across care environments',
        d: 'Tablets, smartphones, laptops and connected medical devices used for EMR/EHR workflows, telehealth and patient rounds often lack standardized protection.',
      },
      {
        t: 'Frontline teams under targeted phishing',
        d: 'Phishing by SMS, email and QR code, spyware, and malicious healthcare applications designed to compromise patient records and disrupt clinical workflow.',
      },
      {
        t: 'Rogue Wi-Fi in public care settings',
        d: 'Hospitals, clinics and public care environments expose staff to man-in-the-middle attacks via rogue access points and spoofed networks.',
      },
      {
        t: 'Fragmented visibility across BYOD',
        d: 'Security teams lack real-time visibility into risk posture, device compliance and data access across thousands of distributed endpoints, including personal devices and remote staff.',
      },
      {
        t: 'Unsecured clinical messaging',
        d: 'Multi-disciplinary care teams fall back on consumer messaging apps, creating uncontrolled channels and raising the risk of data leakage.',
      },
      {
        t: 'Audit and regulatory exposure',
        d: 'Without centralized logging, policy enforcement and secure retention, providers face audit findings against HIPAA, HITECH, GDPR and NIST 800-53 expectations.',
      },
    ],
    capabilitiesTitle: 'Capabilities for healthcare networks',
    capabilitiesLede:
      'Drawn from the Healthcare use case and the ShieldiT Protect white paper. Availability varies by edition and configuration.',
    capabilities: [
      {
        t: 'Endpoint threat defense',
        points: [
          'Phishing detection across SMS, email, applications and QR codes.',
          'OS-level compromise, rooting and jailbreaking, and device tampering detection.',
          'Rogue Wi-Fi and man-in-the-middle detection and blocking.',
          'Malicious application and behavioural anomaly detection in real time.',
          'Continuous protection in low-bandwidth and offline conditions.',
        ],
      },
      {
        t: 'Coverage across the clinical estate',
        points: [
          'Support for iPadOS, Android tablets, smartphones, laptops and BYOD devices.',
          'Policy enforcement across clinical, administrative and telemedicine workflows.',
          'Quarantine and conditional access for compromised or non-compliant devices.',
          'Optional hardening for connected medical devices and hospital systems.',
        ],
      },
      {
        t: 'Clinical communication',
        points: [
          'End-to-end secure voice, video and messaging across clinical teams.',
          'Role-based communication controls by department, clearance and function.',
          'Federation with external specialists, consultants and partners under policy restriction.',
        ],
      },
      {
        t: 'Oversight and identity',
        points: [
          'Unified ManageiT dashboard for threat visibility, device compliance and communication governance.',
          'Real-time alerts, audit logging and compliance exports.',
          'AuditBot tracking of privileged actions, policy changes and clinical device activity.',
          'Conditional access tied to device risk posture and health, via Entra ID, SAML and OIDC.',
          'Automated remediation and policy enforcement across endpoints.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede:
      'Design intent, not measured results. Compliance outcomes depend on the provider’s own program and controls.',
    outcomes: [
      {
        t: 'One protection standard across the estate',
        d: 'Mobile, tablet, laptop, BYOD and connected clinical endpoints held to the same posture requirements.',
      },
      {
        t: 'Clinical workflows protected end to end',
        d: 'EMR/EHR access, telehealth sessions and care coordination governed by role-based access and on-device threat detection.',
      },
      {
        t: 'A sanctioned channel for care teams',
        d: 'Encrypted, role-based messaging and calling designed to displace consumer apps rather than sit alongside them.',
      },
      {
        t: 'Visibility across distributed facilities',
        d: 'Threat, compliance and governance status for hospitals, clinics and remote care sites in one console.',
      },
      {
        t: 'Zero-trust without clinical friction',
        d: 'Posture checks, conditional access and automated remediation applied in real time, designed not to interrupt care delivery.',
      },
      {
        t: 'Records built for review',
        d: 'Encrypted, logged and auditable communication and device activity, supporting the provider’s own audit and retention obligations.',
      },
    ],
    frameworks: ['HIPAA', 'HITECH', 'GDPR', 'NIST 800-53'],
    frameworkNote: ALIGNMENT_NOTE,
  },

  /* ──────────────────────────────────────────────── CRITICAL INFRASTRUCTURE */
  'critical-infrastructure': {
    challengesTitle: 'The communication layer around the operation',
    challengesLede:
      'Industrial security spends on the plant, the grid and the network. The coordination that decides what happens to them runs on phones.',
    challenges: [
      {
        t: 'The conversation is outside the control system',
        d: 'Operators, engineers, executives and responders coordinate on mobile devices that sit entirely outside the OT security perimeter the organization invested in.',
      },
      {
        t: 'Incident response depends on it most',
        d: 'The moment an operational incident begins is the moment communication matters most — and the moment an adversary is most interested in reading it.',
      },
      {
        t: 'Field personnel on untrusted networks',
        d: 'Remote sites, contractor networks and public connectivity, with rogue access points and spoofed networks in the path.',
      },
      {
        t: 'Contractors and external responders',
        d: 'Third parties have to be brought into coordination quickly, without inheriting standing access to everything else.',
      },
      {
        t: 'Nation-state interest',
        d: 'Critical infrastructure operators face adversaries whose objective is disruption of essential services, not financial return.',
      },
      {
        t: 'Continuity when systems degrade',
        d: 'If the coordination channel depends on the infrastructure that is failing, it fails with it.',
      },
    ],
    capabilitiesTitle: 'Capabilities for essential operations',
    capabilitiesLede:
      'Drawn from the ShieldiT Defense and ShieldiT Protect white papers, which cover critical infrastructure operators. Availability varies by deployment.',
    capabilities: [
      {
        t: 'Resilient secure communication',
        points: [
          'End-to-end encrypted voice, video, messaging and file exchange for operations, leadership and response teams.',
          'Offline synchronisation and deferred delivery in low-bandwidth or disconnected conditions.',
          'Federation controls governing communication with contractors and external responders.',
        ],
      },
      {
        t: 'Endpoint protection in the field',
        points: [
          'On-device detection of phishing, malicious applications, rogue networks and device compromise.',
          'Rogue access point and man-in-the-middle detection on untrusted connectivity.',
          'Device risk posture monitoring including OS integrity and configuration compliance.',
          'Quarantine and conditional access for compromised endpoints.',
        ],
      },
      {
        t: 'Control and deployment',
        points: [
          'ManageiT console for users, devices and policy, with real-time alerts and remote intervention.',
          'On-premises, private cloud, sovereign cloud and air-gapped deployment options.',
          'Operation with or without MDM/EMM integration.',
        ],
      },
      {
        t: 'Record and oversight',
        points: [
          'AuditBot logging of privileged actions and administrative changes.',
          'Tamper-resistant audit logs for investigation and after-action review.',
          'Telemetry and incident forwarding to SIEM and XDR platforms.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede: 'Design intent, not measured results.',
    outcomes: [
      {
        t: 'A protected coordination layer',
        d: 'The communication surrounding essential operations held to the same standard as the operations themselves.',
      },
      {
        t: 'Response that works under pressure',
        d: 'Encrypted channels for leadership, security operations, legal, field teams and external responders, available when the incident starts.',
      },
      {
        t: 'Continuity through degraded conditions',
        d: 'Communication that continues in low-bandwidth, disconnected or isolated environments rather than depending on the systems under stress.',
      },
      {
        t: 'Controlled external participation',
        d: 'Contractors and responders brought into a conversation under federation policy, with access that ends when their involvement does.',
      },
      {
        t: 'Endpoints that report their condition',
        d: 'Field devices continuously evaluated before they carry operational communication.',
      },
      {
        t: 'An evidentiary trail',
        d: 'Immutable logging of privileged actions and administrative changes for post-incident review.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── TECHNOLOGY */
  technology: {
    challengesTitle: 'Where technology companies leak',
    challengesLede:
      'Source code, roadmap, customer data and executive decisions move through channels chosen for speed, by people distributed across time zones and employment types.',
    challenges: [
      {
        t: 'Fast-moving teams pick fast tools',
        d: 'Product, engineering and leadership conversations settle into whichever channel is quickest, which is rarely the one with policy attached.',
      },
      {
        t: 'Contractors inside the conversation',
        d: 'Contract engineers, agencies and outsourced teams need to collaborate closely while holding access that is narrower and shorter-lived than an employee’s.',
      },
      {
        t: 'Intellectual property in transit',
        d: 'Architecture discussion, unreleased roadmap and customer information moving through general-purpose messaging, on devices the company may not own.',
      },
      {
        t: 'A globally distributed endpoint estate',
        d: 'Devices across regions, personal and corporate, on networks no one has vetted, all authenticating to the same systems.',
      },
      {
        t: 'Phishing aimed at privileged engineers',
        d: 'The people with production access are the people worth targeting, through SMS, messaging apps and QR codes rather than corporate email.',
      },
      {
        t: 'Enterprise customers asking harder questions',
        d: 'Security questionnaires and diligence increasingly ask how internal communication and endpoints are governed, not just how the product is built.',
      },
    ],
    capabilitiesTitle: 'What the platform does',
    capabilitiesLede:
      'Drawn from the ShieldiT Enterprise and ShieldiT Protect white papers. Availability varies by edition and configuration.',
    capabilities: [
      {
        t: 'Encrypted collaboration',
        points: [
          'End-to-end encrypted chat, voice, video and file sharing across mobile and desktop.',
          'AES-256 with Olm/Megolm and Double Ratchet key management, with forward and backward secrecy.',
          'Federation controls governing collaboration with contractors, agencies and partners.',
          'Group membership and file movement governed by policy rather than user choice.',
        ],
      },
      {
        t: 'Endpoint threat defense',
        points: [
          'On-device detection of phishing across SMS, email, applications and QR codes.',
          'Malicious and non-compliant application identification.',
          'Rogue network and man-in-the-middle detection.',
          'Continuous device posture and OS integrity monitoring.',
        ],
      },
      {
        t: 'Identity and access',
        points: [
          'Entra ID / Azure AD, Okta, Google Workspace and SAML/OIDC for single sign-on and role-based access.',
          'Automated provisioning and deprovisioning via directory synchronisation, so access tracks employment status.',
          'Workspace isolation separating personal and corporate data on BYOD devices.',
        ],
      },
      {
        t: 'Operations and integration',
        points: [
          'ManageiT console for centralised administration and policy enforcement.',
          'AuditBot logging of device events, user activity and policy enforcement.',
          'Telemetry and incident forwarding to SIEM and XDR platforms.',
          'Coexistence with Intune, Workspace ONE and MobileIron.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede: 'Design intent, not measured results.',
    outcomes: [
      {
        t: 'Sensitive discussion in a governed channel',
        d: 'Roadmap, architecture and customer conversations in a channel with policy, identity and a record attached.',
      },
      {
        t: 'Contractors collaborating under boundaries',
        d: 'External participation defined by federation policy and role-based access rather than by whoever added them to the group.',
      },
      {
        t: 'One standard across a distributed estate',
        d: 'Consistent protection for corporate and personal devices across regions and networks.',
      },
      {
        t: 'Endpoint protection for privileged people',
        d: 'On-device detection for the engineers and executives whose access makes them worth targeting.',
      },
      {
        t: 'Access that ends when the engagement does',
        d: 'Directory-driven provisioning and deprovisioning rather than manual offboarding.',
      },
      {
        t: 'An answer for enterprise diligence',
        d: 'Documented policy enforcement and audit logging to show how internal communication and endpoints are governed.',
      },
    ],
    frameworks: ['ISO 27001', 'SOC 2 Type II'],
    frameworkNote: ALIGNMENT_NOTE,
  },

  /* ─────────────────────────────────────────────────── TELECOMMUNICATIONS */
  telecommunications: {
    challengesTitle: 'The carrier opportunity, and the constraint',
    challengesLede:
      'Carriers protect the connection. What happens on the device at the other end of it is where subscribers actually get hurt.',
    challenges: [
      {
        t: 'Network security stops at the device',
        d: 'The carrier can secure connectivity and still have no view of a phishing SMS, a malicious application or a compromised handset.',
      },
      {
        t: 'Subscribers are targeted directly',
        d: 'SIM swaps, smishing and rogue applications are aimed at the subscriber, not at the network carrying them.',
      },
      {
        t: 'Connectivity is a commodity',
        d: 'Differentiation on price and coverage alone is difficult; security is a value the subscriber can feel.',
      },
      {
        t: 'Business and enterprise subscribers expect more',
        d: 'Business customers increasingly expect their provider to offer endpoint protection, not just a data plan.',
      },
      {
        t: 'Building it in-house is expensive',
        d: 'Developing mobile threat defense and secure communications internally is a multi-year investment outside most carriers’ core competency.',
      },
      {
        t: 'Brand has to stay the carrier’s',
        d: 'A security service the subscriber experiences as someone else’s product does not build carrier loyalty.',
      },
    ],
    capabilitiesTitle: 'What a carrier can deliver',
    capabilitiesLede:
      'Drawn from the ShieldiT Enterprise for MSSPs & MSPs and ShieldiT Protect white papers, which describe the multi-tenant and white-label delivery model. Availability varies by agreement.',
    capabilities: [
      {
        t: 'Delivered under the carrier brand',
        points: [
          'White-labelled branding, domains and notifications aligned to the provider’s identity.',
          'Branded and co-branded security services for consumer, family, business and enterprise subscribers.',
          'Positioned as a carrier service rather than a third-party application.',
        ],
      },
      {
        t: 'Protection on the subscriber device',
        points: [
          'On-device detection of phishing across SMS, email, applications and QR codes.',
          'Malicious application identification through on-device heuristics and behavioural analysis.',
          'Rogue access point, spoofed network and man-in-the-middle detection.',
          'Device risk posture monitoring including OS integrity.',
          'Detection processed on the device rather than depending on constant cloud connectivity.',
        ],
      },
      {
        t: 'Multi-tenant operations',
        points: [
          'Isolated tenant environments with delegated administrator roles.',
          'Per-customer policy enforcement from a single console.',
          'Cross-tenant visibility for the provider’s own operations team.',
        ],
      },
      {
        t: 'Enterprise subscribers, enterprise controls',
        points: [
          'End-to-end encrypted voice, video and messaging for business subscribers.',
          'Identity integration with Active Directory, Entra ID and Okta.',
          'AuditBot logging and compliance export for regulated business customers.',
          'SaaS delivery with dedicated cluster, private cloud or on-premise options for high-security accounts.',
        ],
      },
    ],
    outcomesTitle: 'What the model is designed to achieve',
    outcomesLede: 'Design intent, not measured results, and not a revenue projection.',
    outcomes: [
      {
        t: 'Differentiation beyond coverage and price',
        d: 'A security capability the subscriber experiences directly, delivered under the carrier’s own brand.',
      },
      {
        t: 'A new recurring service line',
        d: 'Subscriber security packaged as an ongoing service rather than a one-off feature.',
      },
      {
        t: 'Protection extended to the endpoint',
        d: 'Coverage of the device and the subscriber’s communication, not only the connection between them.',
      },
      {
        t: 'Time to market without building it',
        d: 'A platform to deliver under the carrier brand rather than a multi-year internal development programme.',
      },
      {
        t: 'One console across the subscriber base',
        d: 'Tenant isolation with cross-tenant visibility for the provider’s operations team.',
      },
      {
        t: 'Business subscribers served properly',
        d: 'Encrypted communications, identity integration and compliance logging for enterprise accounts on the same platform.',
      },
    ],
  },

  /* ─────────────────────────────────────────── EXECUTIVE & BOARD SECURITY */
  'executive-board-security': {
    challengesTitle: 'Why leadership communication is different',
    challengesLede:
      'A small number of people hold the information with the highest consequence, and they are the least likely to accept friction.',
    challenges: [
      {
        t: 'The highest-value target set',
        d: 'Executives and directors are pursued directly through compromised devices, SIM swaps and advanced phishing, because what they hold is worth the effort.',
      },
      {
        t: 'Decisions made outside business systems',
        d: 'Board discussion, M&A strategy, cyber incidents, legal matters and crisis response routinely happen in channels that were never provisioned for them.',
      },
      {
        t: 'Directors are not employees',
        d: 'Board members use personal devices the organization does not manage and often cannot enrol, while handling its most sensitive material.',
      },
      {
        t: 'Crisis response cannot use normal channels',
        d: 'During an incident the organization’s own systems may be compromised, unavailable, or subject to disclosure.',
      },
      {
        t: 'Confidentiality boundaries between roles',
        d: 'Some conversations must include legal and exclude everyone else; the boundary has to be enforceable, not conventional.',
      },
      {
        t: 'Governance evidence for decisions',
        d: 'Decisions and their action items need a record, without recording deliberation that ought not to be recorded.',
      },
    ],
    capabilitiesTitle: 'The executive environment',
    capabilitiesLede:
      'Drawn from the ShieldiT FSX white paper and the Financial Services use case, which cover executive and high-assurance roles. Availability varies by edition and configuration.',
    capabilities: [
      {
        t: 'Hardened communication pathways',
        points: [
          'End-to-end encrypted messaging, voice, video and file exchange for leadership and board use.',
          'Hardened pathways for roles requiring heightened confidentiality — executive leadership, supervisors and high-risk units.',
          'Consistent security across remote, hybrid and BYOD contexts.',
        ],
      },
      {
        t: 'Boundaries between roles',
        points: [
          'Federation policy defining who may communicate internally, who may communicate externally, and which roles are restricted entirely.',
          'Role-based access mapped to executive, legal, compliance and director roles.',
          'Group-based access policy for matter-specific or governance-sensitive conversation.',
          'Role-based recording controls, including exemption of privileged roles.',
        ],
      },
      {
        t: 'Endpoint assurance for principals',
        points: [
          'On-device detection of SIM swaps, rogue applications, man-in-the-middle attacks and device compromise.',
          'Root and jailbreak detection with OS integrity monitoring.',
          'Conditional access driven by device risk, OS integrity and behaviour.',
          'Workspace isolation separating personal and organizational data on personal devices.',
        ],
      },
      {
        t: 'Data control and record',
        points: [
          'DLP restrictions on copy, paste, screenshots and external file sharing.',
          'AuditBot logging of privileged actions and administrative changes.',
          'Immutable, cryptographically signed audit logs supporting litigation hold.',
          'Export to designated archives where retention applies.',
        ],
      },
    ],
    outcomesTitle: 'What the architecture is designed to achieve',
    outcomesLede: 'Design intent, not measured results.',
    outcomes: [
      {
        t: 'A dedicated environment for leadership',
        d: 'Sensitive decisions in a channel provisioned for them, rather than in whichever application was closest to hand.',
      },
      {
        t: 'Directors included without being enrolled',
        d: 'Workspace isolation on personal devices, so board members participate without the organization taking custody of the device.',
      },
      {
        t: 'Confidentiality boundaries that hold',
        d: 'Who may speak to whom expressed as enforceable policy rather than as an understanding.',
      },
      {
        t: 'A channel that survives an incident',
        d: 'Communication independent of the systems that may themselves be compromised during a crisis.',
      },
      {
        t: 'Endpoint assurance for the highest-value targets',
        d: 'Continuous posture and compromise detection on the devices carrying the organization’s most consequential material.',
      },
      {
        t: 'Governance evidence without over-collection',
        d: 'Privileged action logging and immutable records, with recording controls that can exempt privileged roles.',
      },
    ],
  },

  /* ───────────────────────────────────────────────────────────── MSP/MSSP */
  'msp-mssp': {
    challengesTitle: 'What partners are up against',
    challengesLede:
      'Clients are asking for mobile security. Building it, or reselling four products that do not talk to each other, are both bad answers.',
    challenges: [
      {
        t: 'Demand for turnkey mobile security',
        d: 'Clients increasingly expect their provider to cover mobile endpoints and communications, not only servers, networks and email.',
      },
      {
        t: 'MDM alone is no longer a differentiator',
        d: 'Basic device management is commoditised. It does not detect a compromised device and it does not secure the conversation on it.',
      },
      {
        t: 'Multiple clients, multiple environments',
        d: 'Every customer has different policy, identity and compliance requirements, and each needs to stay genuinely isolated from the others.',
      },
      {
        t: 'Building it is not viable',
        d: 'Developing secure communications and mobile threat defense in-house is a heavy investment well outside most providers’ core business.',
      },
      {
        t: 'The service has to carry the partner’s brand',
        d: 'A capability the client experiences as a third-party product does not build the provider’s relationship or its margin.',
      },
      {
        t: 'Regulated clients need evidence',
        d: 'Customers in regulated sectors need logging and export that supports their own audits, not a general assurance from their provider.',
      },
    ],
    capabilitiesTitle: 'Capabilities for service providers',
    capabilitiesLede:
      'Drawn from the ShieldiT Enterprise for MSSPs & MSPs white paper. Availability varies by partner agreement.',
    capabilities: [
      {
        t: 'Multi-tenant architecture',
        points: [
          'Isolated tenant environments per client.',
          'Delegated administrator roles for security and control.',
          'Cross-tenant visibility for the provider’s operations team.',
          'Per-customer policy enforcement from a single console.',
        ],
      },
      {
        t: 'Full white-labelling',
        points: [
          'Customised branding, domains and notifications aligned to partner identity.',
          'Delivered as the partner’s own service to corporate, government and high-risk clients.',
        ],
      },
      {
        t: 'The service itself',
        points: [
          'End-to-end encrypted voice, video and chat using AES-256 with Olm/Megolm and Double Ratchet key management.',
          'On-device detection of phishing, rogue networks, device compromise and malicious applications.',
          'ManageiT console for threat management, device oversight and customer-specific policy.',
          'AuditBot capture and export of communications and events for client audits.',
        ],
      },
      {
        t: 'Fits each client’s estate',
        points: [
          'Active Directory, Entra ID, Okta and Intune integration.',
          'Forwarding to major SIEM platforms.',
          'Export to compliance platforms.',
          'SaaS-first delivery with dedicated clusters, private cloud or on-premise hosting for high-security clients.',
        ],
      },
    ],
    outcomesTitle: 'What the partner model is designed to achieve',
    outcomesLede:
      'Design intent, not measured results, and not a revenue or margin projection.',
    outcomes: [
      {
        t: 'Accelerated time to market',
        d: 'Launch branded secure mobile services without the development investment building them would require.',
      },
      {
        t: 'A recurring service line',
        d: 'Mobile security and secure communications packaged as an ongoing managed service.',
      },
      {
        t: 'A differentiated stack',
        d: 'Unified communications and mobile threat defense rather than device management alone.',
      },
      {
        t: 'Operational efficiency across clients',
        d: 'Tenant isolation, role-based access and cross-tenant visibility from one console.',
      },
      {
        t: 'Evidence for regulated clients',
        d: 'Automated capture and export designed to support client audits under their own frameworks.',
      },
      {
        t: 'Deployment flexibility per account',
        d: 'SaaS for most clients, dedicated or on-premise infrastructure for the ones that require it.',
      },
    ],
    frameworks: ['ISO 27001', 'SOC 2 Type II'],
    frameworkNote:
      'Partners can build service packages that support client programs aligned with these frameworks. Coverage depends on edition, configuration and deployment model; the obligation to demonstrate compliance remains with the end customer.',
  },
};

export const hasContent = (key: string) => key in SOLUTION_CONTENT;
