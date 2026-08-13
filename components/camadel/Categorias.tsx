"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CATALOG } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { RulerDivider } from "./RulerDivider";

export function Categorias() {
  return (
    <section id="categorias" className="bg-camadel-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label="Catálogo" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 mt-10 max-w-xl font-display text-3xl font-semibold text-camadel-silverHi sm:text-4xl"
        >
          Ferramentas certas para cada etapa da obra
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATALOG.map((category, i) => {
            const Icon = ICON_MAP[category.icon];
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover="hover"
              >
                <Link
                  href={`/catalogo/${category.slug}`}
                  className="group block overflow-hidden rounded-xl border border-camadel-steel transition-colors hover:border-camadel-red"
                >
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-camadel-charcoal2 to-camadel-black">
                    <div className="absolute inset-0 bg-carbon-weave opacity-40" />
                    <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.25em] text-camadel-red">
                      {category.eyebrow}
                    </span>
                    <motion.div variants={{ hover: { scale: 1.08 } }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                      <Icon size={50} className="text-camadel-red" strokeWidth={1.25} />
                    </motion.div>
                  </div>
                  <div className="bg-camadel-charcoal p-5">
                    <h3 className="mb-1 font-display text-base font-medium text-camadel-silverHi">
                      {category.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-camadel-muted">{category.intro}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-camadel-red">
                      Ver produtos
                      <motion.span variants={{ hover: { x: 3 } }} transition={{ duration: 0.3 }} className="inline-flex">
                        <ChevronRight size={14} />
                      </motion.span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
