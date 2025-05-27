import { ComponentBaseProps } from "@/types/component";
import BookListItem from "./BookListItem";
import { BookListStyle } from "./BookList.style";
import BookListInfo from "./BookListInfo";
import BookListPurchase from "./BookListPurchase";

const BookList = ({ children }: ComponentBaseProps) => {
  return <BookListStyle>{children}</BookListStyle>;
};

BookList.Item = BookListItem;
BookList.Info = BookListInfo;
BookList.Purchase = BookListPurchase;

export default BookList;
