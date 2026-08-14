import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/constants";
import { PageIntro } from "@/components/camadel/PageIntro";
import { CategoryCard } from "@/components/camadel/CategoryCard";
import { TrustStrip } from "@/components/camadel/TrustStrip";
import { MarcasParceiras } from "@/components/camadel/MarcasParceiras";
import { CTAFinal } from "@/components/camadel/CTAFinal";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Catálogo digital Camadel: ferramentas manuais e elétricas, abrasivos, EPIs, construção civil, limpeza e fixação. Monte sua lista e peça orçamento.",
};

export default function CatalogoPage() {
  return (
    <main>
      <PageIntro eyebrow="Catálogo digital" title="Tudo para sua obra, em um só lugar">
        Este é um catálogo técnico para consulta — sem carrinho de compras
        ou pagamento online. Navegue pelas categorias, monte sua lista de
        interesse e solicite um orçamento formal com nossa equipe.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 sm:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} delay={(i % 3) * 0.07} />
          ))}
        </div>
      </section>

      <TrustStrip />
      <MarcasParceiras />
      <CTAFinal />
    </main>
  );
}
