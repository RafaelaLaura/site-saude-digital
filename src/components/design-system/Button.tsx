import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "text-label touch-target inline-flex items-center justify-center gap-2 rounded-md px-5 transition-colors",
  {
    variants: {
      variant: {
        /** Preenchido com a cor principal. */
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        /** Apenas contorno, para ações secundárias. */
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        /** Texto sublinhado, para ações leves como "Ver mais". */
        link: "justify-start px-0 text-primary underline underline-offset-4",
        /** Contorno discreto, para ações como "Fechar". */
        subtle: "border border-border text-primary hover:bg-secondary",
        /** Preenchido com o dourado da marca. */
        accent: "bg-accent text-accent-foreground hover:-translate-y-0.5",
        /** Branco preenchido, para fundos escuros. */
        light: "bg-white text-primary hover:-translate-y-0.5",
        /** Contorno branco, para fundos escuros. */
        "outline-light": "border border-white/40 text-white hover:bg-white/10",
      },
      size: {
        md: "",
        lg: "min-h-12 text-base",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type ButtonStyleProps = VariantProps<typeof buttonStyles>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props} />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonStyleProps & {
    isExternal?: boolean;
  };

export function ButtonLink({
  variant,
  size,
  className,
  isExternal,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonStyles({ variant, size }), className)}
      {...(isExternal && { target: "_blank", rel: "noreferrer" })}
      {...props}
    >
      {children}
      {isExternal && <span className="sr-only">(abre em nova aba)</span>}
    </a>
  );
}
