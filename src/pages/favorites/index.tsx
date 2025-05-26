import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { BookData } from "@/pages/types/book";

const fetchBooks = async (query: string) => {
  const res = await fetch(`/api/book?query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("검색 실패");
  return res.json();
};

export default function BookSearchPage() {
  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["books", searchTerm],
    queryFn: () => fetchBooks(searchTerm),
    enabled: !!searchTerm,
  });

  const handleSearch = () => {
    if (!keyword.trim()) return;
    setSearchTerm(keyword.trim());
  };

  return (
    <>
      <Head>
        <title>CERTICOS BOOKS - 내가 찜한 책</title>
        <meta
          name="description"
          content="내가 찜한 도서를 한눈에 확인하고, 관심 있는 책을 모아보세요."
        />
      </Head>

      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>도서 검색</h1>
        <input
          value={keyword}
          placeholder="검색어 입력"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={{ width: 300, padding: 8, marginRight: 8 }}
        />
        <button onClick={handleSearch}>검색</button>

        {isLoading && <p>로딩 중...</p>}
        {error && <p>에러 발생</p>}

        <ul style={{ marginTop: "2rem" }}>
          {data?.documents?.map((book: BookData) => (
            <li key={book.isbn} style={{ marginBottom: "1rem" }}>
              <strong>{book.title}</strong>
              <br />
              <small>{book.authors?.join(", ")}</small>
              <br />
              {book.thumbnail && (
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  width={100}
                  height={100}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
