import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { AREA_ATUACAO } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { RulerDivider } from "@/components/camadel/RulerDivider";
import { CoverageRadar } from "@/components/camadel/CoverageRadar";
import { TrustBar } from "@/components/camadel/TrustBar";
import { BrandsMarquee } from "@/components/camadel/BrandsMarquee";
import { CTAFinal } from "@/components/camadel/CTAFinal";

export const metadata: Metadata = {
  title: "Área de Atuação",
  description: AREA_ATUACAO.paragraph,
};

export default function AreaDeAtuacaoPage() {
  return (
    <main>
      <section className="bg-camadel-black pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RulerDivider label="Cobertura" />
          <h1 className="mb-10 mt-10 font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            {AREA_ATUACAO.title}
          </h1>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="max-w-xl text-base leading-relaxed text-camadel-muted sm:text-lg">
                {AREA_ATUACAO.paragraph}
              </p>

              <div className="mt-8 rounded-sm border border-camadel-red bg-camadel-charcoal2 p-6">
                <p className="font-display text-lg font-semibold uppercase text-camadel-silverHi">
                  {AREA_ATUACAO.focusBox.title}
                </p>
                <p className="mt-1 text-sm text-camadel-muted">{AREA_ATUACAO.focusBox.text}</p>
              </div>
            </div>

            <CoverageRadar className="h-72 rounded-sm border border-camadel-steel bg-camadel-charcoal sm:h-96" />
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {AREA_ATUACAO.highlights.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div key={item.title} className="rounded-sm border border-camadel-steel bg-camadel-charcoal p-6">
                  <Icon size={22} className="mb-3 text-camadel-red" strokeWidth={1.75} />
                  <h3 className="mb-1 font-display text-base font-semibold text-camadel-silverHi">
                    {item.title}
                  </h3>
                  <p className="text-sm text-camadel-muted">{item.text}</p>
                </div>
              );
            })}
          </div>

          <a
            href={getWhatsAppUrl("Olá, Camadel! Gostaria de confirmar o atendimento para a minha região.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-camadel-redDark hover:shadow-red-glow"
          >
            <MessageCircle size={16} />
            Confirmar Atendimento na Minha Região
          </a>
        </div>
      </section>

      <section className="bg-camadel-black pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <TrustBar />
        </div>
      </section>

      <BrandsMarquee />
      <CTAFinal />
    </main>
  );
}
