import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, selected = false, onRemove, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 30, padding: onRemove ? '0 6px 0 12px' : '0 12px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid ' + (selected ? 'var(--border-brand)' : 'var(--border-subtle)'),
        background: selected ? 'var(--surface-brand-soft)' : (hover && clickable ? 'var(--surface-subtle)' : 'var(--surface-card)'),
        color: selected ? 'var(--text-brand)' : 'var(--text-body)',
        fontSize: 13, fontWeight: 'var(--weight-medium)', lineHeight: 1,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button type="button" aria-label="Quitar" onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, padding: 0, border: 0, borderRadius: 'var(--radius-xs)', background: 'transparent', color: 'var(--text-muted)', cursor: 'pointer' }}>
          <Icon name="x" size={13} />
        </button>
      )}
    </span>
  );
}
