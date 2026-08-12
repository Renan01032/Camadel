export function CategoryBrands({ brands }: { brands: readonly string[] }) {
  return (
    <div className="border-t border-camadel-steel bg-camadel-charcoal2 py-10">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-camadel-red">
          Trabalhamos com as melhores marcas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg font-bold uppercase tracking-tight text-camadel-silverHi/70 transition-colors hover:text-white sm:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
