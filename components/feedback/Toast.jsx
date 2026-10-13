import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const TONES = {
  info: { icon: 'info', color: 'var(--info-500)' },
  success: { icon: 'check-circle', color: 'var(--success-500)' },
  warning: { icon: 'triangle-alert', color: 'var(--warning-500)' },
  danger: { icon: 'circle-alert', color: 'var(--danger-500)' },
};

export function Toast({ title, description, tone = 'info', action, onClose, style, ...rest }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
      width: 380, maxWidth: '100%', padding: 'var(--space-5)',
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-3)',
      ...style,
    }} {...rest}>
      <Icon name={t.icon} size="md" color={t.color} style={{ marginTop: 2 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <span style={{ fontSize: 'var(--size-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{title}</span>
        {description && <span style={{ fontSize: 'var(--size-caption)', lineHeight: 'var(--lh-caption)', color: 'var(--text-muted)' }}>{description}</span>}
        {action && <div style={{ marginTop: 'var(--space-2)' }}>{action}</div>}
      </div>
      {onClose && <IconButton icon="x" label="Descartar" size="sm" onClick={onClose} />}
    </div>
  );
}
