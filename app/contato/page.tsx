import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WHATSAPP_LINK,
} from "@/lib/constants";
import { PageIntro } from "@/components/camadel/PageIntro";
import { ContactForm } from "@/components/camadel/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite orçamento ou fale com a equipe Camadel Ferramentas por WhatsApp, e-mail ou telefone.",
};

export default function ContatoPage() {
  return (
    <main>
      <PageIntro eyebrow="Fale conosco" title="Solicite seu orçamento ou entre em contato">
        Conte o que você precisa. Nossa equipe comercial retorna com uma
        solução adequada para sua operação.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-6 sm:px-8 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm leading-relaxed text-camadel-muted">
              Conte sempre conosco! Nossa equipe está pronta para responder
              dúvidas, agendar uma visita técnica ou montar o orçamento
              ideal para o seu projeto.
            </p>

            <div className="mt-9 flex flex-col gap-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-camadel-silverHi hover:text-camadel-red"
              >
                <MessageCircle className="shrink-0 text-camadel-red" />
                {CONTACT_PHONE}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-camadel-silverHi hover:text-camadel-red"
              >
                <Phone className="shrink-0 text-camadel-red" />
                {CONTACT_EMAIL}
              </a>
              <p className="flex items-center gap-3 text-camadel-silverHi">
                <MapPin className="shrink-0 text-camadel-red" />
                {CONTACT_ADDRESS}
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-camadel-red px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
