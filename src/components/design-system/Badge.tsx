import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="text-caption inline-flex rounded-full border border-border px-3 py-1 font-medium text-primary/80">
      {children}
    </span>
  );
}
