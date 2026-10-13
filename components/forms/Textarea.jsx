import React from 'react';
import { Field } from './Field.jsx';

export function Textarea({ label, hint, error, required, rows = 4, disabled, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <Field label={label} hint={hint} error={error} required={required} htmlFor={uid} style={style}>
      <textarea
        id={uid}
        rows={rows}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-core)', fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-control)', transition: 'var(--transition-control)', width: '100%',
          padding: '10px 12px', resize: 'vertical', outline: 'none',
          lineHeight: 'var(--lh-body-sm)',
          background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
          borderColor: error ? 'var(--danger-500)' : focus ? 'var(--e2-navy)' : 'var(--border-default)',
          boxShadow: focus ? '0 0 0 3px rgba(31,62,111,.12)' : 'none',
        }}
        {...rest}
      />
    </Field>
  );
}
