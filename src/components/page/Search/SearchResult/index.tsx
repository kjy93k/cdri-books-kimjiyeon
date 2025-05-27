import BookList from "@/components/BookList";
import { useSearchBooks } from "@/hooks/useSearchBooks";
import { decodeText } from "@/lib/utils/decodeText";
import { priceFormat } from "@/lib/utils/priceFormat";
import { searchTarget } from "@/pages/types/book";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const SearchResult = () => {
  const router = useRouter();
  const query = router.query.search as string;
  const target = (router.query.target as searchTarget) ?? "title";
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
        <BookList key={page}>
          {bookGroup.documents.map((book) => (
            <BookList.Item key={book.isbn}>
              <BookList.Info>
                <BookList.Info.Thumb src={book.thumbnail} alt={book.title}>
                  <BookList.Info.FavoriteButton
                    book={book}
                  ></BookList.Info.FavoriteButton>
                </BookList.Info.Thumb>

                <BookList.Info.Contents>
                  <BookList.Info.Title>
                    {book.title}

                    <BookList.Info.Author>
                      {book.authors[0]}
                    </BookList.Info.Author>
                  </BookList.Info.Title>
                  <BookList.Info.Desc>
                    {decodeText(book.contents)}
                  </BookList.Info.Desc>
                </BookList.Info.Contents>
              </BookList.Info>

              <BookList.Purchase>
                <BookList.Purchase.Price>
                  {priceFormat(book.price, { suffix: "원" })}
                </BookList.Purchase.Price>
                {book.sale_price > 0 && (
                  <BookList.Purchase.PriceSale>
                    {priceFormat(book.sale_price, { suffix: "원" })}
                  </BookList.Purchase.PriceSale>
                )}
                <BookList.Item.BuyButton
                  onClick={() =>
                    window.open(book.url, "_blank", "noopener,noreferrer")
                  }
                >
                  구매하기
                </BookList.Item.BuyButton>
              </BookList.Purchase>
              <BookList.Item.ToggleButton>상세보기</BookList.Item.ToggleButton>
            </BookList.Item>
          ))}
        </BookList>
      ))}
      <div ref={observerRef} style={{ height: 1 }} />
      {isFetchingNextPage && <p>로딩 중...</p>}
    </div>
  );
};

export default SearchResult;
