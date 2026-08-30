'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { docHref, type Doc } from '@/data/documents';
import { UI_COOKIE } from '@/lib/docAccess';

/**
 * The access gate in front of every published PDF.
 *
 * One provider sits in the root layout and owns a single dialog; any card
 * anywhere on the site calls `open(doc)`. That keeps one dialog in the DOM
 * rather than one per card — a resource page renders nine.
 *
 * Flow: click a document → dialog → the four fields → POST /api/documents/access
 * → the server validates, forwards the lead to Formspree and sets the access
 * cookie → the document opens in a new tab. A visitor who has already been
 * through it goes straight to the document; the readable companion cookie is
 * how the UI knows, and it grants nothing on its own — the download route reads
 * only the signed HttpOnly cookie.
 *
 * The new tab is claimed BEFORE the request and pointed at the document once it
 * succeeds. Opening it afterwards happens outside the click's user gesture, and
 * popup blockers eat it. Note that the claim must NOT pass "noopener":
 * window.open returns null when it is set, which would leave a stray blank tab
 * open and force a second, gesture-less window.open that the browser blocks.
 * The destination is same-origin, so keeping the handle costs nothing; opener
 * is cleared on the new tab anyway.
 */

type GateContext = { open: (doc: Doc) => void; unlocked: boolean };
const Ctx = createContext<GateContext | null>(null);

export function useDocumentGate() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useDocumentGate must be used inside <DocumentGateProvider>');
  return ctx;
}

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Business email', type: 'email', autoComplete: 'email' },
  { name: 'company', label: 'Organization', type: 'text', autoComplete: 'organization' },
  { name: 'position', label: 'Job title', type: 'text', autoComplete: 'organization-title' },
] as const;

type FieldName = (typeof FIELDS)[number]['name'];

const hasUiCookie = () =>
  typeof document !== 'undefined' &&
  document.cookie.split('; ').some((c) => c.startsWith(`${UI_COOKIE}=`));

/**
 * The cookie is external state, so it is read through useSyncExternalStore
 * rather than copied into state in an effect. The server snapshot is `false`,
 * which is correct — the server has no cookies — and React reconciles after
 * hydration without a mismatch. Nothing notifies us when a cookie changes, so
 * the subscribe function is a no-op; the value is re-read on every render pass
 * React drives, and a successful submit sets `justUnlocked` directly.
 */
const subscribeToNothing = () => () => {};

export function DocumentGateProvider({ children }: { children: React.ReactNode }) {
  const [doc, setDoc] = useState<Doc | null>(null);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [formError, setFormError] = useState('');

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);

  const cookiePresent = useSyncExternalStore(subscribeToNothing, hasUiCookie, () => false);
  const unlocked = justUnlocked || cookiePresent;

  const close = useCallback(() => {
    setDoc(null);
    setErrors({});
    setFormError('');
    returnFocusTo.current?.focus();
  }, []);

  const open = useCallback((d: Doc) => {
    if (hasUiCookie()) {
      window.open(docHref(d.slug), '_blank', 'noopener');
      return;
    }
    returnFocusTo.current = document.activeElement as HTMLElement;
    setErrors({});
    setFormError('');
    setDoc(d);
  }, []);

  // Escape, focus trap and scroll lock — only while the dialog is up.
  useEffect(() => {
    if (!doc) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [doc, close]);

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!doc || busy) return;

      const data = Object.fromEntries(new FormData(e.currentTarget).entries());

      setBusy(true);
      setErrors({});
      setFormError('');

      // Claim the tab inside the gesture; fill it in once the request lands.
      const tab = window.open('about:blank', '_blank');
      if (tab) tab.opener = null;

      try {
        const res = await fetch('/api/documents/access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, slug: doc.slug }),
        });
        const json = (await res.json().catch(() => ({}))) as {
          ok?: boolean;
          errors?: Partial<Record<FieldName, string>>;
        };

        if (!res.ok || !json.ok) {
          tab?.close();
          if (json.errors) setErrors(json.errors);
          else setFormError('That did not go through. Please try again, or email us directly.');
          setBusy(false);
          return;
        }

        setJustUnlocked(true);
        setBusy(false);
        setDoc(null);
        if (tab) tab.location.href = docHref(doc.slug);
        else window.open(docHref(doc.slug), '_blank', 'noopener');
      } catch {
        tab?.close();
        setFormError('Network error. Please check your connection and try again.');
        setBusy(false);
      }
    },
    [doc, busy]
  );

  return (
    <Ctx.Provider value={{ open, unlocked }}>
      {children}
      {doc && (
        <div className="gate-backdrop" onClick={close}>
          <div
            ref={dialogRef}
            className="gate-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gate-title"
            aria-describedby="gate-desc"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="gate-close" onClick={close} aria-label="Close">
              <span aria-hidden>✕</span>
            </button>

            <span className="doc-kind" style={{ color: doc.accent }}>
              {doc.kind}
            </span>
            <h2 id="gate-title" className="gate-title">
              {doc.title}
            </h2>
            <p id="gate-desc" className="gate-desc">
              Tell us who you are and the document opens straight away. ASPIS uses this to
              understand who is evaluating the platform, and to respond if you get in touch. It is
              not sold on.
            </p>
            <p className="gate-meta">PDF · {doc.pages} PAGES · ALL FIELDS REQUIRED</p>

            <form onSubmit={submit} noValidate>
              <div className="gate-fields">
                {FIELDS.map((f, i) => (
                  <label key={f.name} className="gate-field">
                    <span className="gate-label">
                      {f.label}
                      <span aria-hidden>*</span>
                    </span>
                    <input
                      ref={i === 0 ? firstFieldRef : undefined}
                      name={f.name}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      required
                      disabled={busy}
                      aria-invalid={errors[f.name] ? true : undefined}
                      aria-describedby={errors[f.name] ? `gate-err-${f.name}` : undefined}
                    />
                    {errors[f.name] && (
                      <span id={`gate-err-${f.name}`} className="gate-error">
                        {errors[f.name]}
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {/* Honeypot, as on the site's other forms. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }}
              />

              <div aria-live="polite" className="gate-status">
                {formError}
              </div>

              <div className="gate-actions">
                <button type="submit" className="btn-primary" disabled={busy}>
                  {busy ? 'Opening…' : 'Read the document'}
                </button>
                <button type="button" className="btn-ghost" onClick={close} disabled={busy}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
