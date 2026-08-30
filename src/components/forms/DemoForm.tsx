'use client';

import { PAGES } from '@/data/pages';
import FormShell, { SuccessPanel } from './FormShell';
import { RequiredNote, TextAreaField, TextField } from './Fields';

/**
 * Demo request — design file lines 2044–2075.
 * Eight data-driven fields plus the free-text requirements box: nine controls.
 * Submits as "ASPIS — Demo request"; the button reads "Request My
 * Consultation" (`formState('demo', …)`, design file line 3537).
 */
export default function DemoForm() {
  return (
    <FormShell
      subject="Demo request"
      submitLabel="Request My Consultation"
      success={
        <SuccessPanel
          accent="#2FD4A7"
          washAlpha={0.09}
          eyebrow="REQUEST RECEIVED"
          title="Thank you. An ASPIS specialist will be in touch."
          body="We review every request individually to determine the appropriate product and deployment architecture. Expect a response within one business day."
          style={{ alignSelf: 'start' }}
        />
      }
      footer={
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: 'var(--text-dim)',
            margin: 0,
            maxWidth: 520,
          }}
        >
          Submitted information is used to respond to your enquiry. ASPIS does not sell contact
          data.
        </p>
      }
    >
      <RequiredNote />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(180px,100%),1fr))',
          gap: 14,
        }}
      >
        {PAGES.formFields.map((f) => (
          <TextField key={f.name} field={f} />
        ))}
      </div>

      <TextAreaField label="TELL US ABOUT YOUR REQUIREMENTS" name="requirements" rows={4} />
    </FormShell>
  );
}
