import { PopupContentCloseStyle, PopupContentStyle } from "./Popup.style";
import Icon from "@/components/Icon";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

import { ComponentBaseProps } from "@/types/component";
import { usePopupContext } from ".";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";

const PopupContent = ({ children, ...props }: ComponentBaseProps) => {
  const { isOpenPopup, closePopup } = usePopupContext();
  const PopupRef = useRef<HTMLDivElement>(null);
  useClickOutside(PopupRef, () => {
    closePopup();
  });

  return (
    isOpenPopup && (
      <PopupContentStyle ref={PopupRef} {...props}>
        <PopupContentCloseStyle
          variant={"plain"}
          type={"button"}
          onClick={closePopup}
        >
          <Icon
            name="close"
            size={20}
            css={css`
              color: ${theme.colors.ui.gray};
            `}
          />
        </PopupContentCloseStyle>
        {children}
      </PopupContentStyle>
    )
  );
};

export default PopupContent;
