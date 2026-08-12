import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATALOG } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { RulerDivider } from "@/components/camadel/RulerDivider";
import { BrandsMarquee } from "@/components/camadel/BrandsMarquee";
import { CTAFinal } from "@/components/camadel/CTAFinal";

export const metadata: Metadata = {
  title: "Catálogo Técnico",
  description:
    "Catálogo digital Camadel: ferramentas manuais e elétricas, abrasivos, EPIs, construção civil, limpeza e escritório, acessórios e fixação. Selecione itens e solicite orçamento pelo WhatsApp.",
};

export default function CatalogoPage() {
  return (
    <main>
      <section className="bg-camadel-black pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RulerDivider label="Catálogo Técnico" />
          <h1 className="mb-4 mt-10 font-display text-4xl font-bold uppercase text-white sm:text-6xl">
            Linha completa para <span className="text-camadel-red">cada etapa da obra</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-camadel-muted sm:text-lg">
            Navegue por categoria, selecione os itens que sua obra precisa e envie a
            lista pronta para o nosso WhatsApp. Sem carrinho, sem checkout — só a
            cotação chegando direto na nossa equipe.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {CATALOG.map((category) => {
            const Icon = ICON_MAP[category.icon];
            return (
              <Link
                key={category.slug}
                href={`/catalogo/${category.slug}`}
                className="group flex flex-col justify-between gap-6 rounded-sm border border-camadel-steel bg-camadel-charcoal p-7 transition-colors hover:border-camadel-red"
              >
                <div>
                  <div className="mb-5 flex size-14 items-center justify-center rounded-full border border-camadel-steel text-camadel-red transition-colors group-hover:border-camadel-red">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-camadel-red">
                    {category.eyebrow}
                  </span>
                  <h2 className="mt-2 font-display text-xl font-semibold text-camadel-silverHi">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-camadel-muted">
                    {category.intro}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-camadel-red">
                  Ver linha completa
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <BrandsMarquee />
      <CTAFinal
        title="Não encontrou o que precisa?"
        text="Fale direto com um consultor Camadel — montamos a lista certa de materiais para sua obra."
      />
    </main>
  );
}
