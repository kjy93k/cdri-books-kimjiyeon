import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InputBar from "@/components/InputBar";
import { InputBarSearchStyle } from "@/components/InputBar/InputBarHistory/InputBarHistory.style";
import { theme } from "@/styles/theme";
import { pxToRem } from "@/styles/utils/pxToRem";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { ComponentBaseProps } from "@/types/component";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useSearchBarContext } from "..";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import SearchBarTargetButton from "./SearchBarTargetButton";

const SearchBarForm = ({ children }: ComponentBaseProps) => {
  const router = useRouter();
  const searchBarRef = useRef<HTMLDivElement>(null);
  const searchQuery = router.query.search;
  const { isOpen, setIsOpen, search, setSearch, handleSearch } =
    useSearchBarContext();
  const { histories } = useSearchHistory();

  useClickOutside(searchBarRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (searchQuery && typeof searchQuery === "string") {
      setSearch(searchQuery);
    }
  }, [searchQuery, setSearch]);

  return (
    <InputBarSearchStyle
      ref={searchBarRef}
      css={css`
        position: relative;
      `}
      isOpen={isOpen}
    >
      <InputBar>
        <InputBar.Label>
          <Icon name={"search"} size={30} />
          <InputBar.Input
            placeholder="검색어를 입력하세요."
            type="text"
            name="search"
            enterKeyHint="search"
            value={search}
            onFocus={() => histories.length > 0 && setIsOpen(true)}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                handleSearch();
              }
            }}
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
      </InputBar>
    </InputBarSearchStyle>
  );
};
export default SearchBarForm;
