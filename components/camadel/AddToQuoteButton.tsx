"use client";

import { Check, Plus } from "lucide-react";
import { useQuote } from "@/lib/quote-context";

export function AddToQuoteButton({
  name,
  category,
  categorySlug,
  className = "",
}: {
  name: string;
  category: string;
  categorySlug: string;
  className?: string;
}) {
  const { isSelected, toggleItem, makeId } = useQuote();
  const id = makeId({ name, category, categorySlug });
  const active = isSelected(id);

  return (
    <button
      type="button"
      onClick={() => toggleItem({ name, category, categorySlug })}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors ${
        active
          ? "bg-camadel-red text-white"
          : "border border-camadel-line text-camadel-silverHi hover:border-camadel-red hover:text-camadel-red"
      } ${className}`}
    >
      {active ? <Check size={13} /> : <Plus size={13} />}
      {active ? "Na cotação" : "Adicionar à cotação"}
    </button>
  );
}
