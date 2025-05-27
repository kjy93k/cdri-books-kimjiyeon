import { useRouter } from "next/router";
import {
  HeaderContainerStyle,
  HeaderStyle,
  LogoStyle,
  NavLinkStyle,
  NavStyle,
  RightSide,
} from "./Header.style";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <HeaderStyle>
      <HeaderContainerStyle>
        <LogoStyle>CERTICOS BOOKS</LogoStyle>
        <NavStyle>
          <NavLinkStyle href={"/"} active={pathname === "/"}>
            도서 검색
          </NavLinkStyle>
          <NavLinkStyle href={"/favorites"} active={pathname === "/favorites"}>
            내가 찜한 책
          </NavLinkStyle>
        </NavStyle>
        <RightSide />
      </HeaderContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
