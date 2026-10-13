/** Squared-off keyword / filter chip. */
export interface TagProps {
  children?: React.ReactNode;
  /** Navy-tinted selected state. */
  selected?: boolean;
  /** Adds a dismiss affordance. */
  onRemove?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
