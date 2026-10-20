import { Text } from "@/components/design-system";
import { LattesLink } from "@/components/shared/LattesLink";
import { ListFeedback } from "@/components/shared/ListFeedback";
import { LoadMoreButton } from "@/components/shared/LoadMoreButton";
import { getInitials } from "./getInitials";
import { useResearchLineMembers } from "./useResearchLines";

type ResearchLineMembersProps = {
  researchLineId: string;
};

export function ResearchLineMembers({ researchLineId }: ResearchLineMembersProps) {
  const members = useResearchLineMembers(researchLineId);

  return (
    <section
      aria-labelledby="line-members"
      className="roomy:flex roomy:min-h-0 roomy:flex-1 roomy:flex-col"
    >
      <h3 id="line-members" className="text-label text-primary">
        Participantes
        {members.total > 0 && (
          <span className="ml-2 font-normal text-muted-foreground">{members.total}</span>
        )}
      </h3>

      <ListFeedback
        isLoading={members.isLoading}
        isError={members.isError}
        isEmpty={members.items.length === 0}
        onRetry={members.retry}
        emptyMessage="Nenhum participante cadastrado."
      >
        {/* tabIndex permite rolar a lista com o teclado. */}
        <div
          tabIndex={0}
          aria-label="Lista de participantes"
          className="mt-3 rounded-lg border border-border roomy:min-h-32 roomy:flex-1 roomy:overflow-y-auto"
        >
          <ul className="divide-y divide-border">
            {members.items.map((member) => (
              <li key={member.id} className="flex items-center gap-3 px-4 py-3">
                <span
                  aria-hidden
                  className="text-caption flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground"
                >
                  {getInitials(member.name)}
                </span>
                <Text as="span" size="sm" tone="default" className="min-w-0 flex-1">
                  {member.name}
                </Text>
                {member.lattesUrl && (
                  <LattesLink href={member.lattesUrl} personName={member.name} />
                )}
              </li>
            ))}
          </ul>
          <div className="px-4 pb-3">
            <LoadMoreButton
              hasMore={members.hasMore}
              isLoading={members.isLoadingMore}
              onClick={members.loadMore}
              label="Ver mais participantes"
            />
          </div>
        </div>
      </ListFeedback>
    </section>
  );
}
