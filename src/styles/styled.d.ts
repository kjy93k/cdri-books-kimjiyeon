import "@emotion/react";
import type { theme } from "./theme";

type PaletteKey = keyof typeof theme.colors.palette;
type TextColorKey = keyof typeof theme.colors.text;
type BorderKey = keyof typeof theme.colors.border;
type UiKey = keyof typeof theme.colors.ui;
type TypographyKey = keyof typeof theme.typography;

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      palette: { [key in PaletteKey]: string };
      text: { [key in TextColorKey]: string };
      border: { [key in BorderKey]: string };
      ui: { [key in UiKey]: string };
    };
    typography: {
      [key in TypographyKey]: (typeof theme.typography)[key];
    };
  }
}
