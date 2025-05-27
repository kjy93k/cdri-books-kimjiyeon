import { BookData } from "@/types/book";
import { useFavoriteStore } from "@/stores/useFavoriteStore";

export const useFavoriteBooks = () => {
  const favoriteBooks = useFavoriteStore((s) => s.favoriteBooks);
  const setFavoriteBooks = useFavoriteStore((s) => s.setFavoriteBooks);

  const toggleFavoriteBook = (book: BookData) => {
    const index = favoriteBooks.findIndex(
      (favoriteBook) => favoriteBook.isbn === book.isbn
    );
    if (index >= 0) {
      setFavoriteBooks(favoriteBooks.filter((_, i) => i !== index));
    } else setFavoriteBooks([...favoriteBooks, book]);
  };

  return [favoriteBooks, toggleFavoriteBook] as const;
};
