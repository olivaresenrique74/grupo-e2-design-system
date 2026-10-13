import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { padding: '0 14px', height: 34, fontSize: 13, gap: 6, icon: 16 },
  md: { padding: '0 20px', height: 42, fontSize: 15, gap: 8, icon: 18 },
  lg: { padding: '0 28px', height: 52, fontSize: 16, gap: 10, icon: 20 },
};

const VARIANTS = {
  primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', border: '1px solid var(--action-primary-bg)', hover: 'var(--action-primary-bg-hover)', active: 'var(--action-primary-bg-active)' },
  accent: { background: 'var(--action-accent-bg)', color: 'var(--action-accent-fg)', border: '1px solid var(--action-accent-bg)', hover: 'var(--action-accent-bg-hover)', active: 'var(--action-accent-bg-active)' },
  secondary: { background: 'transparent', color: 'var(--text-brand)', border: '1px solid var(--border-brand)', hover: 'var(--surface-brand-soft)', active: 'var(--navy-100)' },
  ghost: { background: 'transparent', color: 'var(--text-brand)', border: '1px solid transparent', hover: 'var(--surface-subtle)', active: 'var(--gray-100)' },
  inverse: { background: 'var(--white)', color: 'var(--e2-navy)', border: '1px solid var(--white)', hover: 'var(--navy-50)', active: 'var(--navy-100)' },
};

export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  fullWidth = false, disabled = false, loading = false, as = 'button', style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const off = disabled || loading;
  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? off : undefined}
      aria-busy={loading || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-core)',
        fontSize: s.fontSize,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '.005em',
        lineHeight: 1,
        borderRadius: 'var(--radius-control)',
        cursor: off ? 'not-allowed' : 'pointer',
        textDecoration: 'none',
        transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-out)',
        transform: press && !off ? 'scale(var(--press-scale))' : 'none',
        boxShadow: variant === 'primary' || variant === 'accent' ? 'var(--shadow-1)' : 'none',
        ...v,
        border: off ? '1px solid var(--action-disabled-bg)' : v.border,
        background: off ? 'var(--action-disabled-bg)' : (press ? v.active : hover ? v.hover : v.background),
        color: off ? 'var(--action-disabled-fg)' : v.color,
        ...style,
      }}
      {...rest}
    >
      {loading ? <Icon name="loader-circle" size={s.icon} style={{ animation: 'e2-spin 900ms linear infinite' }} /> : iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      {children}
      {iconRight && !loading ? <Icon name={iconRight} size={s.icon} /> : null}
      <style>{'@keyframes e2-spin{to{transform:rotate(360deg)}}'}</style>
    </Tag>
  );
}
