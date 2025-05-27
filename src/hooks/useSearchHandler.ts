import { useRouter } from "next/router";
import { useSearchHistory } from "@/hooks/useSearchHistory";

interface UseSearchHandlerOptions {
  searchText: string;
  searchTarget?: string;
  onComplete?: () => void;
}

export const useSearchHandler = ({
  searchText,
  searchTarget,
  onComplete,
}: UseSearchHandlerOptions) => {
  const router = useRouter();
  const { addHistory } = useSearchHistory();
  console.log(searchTarget);
  const handleSearch = (keywordOverride?: string) => {
    const keyword = (keywordOverride ?? searchText).trim();
    if (!keyword) return;

    addHistory(keyword);
    router.replace({
      pathname: "/",
      query: {
        search: keyword,
        ...(searchTarget && { target: searchTarget }),
      },
    });

    onComplete?.();
  };

  return { handleSearch };
};
