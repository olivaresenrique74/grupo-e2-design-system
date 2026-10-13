import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, checked = false, indeterminate = false, disabled = false, onChange, style, ...rest }) {
  const on = checked || indeterminate;
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .55 : 1, ...style }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: '0 0 auto', marginTop: 1,
        borderRadius: 'var(--radius-xs)',
        border: '1px solid ' + (on ? 'var(--e2-navy)' : 'var(--border-strong)'),
        background: on ? 'var(--e2-navy)' : 'var(--surface-card)',
        color: 'var(--white)',
        transition: 'var(--transition-control)',
      }}>
        {indeterminate ? <Icon name="minus" size={14} /> : checked ? <Icon name="check" size={14} /> : null}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{label}</span>
        {description && <span style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>{description}</span>}
      </span>
    </label>
  );
}
