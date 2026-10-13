/** Modal overlay for confirmations and short forms. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** Right-aligned action row on a grey footer. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px. */
  width?: number;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element;
