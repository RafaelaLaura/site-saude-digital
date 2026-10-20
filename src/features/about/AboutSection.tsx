import { BookOpen, Microscope, Users } from "lucide-react";
import { Card, Heading, Text } from "@/components/design-system";
import { PageSection } from "@/components/shared/PageSection";

const PILLARS = [
  {
    Icon: Microscope,
    title: "Pesquisa aplicada",
    description:
      "Projetos voltados a problemas reais de serviços de saúde e de políticas públicas.",
  },
  {
    Icon: Users,
    title: "Formação de pessoas",
    description:
      "Iniciação científica, mestrado e doutorado, com orientação próxima e trabalho em equipe.",
  },
  {
    Icon: BookOpen,
    title: "Ciência aberta",
    description:
      "Artigos, códigos e dados compartilhados sempre que possível, para que outros possam reproduzir e ampliar o trabalho.",
  },
];

export function AboutSection() {
  return (
    <PageSection
      id="grupo"
      label="O Grupo"
      title="Pesquisa interdisciplinar em saúde digital."
      intro="Criado em 2026 na Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA), o grupo investiga como dados, algoritmos e sistemas de informação podem melhorar a atenção à saúde. Reúne pesquisadores, profissionais da saúde, cientistas de dados e estudantes em projetos que aproximam a universidade da sociedade."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PILLARS.map(({ Icon, title, description }) => (
          <Card key={title} as="article" padding="lg">
            <Icon aria-hidden className="size-6 text-accent" />
            <Heading as="h3" className="mt-5">
              {title}
            </Heading>
            <Text tone="muted" className="mt-3">
              {description}
            </Text>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
