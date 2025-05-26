import { theme } from "@/styles/theme";
import { pxToRem } from "@/styles/utils/pxToRem";
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonFillColor, ButtonProps, ButtonSize, ButtonVariant } from ".";

const sizeStyle: Record<ButtonSize, SerializedStyles> = {
  sm: css`
    ${theme.typography.body2};
    min-width: ${pxToRem(72)};
    height: ${pxToRem(36)};
    padding: ${pxToRem(10)};
  `,
  md: css`
    ${theme.typography.caption};
    min-width: ${pxToRem(115)};
    height: ${pxToRem(48)};
    padding: ${pxToRem(16)};
  `,
};

const fillColorStyle: Record<ButtonFillColor, SerializedStyles> = {
  primary: css`
    background-color: ${theme.colors.palette.primary};
    color: ${theme.colors.palette.white};
    border-color: ${theme.colors.palette.primary};
  `,
  lightGray: css`
    background-color: ${theme.colors.palette.lightGray};
    color: ${theme.colors.text.secondary};
    border-color: ${theme.colors.palette.lightGray};
  `,
  subtitle: css`
    background-color: ${theme.colors.text.subtitle};
    color: ${theme.colors.text.primary};
    border-color: ${theme.colors.text.subtitle};
  `,
};
const VariantStyle: Record<ButtonVariant, SerializedStyles> = {
  fill: css``,
  outline: css`
    background-color: ${theme.colors.palette.white};
    color: ${theme.colors.text.subtitle};
  `,
  plain: css`
    min-width: 0;
    padding: 0;
    height: auto;
  `,
};

export const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${pxToRem(8)};
  background: transparent;
  ${({ size = "md" }) => sizeStyle[size]};
  ${({ fillColor }) => fillColor && fillColorStyle[fillColor]};
  ${({ variant = "fill" }) => VariantStyle[variant]};
  ${({ isWide = false }) =>
    isWide &&
    css`
      width: 100%;
    `};
`;
