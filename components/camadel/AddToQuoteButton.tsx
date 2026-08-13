"use client";

import { Check, Plus } from "lucide-react";
import { useQuote } from "@/lib/quote-context";

export function AddToQuoteButton({
  item,
  className = "",
  fullWidth = false,
}: {
  item: string;
  className?: string;
  fullWidth?: boolean;
}) {
  const { isSelected, toggleItem } = useQuote();
  const active = isSelected(item);

  return (
    <button
      type="button"
      onClick={() => toggleItem(item)}
      aria-pressed={active}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all duration-200 active:scale-[0.96] ${
        fullWidth ? "w-full" : ""
      } ${
        active
          ? "border-camadel-red bg-camadel-red/10 text-camadel-red"
          : "border-camadel-steel text-camadel-muted hover:-translate-y-0.5 hover:border-camadel-red hover:text-camadel-red hover:shadow-sm"
      } ${className}`}
    >
      {active ? <Check size={13} /> : <Plus size={13} />}
      {active ? "Na Cotação" : "Adicionar à Cotação"}
    </button>
  );
}
