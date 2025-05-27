import { useFavoriteStore } from "@/stores/useFavoriteStore";
import BookListRenderer from "../../Common/BookListRenderer";

const FavoriteResult = () => {
  const { favoriteBooks } = useFavoriteStore();
  console.log(favoriteBooks);
  return (
    <div>
      <BookListRenderer books={favoriteBooks} />
    </div>
  );
};

export default FavoriteResult;
