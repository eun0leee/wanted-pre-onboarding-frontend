import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      green_main: string;
      green_sub: string;
      green_light: string;
      red_light: string;
    };
  }
}
