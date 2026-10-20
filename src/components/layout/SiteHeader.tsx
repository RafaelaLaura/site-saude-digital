import logoSaudeDigital from "@/assets/logo_saude_digital.png";
import { ButtonLink } from "@/components/design-system";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="layout-container flex h-16 items-center justify-between">
        <a href="#top" aria-label="Saúde Digital — início">
          <img src={logoSaudeDigital} alt="Saúde Digital" className="h-10 w-auto" />
        </a>

        <Navigation variant="header" className="hidden xl:flex" />

        <ButtonLink href="#contato" variant="outline" className="hidden xl:inline-flex">
          Fale conosco
        </ButtonLink>

        <MobileMenu />
      </div>
    </header>
  );
}
