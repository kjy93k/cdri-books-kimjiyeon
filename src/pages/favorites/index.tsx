import Favorite from "@/components/page/Favorite";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>CERTICOS BOOKS - 내가 찜한 책</title>
        <meta
          name="description"
          content="내가 찜한 도서를 한눈에 확인하고, 원하는 책을 쉽게 찾아보세요."
        />
        <meta
          name="keywords"
          content="CERTICOS BOOKS, 도서 구매, 찜하기, 책 검색, 책 상세정보, 베스트셀러"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Favorite />
    </>
  );
};

export default Index;
