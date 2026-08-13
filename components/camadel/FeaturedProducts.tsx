"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { useQuote } from "@/lib/quote-context";
import { RulerDivider } from "./RulerDivider";

export function FeaturedProducts() {
  const { isSelected, toggleItem } = useQuote();

  return (
    <section className="bg-camadel-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label="Vitrine de Produtos" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 mt-10 font-display text-3xl font-semibold text-camadel-silverHi sm:text-4xl"
        >
          Produtos em <span className="text-camadel-red">Destaque</span>
        </motion.h2>
        <p className="mb-12 max-w-xl text-sm text-camadel-muted sm:text-base">
          Uma amostra da nossa linha. Selecione os itens de interesse para incluir na
          sua cotação.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product, i) => {
            const Icon = ICON_MAP[product.icon];
            const label = `${product.name} (${product.brand})`;
            const active = isSelected(label);

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col overflow-hidden rounded-xl border bg-camadel-charcoal transition-colors ${
                  active ? "border-camadel-red" : "border-camadel-steel hover:border-camadel-steelLight"
                }`}
              >
                <Link
                  href={`/catalogo/${product.categorySlug}`}
                  className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-camadel-charcoal2 to-camadel-black"
                >
                  <div className="absolute inset-0 bg-carbon-weave opacity-30" />
                  <span className="absolute left-2.5 top-2.5 rounded-full border border-camadel-steel bg-camadel-black/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-camadel-silverHi">
                    {product.brand}
                  </span>
                  {active && (
                    <span className="absolute right-2.5 top-2.5 flex size-6 items-center justify-center rounded-full bg-camadel-red text-white">
                      <Check size={13} />
                    </span>
                  )}
                  <Icon
                    size={56}
                    strokeWidth={1.1}
                    className="relative text-camadel-red transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-camadel-red">
                      {product.categoryLabel}
                    </p>
                    <h3 className="mt-1 font-display text-sm font-semibold leading-tight text-camadel-silverHi">
                      {product.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleItem(label)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-1.5 self-start text-xs font-semibold uppercase tracking-wide transition-colors ${
                      active ? "text-camadel-red" : "text-camadel-silverLo hover:text-camadel-red"
                    }`}
                  >
                    {active ? "Na Cotação" : "Adicionar à Cotação"}
                    {active ? <Check size={13} /> : <Plus size={13} />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
