import '@mui/material';

interface PaletteGradient {
  first: string;
  second: string;
  third: string;
}

declare module '@mui/material' {
  interface Theme {}
  interface ThemeOptions {}

  //** Palette */

  interface Palette {
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
    gradient: PaletteGradient;
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    quaternary: PaletteOptions['primary'];
    gradient: PaletteGradient;
  }

  //** Button */

  interface ButtonPropsColorOverrides {
    tertiary: true;
    quaternary: true;
    gradient: true;
  }

  interface ButtonPropsVariantOverrides {
    'link-contained': true;
    'link-outlined': true;
  }
}
