import { TRUST_STRIP } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";

export function TrustStrip() {
  return (
    <section className="border-y border-camadel-line bg-camadel-charcoal">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-camadel-line lg:grid-cols-4">
        {TRUST_STRIP.map(({ icon, text }) => {
          const Icon = ICON_MAP[icon];
          return (
            <div key={text} className="flex items-center gap-3 px-5 py-5 lg:px-8">
              <Icon className="shrink-0 text-camadel-red" size={22} />
              <span className="font-display text-xs uppercase tracking-wide text-camadel-silverHi sm:text-sm">
                {text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
