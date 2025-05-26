import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InputBar from "@/components/InputBar";
import { InputBarSearchStyle } from "@/components/InputBar/InputBarHistory/InputBarHistory.style";
import { theme } from "@/styles/theme";
import { pxToRem } from "@/styles/utils/pxToRem";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { ComponentBaseProps } from "@/pages/types/component";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useSearchBarContext } from "..";

const SearchBarForm = ({ children }: ComponentBaseProps) => {
  const router = useRouter();
  const searchBarRef = useRef<HTMLDivElement>(null);
  const searchQuery = router.query.search;
  const { isOpen, setIsOpen, search, setSearch, handleSearch } =
    useSearchBarContext();

  useClickOutside(searchBarRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (searchQuery && typeof searchQuery === "string") {
      setSearch(searchQuery);
    }
  }, [searchQuery, setSearch]);

  return (
    <InputBar
      onSubmit={(e) => {
        e.preventDefault();
      }}
      css={css`
        display: flex;
        gap: ${pxToRem(16)};
      `}
    >
      <InputBarSearchStyle
        ref={searchBarRef}
        css={css`
          position: relative;
        `}
        isOpen={isOpen}
      >
        <InputBar.Label>
          <Icon name={"search"} size={30} />
          <InputBar.Input
            placeholder="검색어를 입력하세요."
            type="text"
            name="search"
            enterKeyHint="search"
            value={search}
            onFocus={() => setIsOpen(true)}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            autoComplete="off"
          />
          {search && (
            <Button variant="plain" onClick={() => setSearch("")}>
              <Icon
                name={"close"}
                size={16}
                css={css`
                  color: ${theme.colors.text.subtitle};
                `}
              />
            </Button>
          )}
        </InputBar.Label>
        {children}
      </InputBarSearchStyle>
      <Button size="sm" fillColor="subtitle" variant="outline">
        상세검색
      </Button>
    </InputBar>
  );
};
export default SearchBarForm;
