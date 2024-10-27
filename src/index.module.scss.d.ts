export type Styles = {
  [x: string]: string | undefined;
  [x: string]: string | undefined;
  'app': string;
  'app--loading': string;
  'toast-enter': string;
  'toast-enter-active': string;
  'toast-exit': string;
  'toast-exit-active': string;
  'videoBackground': string;
  'content': string;

};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
