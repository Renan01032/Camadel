"use client";

import Image from "next/image";
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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group flex h-24 items-center justify-center rounded-xl border border-camadel-line bg-camadel-black px-5 py-4 transition-colors hover:border-[--brand-color]"
              style={{ ["--brand-color" as string]: brand.color }}
            >
              <Image
                src={brand.logo!}
                alt={brand.name}
                width={200}
                height={70}
                unoptimized
                className="h-9 w-auto object-contain sm:h-10"
              />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-camadel-muted">
          E muitas outras marcas líderes do mercado nacional.
        </p>
      </div>
    </section>
  );
}
