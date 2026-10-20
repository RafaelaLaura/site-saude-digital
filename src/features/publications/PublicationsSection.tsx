import * as React from "react";
import { Button, Card, Text } from "@/components/design-system";
import { ListFeedback } from "@/components/shared/ListFeedback";
import { LoadMoreButton } from "@/components/shared/LoadMoreButton";
import { PageSection } from "@/components/shared/PageSection";
import type { Publication } from "@/types/publication";
import { PublicationDialog } from "./PublicationDialog";
import { PublicationFilters } from "./PublicationFilters";
import { PublicationItem } from "./PublicationItem";
import { usePublications } from "./usePublications";

export function PublicationsSection() {
  const [selectedPublication, setSelectedPublication] = React.useState<Publication | null>(null);
  const publications = usePublications();

  return (
    <PageSection
      id="publicacoes"
      label="Publicações"
      title="Produção científica."
      intro="Artigos recentes do grupo. Abra a prévia para ver o resumo e acessar o texto completo na revista. A lista completa está no currículo Lattes de cada pesquisador."
    >
      <PublicationFilters
        searchQuery={publications.searchQuery}
        yearFilter={publications.yearFilter}
        availableYears={publications.availableYears}
        onSearchQueryChange={publications.changeSearchQuery}
        onYearFilterChange={publications.changeYearFilter}
      />

      <ListFeedback
        isLoading={publications.isLoading}
        isError={publications.isError}
        isEmpty={false}
        onRetry={publications.retry}
        emptyMessage=""
      >
        <Text size="sm" tone="muted" className="mb-3">
          <span role="status">
            Exibindo {publications.items.length} de {publications.total}
          </span>
        </Text>

        {publications.items.length > 0 ? (
          <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
            {publications.items.map((publication) => (
              <PublicationItem
                key={publication.id}
                publication={publication}
                onOpenPreview={() => setSelectedPublication(publication)}
              />
            ))}
          </ul>
        ) : (
          <Card padding="lg" className="text-center">
            <Text tone="default">Nenhuma publicação encontrada.</Text>
            {publications.hasActiveFilters && (
              <Button variant="link" onClick={publications.clearFilters} className="mt-3">
                Limpar busca e filtros
              </Button>
            )}
          </Card>
        )}

        <LoadMoreButton
          hasMore={publications.hasMore}
          isLoading={publications.isLoadingMore}
          onClick={publications.loadMore}
          label="Ver mais publicações"
        />
      </ListFeedback>

      <PublicationDialog
        publication={selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />
    </PageSection>
  );
}
