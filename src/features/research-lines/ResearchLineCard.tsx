import { Button, Card, Heading, Text } from "@/components/design-system";
import type { ResearchLine } from "@/types/research-line";

type ResearchLineCardProps = {
  line: ResearchLine;
  onOpenDetails: () => void;
};

function formatCount(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function ResearchLineCard({ line, onOpenDetails }: ResearchLineCardProps) {
  return (
    <Card as="li" className="flex flex-col">
      <Heading as="h3">{line.name}</Heading>
      <Text size="sm" tone="muted" clamp="4" className="mt-4">
        {line.objective}
      </Text>

      <div className="mt-auto pt-6">
        <Text size="label" tone="primary">
          {formatCount(line.studentCount, "estudante", "estudantes")} ·{" "}
          {formatCount(line.researcherCount, "pesquisador", "pesquisadores")}
        </Text>
        <Button variant="outline" onClick={onOpenDetails} className="mt-4">
          Ver detalhes<span className="sr-only">: {line.name}</span>
        </Button>
      </div>
    </Card>
  );
}
