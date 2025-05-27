import { ComponentBaseProps } from "@/types/component";
import { SelectBoxOptionsStyle } from "./SelectBox.style";
import { useSelectBoxContext } from ".";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

const SelectBoxOptions = ({ children, ...props }: ComponentBaseProps) => {
  const { isOpen, setIsOpen } = useSelectBoxContext();
  const SelectBoxOptionRef = useRef<HTMLUListElement>(null);
  useClickOutside(SelectBoxOptionRef, () => {
    setIsOpen(false);
  });

  return (
    isOpen && (
      <SelectBoxOptionsStyle
        aria-labelledby="select-box"
        role="listbox"
        id="select-list"
        ref={SelectBoxOptionRef}
        {...props}
      >
        {children}
      </SelectBoxOptionsStyle>
    )
  );
};

export default SelectBoxOptions;
