import { pxToRem } from "@/styles/utils/pxToRem";
import styled from "@emotion/styled";

export const SectionStyle = styled.section(({ theme }) => ({
  maxWidth: pxToRem(960),
  margin: "0 auto",
  padding: pxToRem([80, 0]),
}));

export const SectionTitleStyle = styled.h2(({ theme }) => ({
  ...theme.typography.title2,
  marginBottom: pxToRem(16),
}));

export const SectionSubTitleStyle = styled.p(({ theme }) => ({
  ...theme.typography.caption,
  display: "flex",
  lineHeight: pxToRem(24),
  marginTop: pxToRem(24),
  marginBottom: pxToRem(36),
  gap: pxToRem(16),
}));
