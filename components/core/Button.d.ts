/**
 * Primary action control.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** navy solid | orange solid | navy outline | quiet | white-on-navy */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon slug placed before the label. */
  iconLeft?: string;
  /** Lucide icon slug placed after the label. */
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Shows a spinner and blocks interaction. */
  loading?: boolean;
  /** Render as another element, e.g. "a". */
  as?: 'button' | 'a';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
