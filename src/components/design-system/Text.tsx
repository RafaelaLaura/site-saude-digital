import type { ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textStyles = cva("", {
  variants: {
    size: {
      lg: "text-body-lg",
      md: "text-body",
      sm: "text-body-sm",
      label: "text-label",
      caption: "text-caption",
    },
    tone: {
      inherit: "",
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      inverse: "text-white/85",
    },
    clamp: {
      none: "",
      "4": "line-clamp-4",
      "5": "line-clamp-5",
    },
  },
  defaultVariants: { size: "md", tone: "inherit", clamp: "none" },
});

type TextProps = VariantProps<typeof textStyles> & {
  as?: "p" | "span" | "div";
  className?: string;
  id?: string;
  children: ReactNode;
};

export function Text({ as: Tag = "p", size, tone, clamp, className, id, children }: TextProps) {
  const Component: ElementType = Tag;
  return (
    <Component id={id} className={cn(textStyles({ size, tone, clamp }), className)}>
      {children}
    </Component>
  );
}
