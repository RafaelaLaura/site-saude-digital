import type { ReactNode } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SectionLabel, Heading, Text } from "@/components/design-system";
import { CONTACT } from "@/data/site";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contato" className="layout-section bg-primary text-primary-foreground">
      <div className="layout-container grid gap-12 md:grid-cols-2 md:gap-14">
        <div>
          <SectionLabel tone="onDark">Contato</SectionLabel>
          <Heading as="h2" size="1" tone="inherit">
            Vamos construir juntos?
          </Heading>
          <Text size="lg" tone="inverse" className="mt-5 max-w-md">
            Entre em contato para propor parcerias, projetos em conjunto, orientações ou
            colaborações com serviços de saúde.
          </Text>

          <ul className="mt-10 space-y-4 text-white/90">
            <ContactLink href={`mailto:${CONTACT.email}`} icon={<Mail />}>
              {CONTACT.email}
            </ContactLink>
            <ContactLink href={CONTACT.phoneHref} icon={<Phone />}>
              {CONTACT.phoneLabel}
            </ContactLink>
            <ContactLink href={CONTACT.instagramUrl} icon={<Instagram />} isExternal>
              {CONTACT.instagramHandle}
            </ContactLink>
            <ContactLink href={CONTACT.mapsUrl} icon={<MapPin />} isExternal>
              {CONTACT.addressLabel}
            </ContactLink>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

type ContactLinkProps = {
  href: string;
  icon: ReactNode;
  isExternal?: boolean;
  children: ReactNode;
};

function ContactLink({ href, icon, isExternal, children }: ContactLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="text-body touch-target flex items-center gap-3 hover:underline"
        {...(isExternal && { target: "_blank", rel: "noreferrer" })}
      >
        <span aria-hidden className="size-5 text-accent [&>svg]:size-5">
          {icon}
        </span>
        {children}
        {isExternal && <span className="sr-only">(abre em nova aba)</span>}
      </a>
    </li>
  );
}
