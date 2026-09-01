'use client';

import { PAGES } from '@/data/pages';
import FormShell, { SuccessPanel } from './FormShell';
import { useEffect, useState } from 'react';
import { RequiredNote, SelectField, TextAreaField, TextField } from './Fields';
import { AREA_OPTIONS, CONTACT_AREAS } from '@/lib/contact';

/**
 * Demo request — design file lines 2044–2075.
 * Eight data-driven fields plus the free-text requirements box: nine controls.
 * Submits as "ASPIS — Demo request"; the button reads "Request My
 * Consultation" (`formState('demo', …)`, design file line 3537).
 */
export default function DemoForm() {
  // The five contact routes are separate destinations in the navigation
  // (/contact#government-and-defense and so on). Reading the hash preselects
  // the matching option so a visitor who chose a path does not have to choose
  // it again, and so the inquiry arrives already routed.
  const [area, setArea] = useState('');
  useEffect(() => {
    const apply = () => {
      const slug = window.location.hash.replace('#', '');
      const match = CONTACT_AREAS.find((c) => c.slug === slug);
      if (match) setArea(match.t);
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

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
            color: 'var(--text-muted)',
            margin: 0,
            maxWidth: 520,
          }}
        >
          Submitted information is used to respond to your inquiry. ASPIS does not sell contact
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
        {PAGES.formFields
          .filter((f) => f.name !== 'area_of_interest')
          .map((f) => (
            <TextField key={f.name} field={f} />
          ))}
        <SelectField
          label="AREA OF INTEREST*"
          name="area_of_interest"
          required
          options={AREA_OPTIONS}
          placeholder="Select an area…"
          value={area}
          onChange={setArea}
        />
      </div>

      <TextAreaField label="TELL US ABOUT YOUR REQUIREMENTS" name="requirements" rows={4} />
    </FormShell>
  );
}
