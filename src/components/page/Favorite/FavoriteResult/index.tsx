import BookList from "@/components/BookList";
import { decodeText } from "@/lib/utils/decodeText";
import { priceFormat } from "@/lib/utils/priceFormat";
import { useFavoriteStore } from "@/stores/useFavoriteStore";

const FavoriteResult = () => {
  const { favoriteBooks } = useFavoriteStore();
  console.log(favoriteBooks);
  return (
    <div>
      <BookList>
        {favoriteBooks.map((book) => (
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

                  <BookList.Info.Author>{book.authors[0]}</BookList.Info.Author>
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
    </div>
  );
};

export default FavoriteResult;
