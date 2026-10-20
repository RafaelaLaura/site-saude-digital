import type { ApiResponse } from "@/types/api";
import { handleMockRequest } from "./mock/handlers";

type RequestParams = Record<string, string | number | undefined>;
type RequestConfig = { params?: RequestParams };

/** URL do backend. Se vazia, o `client` usa o backend de mentira (`services/mock`). */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string | undefined;

async function request<T>(
  method: string,
  url: string,
  config: RequestConfig = {},
  body?: unknown,
): Promise<ApiResponse<T>> {
  if (!API_BASE_URL) {
    const mock = handleMockRequest(method, url, config.params ?? {}, body);
    if (mock.status >= 400) throw new Error((mock.data as { message: string }).message);
    return mock as ApiResponse<T>;
  }

  const search = new URLSearchParams();
  Object.entries(config.params ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== "") search.set(key, String(value));
  });
  const query = search.size > 0 ? `?${search}` : "";

  const response = await fetch(`${API_BASE_URL}${url}${query}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) throw new Error(`Erro ${response.status} em ${method} ${url}`);
  return { status: response.status, data: (await response.json()) as T };
}

export const client = {
  get: <T>(url: string, config?: RequestConfig) => request<T>("GET", url, config),
  post: <T>(url: string, data?: unknown) => request<T>("POST", url, {}, data),
  put: <T>(url: string, data?: unknown) => request<T>("PUT", url, {}, data),
  delete: <T>(url: string) => request<T>("DELETE", url),
};
