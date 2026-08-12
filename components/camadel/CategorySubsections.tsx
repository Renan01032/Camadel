"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import type { CatalogCategory } from "@/lib/constants";
import { useQuote } from "@/lib/quote-context";
import { AddToQuoteButton } from "./AddToQuoteButton";

function subsectionLabel(category: CatalogCategory, title: string) {
  return `${title} (${category.navLabel})`;
}

export function CategorySubsections({ category }: { category: CatalogCategory }) {
  const { items, addMany, removeMany } = useQuote();

  const allLabels = category.subsections.map((sub) => subsectionLabel(category, sub.title));
  const allSelected = allLabels.length > 0 && allLabels.every((label) => items.includes(label));

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold uppercase text-camadel-silverHi sm:text-3xl">
          Linha Completa
        </h2>
        <button
          type="button"
          onClick={() => (allSelected ? removeMany(allLabels) : addMany(allLabels))}
          className="inline-flex items-center gap-2 rounded-sm border border-camadel-red px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-camadel-red transition-colors hover:bg-camadel-red hover:text-white"
        >
          <Layers size={14} />
          {allSelected ? "Remover Linha Inteira" : "Adicionar Linha Inteira à Cotação"}
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.subsections.map((sub, i) => (
          <motion.div
            key={sub.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-4 rounded-sm border border-camadel-steel bg-camadel-charcoal p-5"
          >
            <div>
              <h3 className="mb-2 font-display text-base font-semibold text-camadel-silverHi">
                {sub.title}
              </h3>
              {sub.items.length > 0 && (
                <p className="text-sm leading-relaxed text-camadel-muted">
                  {sub.items.join(" · ")}
                </p>
              )}
            </div>
            <AddToQuoteButton item={subsectionLabel(category, sub.title)} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
