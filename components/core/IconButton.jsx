import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: { box: 32, icon: 16 }, md: { box: 40, icon: 20 }, lg: { box: 48, icon: 22 } };

export function IconButton({ icon, label, variant = 'ghost', size = 'md', disabled = false, style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const skins = {
    primary: { bg: 'var(--action-primary-bg)', fg: 'var(--white)', bd: 'var(--action-primary-bg)', hover: 'var(--action-primary-bg-hover)' },
    accent: { bg: 'var(--action-accent-bg)', fg: 'var(--white)', bd: 'var(--action-accent-bg)', hover: 'var(--action-accent-bg-hover)' },
    outline: { bg: 'transparent', fg: 'var(--text-brand)', bd: 'var(--border-default)', hover: 'var(--surface-brand-soft)' },
    ghost: { bg: 'transparent', fg: 'var(--text-body)', bd: 'transparent', hover: 'var(--surface-subtle)' },
  };
  const k = skins[variant] || skins.ghost;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: s.box, height: s.box, padding: 0,
        borderRadius: 'var(--radius-control)',
        border: '1px solid ' + (disabled ? 'var(--action-disabled-bg)' : k.bd),
        background: disabled ? 'var(--action-disabled-bg)' : (hover ? k.hover : k.bg),
        color: disabled ? 'var(--action-disabled-fg)' : k.fg,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={s.icon} />
    </button>
  );
}
