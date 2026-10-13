import React from 'react';

export function Switch({ label, description, checked = false, disabled = false, onChange, style, ...rest }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', justifyContent: 'space-between', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .55 : 1, ...style }}>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{label}</span>
        {description && <span style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>{description}</span>}
      </span>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        position: 'relative', flex: '0 0 auto',
        width: 42, height: 24, borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--e2-navy)' : 'var(--gray-300)',
        transition: 'background-color var(--dur-base) var(--ease-out)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: checked ? 21 : 3,
          width: 18, height: 18, borderRadius: '50%',
          background: 'var(--white)', boxShadow: 'var(--shadow-1)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }} />
      </span>
    </label>
  );
}
