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
      className={`inline-flex items-center justify-center gap-1.5 rounded-sm border px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
        fullWidth ? "w-full" : ""
      } ${
        active
          ? "border-camadel-red bg-camadel-red/10 text-camadel-red"
          : "border-camadel-steel text-camadel-muted hover:border-camadel-red hover:text-camadel-red"
      } ${className}`}
    >
      {active ? <Check size={13} /> : <Plus size={13} />}
      {active ? "Na Cotação" : "Adicionar à Cotação"}
    </button>
  );
}
