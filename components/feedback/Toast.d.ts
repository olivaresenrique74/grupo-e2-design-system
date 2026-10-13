/** Transient confirmation or error notice. */
export interface ToastProps {
  title?: string;
  description?: string;
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Optional inline action, e.g. a ghost Button. */
  action?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
