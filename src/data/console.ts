// AUTO-GENERATED from "ASPIS Website v2.dc.html" (v1.4 design handoff).
// Text content is verbatim from the design file — do not paraphrase.
//
// EXCEPTION: the "icon"/"i" fields. The design file used Unicode geometric
// characters as icon placeholders. Most fonts don't carry them, so in a browser
// they rendered as empty tofu boxes — and EDR's placeholder was the bare letter
// "C". They now name an icon in components/mock/Icon.tsx. The ▲/▼ inside "delta"
// strings are trend arrows, not icons, and stay as they are.

export const CONSOLE = {
  "consoleNav": [
    {
      "label": "Dashboard",
      "icon": "grid",
      "color": "#F2F5FC",
      "bg": "rgba(63,107,255,.22)"
    },
    {
      "label": "Users & Tenants",
      "icon": "users",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "label": "Insights & Reports",
      "icon": "report",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "label": "Incident Response",
      "icon": "alert",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "label": "Security Policies",
      "icon": "shield",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "label": "Integrations",
      "icon": "integrations",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "label": "Audit Logs",
      "icon": "history",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "label": "Ticketing & Support",
      "icon": "support",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "label": "Settings",
      "icon": "settings",
      "color": "#5E6C90",
      "bg": "transparent"
    }
  ],
  "consolePills": [
    {
      "l": "SSO",
      "i": "key",
      "c": "#8B9BFF",
      "bg": "rgba(76,125,255,.12)"
    },
    {
      "l": "EDR",
      "i": "endpoint",
      "c": "#F5C451",
      "bg": "rgba(245,196,81,.10)"
    },
    {
      "l": "MDM",
      "i": "mobile",
      "c": "#22C55E",
      "bg": "rgba(34,197,94,.10)"
    },
    {
      "l": "SIEM/XDR",
      "i": "radar",
      "c": "#F0452A",
      "bg": "rgba(240,69,42,.12)"
    },
    {
      "l": "Ticketing",
      "i": "ticket",
      "c": "#EAB308",
      "bg": "rgba(234,179,8,.10)"
    },
    {
      "l": "Compl DB",
      "i": "database",
      "c": "#4ADE80",
      "bg": "rgba(74,222,128,.10)"
    }
  ],
  "consoleBlobs": [
    {
      "x": 300,
      "y": 190,
      "r": 26,
      "c": "#E8EEFF",
      "o": 0.38
    },
    {
      "x": 497,
      "y": 150,
      "r": 30,
      "c": "#E8EEFF",
      "o": 0.3
    },
    {
      "x": 566,
      "y": 205,
      "r": 34,
      "c": "#F0452A",
      "o": 0.55
    },
    {
      "x": 620,
      "y": 300,
      "r": 24,
      "c": "#F5C451",
      "o": 0.45
    },
    {
      "x": 700,
      "y": 250,
      "r": 30,
      "c": "#F0452A",
      "o": 0.6
    },
    {
      "x": 738,
      "y": 148,
      "r": 26,
      "c": "#FF8A6E",
      "o": 0.55
    },
    {
      "x": 860,
      "y": 262,
      "r": 30,
      "c": "#F0452A",
      "o": 0.5
    },
    {
      "x": 1020,
      "y": 200,
      "r": 28,
      "c": "#F5C451",
      "o": 0.5
    },
    {
      "x": 975,
      "y": 330,
      "r": 26,
      "c": "#4C7DFF",
      "o": 0.55
    },
    {
      "x": 400,
      "y": 300,
      "r": 24,
      "c": "#E8EEFF",
      "o": 0.3
    }
  ],
  "consoleKpis": [
    {
      "label": "Active Threats",
      "icon": "crosshair",
      "valueColor": null,
      "arrow": null,
      "value": "13,345",
      "border": "rgba(122,160,255,.16)",
      "bg": "#0A1024",
      "bar": "linear-gradient(90deg,#F0452A 0%,#FF8A6E 30%,#F5C451 62%,#5E6C90 100%)",
      "width": "72%",
      "delta": "3 critical",
      "deltaColor": "#FF8A6E"
    },
    {
      "label": "Risk Posture",
      "icon": "gauge",
      "valueColor": "#FF8A6E",
      "arrow": "up",
      "value": "76",
      "border": "rgba(255,138,110,.45)",
      "bg": "linear-gradient(180deg,rgba(255,138,110,.14),#0A1024)",
      "bar": "#FF8A6E",
      "width": "46%",
      "delta": "▼ 3 vs last week",
      "deltaColor": "#FF8A6E"
    },
    {
      "label": "Compl Score",
      "icon": "check",
      "valueColor": "#22C55E",
      "arrow": "up",
      "value": "91%",
      "border": "rgba(34,197,94,.45)",
      "bg": "linear-gradient(180deg,rgba(34,197,94,.14),#0A1024)",
      "bar": "#22C55E",
      "width": "91%",
      "delta": "▲ 11%",
      "deltaColor": "#22C55E"
    },
    {
      "label": "Auto Executed",
      "icon": "bolt",
      "arrow": "up",
      "valueColor": null,
      "value": "26,456",
      "border": "rgba(122,160,255,.16)",
      "bg": "#0A1024",
      "bar": "linear-gradient(90deg,#3F6BFF,#67E8F9)",
      "width": "84%",
      "delta": "3,094 this week",
      "deltaColor": "#8B98B8"
    },
    {
      "label": "Top Attack",
      "icon": "alert",
      "arrow": "up",
      "valueColor": null,
      "value": "Phishing",
      "border": "rgba(122,160,255,.16)",
      "bg": "#0A1024",
      "bar": "#8B5CF6",
      "width": "62%",
      "delta": "12% of threats",
      "deltaColor": "#8B98B8"
    },
    {
      "label": "License Usage",
      "icon": "report",
      "valueColor": null,
      "arrow": null,
      "value": "78%",
      "border": "rgba(122,160,255,.16)",
      "bg": "#0A1024",
      "bar": "linear-gradient(90deg,#3F6BFF,#8B5CF6)",
      "width": "78%",
      "delta": "13,345 of 17,000",
      "deltaColor": "#8B98B8"
    },
    {
      "label": "MTTR Avg",
      "icon": "timer",
      "arrow": "down",
      "valueColor": null,
      "value": "3.2h",
      "border": "rgba(122,160,255,.16)",
      "bg": "#0A1024",
      "bar": "#67E8F9",
      "width": "35%",
      "delta": "▼ 0.5h",
      "deltaColor": "#22C55E"
    }
  ],
  "consoleMapStats": [
    {
      "v": "14,568",
      "l": "Sources",
      "i": "bolt",
      "c": "#67E8F9"
    },
    {
      "v": "28,502",
      "l": "Targets",
      "i": "target",
      "c": "#8B9BFF"
    },
    {
      "v": "100,947",
      "l": "Attacks",
      "i": "crosshair",
      "c": "#FF8A6E"
    }
  ],
  "consoleSeverity": [
    {
      "l": "Critical",
      "i": "burst",
      "c": "#F0452A",
      "bg": "rgba(240,69,42,.14)",
      "bd": "rgba(240,69,42,.42)"
    },
    {
      "l": "High",
      "i": "arrow-up",
      "c": "#FF8A6E",
      "bg": "rgba(255,138,110,.13)",
      "bd": "rgba(255,138,110,.40)"
    },
    {
      "l": "Medium",
      "i": "arrow-right",
      "c": "#F5C451",
      "bg": "rgba(245,196,81,.12)",
      "bd": "rgba(245,196,81,.40)"
    },
    {
      "l": "Low",
      "i": "arrow-down",
      "c": "#7FA0FF",
      "bg": "rgba(76,125,255,.14)",
      "bd": "rgba(76,125,255,.42)"
    }
  ],
  "consoleInsights": [
    {
      "t": "AI-detected anomaly",
      "d": "An unusual concentration of high-severity alerts within a single department over a short window, with repeated phishing attempts correlated to increased lateral activity.",
      "a": "review motion-detection events and affected devices in ManageiT."
    },
    {
      "t": "AI risk prediction",
      "d": "Communication activity increased significantly for a subset of users compared with the previous period, alongside a rise in medium-severity alerts.",
      "a": "review user activity and related alerts in ManageiT."
    }
  ],
  "consoleSources": [
    {
      "l": "Germany",
      "p": "32%"
    },
    {
      "l": "Singapore",
      "p": "19%"
    },
    {
      "l": "Brazil",
      "p": "16%"
    }
  ],
  "consoleDests": [
    {
      "l": "Finance",
      "p": "36%"
    },
    {
      "l": "Executive / VIP",
      "p": "24%"
    },
    {
      "l": "Engineering",
      "p": "19%"
    }
  ],
  "consoleBars": [
    {
      "label": "Phishing",
      "pct": "45%"
    },
    {
      "label": "Malware",
      "pct": "30%"
    },
    {
      "label": "Policy breach",
      "pct": "24%"
    },
    {
      "label": "Rogue Wi-Fi",
      "pct": "9%"
    }
  ],
  "consoleAlerts": [
    {
      "sev": "CRITICAL · NETWORK",
      "sevColor": "#FF8A6E",
      "time": "09:14",
      "title": "Man-in-the-middle indicators",
      "meta": "Trading desk · 2 devices affected"
    },
    {
      "sev": "HIGH · DEVICE",
      "sevColor": "#FF8A6E",
      "time": "08:52",
      "title": "Vulnerable OS version",
      "meta": "Executive group · 6 devices"
    },
    {
      "sev": "MEDIUM · APP",
      "sevColor": "#C6A15B",
      "time": "Yesterday",
      "title": "Sideloaded application detected",
      "meta": "Field operations · contained"
    },
    {
      "sev": "LOW · POLICY",
      "sevColor": "#67E8F9",
      "time": "Yesterday",
      "title": "External federation attempt blocked",
      "meta": "Policy enforced automatically"
    }
  ],
  "consoleSpark": [
    "32%",
    "46%",
    "38%",
    "58%",
    "44%",
    "66%",
    "52%",
    "74%",
    "61%",
    "48%",
    "70%",
    "56%",
    "82%",
    "64%",
    "50%",
    "72%",
    "58%",
    "86%",
    "68%",
    "54%",
    "76%",
    "62%",
    "90%",
    "70%"
  ],
  "consoleAreas": [
    {
      "tag": "ENVIRONMENT",
      "name": "Protected estate",
      "note": "Users, devices, tenants, and communication activity in one view."
    },
    {
      "tag": "POSTURE",
      "name": "Security posture",
      "note": "Overall risk, high-risk devices, findings, and policy violations."
    },
    {
      "tag": "ACTIVE RISK",
      "name": "Alerts and response",
      "note": "Critical alerts, phishing detections, network and application threats."
    },
    {
      "tag": "GOVERNANCE",
      "name": "Policy and audit",
      "note": "Policy compliance, federation activity, administrative changes."
    },
    {
      "tag": "TRENDS",
      "name": "Operational trends",
      "note": "Threats over time, risk by device, user, and organization."
    }
  ],
  "consoleTabs": [
    {
      "name": "Dashboard",
      "icon": "grid",
      "color": "#67E8F9"
    },
    {
      "name": "Alerts",
      "icon": "alert",
      "color": "#7E8CAE"
    },
    {
      "name": "Devices",
      "icon": "mobile",
      "color": "#7E8CAE"
    },
    {
      "name": "Policy",
      "icon": "shield",
      "color": "#7E8CAE"
    }
  ],
  "consoleKpiPhone": [
    {
      "label": "Active Threats",
      "icon": "crosshair",
      "value": "13,345",
      "border": "rgba(122,160,255,.16)",
      "bg": "#0A1024",
      "bar": "linear-gradient(90deg,#3F6BFF,#67E8F9)",
      "width": "72%"
    },
    {
      "label": "Risk Posture",
      "icon": "gauge",
      "valueColor": "#FF8A6E",
      "arrow": "up",
      "value": "76",
      "border": "rgba(255,138,110,.45)",
      "bg": "linear-gradient(180deg,rgba(255,138,110,.14),#0A1024)",
      "bar": "#FF8A6E",
      "width": "46%"
    },
    {
      "label": "Compl Score",
      "icon": "check",
      "valueColor": "#22C55E",
      "arrow": "up",
      "value": "91%",
      "border": "rgba(34,197,94,.45)",
      "bg": "linear-gradient(180deg,rgba(34,197,94,.14),#0A1024)",
      "bar": "#22C55E",
      "width": "91%"
    },
    {
      "label": "MTTR Avg",
      "icon": "timer",
      "arrow": "down",
      "value": "3.2h",
      "border": "rgba(122,160,255,.16)",
      "bg": "#0A1024",
      "bar": "#67E8F9",
      "width": "35%"
    }
  ],
  "siqRail": [
    {
      "name": "Dashboard",
      "icon": "grid",
      "color": "#04060E",
      "bg": "#8B5CF6"
    },
    {
      "name": "Search",
      "icon": "search",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "Communications",
      "icon": "message",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "Meetings",
      "icon": "meeting",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "Files",
      "icon": "file",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "Alerts",
      "icon": "alert",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "Cases",
      "icon": "folder",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "Investigations",
      "icon": "crosshair",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "AI",
      "icon": "sparkle",
      "color": "#5E6C90",
      "bg": "transparent"
    },
    {
      "name": "Audit",
      "icon": "audit",
      "color": "#5E6C90",
      "bg": "transparent"
    }
  ]
} as const;
