import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BookData } from "@/pages/types/book";

interface FavoriteState {
  favoriteBooks: BookData[];
  setFavoriteBooks: (favorites: BookData[]) => void;
}
export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favoriteBooks: [],
      setFavoriteBooks: (favoriteBooks) => set({ favoriteBooks }),
    }),
    {
      name: "favoriteBooks",
    }
  )
);
