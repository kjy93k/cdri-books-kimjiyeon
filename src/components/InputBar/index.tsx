import { ComponentBaseProps } from "@/types/component";
import InputBarInput from "./InputBarInput";
import InputBarLabel from "./InputBarLabel";

const InputBar = ({ children, ...props }: ComponentBaseProps) => {
  return <div {...props}>{children}</div>;
};

InputBar.Input = InputBarInput;
InputBar.Label = InputBarLabel;

export default InputBar;
