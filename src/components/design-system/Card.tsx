import type { ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardStyles = cva("rounded-lg border border-border bg-card", {
  variants: {
    padding: {
      sm: "p-5",
      md: "p-6",
      lg: "p-6 md:p-8",
    },
  },
  defaultVariants: { padding: "md" },
});

type CardProps = VariantProps<typeof cardStyles> & {
  as?: "div" | "li" | "article";
  hasAccentBar?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({ as: Tag = "div", padding, hasAccentBar, className, children }: CardProps) {
  const Component: ElementType = Tag;
  return (
    <Component
      className={cn(
        cardStyles({ padding }),
        hasAccentBar && "relative overflow-hidden pl-8 md:pl-10",
        className,
      )}
    >
      {hasAccentBar && <span aria-hidden className="absolute left-0 top-0 h-full w-1 bg-accent" />}
      {children}
    </Component>
  );
}
