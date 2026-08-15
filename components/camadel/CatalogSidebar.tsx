import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";

export function CatalogSidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <nav aria-label="Categorias do catálogo" className="min-w-0">
      {/* Mobile: chips horizontais */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/catalogo/${cat.slug}`}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
              cat.slug === activeSlug
                ? "border-camadel-red bg-camadel-red text-white"
                : "border-camadel-line text-camadel-muted hover:border-camadel-red hover:text-camadel-red"
            }`}
          >
            {cat.navLabel}
          </Link>
        ))}
      </div>

      {/* Desktop: lista vertical fixa */}
      <div className="hidden lg:block">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-camadel-muted">
          Categorias
        </p>
        <ul className="flex flex-col gap-1 border-l border-camadel-line">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon];
            const active = cat.slug === activeSlug;
            return (
              <li key={cat.slug} className="-ml-px">
                <Link
                  href={`/catalogo/${cat.slug}`}
                  className={`flex items-center gap-2.5 border-l px-4 py-2.5 text-sm transition-colors ${
                    active
                      ? "border-camadel-red text-camadel-red"
                      : "border-transparent text-camadel-muted hover:border-camadel-steelLight hover:text-camadel-silverHi"
                  }`}
                >
                  <Icon size={15} className="shrink-0" />
                  {cat.navLabel}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
