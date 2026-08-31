// AUTO-GENERATED from "ASPIS Website v2.dc.html" (v1.4 design handoff).
// Content is verbatim from the design file — do not paraphrase.

export const SITE = {
  "marquee": [
    "END-TO-END ENCRYPTION",
    "DEVICE POSTURE",
    "ENTERPRISE IDENTITY",
    "MOBILE THREAT DEFENSE",
    "CONTROLLED FEDERATION",
    "POLICY ENFORCEMENT",
    "SUPERVISION & RETENTION",
    "AUDIT RECORD",
    "SOVEREIGN DEPLOYMENT",
    "END-TO-END ENCRYPTION",
    "DEVICE POSTURE",
    "ENTERPRISE IDENTITY",
    "MOBILE THREAT DEFENSE",
    "CONTROLLED FEDERATION",
    "POLICY ENFORCEMENT",
    "SUPERVISION & RETENTION",
    "AUDIT RECORD",
    "SOVEREIGN DEPLOYMENT"
  ],
  "products": [
    {
      "open": {
        "__nav": true,
        "page": "product",
        "key": "enterprise"
      },
      "tag": "MODERN ENTERPRISE",
      "accent": "#3F6BFF",
      "name": "ShieldiT Enterprise",
      "short": "For global enterprises and distributed workforces.",
      "desc": "Encrypted communications, on-device threat detection, enterprise identity, device posture, and centralized administration."
    },
    {
      "open": {
        "__nav": true,
        "page": "product",
        "key": "fsx"
      },
      "tag": "REGULATED COMMUNICATIONS",
      "accent": "#3F8CFF",
      "name": "ShieldiT FSX",
      "short": "For financial services and regulated communications.",
      "desc": "Secure messaging, voice, video, and files with recording, retention, supervision, and compliance-ecosystem integration."
    },
    {
      "open": {
        "__nav": true,
        "page": "product",
        "key": "executive"
      },
      "tag": "BOARD & EXECUTIVE",
      "accent": "#4C7DFF",
      "name": "ShieldiT Executive",
      "short": "For boards, executives, governance, and sensitive corporate operations.",
      "desc": "Confidential communications, board governance, sensitive documents, crisis collaboration, and executive intelligence."
    },
    {
      "open": {
        "__nav": true,
        "page": "product",
        "key": "defense"
      },
      "tag": "GOVERNMENT & DEFENSE",
      "accent": "#4E7A57",
      "name": "ShieldiT Defense",
      "short": "For government, defense, intelligence, and high-assurance environments.",
      "desc": "Dedicated infrastructure, high-assurance authentication, sovereign deployment, offline operations, and advanced mobile protection."
    }
  ],
  "domains": [
    {
      "open": {
        "__nav": true,
        "page": "platform",
        "key": null
      },
      "verb": "PROTECT",
      "color": "#4C7DFF",
      "name": "ShieldiT",
      "desc": "Protect the user, the mobile device, and the communication itself.",
      "chips": [
        "Enterprise",
        "FSX",
        "Defense",
        "Executive"
      ]
    },
    {
      "open": {
        "__nav": true,
        "page": "product",
        "key": "manageit"
      },
      "verb": "GOVERN",
      "color": "#67E8F9",
      "name": "ManageiT",
      "desc": "Control the environment from one operational plane.",
      "chips": [
        "Identity",
        "Devices",
        "Policies",
        "Risk",
        "Federation",
        "Integrations"
      ]
    },
    {
      "open": {
        "__nav": true,
        "page": "product",
        "key": "sentineliq"
      },
      "verb": "UNDERSTAND",
      "color": "#A78BFA",
      "name": "SentinelIQ",
      "desc": "Turn communications and security context into a defensible record.",
      "chips": [
        "Compliance",
        "Behavior",
        "Fraud indicators",
        "Investigations"
      ]
    }
  ],
  "stack": [
    {
      "layer": "LAYER 01 — 02",
      "name": "Identity + Device",
      "note": "Authenticate the user; evaluate endpoint security and integrity."
    },
    {
      "layer": "LAYER 03",
      "name": "ShieldiT",
      "note": "Secure communication and Mobile Threat Defense."
    },
    {
      "layer": "LAYER 04 — 05",
      "name": "ManageiT",
      "note": "Policy, administration, federation, and governance."
    },
    {
      "layer": "LAYER 06",
      "name": "SentinelIQ",
      "note": "Compliance, intelligence, supervision, and investigation."
    }
  ],
  "graphNodes": [
    "User",
    "Device",
    "Communication",
    "File",
    "Policy",
    "Related users"
  ],
  "threats": [
    {
      "code": "T-01",
      "label": "Phishing and smishing"
    },
    {
      "code": "T-02",
      "label": "Malicious QR codes and links"
    },
    {
      "code": "T-03",
      "label": "Rogue and sideloaded applications"
    },
    {
      "code": "T-04",
      "label": "Unsafe Wi-Fi and MITM"
    },
    {
      "code": "T-05",
      "label": "Rooting and jailbreaking"
    },
    {
      "code": "T-06",
      "label": "Device-integrity violations"
    },
    {
      "code": "T-07",
      "label": "Spyware indicators"
    },
    {
      "code": "T-08",
      "label": "Sensor and screen-recording abuse"
    }
  ],
  "threatLog": [
    {
      "meta": "Network · High · Active",
      "time": "09:14",
      "title": "Man-in-the-middle indicators"
    },
    {
      "meta": "App · Medium · Resolved",
      "time": "Yesterday",
      "title": "Sideloaded application removed"
    },
    {
      "meta": "Device · High · Resolved",
      "time": "12 Aug",
      "title": "Vulnerable OS version"
    }
  ],
  "deployments": [
    {
      "n": "01",
      "name": "SaaS",
      "note": "Rapid deployment and centralized management."
    },
    {
      "n": "02",
      "name": "Dedicated",
      "note": "Customer-specific infrastructure and isolation."
    },
    {
      "n": "03",
      "name": "Private Cloud",
      "note": "Greater infrastructure and operational control."
    },
    {
      "n": "04",
      "name": "Sovereign Cloud",
      "note": "Data residency and jurisdictional requirements."
    },
    {
      "n": "05",
      "name": "On-Premises",
      "note": "Customer-controlled infrastructure."
    },
    {
      "n": "06",
      "name": "Government",
      "note": "Applicable government-specific architectures."
    },
    {
      "n": "07",
      "name": "Isolated",
      "note": "Air-gapped options for applicable Defense deployments."
    }
  ],
  "frameworks": [
    "ISO 27001",
    "SOC 2",
    "HIPAA / HITECH",
    "GDPR",
    "PCI DSS",
    "FINRA",
    "SEC Rule 17a-4",
    "GLBA",
    "SOX",
    "NIST",
    "CMMC",
    "FISMA",
    "CJIS"
  ],
  "controls": [
    "Identity",
    "Devices",
    "Communication groups",
    "Federation",
    "Policies",
    "Risk requirements",
    "Compliance requirements",
    "Deployment architecture"
  ],
  "industries": [
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "financial-services"
      },
      "name": "Financial Services",
      "note": "Communication supervision and financial risk."
    },
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "government"
      },
      "name": "Government",
      "note": "Mission security and public-sector requirements."
    },
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "defense-intelligence"
      },
      "name": "Defense & Intelligence",
      "note": "High-assurance communications."
    },
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "healthcare"
      },
      "name": "Healthcare",
      "note": "Clinical mobility and PHI protection."
    },
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "critical-infrastructure"
      },
      "name": "Critical Infrastructure",
      "note": "Operational continuity."
    },
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "technology"
      },
      "name": "Technology",
      "note": "Intellectual property and distributed teams."
    },
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "telecommunications"
      },
      "name": "Telecommunications",
      "note": "Subscriber security and carrier opportunity."
    },
    {
      "open": {
        "__nav": true,
        "page": "solution",
        "key": "enterprise"
      },
      "name": "Enterprise",
      "note": "The workforce beyond the perimeter."
    }
  ],
  "integrations": [
    {
      "cat": "IDENTITY & ACCESS",
      "items": [
        "Microsoft Entra ID / Azure AD",
        "Active Directory",
        "Okta",
        "SAML / OIDC / LDAP / SCIM",
        "CAC / PIV where applicable"
      ]
    },
    {
      "cat": "ENDPOINT & DEVICE",
      "items": [
        "Microsoft Intune",
        "Enterprise MDM / EMM environments"
      ]
    },
    {
      "cat": "SECURITY OPERATIONS",
      "items": [
        "Microsoft Sentinel",
        "Splunk",
        "IBM QRadar",
        "SIEM / XDR platforms"
      ]
    },
    {
      "cat": "COMPLIANCE & ARCHIVING",
      "items": [
        "Microsoft Purview",
        "Smarsh",
        "Global Relay",
        "eDiscovery and customer archives"
      ]
    }
  ],
  "questions": [
    {
      "c": "#67E8F9",
      "layer": "IDENTITY",
      "q": "Is the person authorized?"
    },
    {
      "c": "#FF7A5C",
      "layer": "DEVICE",
      "q": "Is the endpoint secure right now?"
    },
    {
      "c": "#4C7DFF",
      "layer": "NETWORK",
      "q": "Is the environment showing risk?"
    },
    {
      "c": "#2FD4A7",
      "layer": "POLICY",
      "q": "Is this interaction permitted?"
    },
    {
      "c": "#F5C451",
      "layer": "COMMUNICATION",
      "q": "Is the information protected?"
    },
    {
      "c": "#A78BFA",
      "layer": "GOVERNANCE",
      "q": "Can the organization manage and audit it?"
    },
    {
      "c": "#8B9BFF",
      "layer": "INTELLIGENCE",
      "q": "Can teams understand what happened?"
    }
  ],
  "footerCols": [
    {
      "title": "PLATFORM",
      "links": [
        "ShieldiT",
        "ShieldiT Enterprise",
        "ShieldiT FSX",
        "ShieldiT Defense",
        "ShieldiT Executive",
        "ManageiT",
        "SentinelIQ"
      ]
    },
    {
      "title": "SOLUTIONS",
      "links": [
        "Enterprise",
        "Financial Services",
        "Government",
        "Defense & Intelligence",
        "Healthcare",
        "Critical Infrastructure",
        "Technology",
        "Telecommunications",
        "Executive & Board Security",
        "MSP / MSSP"
      ]
    },
    {
      "title": "WHY ASPIS",
      "links": [
        "Platform Architecture",
        "Mobile Threat Defense",
        "Secure Communications",
        "Compliance & Governance",
        "Deployment & Sovereignty",
        "Integrations",
        "Security & Compliance"
      ]
    },
    {
      "title": "RESOURCES",
      "links": [
        "Resource Center",
        "White Papers",
        "Solution Briefs",
        "Threat Research",
        "Newsroom"
      ]
    },
    {
      "title": "COMPANY",
      "links": [
        "About ASPIS",
        "Leadership",
        "Partners",
        "Contact"
      ]
    },
    {
      "title": "LEGAL",
      "links": [
        "Privacy Policy",
        "Terms of Use",
        "Cookie Policy",
        "Accessibility",
        "Security",
        "Responsible Disclosure"
      ]
    }
  ],
  "megaProtect": [
    {
      "name": "ShieldiT Enterprise",
      "desc": "Enterprise secure communications and Mobile Threat Defense.",
      "open": {
        "__nav": true,
        "page": "product",
        "key": "enterprise"
      }
    },
    {
      "name": "ShieldiT FSX",
      "desc": "Regulated communications for financial services.",
      "open": {
        "__nav": true,
        "page": "product",
        "key": "fsx"
      }
    },
    {
      "name": "ShieldiT Executive",
      "desc": "Executive governance and secure leadership collaboration.",
      "open": {
        "__nav": true,
        "page": "product",
        "key": "executive"
      }
    },
    {
      "name": "ShieldiT Defense",
      "desc": "Mission-grade government and defense communications.",
      "open": {
        "__nav": true,
        "page": "product",
        "key": "defense"
      }
    }
  ],
  "megaControl": [
    {
      "name": "ManageiT",
      "desc": "Security governance and administration.",
      "open": {
        "__nav": true,
        "page": "product",
        "key": "manageit"
      }
    },
    {
      "name": "SentinelIQ",
      "desc": "Communications compliance and intelligence.",
      "open": {
        "__nav": true,
        "page": "product",
        "key": "sentineliq"
      }
    }
  ],
  "shieldItStageNotes": [
    {
      "k": "DEVICE POSTURE",
      "v": "Continuous integrity, jailbreak, and spyware indicator checks.",
      "c": "#4C7DFF"
    },
    {
      "k": "NETWORK",
      "v": "Unsafe Wi-Fi and interception risk evaluated before you connect.",
      "c": "#67E8F9"
    },
    {
      "k": "APPLICATIONS",
      "v": "Sideloaded and malicious application detection on device.",
      "c": "#F5C451"
    },
    {
      "k": "POLICY",
      "v": "Organizational policy decides what this device may still do.",
      "c": "#2FD4A7"
    }
  ],
  "homeTabs": [
    {
      "label": "ShieldiT — Protect"
    },
    {
      "label": "ManageiT — Govern"
    },
    {
      "label": "SentinelIQ — Understand"
    }
  ],
  "tabsSecurity": [
    {
      "name": "Security",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#007AFF",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "path",
                "props": {
                  "key": "a",
                  "d": "M8 1.8 13.4 4v4.3c0 3.2-2.4 5-5.4 5.9-3-.9-5.4-2.7-5.4-5.9V4z"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Contacts",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "circle",
                "props": {
                  "key": "a",
                  "cx": 8,
                  "cy": 5.6,
                  "r": 2.6
                },
                "children": []
              },
              {
                "__el": "path",
                "props": {
                  "key": "b",
                  "d": "M3 13.6c.5-2.6 2.4-4 5-4s4.5 1.4 5 4"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Chats",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "path",
                "props": {
                  "key": "a",
                  "d": "M13.6 8.4c0 2.7-2.5 4.8-5.6 4.8-.7 0-1.4-.1-2-.3l-3 1 1-2.4c-.9-.8-1.6-2-1.6-3.1 0-2.7 2.5-4.8 5.6-4.8s5.6 2.1 5.6 4.8z"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Calls",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "path",
                "props": {
                  "key": "a",
                  "d": "M3.2 3.4c0 5.4 4 9.4 9.4 9.4l.7-2.2-3-1-1 1.1a8.6 8.6 0 01-3.9-4l1.1-1-1-3z"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Settings",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "circle",
                "props": {
                  "key": "a",
                  "cx": 8,
                  "cy": 8,
                  "r": 5.2
                },
                "children": []
              },
              {
                "__el": "circle",
                "props": {
                  "key": "b",
                  "cx": 8,
                  "cy": 8,
                  "r": 1.8
                },
                "children": []
              }
            ]
          }
        ]
      }
    }
  ],
  "tabsActive": [
    {
      "name": "Security",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "path",
                "props": {
                  "key": "a",
                  "d": "M8 1.8 13.4 4v4.3c0 3.2-2.4 5-5.4 5.9-3-.9-5.4-2.7-5.4-5.9V4z"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Contacts",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "circle",
                "props": {
                  "key": "a",
                  "cx": 8,
                  "cy": 5.6,
                  "r": 2.6
                },
                "children": []
              },
              {
                "__el": "path",
                "props": {
                  "key": "b",
                  "d": "M3 13.6c.5-2.6 2.4-4 5-4s4.5 1.4 5 4"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Chats",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#007AFF",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "path",
                "props": {
                  "key": "a",
                  "d": "M13.6 8.4c0 2.7-2.5 4.8-5.6 4.8-.7 0-1.4-.1-2-.3l-3 1 1-2.4c-.9-.8-1.6-2-1.6-3.1 0-2.7 2.5-4.8 5.6-4.8s5.6 2.1 5.6 4.8z"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Calls",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "path",
                "props": {
                  "key": "a",
                  "d": "M3.2 3.4c0 5.4 4 9.4 9.4 9.4l.7-2.2-3-1-1 1.1a8.6 8.6 0 01-3.9-4l1.1-1-1-3z"
                },
                "children": []
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Settings",
      "icon": {
        "__el": "span",
        "props": {
          "style": {
            "color": "#6A6E78",
            "display": "flex"
          }
        },
        "children": [
          {
            "__el": "svg",
            "props": {
              "width": 16,
              "height": 16,
              "viewBox": "0 0 16 16",
              "fill": "none",
              "stroke": "currentColor",
              "strokeWidth": 1.4
            },
            "children": [
              {
                "__el": "circle",
                "props": {
                  "key": "a",
                  "cx": 8,
                  "cy": 8,
                  "r": 5.2
                },
                "children": []
              },
              {
                "__el": "circle",
                "props": {
                  "key": "b",
                  "cx": 8,
                  "cy": 8,
                  "r": 1.8
                },
                "children": []
              }
            ]
          }
        ]
      }
    }
  ],
  "screenTabs": [
    {
      "label": "CHAT"
    },
    {
      "label": "SECURITY"
    },
    {
      "label": "CALLS"
    },
    {
      "label": "CONTACTS"
    }
  ],
  "heroThreatLog": [
    {
      "meta": "Network · Low · Resolved",
      "time": "Today",
      "title": "Unsafe Wi-Fi avoided",
      "dot": "#22C55E"
    },
    {
      "meta": "App · Medium · Resolved",
      "time": "12 Aug",
      "title": "Sideloaded app removed",
      "dot": "#C6A15B"
    },
    {
      "meta": "Device · High · Resolved",
      "time": "8 Aug",
      "title": "Vulnerable OS version",
      "dot": "#22C55E"
    }
  ],
  "heroCalls": [
    {
      "i": "CD",
      "name": "Compliance Desk",
      "type": "Incoming · encrypted",
      "time": "12 Aug",
      "color": "#0B0D12",
      "bg": "#E7EEFB",
      "fg": "#2F6BFF"
    },
    {
      "i": "FO",
      "name": "Field Operations",
      "type": "Outgoing call",
      "time": "12 Aug",
      "color": "#0B0D12",
      "bg": "#DEF3E9",
      "fg": "#1F7A55"
    },
    {
      "i": "IR",
      "name": "Incident Response",
      "type": "Group video · 6 joined",
      "time": "11 Aug",
      "color": "#0B0D12",
      "bg": "#EDE6FB",
      "fg": "#6E4BD8"
    },
    {
      "i": "MR",
      "name": "M. Renard",
      "type": "Missed",
      "time": "5 Aug",
      "color": "#F0452A",
      "bg": "#FBE6E3",
      "fg": "#E04B3A"
    },
    {
      "i": "DO",
      "name": "D. Okafor",
      "type": "Outgoing call",
      "time": "30 Jul",
      "color": "#0B0D12",
      "bg": "#FDF0DC",
      "fg": "#B37A17"
    }
  ],
  "heroContacts": [
    {
      "i": "AB",
      "name": "A. Bergström",
      "role": "Risk & Controls",
      "bg": "#E7EEFB",
      "fg": "#2F6BFF"
    },
    {
      "i": "CD",
      "name": "Compliance Desk",
      "role": "Supervision group",
      "bg": "#DEF3E9",
      "fg": "#1F7A55"
    },
    {
      "i": "DO",
      "name": "D. Okafor",
      "role": "Security Operations",
      "bg": "#EDE6FB",
      "fg": "#6E4BD8"
    },
    {
      "i": "FO",
      "name": "Field Operations",
      "role": "Mission group",
      "bg": "#FDF0DC",
      "fg": "#B37A17"
    },
    {
      "i": "NA",
      "name": "N. Alvarez",
      "role": "Incident Response",
      "bg": "#FBE6E3",
      "fg": "#E04B3A"
    }
  ]
} as const;
