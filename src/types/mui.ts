import '@mui/material';

declare module '@mui/material' {
  interface Theme {}
  interface ThemeOptions {}

  //** Palette */

  interface Palette {
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    quaternary: PaletteOptions['primary'];
  }

  //** Button */

  interface ButtonPropsColorOverrides {
    tertiary: true;
    quaternary: true;
  }

  interface ButtonPropsVariantOverrides {
    'link-contained': true;
    'link-outlined': true;
  }
}
