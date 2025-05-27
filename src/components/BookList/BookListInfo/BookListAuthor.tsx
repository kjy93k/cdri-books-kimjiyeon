import { ComponentBaseProps } from "@/types/component";
import { BookListAuthorStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";

const BookListAuthor = ({ children }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return <BookListAuthorStyle isOpen={isOpen}>{children}</BookListAuthorStyle>;
};

export default BookListAuthor;
