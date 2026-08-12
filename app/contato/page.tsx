import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { RulerDivider } from "@/components/camadel/RulerDivider";
import { ContactForm } from "@/components/camadel/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite orçamento ou fale com a Camadel Ferramentas pelo WhatsApp, e-mail ou formulário.",
};

export default function ContatoPage() {
  return (
    <main>
      <section className="bg-camadel-black pb-24 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RulerDivider label="Contato" />
          <h1 className="mb-12 mt-10 font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            Solicite Seu Orçamento
          </h1>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-camadel-red">
                Fale conosco
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase text-white">
                Conte Sempre <span className="text-camadel-red">Conosco!</span>
              </h2>
              <p className="mt-5 leading-relaxed text-camadel-muted">
                Estamos prontos para atender você e sua obra com agilidade e eficiência.
                Preencha o formulário ou chame a gente direto no WhatsApp — nossa equipe
                comercial retorna com uma solução adequada para a sua operação.
              </p>

              <div className="mt-9 flex flex-col gap-5 text-camadel-silverHi">
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-camadel-red"
                >
                  <MessageCircle className="text-camadel-red" /> {BRAND.whatsappDisplay}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-camadel-red"
                >
                  <Mail className="text-camadel-red" /> {BRAND.email}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="text-camadel-red" /> {BRAND.regionShort}
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
