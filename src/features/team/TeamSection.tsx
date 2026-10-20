import { Card, Heading, Text } from "@/components/design-system";
import { PageSection } from "@/components/shared/PageSection";
import { TEAM_MEMBERS } from "@/data/team";

export function TeamSection() {
  return (
    <PageSection
      id="equipe"
      label="Equipe"
      title="Pessoas que fazem a pesquisa acontecer."
      intro="Docentes, pesquisadores e estudantes de diferentes áreas que trabalham juntos para transformar dados e tecnologia em soluções para a saúde."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.name} as="li" padding="sm" className="flex items-center gap-4">
            <div
              aria-hidden
              className="text-heading-3 flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              {member.initials}
            </div>
            <div>
              <Heading as="h3" className="text-base">
                {member.name}
              </Heading>
              <Text size="sm" tone="muted">
                {member.role}
              </Text>
            </div>
          </Card>
        ))}
      </ul>
    </PageSection>
  );
}
