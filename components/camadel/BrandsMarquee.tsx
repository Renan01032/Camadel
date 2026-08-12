"use client";

import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";

export function BrandsMarquee() {
  const track = [...BRANDS, ...BRANDS];

  return (
    <section className="border-y border-camadel-steel bg-camadel-charcoal py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.28em] text-camadel-red"
        >
          Trabalhamos com as melhores marcas
        </motion.p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-camadel-charcoal to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-camadel-charcoal to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {track.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="mx-6 shrink-0 font-display text-xl font-bold uppercase tracking-tight text-camadel-silverHi/60 transition-colors hover:text-camadel-red sm:mx-8 sm:text-2xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-camadel-muted">
        E muitas outras marcas líderes do mercado.
      </p>
    </section>
  );
}
