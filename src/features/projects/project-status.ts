import type { ProjectStatus } from "@/types/project";

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  ongoing: "Em andamento",
  completed: "Concluído",
  pilot: "Piloto",
};

export const PROJECT_STATUSES = Object.keys(PROJECT_STATUS_LABELS) as ProjectStatus[];
