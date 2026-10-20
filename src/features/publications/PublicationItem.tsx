import { ArrowRight, FileText } from "lucide-react";
import { Heading, Text } from "@/components/design-system";
import type { Publication } from "@/types/publication";

type PublicationItemProps = {
  publication: Publication;
  onOpenPreview: () => void;
};

export function PublicationItem({ publication, onOpenPreview }: PublicationItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onOpenPreview}
        aria-haspopup="dialog"
        className="flex w-full flex-col gap-4 p-5 text-left transition-colors hover:bg-secondary/40 md:flex-row md:items-start md:gap-8 md:p-8"
      >
        <Text as="div" size="sm" tone="muted" className="flex shrink-0 items-center gap-3 md:w-56">
          <FileText aria-hidden className="size-4 text-accent" />
          <span>{publication.year}</span>
          <span aria-hidden className="hidden text-border md:inline">
            ·
          </span>
          <span className="hidden md:inline">{publication.venue}</span>
        </Text>

        <div className="flex-1">
          <Heading as="h3">{publication.title}</Heading>
          <Text tone="muted" className="mt-2">
            {publication.authors}
          </Text>
          <Text size="sm" tone="muted" className="mt-1 md:hidden">
            {publication.venue}
          </Text>
        </div>

        <Text
          as="span"
          size="label"
          tone="primary"
          className="inline-flex shrink-0 items-center gap-1"
        >
          Ver prévia <ArrowRight aria-hidden className="size-4" />
        </Text>
      </button>
    </li>
  );
}
