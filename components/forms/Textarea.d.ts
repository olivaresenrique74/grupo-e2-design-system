/** Multi-line text field. */
export interface TextareaProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
