import { createContext, useContext, useState } from "react";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import SearchBarHistory from "./SearchBarHistory";
import SearchBarForm from "./SearchBarForm";
import { useSearchHandler } from "@/hooks/useHandleSearch";

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
        <SearchBarForm>
          {isOpen && histories.length > 0 && <SearchBarHistory />}
        </SearchBarForm>
      </Provider>
    </>
  );
};

export default SearchBar;
