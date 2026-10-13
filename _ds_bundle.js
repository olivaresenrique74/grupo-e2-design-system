/* @ds-bundle: {"format":4,"namespace":"GrupoE2DesignSystem_a36653","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"555f53db5d74","components/core/Button.jsx":"57b8227bcaeb","components/core/Card.jsx":"e36bca07dfd8","components/core/Icon.jsx":"39a7243dff2f","components/core/IconButton.jsx":"0b3526419ebe","components/core/Logo.jsx":"d39f4aacb6f9","components/core/Tag.jsx":"932cf94be812","components/feedback/Dialog.jsx":"244bc1995b4e","components/feedback/Toast.jsx":"35cd043d7095","components/feedback/Tooltip.jsx":"d21d2e5da934","components/forms/Checkbox.jsx":"90f11f633df5","components/forms/Field.jsx":"8eb6c863a2d8","components/forms/Input.jsx":"b3f217098792","components/forms/Radio.jsx":"ca2ae0f4f725","components/forms/Select.jsx":"0953e1e335f7","components/forms/Switch.jsx":"b36c90319450","components/forms/Textarea.jsx":"0afbd844ea53","components/navigation/Tabs.jsx":"fc92b2e56b0b","ui_kits/website/doc-page.js":"f52ae9c02fca","ui_kits/website/page-contact.jsx":"e76a3a500510","ui_kits/website/page-home.jsx":"b2f0b9235dbb","ui_kits/website/page-services.jsx":"0df02d0a10fc","ui_kits/website/site-app.jsx":"81afdadc488a","ui_kits/website/site-chrome.jsx":"69a528f3a27e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrupoE2DesignSystem_a36653 = window.GrupoE2DesignSystem_a36653 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';
const SIZES = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};

/**
 * Lucide outline icon rendered as a CSS mask so it inherits currentColor.
 * Grupo E2 has no proprietary glyph set; Lucide (2px stroke, geometric,
 * flat-cut terminals) is the documented stand-in.
 */
function Icon({
  name,
  size = 'md',
  color,
  label,
  style,
  ...rest
}) {
  const px = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
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
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--gray-100)', 'var(--gray-700)', 'var(--gray-200)'],
  brand: ['var(--surface-brand-soft)', 'var(--navy-700)', 'var(--navy-100)'],
  accent: ['var(--orange-50)', 'var(--orange-700)', 'var(--orange-200)'],
  success: ['var(--success-50)', 'var(--success-600)', '#C6E4D2'],
  warning: ['var(--warning-50)', 'var(--warning-600)', '#F2DCB4'],
  danger: ['var(--danger-50)', 'var(--danger-600)', '#F0C9C4']
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  dot = false,
  solid = false,
  style,
  ...rest
}) {
  const [bg, fg, bd] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? fg : bg,
      color: solid ? 'var(--white)' : fg,
      border: '1px solid ' + (solid ? fg : bd),
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: '.02em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'var(--white)' : fg
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '0 14px',
    height: 34,
    fontSize: 13,
    gap: 6,
    icon: 16
  },
  md: {
    padding: '0 20px',
    height: 42,
    fontSize: 15,
    gap: 8,
    icon: 18
  },
  lg: {
    padding: '0 28px',
    height: 52,
    fontSize: 16,
    gap: 10,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: '1px solid var(--action-primary-bg)',
    hover: 'var(--action-primary-bg-hover)',
    active: 'var(--action-primary-bg-active)'
  },
  accent: {
    background: 'var(--action-accent-bg)',
    color: 'var(--action-accent-fg)',
    border: '1px solid var(--action-accent-bg)',
    hover: 'var(--action-accent-bg-hover)',
    active: 'var(--action-accent-bg-active)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid var(--border-brand)',
    hover: 'var(--surface-brand-soft)',
    active: 'var(--navy-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid transparent',
    hover: 'var(--surface-subtle)',
    active: 'var(--gray-100)'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--e2-navy)',
    border: '1px solid var(--white)',
    hover: 'var(--navy-50)',
    active: 'var(--navy-100)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  loading = false,
  as = 'button',
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const off = disabled || loading;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? off : undefined,
    "aria-busy": loading || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
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
      background: off ? 'var(--action-disabled-bg)' : press ? v.active : hover ? v.hover : v.background,
      color: off ? 'var(--action-disabled-fg)' : v.color,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: s.icon,
    style: {
      animation: 'e2-spin 900ms linear infinite'
    }
  }) : iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight && !loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null, /*#__PURE__*/React.createElement("style", null, '@keyframes e2-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  title,
  eyebrow,
  description,
  icon,
  footer,
  variant = 'default',
  interactive = false,
  accentEdge = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    brand: {
      background: 'var(--surface-brand)',
      border: '1px solid var(--navy-800)',
      color: 'var(--navy-100)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-body)'
    }
  };
  const k = skins[variant] || skins.default;
  const onBrand = variant === 'brand';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: onBrand ? 'e2-on-dark' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-7)',
      borderRadius: 'var(--radius-card)',
      boxShadow: interactive && hover ? 'var(--shadow-3)' : 'var(--shadow-1)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'var(--transition-surface)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...k,
      ...style
    }
  }, rest), accentEdge && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 'var(--bevel-cut)',
      height: 3,
      background: 'var(--e2-orange)'
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: onBrand ? 'rgba(255,255,255,.10)' : 'var(--surface-brand-soft)',
      color: onBrand ? 'var(--white)' : 'var(--e2-navy)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: "lg"
  })), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow",
    style: {
      color: onBrand ? 'var(--orange-300)' : 'var(--text-accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--size-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: onBrand ? 'var(--white)' : 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body-sm)',
      color: 'inherit'
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-5)',
      borderTop: onBrand ? 'var(--hairline-inverse)' : 'var(--hairline)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 20
  },
  lg: {
    box: 48,
    icon: 22
  }
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const skins = {
    primary: {
      bg: 'var(--action-primary-bg)',
      fg: 'var(--white)',
      bd: 'var(--action-primary-bg)',
      hover: 'var(--action-primary-bg-hover)'
    },
    accent: {
      bg: 'var(--action-accent-bg)',
      fg: 'var(--white)',
      bd: 'var(--action-accent-bg)',
      hover: 'var(--action-accent-bg-hover)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--text-brand)',
      bd: 'var(--border-default)',
      hover: 'var(--surface-brand-soft)'
    },
    ghost: {
      bg: 'transparent',
      fg: 'var(--text-body)',
      bd: 'transparent',
      hover: 'var(--surface-subtle)'
    }
  };
  const k = skins[variant] || skins.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      padding: 0,
      borderRadius: 'var(--radius-control)',
      border: '1px solid ' + (disabled ? 'var(--action-disabled-bg)' : k.bd),
      background: disabled ? 'var(--action-disabled-bg)' : hover ? k.hover : k.bg,
      color: disabled ? 'var(--action-disabled-fg)' : k.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ASSETS = {
  'full-color': 'logo-primary.png',
  'full-white': 'logo-white.png',
  'full-black': 'logo-black.png',
  'mark-color': 'mark-primary.png',
  'mark-white': 'mark-white.png'
};

/**
 * The official Grupo E2 lockup. Never recomposed, recoloured or split —
 * only these five supplied files are legal (Manual de Marca, sec. 03–05).
 */
function Logo({
  variant = 'full-color',
  height = 40,
  assetBase = '/assets/',
  clearSpace = false,
  style,
  ...rest
}) {
  const file = ASSETS[variant] || ASSETS['full-color'];
  const isMark = variant.startsWith('mark');
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase + file,
    alt: "Grupo E2 \u2014 E2 Corporative Group",
    height: height,
    style: {
      height,
      width: 'auto',
      padding: clearSpace ? height * 0.55 : 0,
      display: 'block',
      ...(isMark ? {} : {}),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: onRemove ? '0 6px 0 12px' : '0 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (selected ? 'var(--border-brand)' : 'var(--border-subtle)'),
      background: selected ? 'var(--surface-brand-soft)' : hover && clickable ? 'var(--surface-subtle)' : 'var(--surface-card)',
      color: selected ? 'var(--text-brand)' : 'var(--text-body)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      padding: 0,
      border: 0,
      borderRadius: 'var(--radius-xs)',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  description,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-7)',
      background: 'rgba(15,31,56,.55)',
      backdropFilter: 'blur(3px)',
      animation: 'e2-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-surface)',
      boxShadow: 'var(--shadow-4)',
      overflow: 'hidden',
      animation: 'e2-rise var(--dur-slow) var(--ease-emphasis)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      padding: 'var(--space-7) var(--space-7) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--size-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Cerrar",
    onClick: onClose,
    size: "sm"
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-7) var(--space-7)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-7)',
      borderTop: 'var(--hairline)',
      background: 'var(--surface-subtle)'
    }
  }, footer), /*#__PURE__*/React.createElement("style", null, '@keyframes e2-fade{from{opacity:0}}@keyframes e2-rise{from{opacity:0;transform:translateY(12px)}}')));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    icon: 'info',
    color: 'var(--info-500)'
  },
  success: {
    icon: 'check-circle',
    color: 'var(--success-500)'
  },
  warning: {
    icon: 'triangle-alert',
    color: 'var(--warning-500)'
  },
  danger: {
    icon: 'circle-alert',
    color: 'var(--danger-500)'
  }
};
function Toast({
  title,
  description,
  tone = 'info',
  action,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      width: 380,
      maxWidth: '100%',
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: "md",
    color: t.color,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      lineHeight: 'var(--lh-caption)',
      color: 'var(--text-muted)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Descartar",
    size: "sm",
    onClick: onClose
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 60,
      ...pos,
      padding: '6px 10px',
      whiteSpace: 'nowrap',
      background: 'var(--navy-900)',
      color: 'var(--white)',
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.35,
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-2)',
      pointerEvents: 'none',
      animation: 'e2-tip var(--dur-fast) var(--ease-out)'
    }
  }, label, /*#__PURE__*/React.createElement("style", null, '@keyframes e2-tip{from{opacity:0}}')));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (on ? 'var(--e2-navy)' : 'var(--border-strong)'),
      background: on ? 'var(--e2-navy)' : 'var(--surface-card)',
      color: 'var(--white)',
      transition: 'var(--transition-control)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 14
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Shared label / hint / error scaffold used by the form controls. */
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 'var(--size-label)',
      lineHeight: 'var(--lh-label)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--e2-orange)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      lineHeight: 'var(--lh-caption)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 34,
  md: 42,
  lg: 48
};
function Input({
  label,
  hint,
  error,
  required,
  iconLeft,
  suffix,
  size = 'md',
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = SIZES[size] || SIZES.md;
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      height: h,
      padding: '0 12px',
      minWidth: 0,
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-control)',
      transition: 'var(--transition-control)',
      width: '100%',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      borderColor: error ? 'var(--danger-500)' : focus ? 'var(--e2-navy)' : 'var(--border-default)',
      boxShadow: focus ? '0 0 0 3px rgba(31,62,111,.12)' : 'none'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontSize: 'inherit',
      color: 'inherit'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, suffix)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked = false,
  disabled = false,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--e2-navy)' : 'var(--border-strong)'),
      background: 'var(--surface-card)',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--e2-navy)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 34,
  md: 42,
  lg: 48
};
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  placeholder,
  size = 'md',
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = SIZES[size] || SIZES.md;
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-control)',
      transition: 'var(--transition-control)',
      width: '100%',
      height: h,
      padding: '0 38px 0 12px',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      borderColor: error ? 'var(--danger-500)' : focus ? 'var(--e2-navy)' : 'var(--border-default)',
      boxShadow: focus ? '0 0 0 3px rgba(31,62,111,.12)' : 'none'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  description,
  checked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      justifyContent: 'space-between',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--e2-navy)' : 'var(--gray-300)',
      transition: 'background-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  required,
  rows = 4,
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-control)',
      transition: 'var(--transition-control)',
      width: '100%',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none',
      lineHeight: 'var(--lh-body-sm)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      borderColor: error ? 'var(--danger-500)' : focus ? 'var(--e2-navy)' : 'var(--border-default)',
      boxShadow: focus ? '0 0 0 3px rgba(31,62,111,.12)' : 'none'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const active = value ?? (items[0] && items[0].id);
  const underline = variant === 'underline';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: underline ? 'var(--space-8)' : 'var(--space-1)',
      borderBottom: underline ? 'var(--hairline)' : 'none',
      padding: underline ? 0 : 4,
      background: underline ? 'transparent' : 'var(--surface-sunken)',
      borderRadius: underline ? 0 : 'var(--radius-control)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      disabled: it.disabled,
      onClick: () => onChange && onChange(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: underline ? '0 0 12px' : '0 14px',
        height: underline ? 40 : 34,
        border: 0,
        background: underline ? 'transparent' : on ? 'var(--surface-card)' : 'transparent',
        borderRadius: underline ? 0 : 'var(--radius-sm)',
        boxShadow: !underline && on ? 'var(--shadow-1)' : 'none',
        borderBottom: underline ? '2px solid ' + (on ? 'var(--e2-orange)' : 'transparent') : 'none',
        marginBottom: underline ? -1 : 0,
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        fontSize: 'var(--size-body-sm)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        cursor: it.disabled ? 'not-allowed' : 'pointer',
        opacity: it.disabled ? .5 : 1,
        transition: 'var(--transition-control)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 'var(--weight-semibold)',
        color: on ? 'var(--e2-navy)' : 'var(--text-muted)',
        background: on ? 'var(--surface-brand-soft)' : 'var(--gray-100)',
        borderRadius: 'var(--radius-pill)',
        padding: '2px 7px'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/page-contact.jsx
try { (() => {
function Contact() {
  const {
    Button,
    Card,
    Input,
    Select,
    Textarea,
    Checkbox,
    Toast,
    Icon,
    Logo
  } = window.GrupoE2DesignSystem_a36653;
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow"
  }, "Contacto"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--size-display-3)',
      lineHeight: 'var(--lh-display-3)',
      letterSpacing: 'var(--ls-display-3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, "Agenda un diagn\xF3stico inicial"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--text-body)',
      maxWidth: '42ch'
    }
  }, "Una sesi\xF3n de 60 minutos, sin costo. Al terminar recibes un resumen escrito de los tres frentes m\xE1s urgentes de tu operaci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-6)',
      borderTop: 'var(--hairline)'
    }
  }, [['mail', 'contacto@grupoe2.com'], ['globe', 'www.grupoe2.com'], ['map-pin', 'México'], ['clock', 'Lun a vie · 9:00 – 18:00']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--e2-navy)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)'
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Nombre y apellido",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Raz\xF3n social",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo corporativo",
    type: "email",
    iconLeft: "mail",
    placeholder: "nombre@empresa.com",
    required: true,
    error: sent && !ok ? 'Ingresa un correo válido.' : undefined
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    iconLeft: "phone",
    placeholder: "+52 55 0000 0000"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tama\xF1o de la empresa",
    placeholder: "Selecciona\u2026",
    style: {
      gridColumn: '1 / -1'
    },
    options: ['1–10 empleados', '11–50 empleados', '51–250 empleados', 'Más de 250 empleados']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Servicio de inter\xE9s",
    placeholder: "Selecciona\u2026",
    style: {
      gridColumn: '1 / -1'
    },
    options: ['Consultoría corporativa', 'Estandarización de operaciones', 'Gestión de proyectos', 'Aún no lo sé']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Reto operativo",
    rows: 4,
    placeholder: "\xBFQu\xE9 proceso se rompe primero?",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Acepto el aviso de privacidad",
    description: "Usamos tus datos \xFAnicamente para responder esta solicitud.",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: () => setSent(true)
  }, "Enviar solicitud"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Prefiero escribir un correo")))))), sent && ok && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Solicitud enviada",
    description: "Te contactamos en 48 horas h\xE1biles.",
    onClose: () => setSent(false)
  })));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/page-contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/page-home.jsx
try { (() => {
const SERVICES = [{
  icon: 'clipboard-list',
  eyebrow: 'Consultoría',
  title: 'Consultoría corporativa',
  text: 'Revisamos estructura, roles y decisiones. Entregamos un diagnóstico con prioridades, no un documento de 90 páginas.'
}, {
  icon: 'workflow',
  eyebrow: 'Operaciones',
  title: 'Estandarización de operaciones',
  text: 'Documentamos los procesos que ya funcionan, medimos los que no, y dejamos un manual que el equipo puede seguir sin nosotros.'
}, {
  icon: 'target',
  eyebrow: 'Proyectos',
  title: 'Gestión de proyectos',
  text: 'Un responsable, un tablero y fechas que se sostienen. Coordinamos proveedores, áreas internas y entregables.'
}];
const STEPS = [{
  n: '01',
  title: 'Diagnóstico',
  text: 'Dos semanas de entrevistas y revisión de datos operativos.'
}, {
  n: '02',
  title: 'Plan de trabajo',
  text: 'Alcance, responsables y calendario acordados por escrito.'
}, {
  n: '03',
  title: 'Implementación',
  text: 'Trabajamos dentro del equipo, no desde afuera.'
}, {
  n: '04',
  title: 'Transferencia',
  text: 'Manual, indicadores y capacitación al equipo interno.'
}];
function Home({
  go
}) {
  const {
    Button,
    Card,
    Badge,
    Icon
  } = window.GrupoE2DesignSystem_a36653;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--e2-navy)',
      position: 'relative',
      overflow: 'hidden'
    },
    className: "e2-on-dark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-white.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -120,
      top: 40,
      height: 460,
      opacity: .06,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '112px var(--gutter-inline-lg) 120px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow",
    style: {
      color: 'var(--orange-300)'
    }
  }, "Consultor\xEDa corporativa \xB7 M\xE9xico"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--size-display-1)',
      lineHeight: 'var(--lh-display-1)',
      letterSpacing: 'var(--ls-display-1)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--white)',
      maxWidth: '20ch'
    }
  }, "Operaciones que no dependen de una sola persona"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--navy-100)',
      maxWidth: '46ch'
    }
  }, "Ordenamos la operaci\xF3n de peque\xF1as y medianas empresas: procesos documentados, proyectos con due\xF1o y decisiones con datos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('contacto')
  }, "Agendar diagn\xF3stico"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => go('servicios')
  }, "Ver servicios")))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 6,
      background: 'linear-gradient(90deg,var(--e2-orange) 0 220px,rgba(255,255,255,.12) 220px)'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      borderBottom: 'var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-inline-lg)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)'
    }
  }, [['+120', 'proyectos implementados'], ['14', 'sectores atendidos'], ['6 sem', 'para el primer entregable'], ['1', 'responsable por proyecto']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-h1)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-h1)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--e2-navy)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Qu\xE9 hacemos",
    title: "Tres servicios, un mismo criterio",
    lead: "Cada servicio se contrata por separado o como un solo programa. Siempre con alcance escrito y un responsable con nombre."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    icon: s.icon,
    eyebrow: s.eyebrow,
    title: s.title,
    description: s.text,
    accentEdge: true,
    interactive: true,
    footer: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('servicios');
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 'var(--size-body-sm)',
        fontWeight: 600
      }
    }, "Conocer el alcance ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }))
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "C\xF3mo trabajamos",
    title: "Cuatro fases, sin sorpresas"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)'
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-5)',
      borderTop: '2px solid var(--e2-navy)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      fontWeight: 700,
      color: 'var(--e2-orange)'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--size-h4)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body-sm)',
      color: 'var(--text-body)'
    }
  }, s.text))))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    solid: true
  }, "Caso \xB7 Manufactura"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-h2)',
      lineHeight: 1.4,
      letterSpacing: 'var(--ls-h2)',
      color: 'var(--white)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "\u201CDocumentaron en ocho semanas lo que llev\xE1bamos tres a\xF1os explicando de voz en voz. Hoy el proceso sobrevive a las vacaciones.\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--navy-200)'
    }
  }, "Direcci\xF3n de Operaciones \xB7 empresa de 90 empleados")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      border: 'var(--hairline-inverse)',
      borderRadius: 'var(--radius-surface)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--size-h3)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--white)'
    }
  }, "Diagn\xF3stico inicial sin costo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body-sm)',
      color: 'var(--navy-100)'
    }
  }, "Una sesi\xF3n de 60 minutos y un resumen escrito de los tres frentes m\xE1s urgentes de tu operaci\xF3n."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: () => go('contacto')
  }, "Solicitar la sesi\xF3n")))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/page-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/page-services.jsx
try { (() => {
const DETAIL = {
  consultoria: {
    title: 'Consultoría corporativa',
    lead: 'Para empresas que crecieron más rápido que su estructura.',
    scope: ['Diagnóstico de estructura y roles', 'Mapa de decisiones y cuellos de botella', 'Modelo de gobierno y juntas', 'Plan de prioridades a 90 días'],
    deliverable: 'Informe ejecutivo + plan a 90 días',
    duration: '4 a 6 semanas',
    tags: ['Estructura', 'Roles', 'Gobierno corporativo']
  },
  operaciones: {
    title: 'Estandarización de operaciones',
    lead: 'Para operaciones que dependen de la memoria de dos o tres personas.',
    scope: ['Levantamiento de procesos en piso', 'Manual de operación por área', 'Indicadores y tableros de control', 'Capacitación y transferencia al equipo'],
    deliverable: 'Manual de operación + tablero de indicadores',
    duration: '8 a 12 semanas',
    tags: ['Procesos', 'Manuales', 'Indicadores']
  },
  proyectos: {
    title: 'Gestión de proyectos',
    lead: 'Para proyectos con muchos involucrados y ninguna fecha firme.',
    scope: ['Definición de alcance y entregables', 'Calendario y ruta crítica', 'Coordinación de proveedores y áreas', 'Reporte semanal a dirección'],
    deliverable: 'Tablero de proyecto + reporte semanal',
    duration: 'Por proyecto',
    tags: ['PMO', 'Proveedores', 'Reportes']
  }
};
function Services({
  go
}) {
  const {
    Button,
    Card,
    Tabs,
    Badge,
    Tag,
    Icon
  } = window.GrupoE2DesignSystem_a36653;
  const [tab, setTab] = React.useState('consultoria');
  const d = DETAIL[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--e2-navy)'
    },
    className: "e2-on-dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter-inline-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow",
    style: {
      color: 'var(--orange-300)'
    }
  }, "Servicios"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--size-display-2)',
      lineHeight: 'var(--lh-display-2)',
      letterSpacing: 'var(--ls-display-2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--white)',
      maxWidth: '24ch'
    }
  }, "Alcance escrito, responsable con nombre"))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'consultoria',
      label: 'Consultoría corporativa',
      icon: 'clipboard-list'
    }, {
      id: 'operaciones',
      label: 'Estandarización',
      icon: 'workflow'
    }, {
      id: 'proyectos',
      label: 'Gestión de proyectos',
      icon: 'target'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-10)',
      marginTop: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--size-h1)',
      lineHeight: 'var(--lh-h1)',
      letterSpacing: 'var(--ls-h1)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--text-body)'
    }
  }, d.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, d.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow"
  }, "Qu\xE9 incluye"), d.scope.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      paddingBottom: 'var(--space-4)',
      borderBottom: 'var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--e2-orange)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)'
    }
  }, s))))), /*#__PURE__*/React.createElement(Card, {
    variant: "subtle",
    style: {
      position: 'sticky',
      top: 100
    },
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      iconRight: "arrow-right",
      onClick: () => go('contacto')
    }, "Solicitar propuesta")
  }, /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow"
  }, "Resumen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Entregable"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, d.deliverable)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Duraci\xF3n estimada"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, d.duration)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Modalidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Presencial"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Remoto"))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Sectores",
    title: "D\xF3nde hemos trabajado",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, ['Manufactura', 'Retail', 'Logística', 'Construcción', 'Servicios profesionales', 'Alimentos y bebidas', 'Salud', 'Educación'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/page-services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-app.jsx
try { (() => {
function Site() {
  const [route, setRoute] = React.useState('home');
  const go = r => {
    setRoute(r);
    const el = document.getElementById('e2-scroll');
    if (el) el.scrollTop = 0;
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "e2-scroll",
    style: {
      height: '100vh',
      overflowY: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    key: route,
    style: {
      animation: 'e2-page var(--dur-page) var(--ease-out)'
    }
  }, route === 'home' && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), route === 'servicios' && /*#__PURE__*/React.createElement(Services, {
    go: go
  }), route === 'contacto' && /*#__PURE__*/React.createElement(Contact, {
    go: go
  })), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}
window.Site = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-chrome.jsx
try { (() => {
const NAV = [{
  id: 'home',
  label: 'Inicio'
}, {
  id: 'servicios',
  label: 'Servicios'
}, {
  id: 'contacto',
  label: 'Contacto'
}];
function Header({
  route,
  go
}) {
  const {
    Logo,
    Button,
    Icon
  } = window.GrupoE2DesignSystem_a36653;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('e2-scroll');
    if (!el) return;
    const on = () => setScrolled(el.scrollTop > 8);
    el.addEventListener('scroll', on);
    return () => el.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,255,255,.88)',
      backdropFilter: 'var(--blur-glass)',
      borderBottom: scrolled ? 'var(--hairline)' : '1px solid transparent',
      transition: 'border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline-lg)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full-color",
    height: 30,
    assetBase: "../../assets/"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginLeft: 'auto'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: route === n.id ? 'var(--text-strong)' : 'var(--text-body)',
      borderBottom: '2px solid ' + (route === n.id ? 'var(--e2-orange)' : 'transparent'),
      paddingBottom: 3
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => go('contacto')
  }, "Agendar diagn\xF3stico")));
}
function Footer({
  go
}) {
  const {
    Logo,
    Button,
    Icon
  } = window.GrupoE2DesignSystem_a36653;
  return /*#__PURE__*/React.createElement("footer", {
    className: "e2-on-dark",
    style: {
      background: 'var(--navy-900)',
      color: 'var(--navy-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter-inline-lg) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full-white",
    height: 30,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body-sm)',
      color: 'var(--navy-200)',
      maxWidth: '34ch'
    }
  }, "Consultor\xEDa corporativa, estandarizaci\xF3n de operaciones y gesti\xF3n de proyectos para peque\xF1as y medianas empresas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow",
    style: {
      color: 'var(--orange-300)'
    }
  }, "Navegaci\xF3n"), NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--navy-100)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow",
    style: {
      color: 'var(--orange-300)'
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contacto@grupoe2.com",
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--navy-100)'
    }
  }, "contacto@grupoe2.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.grupoe2.com",
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--navy-100)'
    }
  }, "www.grupoe2.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--navy-300)'
    }
  }, "M\xE9xico"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--hairline-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--gutter-inline-lg)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--navy-300)'
    }
  }, "Grupo E2 \xB7 Consultor\xEDa corporativa \xB7 M\xE9xico 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--navy-300)'
    }
  }, "Aviso de privacidad"))));
}
function Section({
  children,
  tone = 'light',
  style
}) {
  const {
    Logo,
    Button,
    Icon
  } = window.GrupoE2DesignSystem_a36653;
  const tones = {
    light: {
      background: 'var(--surface-page)'
    },
    subtle: {
      background: 'var(--surface-subtle)'
    },
    navy: {
      background: 'var(--e2-navy)'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: tone === 'navy' ? 'e2-on-dark' : undefined,
    style: {
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter-inline-lg)'
    }
  }, children));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left',
  dark = false
}) {
  const {
    Logo,
    Button,
    Icon
  } = window.GrupoE2DesignSystem_a36653;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: align === 'center' ? '62ch' : '52ch',
      margin: align === 'center' ? '0 auto' : 0,
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "e2-eyebrow",
    style: {
      color: dark ? 'var(--orange-300)' : 'var(--text-accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--size-display-3)',
      lineHeight: 'var(--lh-display-3)',
      letterSpacing: 'var(--ls-display-3)',
      fontWeight: 'var(--weight-bold)',
      color: dark ? 'var(--white)' : 'var(--text-strong)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: dark ? 'var(--navy-100)' : 'var(--text-body)'
    }
  }, lead));
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  SectionHead,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-chrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
