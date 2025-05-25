import Section from "@/components/Section";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CERTICOS BOOKS</title>
        <meta
          name="description"
          content="다양한 도서를 한눈에 확인하고 구매해보세요."
        />
        <meta
          name="keywords"
          content="CERTICOS BOOKS, 도서 구매, 찜하기, 책 검색, 책 상세정보, 베스트셀러"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Section.Title>도서 검색</Section.Title>
        <Section.SubTitle>
          <span>도서 검색 결과</span>
          <span>
            총{" "}
            <span
              css={css`
                color: ${theme.colors.palette.primary};
              `}
            >
              21
            </span>
            건
          </span>
        </Section.SubTitle>
      </Section>
    </>
  );
}
