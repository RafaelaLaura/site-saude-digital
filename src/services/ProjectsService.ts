import type { ApiResponse, ListParams, Paginated } from "@/types/api";
import type { Project, ProjectStatus } from "@/types/project";
import { client } from "./client";

export type ListProjectsParams = ListParams & { status?: ProjectStatus };

export function listProjects(params: ListProjectsParams): Promise<ApiResponse<Paginated<Project>>> {
  return client.get("/v1/projects", { params });
}
