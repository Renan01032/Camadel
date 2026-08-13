import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/constants";

export function CategoryBrands({ brands }: { brands: readonly string[] }) {
  return (
    <div className="border-t border-camadel-steel bg-camadel-charcoal2 py-10">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-camadel-red">
          Trabalhamos com as melhores marcas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {brands.map((brand) => {
            const logo = BRAND_LOGOS[brand as keyof typeof BRAND_LOGOS];
            if (logo) {
              return (
                <span
                  key={brand}
                  className="relative inline-flex h-8 w-28 shrink-0 items-center opacity-85 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9 sm:w-32"
                >
                  <Image src={logo} alt={brand} fill className="object-contain" sizes="140px" />
                </span>
              );
            }
            return (
              <span
                key={brand}
                className="font-display text-lg font-bold uppercase tracking-tight text-camadel-silverHi/70 transition-colors hover:text-white sm:text-xl"
              >
                {brand}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
