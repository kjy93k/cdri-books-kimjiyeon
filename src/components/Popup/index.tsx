import Portal from "@/components/Portal";
import PopupContent from "./PopupContent";
import { ComponentBaseProps } from "@/types/component";
import { PopupStyle } from "./Popup.style";
import { createContext, useContext } from "react";
import { usePopup } from "@/hooks/usePopup";
import PopupTriggerButton from "./PopupTriggerButton";

const PopupContext = createContext({
  isOpenPopup: false,
  togglePopup: () => {},
  closePopup: () => {},
  openPopup: () => {},
});
export const usePopupContext = () => {
  return useContext(PopupContext);
};

const { Provider } = PopupContext;

const Popup = ({ children, ...props }: ComponentBaseProps) => {
  const value = usePopup();

  return (
    <Provider value={value}>
      <PopupStyle {...props}>{children}</PopupStyle>
    </Provider>
  );
};

Popup.Content = PopupContent;
Popup.TriggerButton = PopupTriggerButton;

export default Popup;
