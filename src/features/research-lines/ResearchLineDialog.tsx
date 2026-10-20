import { Button, SectionLabel, Text } from "@/components/design-system";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ResearchLine } from "@/types/research-line";
import { ResearchLineMembers } from "./ResearchLineMembers";

type ResearchLineDialogProps = {
  line: ResearchLine | null;
  onClose: () => void;
};

export function ResearchLineDialog({ line, onClose }: ResearchLineDialogProps) {
  return (
    <Dialog open={line !== null} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="flex max-w-2xl flex-col gap-0 overflow-hidden p-0">
        {line && (
          <>
            <DialogHeader className="shrink-0 border-b text-left border-border bg-secondary/40 px-6 py-6 pr-14 md:px-8">
              <SectionLabel>Linha de pesquisa</SectionLabel>
              <DialogTitle className="text-heading-2 leading-snug text-primary">
                {line.name}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Objetivo e participantes da linha de pesquisa.
              </DialogDescription>
              <dl className="text-body-sm mt-4 flex flex-wrap gap-x-8 gap-y-2 text-muted-foreground">
                <Stat label="estudantes" value={line.studentCount} />
                <Stat label="pesquisadores" value={line.researcherCount} />
              </dl>
            </DialogHeader>

            {/* Celular: o corpo inteiro rola. Telas amplas e altas (`roomy`): só a lista de participantes rola. */}
            <div className="min-h-0 flex-1 space-y-8 overflow-y-auto px-6 py-6 roomy:flex roomy:flex-col roomy:gap-8 roomy:space-y-0 roomy:overflow-hidden md:px-8">
              <section aria-labelledby="line-objective" className="shrink-0">
                <h3 id="line-objective" className="text-label text-primary">
                  Objetivo
                </h3>
                <Text tone="default" className="mt-2">
                  {line.objective}
                </Text>
              </section>

              <ResearchLineMembers researchLineId={line.id} />
            </div>

            <DialogFooter className="shrink-0 border-t border-border px-6 py-4 md:px-8">
              <DialogClose asChild>
                <Button variant="subtle">Fechar</Button>
              </DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <dd className="text-heading-3 order-first text-primary">{value}</dd>
      <dt>{label}</dt>
    </div>
  );
}
