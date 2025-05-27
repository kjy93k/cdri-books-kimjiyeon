import { useSearchBooks } from "@/hooks/useSearchBooks";
import { searchTarget } from "@/types/book";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import BookListRenderer from "../../Common/BookListRenderer";

const SearchResult = () => {
  const router = useRouter();
  const query = router.query.search as string;
  const target = router.query.target as searchTarget;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearchBooks({
      query,
      target,
    });

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [data, fetchNextPage, hasNextPage]);

  return (
    <div>
      {data?.pages.map((bookGroup, page) => (
        <BookListRenderer key={page} books={bookGroup.documents} />
      ))}
      <div ref={observerRef} style={{ height: 1 }} />
      {isFetchingNextPage && <p>로딩 중...</p>}
    </div>
  );
};

export default SearchResult;
