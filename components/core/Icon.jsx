import React from 'react';

const CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';
const SIZES = { sm: 16, md: 20, lg: 24, xl: 32 };

/**
 * Lucide outline icon rendered as a CSS mask so it inherits currentColor.
 * Grupo E2 has no proprietary glyph set; Lucide (2px stroke, geometric,
 * flat-cut terminals) is the documented stand-in.
 */
export function Icon({ name, size = 'md', color, label, style, ...rest }) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const url = `url("${CDN}${name}.svg")`;
  return (
    <span
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: 'inline-block',
        width: px,
        height: px,
        flex: '0 0 auto',
        background: color || 'currentColor',
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        ...style,
      }}
      {...rest}
    />
  );
}
