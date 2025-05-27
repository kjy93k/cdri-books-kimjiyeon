import { ComponentBaseProps } from "@/types/component";
import { SectionSubTitleStyle } from "../Section.style";

const SectionSubTitle = ({ children, ...props }: ComponentBaseProps) => {
  return <SectionSubTitleStyle {...props}>{children}</SectionSubTitleStyle>;
};

export default SectionSubTitle;
