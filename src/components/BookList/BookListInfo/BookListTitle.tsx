import { ComponentBaseProps } from "@/types/component";
import { BookListTitleStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";

const BookListTitle = ({ children }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return <BookListTitleStyle isOpen={isOpen}>{children}</BookListTitleStyle>;
};

export default BookListTitle;
