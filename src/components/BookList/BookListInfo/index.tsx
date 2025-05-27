import { ComponentBaseProps } from "@/types/component";
import BookListAuthor from "./BookListAuthor";
import BookListContents from "./BookListContents";
import BookListFavoriteButton from "./BookListFavoriteButton";
import BookListThumb from "./BookListThumb";
import BookListTitle from "./BookListTitle";
import { BookListInfoStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";
import BookListDesc from "./BookListDesc";

const BookListInfo = ({ children, ...props }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return (
    <BookListInfoStyle isOpen={isOpen} {...props}>
      {children}
    </BookListInfoStyle>
  );
};

BookListInfo.Thumb = BookListThumb;
BookListInfo.FavoriteButton = BookListFavoriteButton;
BookListInfo.Title = BookListTitle;
BookListInfo.Author = BookListAuthor;
BookListInfo.Contents = BookListContents;
BookListInfo.Desc = BookListDesc;

export default BookListInfo;
