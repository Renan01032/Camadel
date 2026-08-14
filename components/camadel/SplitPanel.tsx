"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { BlueprintFrame } from "./BlueprintFrame";

export function SplitPanel({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  frameLabel,
  imageClassName = "aspect-[2/3]",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  frameLabel?: string;
  imageClassName?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={reverse ? "lg:order-2" : ""}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title">{title}</h1>
          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-camadel-muted sm:text-base">
            {children}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`mx-auto w-full max-w-md ${reverse ? "lg:order-1" : ""} lg:mx-0 lg:max-w-none`}
        >
          <BlueprintFrame label={frameLabel}>
            <div className="overflow-hidden rounded-xl border border-camadel-line">
              <Image
                src={image}
                alt={imageAlt}
                width={1000}
                height={1500}
                className={`w-full object-cover ${imageClassName}`}
              />
            </div>
          </BlueprintFrame>
        </motion.div>
      </div>
    </section>
  );
}
