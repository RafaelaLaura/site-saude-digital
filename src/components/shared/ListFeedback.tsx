import type { ReactNode } from "react";
import { Button, Text } from "@/components/design-system";

type ListFeedbackProps = {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  onRetry: () => void;
  emptyMessage: string;
  children: ReactNode;
};

export function ListFeedback({
  isLoading,
  isError,
  isEmpty,
  onRetry,
  emptyMessage,
  children,
}: ListFeedbackProps) {
  if (isLoading) {
    return (
      <Text tone="muted" className="py-8 text-center">
        <span role="status">Carregando…</span>
      </Text>
    );
  }

  if (isError) {
    return (
      <div className="py-8 text-center" role="alert">
        <Text tone="default">Não foi possível carregar a lista.</Text>
        <Button variant="outline" onClick={onRetry} className="mt-3">
          Tentar novamente
        </Button>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <Text tone="default" className="py-8 text-center">
        {emptyMessage}
      </Text>
    );
  }

  return <>{children}</>;
}
