"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { CatalogCategory } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { GenerativeSparks } from "./GenerativeSparks";

export function CategoryIntro({ category }: { category: CatalogCategory }) {
  const Icon = ICON_MAP[category.icon];

  return (
    <section className="relative overflow-hidden bg-camadel-black pb-16 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-carbon-weave opacity-[0.3]" />
      <GenerativeSparks className="pointer-events-none absolute inset-0 size-full opacity-50" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(226,35,26,0.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="mb-8 flex items-center gap-1.5 text-xs text-camadel-muted">
          <Link href="/" className="hover:text-camadel-red">Home</Link>
          <ChevronRight size={12} />
          <Link href="/catalogo" className="hover:text-camadel-red">Catálogo</Link>
          <ChevronRight size={12} />
          <span className="text-camadel-silverHi">{category.navLabel}</span>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-camadel-red">
              {category.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-white sm:text-6xl">
              {category.title}
            </h1>
            {category.kicker && (
              <p className="mt-3 font-display text-lg font-semibold uppercase text-camadel-red sm:text-xl">
                {category.kicker}
              </p>
            )}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-camadel-muted">
              {category.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden shrink-0 items-center justify-center rounded-full border border-camadel-red/40 bg-camadel-charcoal2 p-8 lg:flex"
          >
            <Icon size={56} className="text-camadel-red" strokeWidth={1.25} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {category.highlights.map((highlight) => {
            const HighlightIcon = ICON_MAP[highlight.icon];
            return (
              <span
                key={highlight.text}
                className="inline-flex items-center gap-2 rounded-full border border-camadel-steel bg-camadel-charcoal px-4 py-2 text-xs font-semibold uppercase tracking-wide text-camadel-silverHi"
              >
                <HighlightIcon size={14} className="text-camadel-red" />
                {highlight.text}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
