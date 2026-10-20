import type { ReactNode } from "react";
import { SectionLabel, Heading, Text } from "@/components/design-system";

type PageSectionProps = {
  id: string;
  label: string;
  title: string;
  intro?: string;
  isTinted?: boolean;
  children: ReactNode;
};

export function PageSection({ id, label, title, intro, isTinted, children }: PageSectionProps) {
  return (
    <section id={id} className={`layout-section ${isTinted ? "bg-secondary/40" : ""}`}>
      <div className="layout-container">
        <header className="mb-8 max-w-2xl md:mb-10">
          <SectionLabel>{label}</SectionLabel>
          <Heading as="h2" size="1">
            {title}
          </Heading>
          {intro && (
            <Text size="lg" tone="muted" className="mt-5">
              {intro}
            </Text>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
