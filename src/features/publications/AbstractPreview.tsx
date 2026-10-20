import * as React from "react";
import { Button, Text } from "@/components/design-system";

const LONG_TEXT_THRESHOLD = 300;

type AbstractPreviewProps = {
  abstract?: string;
};

export function AbstractPreview({ abstract }: AbstractPreviewProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const textId = React.useId();
  const isLong = (abstract?.length ?? 0) > LONG_TEXT_THRESHOLD;

  return (
    <div>
      <Text size="label" tone="muted">
        Resumo
      </Text>
      <Text tone="default" clamp={isExpanded ? "none" : "5"} className="mt-2" id={textId}>
        {abstract ?? "O resumo deste artigo ainda não está disponível aqui."}
      </Text>
      {isLong && (
        <Button
          variant="link"
          onClick={() => setIsExpanded((value) => !value)}
          aria-expanded={isExpanded}
          aria-controls={textId}
          className="mt-2"
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </Button>
      )}
    </div>
  );
}
