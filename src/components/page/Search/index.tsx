import Section from "@/components/Section";
import { theme } from "@/styles/theme";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useSearchBooks } from "@/hooks/useSearchBooks";

const Search = () => {
  const router = useRouter();
  const query = router.query.search as string;
  const { data } = useSearchBooks({
    query: query,
  });
  const totalCount = data?.pages?.[0]?.meta?.total_count ?? 0;

  return (
    <Section>
      <Section.Title>도서 검색</Section.Title>
      <SearchBar />
      <Section.SubTitle>
        <span>도서 검색 결과</span>
        <span>
          총{" "}
          <span
            css={css`
              color: ${theme.colors.palette.primary};
            `}
          >
            {totalCount}
          </span>
          건
        </span>
      </Section.SubTitle>
      <SearchResult />
    </Section>
  );
};

export default Search;
