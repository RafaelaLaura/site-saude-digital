import * as React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button, TextAreaField, TextField } from "@/components/design-system";
import { CONTACT } from "@/data/site";

/**
 * Formulário de contato. Ainda não há backend: ao enviar, abre o aplicativo de e-mail
 * do visitante com a mensagem preenchida (`mailto:`).
 */
export function ContactForm() {
  const [wasSubmitted, setWasSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Nome: ${formData.get("name")}`,
      `E-mail: ${formData.get("email")}`,
      `Instituição: ${formData.get("organization") || "-"}`,
      "",
      `${formData.get("message")}`,
    ].join("\n");

    const subject = encodeURIComponent("Contato pelo site do grupo");
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setWasSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/20 bg-white/[0.04] p-6 md:p-8"
    >
      <div className="grid gap-5">
        <TextField
          tone="onDark"
          label="Nome"
          name="name"
          autoComplete="name"
          placeholder="Seu nome completo"
          required
        />
        <TextField
          tone="onDark"
          label="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="voce@instituicao.br"
          required
        />
        <TextField
          tone="onDark"
          label="Instituição (opcional)"
          name="organization"
          autoComplete="organization"
          placeholder="Universidade, hospital ou empresa"
        />
        <TextAreaField
          tone="onDark"
          label="Mensagem"
          name="message"
          rows={4}
          placeholder="Como podemos colaborar?"
          required
        />

        <Button type="submit" variant="accent" size="lg" className="mt-2">
          Enviar mensagem <ArrowRight aria-hidden className="size-4" />
        </Button>

        <p role="status" className="text-body-sm min-h-6 text-white/90">
          {wasSubmitted && (
            <span className="flex items-center gap-2">
              <CheckCircle2 aria-hidden className="size-4 text-accent" />
              Abrimos o seu aplicativo de e-mail. Basta enviar a mensagem por lá.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
