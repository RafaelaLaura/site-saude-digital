import { Button } from "@/components/design-system";

type LoadMoreButtonProps = {
  hasMore: boolean;
  isLoading: boolean;
  onClick: () => void;
  label?: string;
};

export function LoadMoreButton({
  hasMore,
  isLoading,
  onClick,
  label = "Ver mais",
}: LoadMoreButtonProps) {
  if (!hasMore) return null;
  return (
    <div className="mt-6 text-center">
      <Button variant="outline" onClick={onClick} disabled={isLoading}>
        {isLoading ? "Carregando…" : label}
      </Button>
    </div>
  );
}
