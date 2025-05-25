import { ComponentBaseProps } from "@/pages/types/component";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from "./SectionSubTitle";
import { SectionStyle } from "./Section.style";

const Section = ({ children, ...props }: ComponentBaseProps) => {
  return <SectionStyle {...props}>{children}</SectionStyle>;
};

Section.Title = SectionTitle;
Section.SubTitle = SectionSubTitle;

export default Section;
