/**
 * Horizontal view switcher.
 */
export interface TabItem { id: string; label: string; icon?: string; count?: number; disabled?: boolean }
export interface TabsProps {
  items: TabItem[];
  /** Active tab id; defaults to the first item. */
  value?: string;
  onChange?: (id: string) => void;
  /** Hairline rail with an orange active underline, or a grey segmented pill group. */
  variant?: 'underline' | 'segmented';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
