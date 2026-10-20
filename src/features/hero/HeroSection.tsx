import { ArrowRight } from "lucide-react";
import ufcspaImage from "@/assets/UFCSPA.jpg";
import { ButtonLink, Heading, Text } from "@/components/design-system";
import { HERO_STATS } from "@/data/site";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-white/5 blur-3xl" />

      <div className="layout-container grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <Heading as="h1" size="display" tone="inherit">
            Pesquisa e inovação em <span className="text-accent">saúde digital</span>.
          </Heading>
          <Text size="lg" tone="inverse" className="mt-6 max-w-lg">
            Reunimos ciência de dados, bioinformática, tecnologia e inteligência artificial em
            projetos que buscam melhorar a saúde e o cuidado das pessoas.
          </Text>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#linhas" variant="light">
              Conheça as linhas de pesquisa <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href="#projetos" variant="outline-light">
              Ver projetos
            </ButtonLink>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-heading-1 text-accent">{stat.value}</dt>
                <dd className="text-caption mt-1 text-white/80">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-lg border border-accent/50" />
          <img
            src={ufcspaImage}
            alt="Fachada da Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)"
            width={1600}
            height={1200}
            fetchPriority="high"
            className="relative aspect-[4/3] w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
