import type { ApiResponse, ListParams, Paginated } from "@/types/api";
import type { Publication } from "@/types/publication";
import { client } from "./client";

export type ListPublicationsParams = ListParams & { year?: number };

export function listPublications(
  params: ListPublicationsParams,
): Promise<ApiResponse<Paginated<Publication>>> {
  return client.get("/v1/publications", { params });
}

export function listPublicationYears(): Promise<ApiResponse<number[]>> {
  return client.get("/v1/publications/years");
}
