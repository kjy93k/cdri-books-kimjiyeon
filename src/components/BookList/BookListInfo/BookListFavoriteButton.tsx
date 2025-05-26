import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useFavoriteBooks } from "@/hooks/useFavorite";
import { BookData } from "@/pages/types/book";
import { ComponentBaseProps } from "@/pages/types/component";
import { BookListFavoriteButtonStyle } from "../BookList.style";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import { useBookListItemContext } from "../BookListItem";

const BookListFavoriteButton = ({
  book,
}: ComponentBaseProps<{ book: BookData }>) => {
  const { isOpen } = useBookListItemContext();

  const [favoriteBooks, toggleFavoriteBook] = useFavoriteBooks();
  const isActive = favoriteBooks.some(
    (fav) => fav.isbn === book.isbn // 또는 title도 추가 조건 가능
  );
  return (
    <BookListFavoriteButtonStyle isOpen={isOpen}>
      <Button variant="plain" onClick={() => toggleFavoriteBook(book)}>
        <Icon
          name={isActive ? "heartFill" : "heartLine"}
          css={css`
            color: ${isActive
              ? theme.colors.palette.red
              : theme.colors.palette.white};
          `}
          size={isOpen ? 24 : 16}
        ></Icon>
      </Button>
    </BookListFavoriteButtonStyle>
  );
};

export default BookListFavoriteButton;
