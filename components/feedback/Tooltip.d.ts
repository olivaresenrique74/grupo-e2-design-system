/** Hover/focus label for icon-only or truncated content. */
export interface TooltipProps {
  /** Tooltip text — one short line, no punctuation. */
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
