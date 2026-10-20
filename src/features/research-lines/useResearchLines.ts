import { useInfiniteList } from "@/hooks/useInfiniteList";
import { listResearchLineMembers, listResearchLines } from "@/services/ResearchLinesService";

const LINES_PAGE_SIZE = 6;
const MEMBERS_PAGE_SIZE = 10;

export function useResearchLines() {
  return useInfiniteList({
    queryKey: ["research-lines"],
    fetchPage: (page) => listResearchLines({ page, pageSize: LINES_PAGE_SIZE }),
  });
}

export function useResearchLineMembers(researchLineId: string | undefined) {
  return useInfiniteList({
    queryKey: ["research-lines", researchLineId, "members"],
    fetchPage: (page) =>
      listResearchLineMembers(researchLineId!, { page, pageSize: MEMBERS_PAGE_SIZE }),
    isEnabled: researchLineId !== undefined,
  });
}
