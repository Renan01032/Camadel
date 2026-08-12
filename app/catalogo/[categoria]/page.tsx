import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATALOG, getCatalogCategory } from "@/lib/constants";
import { CategoryIntro } from "@/components/camadel/CategoryIntro";
import { CategorySubsections } from "@/components/camadel/CategorySubsections";
import { CategoryBrands } from "@/components/camadel/CategoryBrands";
import { ApplicationsRow } from "@/components/camadel/ApplicationsRow";
import { CategoryCTA } from "@/components/camadel/CategoryCTA";
import { OtherCategories } from "@/components/camadel/OtherCategories";
import { TrustBar } from "@/components/camadel/TrustBar";

export function generateStaticParams() {
  return CATALOG.map((category) => ({ categoria: category.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { categoria: string };
}): Metadata {
  const category = getCatalogCategory(params.categoria);
  if (!category) return {};
  return {
    title: category.title,
    description: category.intro,
  };
}

export default function CategoriaPage({
  params,
}: {
  params: { categoria: string };
}) {
  const category = getCatalogCategory(params.categoria);
  if (!category) notFound();

  return (
    <main>
      <CategoryIntro category={category} />

      <section className="bg-camadel-black pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <TrustBar className="mb-14" />
          <CategorySubsections category={category} />
        </div>
      </section>

      {category.applications && <ApplicationsRow applications={category.applications} />}

      <CategoryBrands brands={category.brands} />

      <section className="bg-camadel-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <CategoryCTA category={category} />
        </div>
      </section>

      <OtherCategories currentSlug={category.slug} />
    </main>
  );
}
