import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ScrollCarouselProps = {
  label: string;
  children: React.ReactNode;
};

export function ScrollCarousel({ label, children }: ScrollCarouselProps) {
  const trackRef = React.useRef<HTMLUListElement>(null);
  const [canScrollBack, setCanScrollBack] = React.useState(false);
  const [canScrollForward, setCanScrollForward] = React.useState(false);

  const updateArrows = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollBack(track.scrollLeft > 4);
    setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  function scrollByPage(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: "smooth" });
  }

  const hasOverflow = canScrollBack || canScrollForward;

  return (
    <div role="region" aria-roledescription="carrossel" aria-label={label} className="relative">
      <ul
        ref={trackRef}
        onScroll={updateArrows}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      {hasOverflow && (
        <div className="mt-4 flex justify-end gap-2">
          <ArrowButton
            direction="back"
            disabled={!canScrollBack}
            onClick={() => scrollByPage(-1)}
          />
          <ArrowButton
            direction="forward"
            disabled={!canScrollForward}
            onClick={() => scrollByPage(1)}
          />
        </div>
      )}
    </div>
  );
}

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "back" | "forward";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "back" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "back" ? "Anterior" : "Próximo"}
      className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-primary disabled:opacity-40 disabled:hover:border-border"
    >
      <Icon aria-hidden className="size-5" />
    </button>
  );
}
