"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DIFERENCIAIS } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { RulerDivider } from "./RulerDivider";

export function Diferenciais() {
  return (
    <section className="bg-camadel-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label="Por que a Camadel" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 mt-8 max-w-xl font-display text-3xl font-semibold text-camadel-silverHi sm:text-4xl"
        >
          Feita para quem não pode parar a obra
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {DIFERENCIAIS.map((item, i) => {
            const Icon = item.icon ? ICON_MAP[item.icon] : null;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="flex h-full flex-col items-center rounded-xl border border-camadel-line bg-camadel-charcoal p-6 text-center transition-colors hover:border-camadel-red"
              >
                {item.badgeImage ? (
                  <Image
                    src={item.badgeImage}
                    alt=""
                    width={220}
                    height={230}
                    className="mb-3 h-20 w-auto"
                  />
                ) : Icon ? (
                  <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-camadel-red">
                    <Icon size={28} className="text-camadel-red" strokeWidth={1.75} />
                  </span>
                ) : null}
                <h3 className="mb-1.5 font-display text-sm font-semibold uppercase tracking-wide text-camadel-silverHi">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-camadel-muted">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
