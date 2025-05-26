import { ComponentBaseProps } from "@/pages/types/component";
import { BookListPriceStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

const BookListPrice = ({ children }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return (
    <BookListPriceStyle isOpen={isOpen}>
      {isOpen && (
        <span
          css={css`
            ${theme.typography.small};
            color: ${theme.colors.text.subtitle};
          `}
        >
          원가
        </span>
      )}
      <span>{children}</span>
    </BookListPriceStyle>
  );
};

export default BookListPrice;
