import { ReactNode } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactNode }) => {
  const el =
    typeof window !== "undefined"
      ? document.getElementById("Popup-root")
      : null;
  if (!el) return null;
  return createPortal(children, el);
};

export default Portal;
