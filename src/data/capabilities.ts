// AUTO-GENERATED from "ASPIS Website v2.dc.html" (v1.4 design handoff).
// Content is verbatim from the design file — do not paraphrase.

export const CAPABILITIES = {
  "secure-communications": {
    "name": "Secure Communications",
    "lede": "Encryption is the beginning, not the entire security model.",
    "intro": "Protecting information in transit is fundamental. But an encrypted conversation can still be exposed through the endpoint, the account, the session, the authentication process, or the surrounding network. ASPIS treats secure communications as one layer of a broader security architecture.",
    "blocks": [
      {
        "title": "Every communication mode",
        "items": [
          "Messaging",
          "Voice",
          "Video",
          "Group collaboration",
          "File sharing",
          "Conferencing",
          "Controlled external federation",
          "PSTN capabilities where configured"
        ]
      },
      {
        "title": "Cryptographic architecture",
        "items": [
          "AES-256 encryption",
          "Olm and Megolm protocols",
          "Double Ratchet key management",
          "Forward and backward secrecy",
          "HMAC-SHA-256 authentication",
          "SRTP-over-TLS media protection",
          "Customer-controlled certificates"
        ]
      },
      {
        "title": "Enterprise identity",
        "items": [
          "Microsoft Entra ID",
          "Active Directory",
          "Okta",
          "SAML / OIDC / LDAP / SCIM",
          "MFA",
          "CAC/PIV where applicable"
        ]
      },
      {
        "title": "Controlled federation",
        "items": [
          "Who may communicate",
          "Which groups may interact",
          "Which external organizations are permitted",
          "Which communication paths are prohibited",
          "Business units, subsidiaries, partners, contractors"
        ]
      }
    ],
    "note": "Enterprise and government environments require explicit communication boundaries. The organization defines them—not a public messaging network."
  },
  "mobile-threat-defense": {
    "name": "Mobile Threat Defense",
    "lede": "The smartphone is now an enterprise security boundary.",
    "intro": "Mobile devices hold corporate credentials, authentication tokens, email, financial information, business applications, executive communications, and cloud access. They are privileged enterprise endpoints, and attackers treat them that way.",
    "blocks": [
      {
        "title": "Modern mobile threats",
        "items": [
          "Phishing and smishing",
          "Malicious QR codes",
          "Malicious links",
          "Rogue applications",
          "Unsafe Wi-Fi",
          "Man-in-the-middle attacks",
          "Rooting and jailbreaking",
          "Spyware",
          "Credential theft"
        ]
      },
      {
        "title": "On-device intelligence",
        "items": [
          "Phishing detection",
          "QR-code analysis",
          "Application-risk detection",
          "Network-risk detection",
          "MITM detection",
          "Root/jailbreak detection",
          "Device-integrity monitoring",
          "Sensor-abuse indicators",
          "Device-risk scoring"
        ]
      },
      {
        "title": "Detect, understand, govern, protect",
        "items": [
          "Identify security risk on the endpoint",
          "Associate risk with the user and device",
          "Apply organizational policy",
          "Prevent compromised endpoints from retaining access"
        ]
      },
      {
        "title": "Why MDM is not enough",
        "items": [
          "MDM answers how a device should be configured",
          "Mobile Threat Defense asks whether the device is showing evidence of risk",
          "Designed to complement Microsoft Intune and enterprise MDM/EMM",
          "On-device analysis without constant cloud dependency"
        ]
      }
    ],
    "note": "Security telemetry can inform whether a device should continue to participate in sensitive enterprise communications."
  },
  "device-security": {
    "name": "Device Security & Posture",
    "lede": "Security state is continuous, not a one-time check.",
    "intro": "A device that was secure yesterday may not be secure today. A compliant smartphone may become compromised. A legitimate device may install a malicious application. Static assessment cannot address dynamic risk.",
    "blocks": [
      {
        "title": "Continuous context",
        "items": [
          "User identity",
          "Device identity",
          "Device posture",
          "Threat telemetry",
          "Network state",
          "Application risk",
          "Security policy",
          "Communication context"
        ]
      },
      {
        "title": "Device information in ManageiT",
        "items": [
          "Device inventory",
          "Operating-system posture",
          "OS and application version",
          "Enrollment state",
          "Risk score",
          "Compliance state",
          "Threat findings",
          "Root/jailbreak status"
        ]
      },
      {
        "title": "From authentication to continuous evaluation",
        "items": [
          "Who are you?",
          "What are you using?",
          "Is it secure?",
          "What risk exists right now?",
          "Should this interaction continue?"
        ]
      }
    ],
    "note": "Device posture is evaluated alongside identity and policy before and during sensitive communications."
  },
  "regulated-communications": {
    "name": "Regulated Communications",
    "lede": "Recording, retention, supervision, and governance by design.",
    "intro": "Regulated organizations must protect communications while maintaining supervisory visibility, recording, retention, auditability, and defensible evidence. ShieldiT FSX and SentinelIQ address that requirement together.",
    "blocks": [
      {
        "title": "Recording and retention",
        "items": [
          "Policy-driven call and video recording",
          "Encryption in transit and at rest",
          "Role-based recording controls",
          "Retention by role, desk, or channel",
          "Export to established archives",
          "Immutable audit information"
        ]
      },
      {
        "title": "Supervision",
        "items": [
          "Risk-based review",
          "Policy-based sampling",
          "Random sampling",
          "Reviewer queues and notes",
          "Escalation",
          "Evidence tagging",
          "Exception tracking"
        ]
      },
      {
        "title": "Programs supported",
        "items": [
          "FINRA communications supervision",
          "SEC Rule 17a-4 retention",
          "GLBA",
          "SOX",
          "FFIEC",
          "PCI DSS",
          "MiFID II where applicable"
        ]
      },
      {
        "title": "Ecosystem",
        "items": [
          "Microsoft Purview",
          "Smarsh",
          "Global Relay",
          "eDiscovery platforms",
          "Customer-designated archives"
        ]
      }
    ],
    "note": "ASPIS capabilities support customer compliance programs. They do not, by themselves, establish organizational compliance."
  },
  "communications-intelligence": {
    "name": "Communications Intelligence",
    "lede": "Understand communications in the context in which they occurred.",
    "intro": "Traditional archives answer what was communicated. SentinelIQ combines communication activity and metadata with device posture, mobile threat state, identity, policy events, relationships, and historical behavior.",
    "blocks": [
      {
        "title": "Analyze",
        "items": [
          "Secure messaging",
          "Voice and video",
          "File sharing and attachments",
          "Communication metadata",
          "User activity",
          "Device posture",
          "Mobile threat state",
          "Policy and administrative events"
        ]
      },
      {
        "title": "Risk indicators",
        "items": [
          "Suspicious communications",
          "Fraud indicators",
          "Insider-risk patterns",
          "Behavioral anomalies",
          "Unusual communication relationships",
          "Sensitive-information patterns",
          "Abnormal file sharing"
        ]
      },
      {
        "title": "From finding to evidence",
        "items": [
          "AI risk finding",
          "Supervisory review",
          "Investigation",
          "Case management",
          "Legal hold",
          "Evidence export"
        ]
      }
    ],
    "note": "Described analytics produce risk indicators and investigative signals. They do not determine conduct on their own."
  },
  "data-control": {
    "name": "Data Control & Governance",
    "lede": "Centralized control over communications, policy, and administration.",
    "intro": "ManageiT provides the operational control plane: one environment for users, devices, communications policy, mobile risk, federation, compliance, integrations, and administrative activity.",
    "blocks": [
      {
        "title": "Control",
        "items": [
          "Internal communication",
          "External communication",
          "Group membership",
          "Federation",
          "File exchange",
          "Communication boundaries",
          "Restricted users",
          "Policy-based access"
        ]
      },
      {
        "title": "Policy dimensions",
        "items": [
          "Identity and role",
          "Group and organization",
          "Device posture",
          "Threat state",
          "Communication type",
          "Geography where configured",
          "Compliance requirement",
          "Deployment environment"
        ]
      },
      {
        "title": "Accountability",
        "items": [
          "Administrative changes",
          "Policy changes",
          "Access changes",
          "User provisioning",
          "Security events",
          "Configuration activity",
          "Compliance actions"
        ]
      }
    ],
    "note": "Security policy should follow the risk—not force every population into the same model."
  },
  "deployment": {
    "name": "Deployment & Sovereignty",
    "lede": "Your security architecture should not depend on someone else’s definition of control.",
    "intro": "Different organizations require different levels of infrastructure ownership and isolation. ASPIS supports deployment architectures designed around those requirements, with structured onboarding, identity integration, validation, hardening, and administrator enablement.",
    "blocks": [
      {
        "title": "Deployment models",
        "items": [
          "SaaS",
          "Dedicated infrastructure",
          "Private cloud",
          "Sovereign cloud",
          "On-premises",
          "Government architectures",
          "Air-gapped and isolated where applicable"
        ]
      },
      {
        "title": "Methodology",
        "items": [
          "01 Discovery",
          "02 Architecture",
          "03 Provision",
          "04 Integrate",
          "05 Validate",
          "06 Enable",
          "07 Operate"
        ]
      },
      {
        "title": "Design principles",
        "items": [
          "Least privilege",
          "Zero Trust architecture principles",
          "RBAC",
          "Environment isolation",
          "Identity integration",
          "Security validation",
          "Customer-specific compliance requirements"
        ]
      }
    ],
    "note": "Air-gapped and isolated architectures are available for applicable ShieldiT Defense deployments."
  },
  "integrations": {
    "name": "Integrations",
    "lede": "Fit into the security architecture you already operate.",
    "intro": "ASPIS is designed to strengthen existing enterprise security investments rather than replace them.",
    "blocks": [
      {
        "title": "Identity",
        "items": [
          "Microsoft Entra ID / Azure AD",
          "Active Directory",
          "Okta",
          "SAML",
          "OIDC",
          "LDAP",
          "SCIM",
          "CAC/PIV where applicable"
        ]
      },
      {
        "title": "Endpoint management",
        "items": [
          "Microsoft Intune",
          "Enterprise MDM / EMM",
          "Policy synchronization",
          "Lightweight deployment through managed platforms"
        ]
      },
      {
        "title": "Security operations",
        "items": [
          "Microsoft Sentinel",
          "Splunk",
          "IBM QRadar",
          "SIEM / XDR platforms",
          "Security-event forwarding"
        ]
      },
      {
        "title": "Compliance and infrastructure",
        "items": [
          "Microsoft Purview",
          "Smarsh",
          "Global Relay",
          "Customer archival systems",
          "APIs",
          "Directory synchronization",
          "Logging"
        ]
      }
    ],
    "note": "Integration availability depends on product, edition, and deployment architecture."
  }
} as const;
export type CapabilityKey = keyof typeof CAPABILITIES;
export const CAPABILITY_KEYS = Object.keys(CAPABILITIES) as CapabilityKey[];
