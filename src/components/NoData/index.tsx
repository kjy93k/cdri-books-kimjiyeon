import { ComponentBaseProps } from "@/types/component";
import { theme } from "@/styles/theme";
import { pxToRem } from "@/styles/utils/pxToRem";
import { css } from "@emotion/react";
import Image from "next/image";

const NoData = ({ children }: ComponentBaseProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${pxToRem(24)};
        padding: ${pxToRem([120, 40])};
      `}
    >
      <Image src={"/images/book.png"} width={80} height={80} alt=""></Image>
      <div
        css={css`
          ${theme.typography.caption};
          ${theme.colors.text.secondary}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default NoData;
