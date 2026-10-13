/** Small status pill for state, counts and stage labels. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger';
  /** Lucide icon slug. */
  icon?: string;
  /** Leading status dot. */
  dot?: boolean;
  /** Filled instead of tinted. */
  solid?: boolean;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
