import React from 'react';

export function Radio({ label, description, checked = false, disabled = false, name, value, onChange, style, ...rest }) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .55 : 1, ...style }}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: '0 0 auto', marginTop: 1,
        borderRadius: '50%',
        border: '1px solid ' + (checked ? 'var(--e2-navy)' : 'var(--border-strong)'),
        background: 'var(--surface-card)',
        transition: 'var(--transition-control)',
      }}>
        {checked && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--e2-navy)' }} />}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{label}</span>
        {description && <span style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>{description}</span>}
      </span>
    </label>
  );
}
