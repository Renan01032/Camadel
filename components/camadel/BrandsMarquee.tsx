"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRANDS, BRAND_LOGOS } from "@/lib/constants";

function BrandMark({ brand }: { brand: string }) {
  const logo = BRAND_LOGOS[brand as keyof typeof BRAND_LOGOS];

  if (logo) {
    return (
      <span className="relative inline-flex h-7 w-24 shrink-0 items-center opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8 sm:w-28">
        <Image src={logo} alt={brand} fill className="object-contain object-left" sizes="120px" />
      </span>
    );
  }

  return (
    <span className="shrink-0 font-display text-xl font-bold uppercase tracking-tight text-camadel-silverHi/60 transition-colors hover:text-camadel-red sm:text-2xl">
      {brand}
    </span>
  );
}

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

        <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
          {track.map((brand, i) => (
            <div key={`${brand}-${i}`} className="mx-6 flex items-center sm:mx-8">
              <BrandMark brand={brand} />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-camadel-muted">
        E muitas outras marcas líderes do mercado.
      </p>
    </section>
  );
}
