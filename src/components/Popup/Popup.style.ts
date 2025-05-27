import Button from "@/components/Button";
import { pxToRem } from "@/styles/utils/pxToRem";
import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";

export const PopupStyle = styled.div(({ theme }) => ({
  position: "relative",
}));

export const PopupContentStyle = styled.div(({ theme }) => ({
  position: "absolute",
  zIndex: 10,
  backgroundColor: theme.colors.palette.white,
  padding: pxToRem([36, 24]),
  boxShadow: `${pxToRem([0, 4, 14, 6])}  ${rgba(
    theme.colors.ui.boxShadow,
    0.15
  )}`,
  bottom: pxToRem(-15),
  left: "50%",
  transform: `translate(-50%,100%)`,
  minWidth: pxToRem(360),
}));

export const PopupContentCloseStyle = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: pxToRem(12.17),
  right: pxToRem(12.17),
}));
