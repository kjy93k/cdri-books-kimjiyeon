import { ComponentBaseProps } from "@/pages/types/component";
import BookListPrice from "./BookListPrice";
import BookListPriceSale from "./BookListPriceSale";
import { BookListPurchaseStyle } from "../BookList.style";
import { useBookListItemContext } from "../BookListItem";

const BookListPurchase = ({ children, ...props }: ComponentBaseProps) => {
  const { isOpen } = useBookListItemContext();

  return (
    <BookListPurchaseStyle isOpen={isOpen} {...props}>
      {children}
    </BookListPurchaseStyle>
  );
};

BookListPurchase.Price = BookListPrice;
BookListPurchase.PriceSale = BookListPriceSale;

export default BookListPurchase;
