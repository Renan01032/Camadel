"use client";

import { useQuote } from "@/lib/quote-context";
import { AddToQuoteButton } from "./AddToQuoteButton";

export function CategoryItemsGrid({
  items,
  category,
  categorySlug,
}: {
  items: string[];
  category: string;
  categorySlug: string;
}) {
  const { toggleItem, isSelected, makeId } = useQuote();

  const allSelected = items.every((name) =>
    isSelected(makeId({ name, category, categorySlug }))
  );

  function toggleAll() {
    items.forEach((name) => {
      const id = makeId({ name, category, categorySlug });
      const selected = isSelected(id);
      if (allSelected && selected) {
        toggleItem({ name, category, categorySlug });
      } else if (!allSelected && !selected) {
        toggleItem({ name, category, categorySlug });
      }
    });
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="font-display text-xl font-semibold text-camadel-silverHi">
          Linha completa
        </h2>
        <button
          type="button"
          onClick={toggleAll}
          className="font-mono text-[11px] uppercase tracking-widest text-camadel-red hover:text-camadel-silverHi"
        >
          {allSelected ? "Remover todos" : "Adicionar todos à cotação"}
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((name) => (
          <div
            key={name}
            className="flex items-center justify-between gap-3 rounded-xl border border-camadel-line bg-camadel-charcoal p-4"
          >
            <span className="text-sm text-camadel-silverHi">{name}</span>
            <AddToQuoteButton
              name={name}
              category={category}
              categorySlug={categorySlug}
              className="shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
