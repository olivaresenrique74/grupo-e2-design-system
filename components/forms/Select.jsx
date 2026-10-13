import React from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

const SIZES = { sm: 34, md: 42, lg: 48 };

export function Select({ label, hint, error, required, options = [], placeholder, size = 'md', disabled, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = SIZES[size] || SIZES.md;
  const uid = id || React.useId();
  return (
    <Field label={label} hint={hint} error={error} required={required} htmlFor={uid} style={style}>
      <div style={{ position: 'relative', minWidth: 0 }}>
        <select
          id={uid}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            fontFamily: 'var(--font-core)', fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-control)', transition: 'var(--transition-control)', width: '100%',
            height: h, padding: '0 38px 0 12px', outline: 'none',
            appearance: 'none', WebkitAppearance: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            borderColor: error ? 'var(--danger-500)' : focus ? 'var(--e2-navy)' : 'var(--border-default)',
            boxShadow: focus ? '0 0 0 3px rgba(31,62,111,.12)' : 'none',
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={16} color="var(--text-muted)" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      </div>
    </Field>
  );
}
