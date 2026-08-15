import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { RulerDivider } from "@/components/camadel/RulerDivider";
import { BlueprintFrame } from "@/components/camadel/BlueprintFrame";
import { CatalogSidebar } from "@/components/camadel/CatalogSidebar";
import { CategoryItemsGrid } from "@/components/camadel/CategoryItemsGrid";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ categoria: cat.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { categoria: string };
}): Metadata {
  const cat = getCategory(params.categoria);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.intro,
  };
}

export default function CategoriaPage({
  params,
}: {
  params: { categoria: string };
}) {
  const cat = getCategory(params.categoria);
  if (!cat) notFound();

  const Icon = ICON_MAP[cat.icon];

  return (
    <main className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label="Catálogo" />
      </div>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div>
            <p className="eyebrow">{cat.navLabel}</p>
            <h1 className="section-title">{cat.title}</h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-camadel-muted sm:text-base">
              {cat.intro}
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <BlueprintFrame label={cat.navLabel}>
              {/* Box de imagem com tamanho fixo (aspect-ratio + fill) — padrão
                  único para todas as categorias do catálogo, independente das
                  dimensões reais do arquivo de origem. */}
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-camadel-line bg-camadel-charcoal2">
                {cat.image ? (
                  <Image
                    src={cat.image.panel}
                    alt={cat.image.alt}
                    fill
                    sizes="(max-width: 1024px) 384px, 420px"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-carbon-weave opacity-40" />
                    <div className="relative flex h-full items-center justify-center">
                      <Icon size={96} className="text-camadel-red" strokeWidth={1} />
                    </div>
                  </>
                )}
              </div>
            </BlueprintFrame>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[220px_1fr]">
          <CatalogSidebar activeSlug={cat.slug} />
          <CategoryItemsGrid items={cat.items} category={cat.title} categorySlug={cat.slug} />
        </div>
      </section>
    </main>
  );
}
