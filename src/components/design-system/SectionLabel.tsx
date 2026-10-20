import type { ReactNode } from "react";

type SectionLabelProps = {
  tone?: "default" | "onDark";
  children: ReactNode;
};

export function SectionLabel({ tone = "default", children }: SectionLabelProps) {
  return (
    <p
      className={`text-label mb-3 flex items-center gap-3 ${
        tone === "onDark" ? "text-accent" : "text-primary/80"
      }`}
    >
      <span aria-hidden className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}
