import { useSearchStore } from "@/stores/useSearchStore";

const MAX = 8;

export const useSearchHistory = () => {
  const histories = useSearchStore((s) => s.histories);
  const setHistories = useSearchStore((s) => s.setHistories);

  const addHistory = (keyword: string) => {
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword) return;

    const updated = [
      trimmedKeyword,
      ...histories.filter((history) => history !== trimmedKeyword),
    ].slice(0, MAX);
    setHistories(updated);
  };

  const removeHistory = (index: number) => {
    const updated = histories.toSpliced(index, 1);
    setHistories(updated);
  };

  return {
    histories,
    addHistory,
    removeHistory,
  };
};
