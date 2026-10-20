import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Junta classes e resolve conflitos (a última vence). Os estilos de texto do nosso design
 * (`text-heading-1`, `text-body`...) são registrados como "tamanho de fonte"; sem isso, o
 * merge os confundiria com cores (`text-primary`) e apagaria um deles.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "heading-1",
            "heading-2",
            "heading-3",
            "body-lg",
            "body",
            "body-sm",
            "label",
            "caption",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
