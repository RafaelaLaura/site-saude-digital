import { Badge, Card, FilterChips, Heading, Text } from "@/components/design-system";
import { ListFeedback } from "@/components/shared/ListFeedback";
import { LoadMoreButton } from "@/components/shared/LoadMoreButton";
import { PageSection } from "@/components/shared/PageSection";
import { EducationalGamesCard } from "./EducationalGamesCard";
import { PROJECT_STATUSES, PROJECT_STATUS_LABELS } from "./project-status";
import { useProjects } from "./useProjects";

export function ProjectsSection() {
  const projects = useProjects();

  return (
    <PageSection
      id="projetos"
      isTinted
      label="Projetos"
      title="Projetos em desenvolvimento."
      intro="Iniciativas em diferentes estágios, do piloto à implementação em serviços de saúde."
    >
      <FilterChips
        label="Filtrar projetos por situação"
        value={projects.status ?? ""}
        onChange={(status) => projects.changeStatus(status || undefined)}
        options={[
          { value: "", label: "Todos" },
          ...PROJECT_STATUSES.map((status) => ({
            value: status,
            label: PROJECT_STATUS_LABELS[status],
          })),
        ]}
      />

      <ListFeedback
        isLoading={projects.isLoading}
        isError={projects.isError}
        isEmpty={projects.items.length === 0}
        onRetry={projects.retry}
        emptyMessage="Nenhum projeto encontrado para esta situação."
      >
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project) => (
            <Card key={project.id} as="li" padding="lg" hasAccentBar>
              <Badge>{PROJECT_STATUS_LABELS[project.status]}</Badge>
              <Heading as="h3" size="2" className="mt-4">
                {project.title}
              </Heading>
              <Text tone="muted" className="mt-3">
                {project.description}
              </Text>
            </Card>
          ))}
        </ul>
        <LoadMoreButton
          hasMore={projects.hasMore}
          isLoading={projects.isLoadingMore}
          onClick={projects.loadMore}
          label="Ver mais projetos"
        />
      </ListFeedback>

      <EducationalGamesCard />
    </PageSection>
  );
}
