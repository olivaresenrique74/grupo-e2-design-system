import React from 'react';
import { Icon } from './Icon.jsx';

export function Card({
  children, title, eyebrow, description, icon, footer,
  variant = 'default', interactive = false, accentEdge = false, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
    subtle: { background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
    brand: { background: 'var(--surface-brand)', border: '1px solid var(--navy-800)', color: 'var(--navy-100)' },
    outline: { background: 'transparent', border: '1px solid var(--border-default)', color: 'var(--text-body)' },
  };
  const k = skins[variant] || skins.default;
  const onBrand = variant === 'brand';
  return (
    <div
      className={onBrand ? 'e2-on-dark' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        padding: 'var(--space-7)',
        borderRadius: 'var(--radius-card)',
        boxShadow: interactive && hover ? 'var(--shadow-3)' : 'var(--shadow-1)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'var(--transition-surface)',
        cursor: interactive ? 'pointer' : 'default',
        overflow: 'hidden',
        ...k,
        ...style,
      }}
      {...rest}
    >
      {accentEdge && <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 'var(--bevel-cut)', height: 3, background: 'var(--e2-orange)' }} />}
      {icon && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, borderRadius: 'var(--radius-sm)',
          background: onBrand ? 'rgba(255,255,255,.10)' : 'var(--surface-brand-soft)',
          color: onBrand ? 'var(--white)' : 'var(--e2-navy)',
        }}>
          <Icon name={icon} size="lg" />
        </span>
      )}
      {eyebrow && <span className="e2-eyebrow" style={{ color: onBrand ? 'var(--orange-300)' : 'var(--text-accent)' }}>{eyebrow}</span>}
      {title && <h3 style={{ fontSize: 'var(--size-h3)', lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontWeight: 'var(--weight-semibold)', color: onBrand ? 'var(--white)' : 'var(--text-strong)' }}>{title}</h3>}
      {description && <p style={{ fontSize: 'var(--size-body-sm)', lineHeight: 'var(--lh-body-sm)', color: 'inherit' }}>{description}</p>}
      {children}
      {footer && <div style={{ marginTop: 'auto', paddingTop: 'var(--space-5)', borderTop: onBrand ? 'var(--hairline-inverse)' : 'var(--hairline)' }}>{footer}</div>}
    </div>
  );
}
