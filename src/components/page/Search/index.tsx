import Section from "@/components/Section";
import { theme } from "@/styles/theme";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useSearchBooks } from "@/hooks/useSearchBooks";
import { searchTarget } from "@/pages/types/book";
import NoData from "@/components/NoData";

const Search = () => {
  const router = useRouter();
  const query = router.query.search as string;
  const target = (router.query.target as searchTarget) ?? "title";
  const { data, isLoading, isError } = useSearchBooks({
    query,
    target,
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

      {totalCount > 0 ? (
        <SearchResult />
      ) : (
        <NoData>
          {isLoading
            ? "검색 중입니다..."
            : isError
            ? "오류가 발생했습니다."
            : "검색된 결과가 없습니다"}
        </NoData>
      )}
    </Section>
  );
};

export default Search;
