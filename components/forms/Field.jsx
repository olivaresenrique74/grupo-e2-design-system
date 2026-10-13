import React from 'react';

/** Shared label / hint / error scaffold used by the form controls. */
export function Field({ label, hint, error, required, htmlFor, children, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', minWidth: 0, ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{ fontSize: 'var(--size-label)', lineHeight: 'var(--lh-label)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}{required && <span style={{ color: 'var(--e2-orange)' }}> *</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{ fontSize: 'var(--size-caption)', lineHeight: 'var(--lh-caption)', color: error ? 'var(--danger-500)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
