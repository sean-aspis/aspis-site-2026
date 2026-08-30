'use client';

import type { FieldSpec } from './FormShell';

/**
 * Labelled controls for both forms.
 *
 * The design file wraps each control in an implicit `<label>`; these use an
 * explicit `htmlFor`/`id` pair instead so the association survives however the
 * markup is later rearranged. Labels take `.field-label`, controls take
 * `.field-input` — both already defined in globals.css, so no per-control
 * inline styling here. Required fields carry `required`; their labels come out
 * of the data already ending in "*", which the RequiredNote below explains.
 */

const controlId = (name: string) => `fld-${name}`;

export function TextField({ field }: { field: FieldSpec }) {
  const id = controlId(field.name);
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {field.label}
      </label>
      <input
        id={id}
        className="field-input"
        type={field.type}
        name={field.name}
        required={field.required}
        autoComplete={field.autocomplete}
      />
    </div>
  );
}

export function SelectField({
  label,
  name,
  options,
  multiple,
  size,
}: {
  label: string;
  name: string;
  options: readonly string[];
  multiple?: boolean;
  size?: number;
}) {
  const id = controlId(name);
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="field-input"
        name={name}
        multiple={multiple}
        size={size}
        defaultValue={multiple ? [] : options[0]}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  rows = 4,
}: {
  label: string;
  name: string;
  rows?: number;
}) {
  const id = controlId(name);
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <textarea id={id} className="field-input" name={name} rows={rows} />
    </div>
  );
}

export function CheckboxField({
  name,
  value,
  required,
  children,
}: {
  name: string;
  value: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const id = controlId(name);
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', maxWidth: 720 }}>
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        required={required}
        style={{ marginTop: 3, width: 17, height: 17, accentColor: '#5FA8FF', flex: '0 0 auto' }}
      />
      <label htmlFor={id} style={{ fontSize: 14, lineHeight: 1.55, color: '#B6C1D8' }}>
        {children}
      </label>
    </div>
  );
}

/**
 * Required fields are marked with "*" in the label text itself — shape, not
 * colour — and this legend says what the mark means.
 */
export function RequiredNote({ style }: { style?: React.CSSProperties }) {
  return (
    <p
      style={{
        fontSize: 13,
        lineHeight: 1.6,
        color: 'var(--text-dim)',
        margin: 0,
        ...style,
      }}
    >
      Fields marked <span style={{ fontWeight: 700 }}>*</span> are required.
    </p>
  );
}
