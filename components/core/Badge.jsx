import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral: ['var(--gray-100)', 'var(--gray-700)', 'var(--gray-200)'],
  brand: ['var(--surface-brand-soft)', 'var(--navy-700)', 'var(--navy-100)'],
  accent: ['var(--orange-50)', 'var(--orange-700)', 'var(--orange-200)'],
  success: ['var(--success-50)', 'var(--success-600)', '#C6E4D2'],
  warning: ['var(--warning-50)', 'var(--warning-600)', '#F2DCB4'],
  danger: ['var(--danger-50)', 'var(--danger-600)', '#F0C9C4'],
};

export function Badge({ children, tone = 'neutral', icon, dot = false, solid = false, style, ...rest }) {
  const [bg, fg, bd] = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 24, padding: '0 10px',
        borderRadius: 'var(--radius-pill)',
        background: solid ? fg : bg,
        color: solid ? 'var(--white)' : fg,
        border: '1px solid ' + (solid ? fg : bd),
        fontSize: 12, fontWeight: 'var(--weight-semibold)', lineHeight: 1,
        letterSpacing: '.02em', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? 'var(--white)' : fg }} />}
      {icon && <Icon name={icon} size={13} />}
      {children}
    </span>
  );
}
