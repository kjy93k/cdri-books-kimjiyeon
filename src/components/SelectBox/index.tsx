import { ComponentBaseProps } from "@/types/component";
import { SelectBoxStyle } from "./SelectBox.style";
import SelectBoxOptions from "./SelectBoxOptions";
import SelectBoxOption from "./SelectBoxOption";
import SelectBoxTitle from "./SelectBoxTitle";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SelectBoxOptionType } from "@/types/book";

export interface SelectBoxProps {
  option: SelectBoxOptionType[];
  defaultValue?: string;
  onChange: (value: string) => void;
}

export interface SelectBoxContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedOption: SelectBoxOptionType | null;
  setSelectedOption: Dispatch<SetStateAction<SelectBoxOptionType | null>>;
  handleOptionChange: (option: SelectBoxOptionType) => void;
}

const SelectBoxContext = createContext<SelectBoxContextType>({
  isOpen: false,
  setIsOpen: () => {},
  selectedOption: null,
  setSelectedOption: () => {},
  handleOptionChange: () => {},
});

export const useSelectBoxContext = () => {
  return useContext(SelectBoxContext);
};

const { Provider } = SelectBoxContext;

const SelectBox = ({
  children,
  defaultValue,
  onChange,
  option,
  ...props
}: ComponentBaseProps<SelectBoxProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<SelectBoxOptionType | null>(null);
  const handleOptionChange = useCallback(
    ({ title, value }: SelectBoxOptionType) => {
      setSelectedOption({ title, value });
      setIsOpen(false);
      onChange(value);
    },
    [onChange]
  );
  const value = {
    isOpen,
    setIsOpen,
    selectedOption,
    setSelectedOption,
    handleOptionChange,
  };

  useEffect(() => {
    if (defaultValue) {
      option?.find((item) => {
        if (item.value === defaultValue) {
          setSelectedOption(item);
        }
      });
    }
  }, [defaultValue, option]);

  return (
    <Provider value={value}>
      <SelectBoxStyle {...props}>
        {children || (
          <>
            <SelectBox.Title />
            <SelectBox.Options>
              {option.map(({ title, value }) => (
                <SelectBox.Option key={value} title={title} value={value}>
                  {title}
                </SelectBox.Option>
              ))}
            </SelectBox.Options>
          </>
        )}
      </SelectBoxStyle>
    </Provider>
  );
};

SelectBox.Title = SelectBoxTitle;
SelectBox.Options = SelectBoxOptions;
SelectBox.Option = SelectBoxOption;

export default SelectBox;
