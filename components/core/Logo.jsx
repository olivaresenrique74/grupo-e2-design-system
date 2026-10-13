import React from 'react';

const ASSETS = {
  'full-color': 'logo-primary.png',
  'full-white': 'logo-white.png',
  'full-black': 'logo-black.png',
  'mark-color': 'mark-primary.png',
  'mark-white': 'mark-white.png',
};

/**
 * The official Grupo E2 lockup. Never recomposed, recoloured or split —
 * only these five supplied files are legal (Manual de Marca, sec. 03–05).
 */
export function Logo({ variant = 'full-color', height = 40, assetBase = '/assets/', clearSpace = false, style, ...rest }) {
  const file = ASSETS[variant] || ASSETS['full-color'];
  const isMark = variant.startsWith('mark');
  return (
    <img
      src={assetBase + file}
      alt="Grupo E2 — E2 Corporative Group"
      height={height}
      style={{
        height,
        width: 'auto',
        padding: clearSpace ? height * 0.55 : 0,
        display: 'block',
        ...(isMark ? {} : {}),
        ...style,
      }}
      {...rest}
    />
  );
}
