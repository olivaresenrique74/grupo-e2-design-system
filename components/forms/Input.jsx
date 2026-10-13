import React from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

const SIZES = { sm: 34, md: 42, lg: 48 };

export function Input({ label, hint, error, required, iconLeft, suffix, size = 'md', disabled, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = SIZES[size] || SIZES.md;
  const uid = id || React.useId();
  return (
    <Field label={label} hint={hint} error={error} required={required} htmlFor={uid} style={style}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
        height: h, padding: '0 12px', minWidth: 0,
        fontFamily: 'var(--font-core)', fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-control)', transition: 'var(--transition-control)', width: '100%',
        background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        borderColor: error ? 'var(--danger-500)' : focus ? 'var(--e2-navy)' : 'var(--border-default)',
        boxShadow: focus ? '0 0 0 3px rgba(31,62,111,.12)' : 'none',
      }}>
        {iconLeft && <Icon name={iconLeft} size={16} color="var(--text-muted)" />}
        <input
          id={uid}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, height: '100%', border: 0, outline: 'none', background: 'transparent', fontSize: 'inherit', color: 'inherit' }}
          {...rest}
        />
        {suffix && <span style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{suffix}</span>}
      </div>
    </Field>
  );
}
