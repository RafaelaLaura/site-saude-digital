import type { ApiResponse, ListParams, Paginated } from "@/types/api";
import type { Member } from "@/types/member";
import type { ResearchLine } from "@/types/research-line";
import { client } from "./client";

export function listResearchLines(
  params: ListParams,
): Promise<ApiResponse<Paginated<ResearchLine>>> {
  return client.get("/v1/research-lines", { params });
}

export function listResearchLineMembers(
  researchLineId: string,
  params: ListParams,
): Promise<ApiResponse<Paginated<Member>>> {
  return client.get(`/v1/research-lines/${researchLineId}/members`, { params });
}
