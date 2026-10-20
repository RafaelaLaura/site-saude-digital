import type { ReactNode } from "react";
import { NAV_ITEMS } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

type NavigationVariant = "header" | "mobile" | "footer";

const SECTION_IDS = NAV_ITEMS.map((item) => item.sectionId);

const VARIANT_STYLES: Record<
  NavigationVariant,
  { label: string; nav: string; link: string; active: string; idle: string }
> = {
  header: {
    label: "Principal",
    nav: "items-center gap-1",
    link: "text-body-sm rounded-md px-3 py-2 transition-colors hover:text-primary",
    active: "font-medium text-primary underline decoration-accent decoration-2 underline-offset-8",
    idle: "text-muted-foreground",
  },
  mobile: {
    label: "Principal (mobile)",
    nav: "mt-8 flex-col",
    link: "text-body flex min-h-12 items-center border-b border-border",
    active: "font-medium text-primary",
    idle: "text-foreground",
  },
  footer: {
    label: "Rodapé",
    nav: "flex-wrap gap-x-5",
    link: "touch-target inline-flex items-center hover:text-primary hover:underline",
    active: "",
    idle: "",
  },
};

type NavigationProps = {
  variant: NavigationVariant;
  className?: string;
  /** Chamado ao clicar em um link (o menu do celular usa para fechar). */
  onNavigate?: () => void;
  /** Links extras exibidos depois dos itens do menu (ex.: Instagram no rodapé). */
  children?: ReactNode;
};

export function Navigation({ variant, className, onNavigate, children }: NavigationProps) {
  const styles = VARIANT_STYLES[variant];
  const activeSectionId = useActiveSection(SECTION_IDS, variant !== "footer");

  return (
    <nav aria-label={styles.label} className={cn("flex", styles.nav, className)}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeSectionId === item.sectionId;
        return (
          <a
            key={item.sectionId}
            href={`#${item.sectionId}`}
            aria-current={isActive ? "location" : undefined}
            onClick={onNavigate}
            className={cn(styles.link, isActive ? styles.active : styles.idle)}
          >
            {item.label}
          </a>
        );
      })}
      {children}
    </nav>
  );
}
