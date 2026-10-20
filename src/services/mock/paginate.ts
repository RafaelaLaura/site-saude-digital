import type { ListParams, Paginated } from "@/types/api";

const DEFAULT_PAGE_SIZE = 10;

export function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function paginate<T>(items: T[], { page = 1, pageSize = DEFAULT_PAGE_SIZE }: ListParams) {
  const start = (page - 1) * pageSize;
  const result: Paginated<T> = {
    items: items.slice(start, start + pageSize),
    page,
    pageSize,
    total: items.length,
  };
  return result;
}
