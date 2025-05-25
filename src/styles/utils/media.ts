import {
  MOBILE_LARGE_BREAKPOINT,
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT,
} from "@/styles/constants/breakpoints";

export const media = {
  mobile: `@media (max-width: ${MOBILE_LARGE_BREAKPOINT}px)`,
  underTablet: `@media (max-width: ${TABLET_BREAKPOINT}px)`,
  tablet: `@media (min-width: ${TABLET_BREAKPOINT}px) and (max-width: ${
    DESKTOP_BREAKPOINT - 1
  }px)`,
  desktop: `@media (min-width: ${DESKTOP_BREAKPOINT}px)`,
};
