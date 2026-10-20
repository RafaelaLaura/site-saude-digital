import type { ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingStyles = cva("", {
  variants: {
    size: {
      display: "text-display",
      "1": "text-heading-1",
      "2": "text-heading-2",
      "3": "text-heading-3",
    },
    tone: {
      primary: "text-primary",
      inherit: "",
      accent: "text-accent",
    },
  },
  defaultVariants: { size: "3", tone: "primary" },
});

type HeadingProps = VariantProps<typeof headingStyles> & {
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: ReactNode;
};

export function Heading({ as: Tag = "h3", size, tone, className, children }: HeadingProps) {
  const Component: ElementType = Tag;
  return <Component className={cn(headingStyles({ size, tone }), className)}>{children}</Component>;
}
