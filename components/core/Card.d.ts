/**
 * Content container — hairline border, 10px radius, low navy-tinted shadow.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Card heading (h3). */
  title?: string;
  /** Uppercase orange label above the title. */
  eyebrow?: string;
  /** Supporting body copy. */
  description?: string;
  /** Lucide icon slug shown in a tinted square. */
  icon?: string;
  /** Footer region separated by a hairline. */
  footer?: React.ReactNode;
  variant?: 'default' | 'subtle' | 'brand' | 'outline';
  /** Lift + deepen shadow on hover; sets a pointer cursor. */
  interactive?: boolean;
  /** Short orange bevel tick in the top-left corner. */
  accentEdge?: boolean;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
