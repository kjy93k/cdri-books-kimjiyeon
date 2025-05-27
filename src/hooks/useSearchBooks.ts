import { getBooks } from "@/lib/api/book";
import { BookSearchParams } from "@/types/book";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useSearchBooks = (params: BookSearchParams) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["books", params],
    queryFn: ({ pageParam = 1 }) => getBooks({ ...params, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.meta.is_end ? undefined : allPages?.length + 1;
    },
    initialPageParam: 1,
    enabled: !!params,
  });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};
