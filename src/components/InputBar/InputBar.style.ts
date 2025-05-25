import { theme } from "@/styles/theme";
import { pxToRem } from "@/styles/utils/pxToRem";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const BasicInputStyle = css`
  ${css(theme.typography.caption)}
  width: 100%;
  background-color: transparent;
  border: none;
  box-shadow: none;
  -webkit-appearance: none;

  // hide Safari input icon
  &::-webkit-contacts-auto-fill-button,
  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    height: 0;
    width: 0;
    margin: 0;
  }

  // hide IE input icon
  &::-ms-clear,
  &::-ms-reveal {
    width: 0;
    height: 0;
    display: none;
  }
  // hide firefox input icon
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
  &:active,
  &:focus,
  &:-webkit-autofill {
    outline: none;
  }

  &:disabled,
  &:read-only {
  }

  &.error {
  }
`;

export const InPutStyle = styled.input`
  ${BasicInputStyle}
`;

export const InputLabelStyle = styled.label`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: ${pxToRem(10)};
  align-items: center;
`;

export const InputBarSearchStyle = css`
  padding: ${pxToRem(10)};
  background: ${theme.colors.palette.lightGray};
  max-width: ${pxToRem(480)};
  height: ${pxToRem(50)};
  border-radius: ${pxToRem(100)};
  align-content: center;
`;
