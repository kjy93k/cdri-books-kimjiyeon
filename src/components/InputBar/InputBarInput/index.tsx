import { ComponentBaseProps } from "@/pages/types/component";
import { InputHTMLAttributes } from "react";
import { InPutStyle } from "../InputBar.style";

const InputBarInput = ({
  ...props
}: ComponentBaseProps<InputHTMLAttributes<HTMLInputElement>>) => {
  return <InPutStyle {...props} />;
};

export default InputBarInput;
