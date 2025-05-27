import { ComponentBaseProps } from "@/pages/types/component";
import { SelectBoxOptionStyle } from "./SelectBox.style";
import { useSelectBoxContext } from ".";
import { SelectBoxOptionType } from "@/pages/types/book";

const SelectBoxOption = ({
  children,
  value,
  title,
  ...props
}: ComponentBaseProps<SelectBoxOptionType>) => {
  const { handleOptionChange } = useSelectBoxContext();

  return (
    <li>
      <SelectBoxOptionStyle
        isWide
        value={value}
        onClick={() => {
          handleOptionChange({ value, title });
        }}
        {...props}
      >
        {children}
      </SelectBoxOptionStyle>
    </li>
  );
};

export default SelectBoxOption;
