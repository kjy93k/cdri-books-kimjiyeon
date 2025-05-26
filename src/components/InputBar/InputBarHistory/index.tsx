import { ComponentBaseProps } from "@/pages/types/component";
import { InputBarHistoryStyle } from "./InputBarHistory.style";
import InputBarHistoryList from "./InputBarHistoryList";
import InputBarHistoryItem from "./InputBarHistoryItem";

const InputBarHistory = ({ children }: ComponentBaseProps) => {
  return <InputBarHistoryStyle>{children}</InputBarHistoryStyle>;
};

InputBarHistory.List = InputBarHistoryList;
InputBarHistory.Item = InputBarHistoryItem;

export default InputBarHistory;
