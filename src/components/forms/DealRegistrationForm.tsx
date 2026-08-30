'use client';

import { PAGES } from '@/data/pages';
import FormShell, { SuccessPanel } from './FormShell';
import { CheckboxField, RequiredNote, SelectField, TextAreaField, TextField } from './Fields';

/**
 * Partner deal registration — design file lines 2193–2334.
 * Three fieldsets (partner details, end customer, opportunity) plus the
 * accuracy confirmation. Submits as "ASPIS — Deal registration"; the button
 * reads "Submit Deal Registration" (design file line 3538).
 *
 * Every option list below is verbatim from the design file, in source order,
 * including its preselected first entry.
 */

const PARTNER_TYPES = [
  'MSP / MSSP',
  'Reseller',
  'Systems integrator',
  'Telecommunications carrier',
  'Technology partner',
] as const;

const CUSTOMER_INDUSTRIES = [
  'Enterprise / Corporate',
  'Financial Services',
  'Government',
  'Defense / Intelligence',
  'Healthcare',
  'Critical Infrastructure',
  'Technology',
  'Telecommunications',
  'Other',
] as const;

const ORGANIZATION_SIZES = [
  '1–99',
  '100–499',
  '500–999',
  '1,000–4,999',
  '5,000–9,999',
  '10,000–49,999',
  '50,000+',
] as const;

const PRODUCTS_OF_INTEREST = [
  'ShieldiT Enterprise',
  'ShieldiT FSX',
  'ShieldiT Defense',
  'ShieldiT Executive',
  'ManageiT',
  'SentinelIQ',
  'ShieldMe / carrier',
] as const;

const DEPLOYMENT_REQUIREMENTS = [
  'SaaS',
  'Dedicated',
  'Private cloud',
  'Sovereign cloud',
  'On-premises',
  'Government architecture',
  'Isolated / air-gapped',
  'Not yet determined',
] as const;

const OPPORTUNITY_STAGES = [
  'Qualifying',
  'Technical evaluation',
  'Proposal',
  'Procurement',
] as const;

const SUPPORT_REQUESTED = [
  'Technical resource for a demo',
  'Architecture and deployment guidance',
  'Security or compliance questionnaire support',
  'Joint customer meeting',
  'None at this stage',
] as const;

const GROUP_EYEBROW: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '.2em',
  color: 'var(--amber)',
  marginBottom: 16,
};

const GROUP_GRID: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))',
  gap: 14,
};

export default function DealRegistrationForm() {
  return (
    <FormShell
      subject="Deal registration"
      submitLabel="Submit Deal Registration"
      style={{ gap: 26, maxWidth: 960 }}
      noticeMaxWidth={720}
      success={
        <SuccessPanel
          accent="#F5C451"
          washAlpha={0.08}
          eyebrow="REGISTRATION SUBMITTED"
          title="Your deal registration has been received."
          body="Channel operations will review the opportunity and confirm engagement alignment. Registration confirms alignment; it does not by itself constitute a commercial commitment by ASPIS."
          style={{ maxWidth: 760 }}
        />
      }
    >
      <RequiredNote />

      <fieldset style={{ border: 'none', padding: 0, margin: 0, minWidth: 0 }}>
        <legend style={{ ...GROUP_EYEBROW, padding: 0 }}>PARTNER DETAILS</legend>
        <div style={GROUP_GRID}>
          {PAGES.dealPartnerFields.map((f) => (
            <TextField key={f.name} field={f} />
          ))}
          <SelectField label="PARTNER TYPE" name="partner_type" options={PARTNER_TYPES} />
        </div>
      </fieldset>

      <fieldset style={{ border: 'none', padding: 0, margin: 0, minWidth: 0 }}>
        <legend style={{ ...GROUP_EYEBROW, padding: 0 }}>END CUSTOMER</legend>
        <div style={GROUP_GRID}>
          {PAGES.dealCustomerFields.map((f) => (
            <TextField key={f.name} field={f} />
          ))}
          <SelectField label="INDUSTRY" name="customer_industry" options={CUSTOMER_INDUSTRIES} />
          <SelectField
            label="ORGANIZATION SIZE"
            name="organization_size"
            options={ORGANIZATION_SIZES}
          />
        </div>
      </fieldset>

      <fieldset style={{ border: 'none', padding: 0, margin: 0, minWidth: 0 }}>
        <legend style={{ ...GROUP_EYEBROW, padding: 0 }}>OPPORTUNITY</legend>
        <div style={{ ...GROUP_GRID, marginBottom: 14 }}>
          <SelectField
            label="PRODUCTS OF INTEREST"
            name="products_of_interest"
            options={PRODUCTS_OF_INTEREST}
            multiple
            size={4}
          />
          <SelectField
            label="DEPLOYMENT REQUIREMENT"
            name="deployment_requirement"
            options={DEPLOYMENT_REQUIREMENTS}
          />
          <TextField
            field={{
              label: 'ESTIMATED USERS',
              name: 'estimated_users',
              type: 'text',
              required: false,
              autocomplete: 'off',
            }}
          />
          <TextField
            field={{
              label: 'EXPECTED DECISION DATE',
              name: 'expected_decision_date',
              type: 'text',
              required: false,
              autocomplete: 'off',
            }}
          />
          <SelectField
            label="OPPORTUNITY STAGE"
            name="opportunity_stage"
            options={OPPORTUNITY_STAGES}
          />
          <SelectField
            label="ASPIS SUPPORT REQUESTED"
            name="aspis_support_requested"
            options={SUPPORT_REQUESTED}
          />
        </div>
        <TextAreaField label="OPPORTUNITY DETAILS" name="opportunity_details" rows={4} />
      </fieldset>

      <CheckboxField name="confirmation" value="confirmed" required>
        I confirm this opportunity is active, that the end customer is aware of our engagement, and
        that the information provided is accurate. Registration confirms engagement alignment; it
        does not by itself constitute a commercial commitment by ASPIS.
      </CheckboxField>
    </FormShell>
  );
}
