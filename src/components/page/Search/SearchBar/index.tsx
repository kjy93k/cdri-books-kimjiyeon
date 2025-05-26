import { createContext, useContext, useState } from "react";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { useRouter } from "next/router";
import SearchBarHistory from "./SearchBarHistory";
import SearchBarForm from "./SearchBarForm";

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
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { addHistory } = useSearchHistory();
  const { histories } = useSearchHistory();

  const handleSearch = (history?: string) => {
    const keyword = (history ?? search).trim();
    if (!keyword) return;
    addHistory(keyword);
    router.replace(`?search=${encodeURIComponent(keyword)}`);
    setIsOpen(false);
  };

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
