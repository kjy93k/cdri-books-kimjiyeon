import { ComponentBaseProps } from "@/pages/types/component";
import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./Button.style";
import { theme } from "@/styles/theme";

export type ButtonSize = "sm" | "md";
export type ButtonVariant = "fill" | "outline" | "plain";
export type ButtonFillColor = keyof (Pick<
  typeof theme.colors.palette,
  "primary" | "lightGray"
> &
  Pick<typeof theme.colors.text, "subtitle">);

export interface ButtonProps
  extends ComponentBaseProps<ButtonHTMLAttributes<HTMLButtonElement>> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fillColor?: ButtonFillColor;
  isWide?: boolean;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonStyle type="button" {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
