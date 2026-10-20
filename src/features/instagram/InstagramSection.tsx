import { PageSection } from "@/components/shared/PageSection";
import { ScrollCarousel } from "@/components/shared/ScrollCarousel";
import { INSTAGRAM_POST_URLS } from "@/data/instagram-posts";
import { InstagramEmbed } from "./InstagramEmbed";

export function InstagramSection() {
  return (
    <PageSection
      id="instagram"
      label="Redes sociais"
      title="Acompanhe o dia a dia do grupo."
      intro="Eventos, projetos e novidades do laboratório compartilhados no Instagram."
    >
      <ScrollCarousel label="Postagens recentes do Instagram">
        {INSTAGRAM_POST_URLS.map((postUrl) => (
          <li key={postUrl} className="w-[20rem] shrink-0 snap-start sm:w-[22rem]">
            <InstagramEmbed postUrl={postUrl} />
          </li>
        ))}
      </ScrollCarousel>
    </PageSection>
  );
}
