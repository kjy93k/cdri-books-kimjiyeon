import { useRouter } from "next/router";
import { useSearchHistory } from "@/hooks/useSearchHistory";

interface UseSearchHandlerOptions {
  searchText: string;
  searchTarget?: string;
  onComplete?: () => void;
}

export const useSearchHandler = ({
  searchText,
  searchTarget = "title",
  onComplete,
}: UseSearchHandlerOptions) => {
  const router = useRouter();
  const { addHistory } = useSearchHistory();

  const handleSearch = (keywordOverride?: string) => {
    const keyword = (keywordOverride ?? searchText).trim();
    if (!keyword) return;

    addHistory(keyword);
    router.replace({
      pathname: "/",
      query: {
        search: keyword,
        target: searchTarget,
      },
    });

    onComplete?.();
  };

  return { handleSearch };
};
