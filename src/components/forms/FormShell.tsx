'use client';

import { useState } from 'react';
import { EXTERNAL } from '@/data/nav';
import { rgba } from '@/lib/theme';

/**
 * The shared Formspree AJAX layer, ported from `submitTo(id, subject)` and
 * `formState(id, label)` in "ASPIS Website v2.dc.html" (lines 3231–3270).
 *
 * The design file posts a `FormData` body; the porting brief specifies JSON, so
 * the form is serialized to a plain object first (repeated names — the
 * multi-select on the deal registration — collapse into an array). Everything
 * else is the design's behavior verbatim: preventDefault, manual
 * checkValidity/reportValidity (the form carries noValidate), the four states,
 * the "Sending…" label with opacity .6 and cursor wait, `form.reset()` on
 * success, Formspree's own `errors[].message` joined with ". " ahead of the
 * generic fallback, and a separate message for a thrown fetch.
 */

export type FormStatus = 'idle' | 'submitting' | 'succeeded' | 'error';

/** The shape every field record in `@/data/pages` shares. */
export type FieldSpec = {
  readonly label: string;
  readonly name: string;
  readonly type: string;
  readonly required: boolean;
  readonly autocomplete: string;
};

/** Off-screen but still submitted / still announced. Design file, line 2053. */
export const VISUALLY_HIDDEN: React.CSSProperties = {
  position: 'absolute',
  left: -9999,
  width: 1,
  height: 1,
  opacity: 0,
  overflow: 'hidden',
};

const GENERIC_ERROR = 'That did not go through. Please try again, or email us directly.';
const NETWORK_ERROR = 'Network error. Please check your connection and try again.';

/** FormData → JSON, preserving repeated names (multi-selects) as arrays. */
function serialize(form: HTMLFormElement): Record<string, string | string[]> {
  const out: Record<string, string | string[]> = {};
  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value !== 'string') continue;
    const seen = out[key];
    if (seen === undefined) out[key] = value;
    else if (Array.isArray(seen)) seen.push(value);
    else out[key] = [seen, value];
  }
  return out;
}

export default function FormShell({
  subject,
  submitLabel,
  success,
  children,
  footer,
  style,
  noticeMaxWidth,
}: {
  /** Appended as `_subject` in the form of `ASPIS — {subject}`. */
  subject: string;
  /** Idle button label; swaps to "Sending…" while in flight. */
  submitLabel: string;
  /** Replaces the whole form once the submission succeeds. */
  success: React.ReactNode;
  children: React.ReactNode;
  /** Rendered inside the form, after the submit button. */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
  noticeMaxWidth?: number;
}) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const submitting = status === 'submitting';

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus('submitting');
    setMessage('');
    try {
      const payload = serialize(form);
      payload._subject = `ASPIS — ${subject}`;
      const res = await fetch(EXTERNAL.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        form.reset();
        setStatus('succeeded');
        return;
      }
      const body: { errors?: { message?: string }[] } = await res.json().catch(() => ({}));
      const msg =
        body.errors?.map((x) => x.message).filter(Boolean).join('. ') || GENERIC_ERROR;
      setStatus('error');
      setMessage(msg);
    } catch {
      setStatus('error');
      setMessage(NETWORK_ERROR);
    }
  }

  /* One live region, mounted for the life of the page, so every transition is
     announced — including the swap to the success panel, which unmounts the
     form entirely. */
  const live = (
    <p role="status" aria-live="polite" style={VISUALLY_HIDDEN}>
      {status === 'submitting' && 'Sending your submission.'}
      {status === 'succeeded' && 'Submission received.'}
      {status === 'error' && message}
    </p>
  );

  if (status === 'succeeded') {
    return (
      <>
        {live}
        {success}
      </>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 14, ...style }}>
      {live}

      {/* Honeypot — bots fill it, people never see or tab to it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={VISUALLY_HIDDEN}
      />

      {children}

      {status === 'error' && (
        <div
          style={{
            border: '1px solid rgba(240,69,42,.45)',
            background: 'rgba(240,69,42,.08)',
            borderRadius: 5,
            padding: '13px 15px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            ...(noticeMaxWidth ? { maxWidth: noticeMaxWidth } : null),
          }}
        >
          <span aria-hidden style={{ color: 'var(--sev-high)', fontSize: 14, lineHeight: 1.4 }}>
            ⚠
          </span>
          <span style={{ fontSize: 14.5, lineHeight: 1.55, color: '#FFC4B5' }}>{message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="btn-primary"
        style={{
          fontSize: 15,
          padding: '15px 28px',
          border: 'none',
          justifySelf: 'start',
          opacity: submitting ? 0.6 : 1,
          cursor: submitting ? 'wait' : 'pointer',
        }}
      >
        {submitting ? 'Sending…' : submitLabel}
      </button>

      {footer}
    </form>
  );
}

/**
 * The "received" panel that replaces a submitted form. Colors differ per form
 * (teal on the demo request, amber on the deal registration) so the accent is a
 * prop rather than a token lookup.
 */
export function SuccessPanel({
  accent,
  washAlpha = 0.09,
  eyebrow,
  title,
  body,
  style,
}: {
  accent: string;
  /** The design tints the panel .09 on the demo form, .08 on the deal form. */
  washAlpha?: number;
  eyebrow: string;
  title: string;
  body: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        border: `1px solid ${rgba(accent, 0.45)}`,
        backgroundColor: rgba(accent, washAlpha),
        borderRadius: 6,
        padding: 'clamp(24px,3vw,34px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10.5,
          letterSpacing: '.16em',
          color: accent,
        }}
      >
        {eyebrow}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '-.02em',
        }}
      >
        {title}
      </span>
      <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#B6C1D8' }}>{body}</span>
    </div>
  );
}
