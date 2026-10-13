/**
 * Lucide outline icon, masked to currentColor.
 */
export interface IconProps {
  /** Lucide icon slug, e.g. "arrow-right", "shield-check". */
  name: string;
  /** Token size step or explicit pixel value. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Override colour; defaults to currentColor. */
  color?: string;
  /** Accessible label. Omit for decorative icons. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
