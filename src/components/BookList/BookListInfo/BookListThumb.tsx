import { ComponentBaseProps } from "@/pages/types/component";
import { BookListThumbStyle } from "../BookList.style";
import Image, { ImageProps } from "next/image";
import { css } from "@emotion/react";
import { useBookListItemContext } from "../BookListItem";

const BookListThumb = ({
  children,
  src,
  alt,
  ...props
}: ComponentBaseProps<ImageProps>) => {
  const { isOpen } = useBookListItemContext();

  return (
    <BookListThumbStyle isOpen={isOpen}>
      {src && (
        <Image
          src={src}
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          width={210}
          height={280}
          alt={alt}
          {...props}
        />
      )}
      {children}
    </BookListThumbStyle>
  );
};

export default BookListThumb;
