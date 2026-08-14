"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";

export function CategoryCard({ cat, delay = 0 }: { cat: Category; delay?: number }) {
  const Icon = ICON_MAP[cat.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/catalogo/${cat.slug}`}
        className="group block overflow-hidden rounded-sm border border-camadel-line transition-colors hover:border-camadel-red"
      >
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-camadel-charcoal2">
          {cat.image ? (
            <>
              <Image
                src={cat.image.card}
                alt={cat.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-camadel-black via-camadel-black/40 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-carbon-weave opacity-40" />
              <Icon
                size={52}
                className="relative text-camadel-red transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.25}
              />
            </>
          )}
        </div>
        <div className="bg-camadel-charcoal p-5">
          <h3 className="mb-1 font-display text-base font-medium text-camadel-silverHi">
            {cat.title}
          </h3>
          <p className="mb-3 text-sm text-camadel-muted">{cat.tagline}</p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-camadel-red">
            Ver produtos
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
