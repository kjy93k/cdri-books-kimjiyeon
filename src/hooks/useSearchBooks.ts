import { getBooks } from "@/lib/api/book";
import { BookSearchParams, searchTarget } from "@/types/book";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useSearchBooks = (params: BookSearchParams) => {
  const paramsWithTarget = {
    target: "title" as searchTarget,
    ...params,
  };
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["books", paramsWithTarget],
    queryFn: ({ pageParam = 1 }) =>
      getBooks({ ...paramsWithTarget, page: pageParam }),
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
