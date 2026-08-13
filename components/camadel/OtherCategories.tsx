import Link from "next/link";
import { CATALOG } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";

export function OtherCategories({ currentSlug }: { currentSlug: string }) {
  const others = CATALOG.filter((c) => c.slug !== currentSlug);

  return (
    <div className="border-t border-camadel-steel bg-camadel-charcoal py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-camadel-red">
          Outras linhas do catálogo
        </p>
        <div className="flex flex-wrap gap-3">
          {others.map((category) => {
            const Icon = ICON_MAP[category.icon];
            return (
              <Link
                key={category.slug}
                href={`/catalogo/${category.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-camadel-steel bg-camadel-black px-4 py-2.5 text-sm text-camadel-silverHi transition-all duration-200 hover:-translate-y-0.5 hover:border-camadel-red hover:text-camadel-red"
              >
                <Icon size={15} />
                {category.navLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
