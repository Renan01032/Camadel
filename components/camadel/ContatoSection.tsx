import { Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK } from "@/lib/constants";
import { RulerDivider } from "./RulerDivider";
import { ContactForm } from "./ContactForm";

export function ContatoSection() {
  return (
    <section id="contato" className="scroll-mt-24 bg-camadel-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label="Fale conosco" />

        <div className="mt-8 max-w-2xl">
          <h2 className="section-title">Solicite seu orçamento ou entre em contato</h2>
          <p className="mt-5 text-sm leading-relaxed text-camadel-muted sm:text-base">
            Conte o que você precisa. Nossa equipe comercial retorna com uma
            solução adequada para sua operação.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
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
                <Mail className="shrink-0 text-camadel-red" />
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
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-camadel-red px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
