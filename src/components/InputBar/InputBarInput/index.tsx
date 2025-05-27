import { ComponentBaseProps } from "@/types/component";
import { InputHTMLAttributes } from "react";
import { InputStyle } from "../InputBar.style";

const InputBarInput = ({
  ...props
}: ComponentBaseProps<InputHTMLAttributes<HTMLInputElement>>) => {
  return <InputStyle {...props} />;
};

export default InputBarInput;
