import * as React from "react";
import { ListFeedback } from "@/components/shared/ListFeedback";
import { LoadMoreButton } from "@/components/shared/LoadMoreButton";
import { PageSection } from "@/components/shared/PageSection";
import type { ResearchLine } from "@/types/research-line";
import { ResearchLineCard } from "./ResearchLineCard";
import { ResearchLineDialog } from "./ResearchLineDialog";
import { useResearchLines } from "./useResearchLines";

export function ResearchLinesSection() {
  const [selectedLine, setSelectedLine] = React.useState<ResearchLine | null>(null);
  const lines = useResearchLines();

  return (
    <PageSection
      id="linhas"
      isTinted
      label="Linhas de Pesquisa"
      title="Frentes de pesquisa em saúde digital."
      intro="Da segurança da informação à inteligência artificial, cada linha reúne pesquisadores e estudantes em torno de problemas reais do cuidado em saúde."
    >
      <ListFeedback
        isLoading={lines.isLoading}
        isError={lines.isError}
        isEmpty={lines.items.length === 0}
        onRetry={lines.retry}
        emptyMessage="Nenhuma linha de pesquisa cadastrada."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lines.items.map((line) => (
            <ResearchLineCard
              key={line.id}
              line={line}
              onOpenDetails={() => setSelectedLine(line)}
            />
          ))}
        </ul>
        <LoadMoreButton
          hasMore={lines.hasMore}
          isLoading={lines.isLoadingMore}
          onClick={lines.loadMore}
          label="Ver mais linhas"
        />
      </ListFeedback>

      <ResearchLineDialog line={selectedLine} onClose={() => setSelectedLine(null)} />
    </PageSection>
  );
}
