export type ApiResponse<T> = {
  data: T;
  status: number;
};

export type Paginated<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};

export type ListParams = {
  page?: number;
  pageSize?: number;
  query?: string;
};
