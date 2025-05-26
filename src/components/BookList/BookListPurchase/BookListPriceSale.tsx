import { ComponentBaseProps } from "@/pages/types/component";
import { BookListPriceSaleStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

const BookListPriceSale = ({ children }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return (
    <BookListPriceSaleStyle isOpen={isOpen}>
      {isOpen && (
        <span
          css={css`
            ${theme.typography.small};
            color: ${theme.colors.text.subtitle};
          `}
        >
          할인가
        </span>
      )}
      {children}
    </BookListPriceSaleStyle>
  );
};

export default BookListPriceSale;
