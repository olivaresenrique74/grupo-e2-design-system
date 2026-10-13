/**
 * Official Grupo E2 lockup.
 */
export interface LogoProps {
  /** Which supplied artwork to use. Full lockup on light, white on navy/photo, black for one-ink. */
  variant?: 'full-color' | 'full-white' | 'full-black' | 'mark-color' | 'mark-white';
  /** Rendered height in px. Minimum legible height for the full lockup is 24px. */
  height?: number;
  /** Path prefix to the design-system assets folder. */
  assetBase?: string;
  /** Pad the image by the mandated clear space (height of the "E" mark). */
  clearSpace?: boolean;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
