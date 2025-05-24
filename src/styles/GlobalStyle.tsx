import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

export default function GlobalStyle() {
  return (
    <Global
      styles={(theme) => css`
        ${reset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        body {
          font-family: "Noto Sans KR", sans-serif;
          color: ${theme.colors.text.primary};
        }
      `}
    />
  );
}
