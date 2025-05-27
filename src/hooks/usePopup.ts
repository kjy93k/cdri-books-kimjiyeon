import { useCallback, useState } from "react";

export const usePopup = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const openPopup = useCallback(() => setIsOpenPopup(true), []);
  const closePopup = useCallback(() => setIsOpenPopup(false), []);
  const togglePopup = useCallback(() => setIsOpenPopup((state) => !state), []);

  return { isOpenPopup, togglePopup, openPopup, closePopup };
};
