import { ComponentBaseProps } from "@/types/component";
import { SectionTitleStyle } from "../Section.style";

const SectionTitle = ({ children, ...props }: ComponentBaseProps) => {
  return <SectionTitleStyle {...props}>{children}</SectionTitleStyle>;
};

export default SectionTitle;
