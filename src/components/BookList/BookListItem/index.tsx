import { ComponentBaseProps } from "@/pages/types/component";
import { BookListItemStyle } from "../BookList.style";
import { createContext, useContext, useState } from "react";
import BookListItemToggleButton from "./BookListItemToggleButton";
import BookListItemBuyButton from "./BookListItemBuyButton";

export interface BookListItemProps {
  isOpen?: boolean;
}

const BookListItemContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
});
export const useBookListItemContext = () => {
  return useContext(BookListItemContext);
};
const { Provider } = BookListItemContext;

const BookListItem = ({ children }: ComponentBaseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <Provider value={value}>
      <BookListItemStyle isOpen={isOpen}>{children}</BookListItemStyle>
    </Provider>
  );
};

BookListItem.ToggleButton = BookListItemToggleButton;
BookListItem.BuyButton = BookListItemBuyButton;

export default BookListItem;
