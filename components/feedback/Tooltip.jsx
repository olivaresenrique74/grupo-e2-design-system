import React from 'react';

export function Tooltip({ label, placement = 'top', children, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  }[placement];
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} {...rest}>
      {children}
      {open && (
        <span role="tooltip" style={{
          position: 'absolute', zIndex: 60, ...pos,
          padding: '6px 10px', whiteSpace: 'nowrap',
          background: 'var(--navy-900)', color: 'var(--white)',
          fontSize: 12, fontWeight: 'var(--weight-medium)', lineHeight: 1.35,
          borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-2)',
          pointerEvents: 'none',
          animation: 'e2-tip var(--dur-fast) var(--ease-out)',
        }}>
          {label}
          <style>{'@keyframes e2-tip{from{opacity:0}}'}</style>
        </span>
      )}
    </span>
  );
}
