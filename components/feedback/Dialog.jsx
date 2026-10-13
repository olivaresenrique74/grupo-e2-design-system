import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = false, title, description, children, footer, onClose, width = 520, style, ...rest }) {
  if (!open) return null;
  return (
    <div role="presentation" onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-7)',
      background: 'rgba(15,31,56,.55)', backdropFilter: 'blur(3px)',
      animation: 'e2-fade var(--dur-base) var(--ease-out)',
    }}>
      <div role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: width,
          background: 'var(--surface-card)', borderRadius: 'var(--radius-surface)',
          boxShadow: 'var(--shadow-4)', overflow: 'hidden',
          animation: 'e2-rise var(--dur-slow) var(--ease-emphasis)',
          ...style,
        }} {...rest}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-5)', padding: 'var(--space-7) var(--space-7) var(--space-5)' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {title && <h2 style={{ fontSize: 'var(--size-h3)', lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontWeight: 'var(--weight-semibold)' }}>{title}</h2>}
            {description && <p style={{ fontSize: 'var(--size-body-sm)', lineHeight: 'var(--lh-body-sm)', color: 'var(--text-muted)' }}>{description}</p>}
          </div>
          {onClose && <IconButton icon="x" label="Cerrar" onClick={onClose} size="sm" />}
        </div>
        {children && <div style={{ padding: '0 var(--space-7) var(--space-7)' }}>{children}</div>}
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-4)', padding: 'var(--space-5) var(--space-7)', borderTop: 'var(--hairline)', background: 'var(--surface-subtle)' }}>{footer}</div>}
        <style>{'@keyframes e2-fade{from{opacity:0}}@keyframes e2-rise{from{opacity:0;transform:translateY(12px)}}'}</style>
      </div>
    </div>
  );
}
