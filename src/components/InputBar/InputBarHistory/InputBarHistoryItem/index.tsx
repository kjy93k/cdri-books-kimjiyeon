import { ComponentBaseProps } from "@/types/component";
import { InputBarHistoryItemStyle } from "../InputBarHistory.style";

const InputBarHistoryItem = ({ children }: ComponentBaseProps) => {
  return <InputBarHistoryItemStyle>{children}</InputBarHistoryItemStyle>;
};

export default InputBarHistoryItem;
