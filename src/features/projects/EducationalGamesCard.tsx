import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { Badge, ButtonLink, Card, Heading, Text } from "@/components/design-system";
import { EDUCATIONAL_GAMES } from "@/data/site";

export function EducationalGamesCard() {
  return (
    <Card
      padding="lg"
      hasAccentBar
      className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      <div className="max-w-2xl">
        <Badge>Jogos educativos</Badge>
        <Heading as="h3" size="2" className="mt-4 flex items-center gap-3">
          <Gamepad2 aria-hidden className="size-6 shrink-0 text-accent" />
          {EDUCATIONAL_GAMES.title}
        </Heading>
        <Text tone="muted" className="mt-3">
          {EDUCATIONAL_GAMES.description}
        </Text>
      </div>
      <ButtonLink href={EDUCATIONAL_GAMES.url} isExternal size="lg" className="shrink-0">
        Jogar agora <ArrowUpRight aria-hidden className="size-4" />
      </ButtonLink>
    </Card>
  );
}
