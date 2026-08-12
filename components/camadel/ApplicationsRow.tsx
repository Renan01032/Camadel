import type { CatalogHighlight } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";

export function ApplicationsRow({ applications }: { applications: readonly CatalogHighlight[] }) {
  return (
    <div className="border-t border-camadel-steel bg-camadel-black py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-6 text-center font-mono text-xs font-semibold uppercase tracking-[0.25em] text-camadel-red">
          Abrasivos para diversas aplicações
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {applications.map((app) => {
            const Icon = ICON_MAP[app.icon];
            return (
              <div
                key={app.text}
                className="flex flex-col items-center gap-2 rounded-sm border border-camadel-steel px-3 py-5 text-center"
              >
                <Icon size={22} className="text-camadel-red" strokeWidth={1.75} />
                <span className="text-xs text-camadel-muted">{app.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
