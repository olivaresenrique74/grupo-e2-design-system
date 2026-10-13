import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Tabs({ items = [], value, onChange, variant = 'underline', style, ...rest }) {
  const active = value ?? (items[0] && items[0].id);
  const underline = variant === 'underline';
  return (
    <div role="tablist" style={{
      display: 'flex', alignItems: 'stretch',
      gap: underline ? 'var(--space-8)' : 'var(--space-1)',
      borderBottom: underline ? 'var(--hairline)' : 'none',
      padding: underline ? 0 : 4,
      background: underline ? 'transparent' : 'var(--surface-sunken)',
      borderRadius: underline ? 0 : 'var(--radius-control)',
      ...style,
    }} {...rest}>
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button key={it.id} role="tab" aria-selected={on} disabled={it.disabled}
            onClick={() => onChange && onChange(it.id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
              padding: underline ? '0 0 12px' : '0 14px',
              height: underline ? 40 : 34,
              border: 0, background: underline ? 'transparent' : (on ? 'var(--surface-card)' : 'transparent'),
              borderRadius: underline ? 0 : 'var(--radius-sm)',
              boxShadow: !underline && on ? 'var(--shadow-1)' : 'none',
              borderBottom: underline ? '2px solid ' + (on ? 'var(--e2-orange)' : 'transparent') : 'none',
              marginBottom: underline ? -1 : 0,
              color: on ? 'var(--text-strong)' : 'var(--text-muted)',
              fontSize: 'var(--size-body-sm)', fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              cursor: it.disabled ? 'not-allowed' : 'pointer',
              opacity: it.disabled ? .5 : 1,
              transition: 'var(--transition-control)',
            }}>
            {it.icon && <Icon name={it.icon} size={16} />}
            {it.label}
            {it.count != null && (
              <span style={{ fontSize: 12, fontWeight: 'var(--weight-semibold)', color: on ? 'var(--e2-navy)' : 'var(--text-muted)', background: on ? 'var(--surface-brand-soft)' : 'var(--gray-100)', borderRadius: 'var(--radius-pill)', padding: '2px 7px' }}>{it.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
