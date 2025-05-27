import { ComponentBaseProps } from "@/types/component";
import { SelectBoxTitleStyle } from "./SelectBox.style";
import Icon from "../Icon";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import { useSelectBoxContext } from ".";

const SelectBoxTitle = ({
  children,
  isIcon,
  ...props
}: ComponentBaseProps<{ isIcon?: boolean }>) => {
  const { isOpen, setIsOpen, selectedOption } = useSelectBoxContext();
  return (
    <SelectBoxTitleStyle
      type="button"
      aria-haspopup="true"
      aria-expanded="true"
      aria-controls="select-list"
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children || selectedOption?.title}
      {isIcon && (
        <Icon
          name={"arrowDown"}
          size={20}
          css={css`
            color: ${theme.colors.ui.gray};
          `}
        />
      )}
    </SelectBoxTitleStyle>
  );
};

export default SelectBoxTitle;
