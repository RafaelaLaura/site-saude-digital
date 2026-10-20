import { GraduationCap } from "lucide-react";

type LattesLinkProps = {
  href: string;
  personName: string;
};

/**
 * Link para o currículo Lattes. O ícone é provisório: para usar o logotipo oficial do
 * Lattes, salve-o em `src/assets/` e troque `GraduationCap` por uma `<img>`.
 */
export function LattesLink({ href, personName }: LattesLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-caption inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      <GraduationCap aria-hidden className="size-4" />
      Lattes
      <span className="sr-only">de {personName} (abre em nova aba)</span>
    </a>
  );
}
