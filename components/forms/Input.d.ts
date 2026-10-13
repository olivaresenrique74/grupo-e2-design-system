/**
 * Single-line text field.
 */
export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Lucide icon slug shown inside the field, left of the text. */
  iconLeft?: string;
  /** Static trailing text, e.g. "MXN". */
  suffix?: string;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
