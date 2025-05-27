import { ComponentBaseProps } from "@/types/component";
import { InputBarHistoryListStyle } from "../InputBarHistory.style";

const InputBarHistoryList = ({ children }: ComponentBaseProps) => {
  return <InputBarHistoryListStyle>{children}</InputBarHistoryListStyle>;
};

export default InputBarHistoryList;
