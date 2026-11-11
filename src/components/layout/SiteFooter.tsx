import { ArrowUp, Gamepad2, Instagram } from "lucide-react";
import { CONTACT, EDUCATIONAL_GAMES, GROUP_NAME, UNIVERSITY_NAME } from "@/data/site";
import { Navigation } from "./Navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="layout-container text-body-sm flex flex-col gap-6 text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p>
            © {new Date().getFullYear()} {GROUP_NAME} · UFCSPA
          </p>
          <p>{UNIVERSITY_NAME}</p>
        </div>

        <Navigation variant="footer">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="touch-target inline-flex items-center gap-1 hover:text-primary hover:underline"
          >
            <Instagram aria-hidden className="size-4" /> Instagram
            <span className="sr-only">(abre em nova aba)</span>
          </a>
          <a
            href={EDUCATIONAL_GAMES.url}
            target="_blank"
            rel="noreferrer"
            className="touch-target inline-flex items-center gap-1 hover:text-primary hover:underline"
          >
            <Gamepad2 aria-hidden className="size-4" /> Jogos educativos
            <span className="sr-only">(abre em nova aba)</span>
          </a>
          <a
            href="#top"
            className="touch-target inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Voltar ao topo <ArrowUp aria-hidden className="size-4" />
          </a>
        </Navigation>
      </div>
    </footer>
  );
}
