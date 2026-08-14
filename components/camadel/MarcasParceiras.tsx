"use client";

import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";

export function MarcasParceiras() {
  return (
    <section className="border-y border-camadel-line bg-camadel-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-xs font-semibold uppercase tracking-[0.28em] text-camadel-red">
          Marcas parceiras
        </p>
        <h2 className="mx-auto mt-3 max-w-lg text-center font-display text-2xl font-semibold text-camadel-silverHi sm:text-3xl">
          Trabalhamos com as marcas líderes do mercado
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {BRANDS.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className="font-display text-xl font-bold uppercase tracking-tight text-camadel-silverHi/60 transition-colors hover:text-camadel-red sm:text-2xl"
            >
              {brand}
            </motion.span>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-camadel-muted">
          E muitas outras marcas líderes do mercado nacional.
        </p>
      </div>
    </section>
  );
}
