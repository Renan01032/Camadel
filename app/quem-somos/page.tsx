import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { QUEM_SOMOS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { RulerDivider } from "@/components/camadel/RulerDivider";
import { CompromissoBanner } from "@/components/camadel/CompromissoBanner";
import { Diferenciais } from "@/components/camadel/Diferenciais";
import { TrustBar } from "@/components/camadel/TrustBar";
import { CTAFinal } from "@/components/camadel/CTAFinal";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: QUEM_SOMOS.paragraphs[0],
};

export default function QuemSomosPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-camadel-black pb-16 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-carbon-weave opacity-[0.3]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 55% at 25% 10%, rgba(226,35,26,0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <RulerDivider label="Institucional" />
          <h1 className="mb-8 mt-10 font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            {QUEM_SOMOS.title}
          </h1>

          <div className="space-y-5">
            {QUEM_SOMOS.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-camadel-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <CompromissoBanner className="mt-10" />

          <a
            href={getWhatsAppUrl("Olá, Camadel! Gostaria de falar com um consultor sobre a minha obra.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-camadel-redDark hover:shadow-red-glow active:translate-y-0"
          >
            <MessageCircle size={16} />
            Falar com Consultor Agora
          </a>
        </div>
      </section>

      <section className="bg-camadel-black pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <TrustBar />
        </div>
      </section>

      <Diferenciais />
      <CTAFinal />
    </main>
  );
}
