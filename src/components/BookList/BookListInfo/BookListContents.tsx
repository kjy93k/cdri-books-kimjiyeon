import { ComponentBaseProps } from "@/types/component";
import { BookListContentsStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";

const BookListContents = ({ children }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return (
    <BookListContentsStyle isOpen={isOpen}>{children}</BookListContentsStyle>
  );
};

export default BookListContents;
