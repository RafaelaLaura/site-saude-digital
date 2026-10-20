import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useInfiniteList } from "@/hooks/useInfiniteList";
import { listPublicationYears, listPublications } from "@/services/PublicationsService";

const PUBLICATIONS_PAGE_SIZE = 5;

export const ALL_YEARS = "all";
export type YearFilter = typeof ALL_YEARS | number;

export function usePublications() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [yearFilter, setYearFilter] = React.useState<YearFilter>(ALL_YEARS);
  const debouncedQuery = useDebouncedValue(searchQuery.trim());
  const year = yearFilter === ALL_YEARS ? undefined : yearFilter;

  const list = useInfiniteList({
    queryKey: ["publications", debouncedQuery, year],
    fetchPage: (page) =>
      listPublications({ page, pageSize: PUBLICATIONS_PAGE_SIZE, query: debouncedQuery, year }),
  });

  const { data: availableYears = [] } = useQuery({
    queryKey: ["publications", "years"],
    queryFn: () => listPublicationYears().then((response) => response.data),
  });

  return {
    ...list,
    searchQuery,
    yearFilter,
    availableYears,
    hasActiveFilters: searchQuery.trim() !== "" || yearFilter !== ALL_YEARS,
    changeSearchQuery: setSearchQuery,
    changeYearFilter: setYearFilter,
    clearFilters: () => {
      setSearchQuery("");
      setYearFilter(ALL_YEARS);
    },
  };
}
