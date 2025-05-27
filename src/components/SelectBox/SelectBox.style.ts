import styled from "@emotion/styled";
import Button from "../Button";
import { pxToRem } from "@/styles/utils/pxToRem";
import { rgba } from "emotion-rgba";

export const SelectBoxStyle = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderBottom: `1px solid ${theme.colors.border.primary}`,
  height: `${pxToRem(36)}`,
}));

export const SelectBoxTitleStyle = styled(Button)(({ theme }) => ({
  ...theme.typography.body2Bold,
  display: "flex",
  alignItems: "center",
  width: "auto",
  minWidth: `${pxToRem(100)}`,
  padding: `${pxToRem([6, 4, 6, 8])}`,
  justifyContent: "space-between",
  color: theme.colors.text.primary,
}));
export const SelectBoxOptionsStyle = styled.ul(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: `${theme.colors.palette.white}`,
  boxShadow: `0px 0px ${pxToRem(4)} 0px ${rgba(
    theme.colors.palette.black,
    0.25
  )}`,
  bottom: `${pxToRem(-6)}`,
  transform: `translateY(100%)`,
}));

export const SelectBoxOptionStyle = styled(Button)(({ theme }) => ({
  ...theme.typography.caption,
  display: "flex",
  width: "100%",
  minWidth: "auto",
  padding: `${pxToRem([4, 8])}`,
  color: theme.colors.text.subtitle,
  lineHeight: pxToRem(22),
  justifyContent: "flex-start",
}));

export const SelectBoxTriggerButtonStyle = styled(Button)(({ theme }) => ({
  height: pxToRem(36),
}));
