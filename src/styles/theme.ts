import { pxToRem } from "./utils/pxToRem";

export const theme = {
  colors: {
    palette: {
      primary: "#3478F6",
      red: "#FF4D4F",
      gray: "#888888",
      lightGray: "#F0F0F0",
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
      subtitle: "#999999",
    },
  },

  typography: {
    title1: {
      fontWeight: 700,
      fontSize: `${pxToRem(24)}`,
      lineHeight: `${pxToRem(24)}`,
    },
    title2: {
      fontWeight: 700,
      fontSize: `${pxToRem(22)}`,
      lineHeight: `${pxToRem(24)}`,
    },
    title3: {
      fontWeight: 700,
      fontSize: `${pxToRem(18)}`,
      lineHeight: `${pxToRem(18)}`,
    },
    body1: {
      fontWeight: 500,
      fontSize: `${pxToRem(20)}`,
      lineHeight: `${pxToRem(20)}`,
    },
    body2: {
      fontWeight: 500,
      fontSize: `${pxToRem(14)}`,
      lineHeight: `${pxToRem(14)}`,
    },
    body2Bold: {
      fontWeight: 700,
      fontSize: `${pxToRem(14)}`,
      lineHeight: `${pxToRem(14)}`,
    },
    caption: {
      fontWeight: 500,
      fontSize: `${pxToRem(16)}`,
      lineHeight: `${pxToRem(16)}`,
    },
    small: {
      fontWeight: 500,
      fontSize: `${pxToRem(10)}`,
      lineHeight: `${pxToRem(10)}`,
    },
  },
} as const;
