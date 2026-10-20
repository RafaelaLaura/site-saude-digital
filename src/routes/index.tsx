import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { AboutSection } from "@/features/about/AboutSection";
import { ContactSection } from "@/features/contact/ContactSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { InstagramSection } from "@/features/instagram/InstagramSection";
import { PartnersSection } from "@/features/partners/PartnersSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { PublicationsSection } from "@/features/publications/PublicationsSection";
import { ResearchLinesSection } from "@/features/research-lines/ResearchLinesSection";
import { TeamSection } from "@/features/team/TeamSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo de Pesquisa Saúde Digital — UFCSPA" },
      {
        name: "description",
        content:
          "Grupo de pesquisa da UFCSPA em saúde digital: ciência de dados, bioinformática e saúde pública.",
      },
      { property: "og:title", content: "Grupo de Pesquisa Saúde Digital — UFCSPA" },
      {
        property: "og:description",
        content: "Pesquisa aplicada em ciência de dados, saúde e inovação na UFCSPA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <ResearchLinesSection />
        <TeamSection />
        <ProjectsSection />
        <PublicationsSection />
        <InstagramSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
