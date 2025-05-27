import { ComponentBaseProps } from "@/types/component";
import Button, { ButtonProps } from "../Button";
import { usePopupContext } from ".";
import { SelectBoxTriggerButtonStyle } from "../SelectBox/SelectBox.style";

const PopupTriggerButton = ({
  children,
  onClick,
  ...props
}: ComponentBaseProps<ButtonProps>) => {
  const { togglePopup } = usePopupContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    togglePopup();
    onClick?.(e);
  };

  return (
    <SelectBoxTriggerButtonStyle onClick={handleClick} {...props}>
      {children}
    </SelectBoxTriggerButtonStyle>
  );
};

export default PopupTriggerButton;
