import { media } from "@/styles/utils/media";
import { pxToRem } from "@/styles/utils/pxToRem";
import styled from "@emotion/styled";
import Link from "next/link";

const logoWidth = `${pxToRem(210)}`;

export const HeaderStyle = styled.header(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

export const HeaderContainerStyle = styled.div(({ theme }) => ({
  padding: `${pxToRem(24)}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: `${pxToRem(1600)}`,
  margin: "0 auto",
  gap: `${pxToRem(30)}`,
  color: theme.colors.text.primary,

  [media.underTablet]: {
    flexDirection: "column",
  },
}));

export const LogoStyle = styled.h1(({ theme }) => ({
  ...theme.typography.title1,
  display: "flex",
  width: logoWidth,
}));

export const NavStyle = styled.nav(({ theme }) => ({
  display: "flex",
  gap: `${pxToRem(56)}`,
}));

export const NavLinkStyle = styled(Link)<{ active: boolean }>(
  ({ theme, active }) => ({
    ...theme.typography.body1,
    position: "relative",
    display: "flex",
    flexShrink: 0,
    textDecoration: "none",
    paddingBottom: `${pxToRem(3)}`,
    color: theme.colors.text.primary,
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: `${pxToRem(1)}`,
      backgroundColor: theme.colors.palette.primary,
      transform: active ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.3s ease",
    },

    "&:hover::after": {
      transform: "scaleX(1)",
    },
  })
);

export const RightSide = styled.div`
  display: flex;
  width: ${logoWidth};
`;
