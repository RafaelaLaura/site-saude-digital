import { ExternalLink } from "lucide-react";
import { Button, ButtonLink, Text } from "@/components/design-system";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Publication } from "@/types/publication";
import { AbstractPreview } from "./AbstractPreview";

type PublicationDialogProps = {
  publication: Publication | null;
  onClose: () => void;
};

export function PublicationDialog({ publication, onClose }: PublicationDialogProps) {
  return (
    <Dialog open={publication !== null} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent>
        {publication && (
          <>
            <DialogHeader>
              <Text size="sm" tone="muted">
                {publication.venue} · {publication.year}
              </Text>
              <DialogTitle className="text-heading-3">{publication.title}</DialogTitle>
              <DialogDescription>{publication.authors}</DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              {/* `key` reinicia o estado "Ver mais" ao trocar de artigo. */}
              <AbstractPreview key={publication.id} abstract={publication.abstract} />
            </div>

            <DialogFooter className="mt-6 gap-2">
              <DialogClose asChild>
                <Button variant="subtle">Fechar</Button>
              </DialogClose>
              {publication.url && (
                <ButtonLink href={publication.url} isExternal>
                  Ler na revista <ExternalLink aria-hidden className="size-4" />
                </ButtonLink>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
