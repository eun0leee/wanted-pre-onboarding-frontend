import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      green_main: string;
      green_sub: string;
      red_light: string;
    };
  }
}
