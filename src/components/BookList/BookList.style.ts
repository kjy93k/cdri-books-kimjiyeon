import { pxToRem } from "@/styles/utils/pxToRem";
import styled from "@emotion/styled";
import { BookListItemProps } from "./BookListItem";

export const BookListStyle = styled.ul<BookListItemProps>(
  ({ theme, isOpen }) => ({})
);

export const BookListItemStyle = styled.li<BookListItemProps>(
  ({ theme, isOpen }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: pxToRem(8),
    padding: pxToRem([16, 16, 16, 48]),
    borderBottom: `1px solid #D2D6DA`,
    ...(isOpen && {
      padding: pxToRem([24, 16, 40, 54]),
    }),
  })
);

export const BookListInfoStyle = styled.div<BookListItemProps>(
  ({ theme, isOpen }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: pxToRem(48),
    ...(isOpen && {
      alignItems: "flex-start",
      gap: pxToRem(32),
    }),
  })
);

export const BookListPurchaseStyle = styled.div<BookListItemProps>(
  ({ theme, isOpen }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
    gap: pxToRem(56),
    marginLeft: "auto",
    ...(isOpen && {
      alignSelf: "self-end",
      alignItems: "flex-end",
      flexDirection: "column",
      gap: pxToRem(8),
      width: pxToRem(240),
    }),
  })
);

export const BookListThumbStyle = styled.span<BookListItemProps>(
  ({ theme, isOpen }) => ({
    position: "relative",
    display: "flex",
    flexShrink: 0,
    width: pxToRem(48),
    height: pxToRem(68),
    background: theme.colors.palette.lightGray,
    ...(isOpen && {
      width: pxToRem(210),
      height: pxToRem(280),
    }),
  })
);

export const BookListFavoriteButtonStyle = styled.span<BookListItemProps>(
  ({ theme, isOpen }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    ...(isOpen && {
      top: pxToRem(8),
      right: pxToRem(8),
    }),
  })
);

export const BookListTitleStyle = styled.p<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...theme.typography.title3,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: pxToRem(16),
    rowGap: pxToRem(4),
  })
);

export const BookListAuthorStyle = styled.p<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...theme.typography.body2,
  })
);

export const BookListContentsStyle = styled.div<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...(isOpen && {
      paddingTop: pxToRem(20),
    }),
  })
);
export const BookListDescStyle = styled.div<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...theme.typography.small,
    lineHeight: pxToRem(16),
    marginTop: pxToRem(16),
    ...(!isOpen && { display: "none" }),
  })
);

export const BookListPriceStyle = styled.p<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...theme.typography.title3,
    display: "flex",
    alignItems: "center",
    gap: pxToRem(8),
    flexShrink: 0,

    [`&:has( + ${BookListPriceSaleStyle})`]: {
      display: "none",
      fontWeight: 350,
      ...(isOpen && {
        display: "flex",
      }),
      [`& span:last-child`]: {
        textDecoration: "line-through",
      },
    },
  })
);

export const BookListPriceSaleStyle = styled.p<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...theme.typography.title3,
    display: "flex",
    alignItems: "center",
    gap: pxToRem(8),
    flexShrink: 0,
  })
);

export const BookListItemBuyButtonStyle = styled.div<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...(isOpen && {
      marginTop: pxToRem(20),
      width: "100%",
    }),
  })
);

export const BookListItemToggleButtonStyle = styled.div<BookListItemProps>(
  ({ theme, isOpen }) => ({
    ...(isOpen && {
      position: "absolute",
      top: pxToRem(26),
      right: pxToRem(16),
    }),
  })
);
