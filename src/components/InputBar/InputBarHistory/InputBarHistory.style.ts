import { pxToRem } from "@/styles/utils/pxToRem";
import styled from "@emotion/styled";
const SearchBarHeight = `${pxToRem(50)}`;
const SearchBarBorderRadius = `${pxToRem(24)}`;

export const InputBarSearchStyle = styled.div<{ isOpen: boolean }>(
  ({ theme, isOpen }) => ({
    width: "100%",
    maxWidth: `${pxToRem(480)}`,
    height: SearchBarHeight,
    padding: `${pxToRem(10)}`,
    background: `${theme.colors.palette.lightGray}`,
    borderRadius: SearchBarBorderRadius,
    alignContent: "center",
    ...(isOpen && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      [`${InputBarHistoryStyle}`]: {
        display: "flex",
      },
    }),
  })
);

export const InputBarHistoryStyle = styled.div(({ theme }) => ({
  display: "none",
  position: "absolute",
  top: SearchBarHeight,
  left: 0,
  width: "100%",
  backgroundColor: `${theme.colors.palette.lightGray}`,
  borderBottomLeftRadius: SearchBarBorderRadius,
  borderBottomRightRadius: SearchBarBorderRadius,
}));

export const InputBarHistoryListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxToRem([11, 0, 6])};
`;

export const InputBarHistoryItemStyle = styled.li(({ theme }) => ({
  ...theme.typography.caption,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${pxToRem([8, 25, 8, 51])}`,
  color: `${theme.colors.text.subtitle}`,
  "&:hover": {
    backgroundColor: `${theme.colors.palette.lightGray}`,
  },
}));
