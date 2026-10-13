/** Multi-select boolean control. */
export interface CheckboxProps {
  label?: string;
  /** Secondary line under the label. */
  description?: string;
  checked?: boolean;
  /** Mixed state (dash glyph). */
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
