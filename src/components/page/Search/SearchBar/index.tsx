import { createContext, useContext, useState } from "react";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import SearchBarHistory from "./SearchBarHistory";
import SearchBarForm from "./SearchBarForm";
import { useSearchHandler } from "@/hooks/useSearchHandler";
import SearchBarTargetButton from "./SearchBarForm/SearchBarTargetButton";
import { css } from "@emotion/react";
import { pxToRem } from "@/styles/utils/pxToRem";

const SearchBarContext = createContext({
  search: "",
  setSearch: (search: string) => {},
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
  handleSearch: (history?: string) => {},
});
export const useSearchBarContext = () => {
  return useContext(SearchBarContext);
};
const { Provider } = SearchBarContext;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { histories } = useSearchHistory();
  const { handleSearch } = useSearchHandler({
    searchText: search,
    onComplete: () => {
      setIsOpen(false);
    },
  });

  const value = { search, setSearch, isOpen, setIsOpen, handleSearch };
  return (
    <>
      <Provider value={value}>
        <div
          css={css`
            display: flex;
            gap: ${pxToRem(16)};
            align-items: center;
          `}
        >
          <SearchBarForm>
            {isOpen && histories.length > 0 && <SearchBarHistory />}
          </SearchBarForm>
          <SearchBarTargetButton />
        </div>
      </Provider>
    </>
  );
};

export default SearchBar;
