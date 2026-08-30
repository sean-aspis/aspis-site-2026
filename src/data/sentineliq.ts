// AUTO-GENERATED from "ASPIS Website v2.dc.html" (v1.4 design handoff).
// Content is verbatim from the design file — do not paraphrase.

export const SIQ_VIEWS = {
  "compliance": {
    "title": "Dashboard",
    "scope": "Compliance",
    "heading": "Compliance dashboard",
    "sub": "Supervision queue, policy violations & open cases",
    "asOf": "Data as of Aug 21, 2026",
    "kpis": [
      {
        "label": "Open alerts",
        "value": "0"
      },
      {
        "label": "Open cases",
        "value": "1"
      },
      {
        "label": "Reviewed today",
        "value": "1"
      },
      {
        "label": "AI findings",
        "value": "17",
        "hot": true
      },
      {
        "label": "Legal holds",
        "value": "1"
      }
    ],
    "mainTitle": "Review throughput & SLA",
    "mainMeta": "Monthly",
    "chart": "lines",
    "subTitle": "Policy violations by type",
    "subMeta": "By type",
    "subRows": [
      {
        "label": "Insider Trading / MNPI",
        "pct": "50%",
        "value": "50%",
        "fill": "linear-gradient(90deg,rgba(240,69,42,.30),#F0452A)"
      },
      {
        "label": "Payment diversion",
        "pct": "25%",
        "value": "25%",
        "fill": "linear-gradient(90deg,rgba(255,138,110,.28),#FF8A6E)"
      },
      {
        "label": "Off-channel comms",
        "pct": "17%",
        "value": "17%",
        "fill": "linear-gradient(90deg,rgba(245,196,81,.26),#F5C451)"
      },
      {
        "label": "Gifts & entertainment",
        "pct": "8%",
        "value": "8%",
        "fill": "linear-gradient(90deg,rgba(76,125,255,.26),#4C7DFF)"
      }
    ],
    "aiTitle": "AI compliance brief",
    "aiBody": "High-confidence insider-trading finding referencing an unannounced M&A event.",
    "aiCta": "View findings",
    "sideTitle": "Flagged communications",
    "side": [
      {
        "sev": "CRITICAL",
        "age": "36d",
        "title": "Heard MRDN is getting acquired before it's public, might want to get ahead of th",
        "note": "High-confidence insider-trading finding referencing an unannounced M&A event."
      },
      {
        "sev": "CRITICAL",
        "age": "39d",
        "title": "Please update the wire instructions to the new account before end of day, urgent",
        "note": "Payment-diversion language matched against known fraud patterns."
      }
    ]
  },
  "audit": {
    "title": "Audit Logs",
    "scope": "All results",
    "heading": "Audit Logs",
    "sub": "Immutable, tamper-evident trail of every platform action",
    "asOf": "Retention 7 years",
    "kpis": [
      {
        "label": "Events today",
        "value": "1,284"
      },
      {
        "label": "Actors",
        "value": "36"
      },
      {
        "label": "Failed actions",
        "value": "0"
      },
      {
        "label": "Integrity",
        "value": "Verified",
        "ok": true
      },
      {
        "label": "Exports",
        "value": "4"
      }
    ],
    "mainTitle": "Recent activity",
    "mainMeta": "Time · Actor · Action · Result",
    "chart": "audit",
    "subTitle": "Actions by category",
    "subMeta": "Last 24h",
    "subRows": [
      {
        "label": "Alert actions",
        "pct": "58%",
        "value": "742",
        "fill": "linear-gradient(90deg,rgba(139,92,246,.28),#8B5CF6)"
      },
      {
        "label": "Case actions",
        "pct": "27%",
        "value": "347",
        "fill": "linear-gradient(90deg,rgba(76,125,255,.26),#4C7DFF)"
      },
      {
        "label": "Access & auth",
        "pct": "11%",
        "value": "141",
        "fill": "linear-gradient(90deg,rgba(53,200,244,.26),#35C8F4)"
      },
      {
        "label": "Exports & holds",
        "pct": "4%",
        "value": "54",
        "fill": "linear-gradient(90deg,rgba(34,197,94,.26),#22C55E)"
      }
    ],
    "aiTitle": "AI audit summary",
    "aiBody": "Case activity concentrated in one investigation. No failed actions and no privilege changes in the period.",
    "aiCta": "View timeline",
    "sideTitle": "Payload",
    "side": [
      {
        "sev": "ALERT.ESCALATE",
        "age": "16:00",
        "title": "seed-demo-msg-8-0",
        "note": "Escalated by Trevor Nguyen. Reason recorded, evidence preserved.",
        "ok": true
      },
      {
        "sev": "CASE.STAGE_UPDATE",
        "age": "19:54",
        "title": "94172148-863a-5d08-8117",
        "note": "Stage advanced to Investigation by Amelia Lang.",
        "ok": true
      }
    ]
  },
  "files": {
    "title": "Files",
    "scope": "Scope · External",
    "heading": "Files & External Sharing",
    "sub": "File-share analytics with external-domain exposure and sensitivity labels",
    "asOf": "Last 24 hours",
    "kpis": [
      {
        "label": "Files shared · 24h",
        "value": "0"
      },
      {
        "label": "External shares",
        "value": "2",
        "hot": true
      },
      {
        "label": "Restricted files",
        "value": "1",
        "warn": true
      },
      {
        "label": "External domains",
        "value": "2"
      },
      {
        "label": "Approved list",
        "value": "18"
      }
    ],
    "mainTitle": "Sensitivity distribution",
    "mainMeta": "By label",
    "chart": "bars",
    "subTitle": "External domains",
    "subMeta": "Shares · 0–1",
    "subRows": [
      {
        "label": "externalclient.com",
        "pct": "100%",
        "value": "1",
        "fill": "linear-gradient(90deg,rgba(240,69,42,.28),#F0452A)"
      },
      {
        "label": "personalgmail.com",
        "pct": "100%",
        "value": "1",
        "fill": "linear-gradient(90deg,rgba(240,69,42,.28),#F0452A)"
      }
    ],
    "aiTitle": "Mass-download detection",
    "aiBody": "No file-access log is connected, so no download activity has been assessed. This is not a finding of none.",
    "aiCta": "Connect log",
    "sideTitle": "External exposure",
    "side": [
      {
        "sev": "CONFIDENTIAL",
        "age": "1mo",
        "title": "Q2_Client_Statement_Hale.pdf",
        "note": "Marco Ferro · Wealth Desk → externalclient.com",
        "warn": true
      },
      {
        "sev": "RESTRICTED",
        "age": "1mo",
        "title": "MRDN_merger_model.xlsx",
        "note": "Jordan Hale · Wealth Desk → personalgmail.com"
      }
    ]
  }
} as const;
export type SiqView = keyof typeof SIQ_VIEWS;
export const SIQ_VIEW_KEYS = Object.keys(SIQ_VIEWS) as SiqView[];
