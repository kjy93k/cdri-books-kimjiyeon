import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useBookListItemContext } from ".";
import { ComponentBaseProps } from "@/types/component";
import { BookListItemToggleButtonStyle } from "../BookList.style";
import { css } from "@emotion/react";
import { pxToRem } from "@/styles/utils/pxToRem";
import { theme } from "@/styles/theme";

const BookListItemToggleButton = ({ children }: ComponentBaseProps) => {
  const { isOpen, setIsOpen } = useBookListItemContext();
  return (
    <BookListItemToggleButtonStyle isOpen={isOpen}>
      <Button
        css={css`
          gap: ${pxToRem(1)};
        `}
        fillColor="lightGray"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <Icon
          name={"arrowDown"}
          css={css`
            color: ${theme.colors.ui.gray};
            transform: rotate(${isOpen ? 180 : 0}deg);
          `}
        ></Icon>
      </Button>
    </BookListItemToggleButtonStyle>
  );
};

export default BookListItemToggleButton;
