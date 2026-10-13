/** Square icon-only action. Always needs an accessible label. */
export interface IconButtonProps {
  /** Lucide icon slug. */
  icon: string;
  /** Accessible label — also used as the tooltip title. */
  label: string;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
