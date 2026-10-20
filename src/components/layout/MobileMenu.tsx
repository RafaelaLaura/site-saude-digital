import * as React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Navigation } from "./Navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        aria-label="Abrir menu"
        className="inline-flex size-11 items-center justify-center rounded-md border border-border text-primary xl:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 bg-background">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <Navigation variant="mobile" onNavigate={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
