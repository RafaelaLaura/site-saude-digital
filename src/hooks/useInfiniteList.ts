import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import type { ApiResponse, Paginated } from "@/types/api";

type UseInfiniteListOptions<T> = {
  queryKey: unknown[];
  fetchPage: (page: number) => Promise<ApiResponse<Paginated<T>>>;
  isEnabled?: boolean;
};

export function useInfiniteList<T>({
  queryKey,
  fetchPage,
  isEnabled = true,
}: UseInfiniteListOptions<T>) {
  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchPage(pageParam).then((response) => response.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page * lastPage.pageSize < lastPage.total ? lastPage.page + 1 : undefined,
    enabled: isEnabled,
    // Mantém a lista antiga na tela enquanto uma nova busca carrega (sem "piscar").
    placeholderData: keepPreviousData,
  });

  const pages = query.data?.pages ?? [];

  return {
    items: pages.flatMap((page) => page.items),
    total: pages.at(-1)?.total ?? 0,
    hasMore: query.hasNextPage,
    loadMore: query.fetchNextPage,
    isLoading: query.isPending && query.fetchStatus !== "idle",
    isLoadingMore: query.isFetchingNextPage,
    isError: query.isError,
    retry: query.refetch,
  };
}
