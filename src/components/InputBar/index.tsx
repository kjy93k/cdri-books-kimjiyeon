import { ComponentBaseProps } from "@/pages/types/component";
import InputBarInput from "./InputBarInput";
import InputBarLabel from "./InputBarLabel";
import { FormHTMLAttributes } from "react";

const InputBar = ({
  children,
  ...props
}: ComponentBaseProps<FormHTMLAttributes<HTMLFormElement>>) => {
  return <form {...props}>{children}</form>;
};

InputBar.Input = InputBarInput;
InputBar.Label = InputBarLabel;

export default InputBar;
