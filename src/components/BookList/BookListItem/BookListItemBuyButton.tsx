import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { useBookListItemContext } from ".";
import { ComponentBaseProps } from "@/pages/types/component";
import { ButtonHTMLAttributes } from "react";
import { BookListItemBuyButtonStyle } from "../BookList.style";

const BookListItemBuyButton = ({
  children,
  onClick,
}: ComponentBaseProps<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  const { isOpen, setIsOpen } = useBookListItemContext();
  return (
    <BookListItemBuyButtonStyle isOpen={isOpen}>
      <Button fillColor="primary" isWide={isOpen} onClick={onClick}>
        {children}
      </Button>
    </BookListItemBuyButtonStyle>
  );
};

export default BookListItemBuyButton;
