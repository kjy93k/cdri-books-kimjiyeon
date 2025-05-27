import Section from "@/components/Section";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import NoData from "@/components/NoData";
import FavoriteResult from "./FavoriteResult";
import { useFavoriteStore } from "@/stores/useFavoriteStore";

const Favorite = () => {
  const { favoriteBooks } = useFavoriteStore();
  const totalCount = favoriteBooks.length;

  return (
    <Section>
      <Section.Title>내가 찜한 책</Section.Title>
      <Section.SubTitle>
        <span>찜한 책</span>
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
        <FavoriteResult />
      ) : (
        <NoData>검색된 결과가 없습니다</NoData>
      )}
    </Section>
  );
};

export default Favorite;
