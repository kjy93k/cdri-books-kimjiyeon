import { ComponentBaseProps } from "@/pages/types/component";
import { BookListDescStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import { pxToRem } from "@/styles/utils/pxToRem";

const BookListDesc = ({ children }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return (
    <BookListDescStyle isOpen={isOpen}>
      <p
        css={css`
          ${theme.typography.body2Bold};
          margin-bottom: ${pxToRem(12)};
        `}
      >
        책소개
      </p>
      {children}
    </BookListDescStyle>
  );
};

export default BookListDesc;
