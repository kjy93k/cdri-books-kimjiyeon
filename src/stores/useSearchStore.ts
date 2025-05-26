import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchState {
  histories: string[];
  setHistories: (histories: string[]) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      histories: [],
      setHistories: (histories) => set({ histories }),
    }),
    {
      name: "searchHistories",
    }
  )
);
