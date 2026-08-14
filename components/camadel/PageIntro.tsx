import type { ReactNode } from "react";
import { RulerDivider } from "./RulerDivider";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-6 pt-28 sm:px-8 sm:pt-32">
      <RulerDivider label={eyebrow} />
      <h1 className="section-title mt-8 max-w-2xl">{title}</h1>
      {children && (
        <div className="mt-5 max-w-2xl text-sm leading-relaxed text-camadel-muted sm:text-base">
          {children}
        </div>
      )}
    </section>
  );
}
