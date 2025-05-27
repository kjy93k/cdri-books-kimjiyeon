import { ComponentBaseProps } from "@/types/component";
import { InputLabelStyle } from "../InputBar.style";

const InputBarLabel = ({ children, ...props }: ComponentBaseProps) => {
  return <InputLabelStyle {...props}>{children}</InputLabelStyle>;
};

export default InputBarLabel;
