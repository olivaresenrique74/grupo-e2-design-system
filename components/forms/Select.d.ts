/** Native single-choice dropdown with brand chrome. */
export interface SelectOption { value: string; label: string }
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  /** Empty first option. */
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
