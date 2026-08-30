# Content sources and claims governance

Last updated: 30 August 2026.

This file records where the words on the site come from, and what was
deliberately left out. Read it before adding or editing marketing copy.

## The two sources

**1. The v1.4 design file** — `ASPIS Website v2.dc.html`. The original port.
Everything in `src/data/nav.ts`, `pages.ts`, `products.ts`, `solutions.ts`,
`capabilities.ts`, `site.ts`, `console.ts` and `sentineliq.ts` is verbatim from
it. Those files are generated; do not hand-edit them.

**2. Nine ASPIS-published PDFs**, supplied by the client on 30 Aug 2026. They
are **gated** — see the section at the end of this file — and live in
`private/documents/`, outside the public directory:

| Document | Pages | Primary category |
| --- | --- | --- |
| ShieldiT FSX | 17 | White paper (also Compliance) |
| ShieldiT Enterprise | 7 | White paper |
| ShieldiT Protect | 7 | White paper |
| ShieldiT Defense | 7 | White paper |
| ShieldiT Enterprise for MSSPs & MSPs | 6 | White paper (also Solution briefs) |
| Financial Services, Banking & Capital Markets | 6 | Use case (also Compliance) |
| SLED & Federal Government | 7 | Use case (also Compliance) |
| Healthcare Networks | 5 | Use case (also Compliance) |
| Retail & Consumer Goods | 7 | Use case |

Metadata lives in `src/data/documents.ts`. `pages` and `bytes` are measured
from the files. **If a PDF is ever replaced, re-measure both** — they are shown
to the reader as download metadata and must not drift. `file` there is a
filename, not a URL: there is no public path to any of these.

The industry-page expansion content in `src/data/solutionContent.ts` is drawn
from these PDFs. Every capability bullet traces to a statement in the document
named in that section's lede.

## What was deliberately NOT carried across

The source documents contain material that the site's own claims-governance
rules prohibit. It is excluded on purpose. Do not "restore" it.

- **Customer results.** The healthcare document is written as a case study of an
  unnamed provider and reports outcomes — "within the first 90 days",
  "independent audits ... confirmed continuous compliance with zero endpoint
  security gaps identified". No customer, deployment, detection rate or
  time-to-value appears anywhere on the site.
- **Achieved-reduction claims.** The impact sections say fraud, interception and
  compromise are "significantly reduced". Every outcome on the site is framed as
  what the architecture is *designed* to do, and each Outcomes section says so on
  the page, not just in a comment.
- **"Proven" and "trusted".** The MSP/MSSP paper says "Proven Enterprise and
  Government Deployments — trusted in high-security environments worldwide".
  Not used.
- **Certification.** The documents say "designed to support", "compliance
  alignment" and "aligned with". That qualification is preserved everywhere.
  ASPIS is never described as certified, authorized, accredited or validated,
  and is never said to make a customer compliant. See `frameworkNote` in
  `solutionContent.ts` — it is rendered unconditionally and must not be dropped.
- **Third-party technology providers.** Not named anywhere.

`public/assets/badge-iso27001.png` and `badge-soc2.png` exist in the repo but
are **not rendered on any page, and must not be**. Displaying a certification
badge is a certification claim.

## The framework lists

The framework chips on an industry page are the **customer's** obligations,
listed so a reader can see which regime the page speaks to. Rules:

- Only list a framework a source document names for that sector.
- Always render `frameworkNote` with them.
- Government and Defense carry a stronger note that explicitly disclaims
  authorization status, because FedRAMP and CMMC are authorization regimes and
  a bare list would imply one.

## Adding content

1. Find it in a source document. If it is not there, it does not go on the site.
2. Check it against the exclusion list above.
3. Keep the qualifiers: "where configured", "where applicable", "depending on
   deployment", "availability varies by edition".
4. Note the source in a comment at the top of the data you add.


## The download gate

Nothing reaches a PDF without first submitting **name, business email,
organization and job title**.

How it holds:

- The files are in `private/documents/`, not `public/`. There is no CDN URL, so
  there is nothing to share, bookmark or index. `/documents/*.pdf` 404s.
- `GET /api/documents/[slug]` is the only way in, and it requires the access
  cookie. Without one it returns 401. The slug is matched against the document
  registry rather than joined into a path, so traversal resolves to nothing.
- `POST /api/documents/access` validates the four fields **on the server** —
  the browser's own validation is a convenience, not the control — forwards the
  lead to the same Formspree endpoint the site's other forms use, and sets the
  cookie. It is HttpOnly, SameSite=Lax, Secure in production, 30 days.
- A second, readable cookie (`aspis_doc_ok`) exists only so the UI knows not to
  re-prompt a returning visitor. It grants nothing; the download route never
  looks at it.
- `robots.ts` disallows `/api/`, the responses carry `X-Robots-Tag: noindex`
  and `Cache-Control: private, no-store`, and the PDFs are no longer in the
  sitemap.

### Two things to keep in mind

**Set `DOC_ACCESS_SECRET` in the Vercel project.** The access cookie is
HMAC-signed so its contents can be trusted. Without that variable the signature
falls back to a constant that is visible in this public repository, which makes
the token forgeable by someone who reads the source. Everything else about the
gate holds either way — the files are not public, not linkable and not
indexable, and no ordinary visitor reaches one without submitting the form —
but the signature only means something once the secret is set. Any value works;
a long random string is the point.

**Access is granted even if Formspree is unreachable.** A visitor who filled
the form in good faith should not be refused a white paper because a third
party is down. The response carries `delivered: false` when that happens, so
the failure is visible rather than silent — but the lead is lost. If lead
capture ever has to be guaranteed, that is the thing to change.

### If a document is added or replaced

1. Put the file in `private/documents/`.
2. Add or update its entry in `src/data/documents.ts` — `file` is the bare
   filename; re-measure `pages` and `bytes`.
3. Nothing else. `outputFileTracingIncludes` in `next.config.ts` ships whatever
   is in that directory alongside the download function. If a download 404s in
   production, check that entry first.
