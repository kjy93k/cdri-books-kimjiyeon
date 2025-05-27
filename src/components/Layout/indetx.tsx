import Header from "@/components/Header";
import { ComponentBaseProps } from "@/types/component";

const Layout = ({ children }: ComponentBaseProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
