import { PageSection } from "@/components/shared/PageSection";
import { PARTNERS } from "@/data/partners";

export function PartnersSection() {
  return (
    <PageSection
      id="apoio"
      isTinted
      label="Apoio institucional"
      title="Instituições que apoiam o grupo."
      intro="A pesquisa do grupo é realizada com o apoio de instituições de ensino e de fomento à ciência."
    >
      <ul className="flex flex-wrap items-center gap-x-14 gap-y-8">
        {PARTNERS.map((partner) => (
          <li key={partner.id}>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="flex h-20 items-center justify-center opacity-90 transition-opacity hover:opacity-100"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ height: partner.logoHeight ?? 48 }}
                  className="w-auto max-w-full object-contain"
                />
              ) : (
                <span className="text-body-sm text-center font-medium text-primary">
                  {partner.name}
                </span>
              )}
              <span className="sr-only">(abre o site em nova aba)</span>
            </a>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
