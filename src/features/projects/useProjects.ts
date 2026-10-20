import * as React from "react";
import { useInfiniteList } from "@/hooks/useInfiniteList";
import { listProjects } from "@/services/ProjectsService";
import type { ProjectStatus } from "@/types/project";

const PROJECTS_PAGE_SIZE = 6;

export function useProjects() {
  const [status, setStatus] = React.useState<ProjectStatus | undefined>(undefined);

  const list = useInfiniteList({
    queryKey: ["projects", status],
    fetchPage: (page) => listProjects({ page, pageSize: PROJECTS_PAGE_SIZE, status }),
  });

  return { ...list, status, changeStatus: setStatus };
}
