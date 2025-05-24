import "@emotion/react";
import type { theme } from "./theme";

type PaletteKey = keyof typeof theme.colors.palette;
type TextColorKey = keyof typeof theme.colors.text;
type TypographyKey = keyof typeof theme.typography;

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      palette: { [key in PaletteKey]: string };
      text: { [key in TextColorKey]: string };
    };
    typography: {
      [key in TypographyKey]: (typeof theme.typography)[key];
    };
  }
}
