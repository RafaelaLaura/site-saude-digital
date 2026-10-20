import { FilterBar, FilterSelect, SearchField } from "@/components/design-system";
import { ALL_YEARS, type YearFilter } from "./usePublications";

type PublicationFiltersProps = {
  searchQuery: string;
  yearFilter: YearFilter;
  availableYears: number[];
  onSearchQueryChange: (query: string) => void;
  onYearFilterChange: (year: YearFilter) => void;
};

export function PublicationFilters({
  searchQuery,
  yearFilter,
  availableYears,
  onSearchQueryChange,
  onYearFilterChange,
}: PublicationFiltersProps) {
  return (
    <FilterBar>
      <SearchField
        name="publication-search"
        label="Buscar publicação"
        placeholder="Buscar por título, autor ou revista"
        value={searchQuery}
        onValueChange={onSearchQueryChange}
      />
      <FilterSelect
        name="publication-year"
        label="Ano"
        value={yearFilter}
        onChange={(event) =>
          onYearFilterChange(
            event.target.value === ALL_YEARS ? ALL_YEARS : Number(event.target.value),
          )
        }
      >
        <option value={ALL_YEARS}>Todos</option>
        {availableYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </FilterSelect>
    </FilterBar>
  );
}
