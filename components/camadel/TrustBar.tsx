import { TRUST_BADGES } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";

export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 divide-y divide-camadel-steel border border-camadel-steel bg-camadel-charcoal sm:grid-cols-4 sm:divide-x sm:divide-y-0 ${className}`}
    >
      {TRUST_BADGES.map((badge) => {
        const Icon = ICON_MAP[badge.icon];
        return (
          <div key={badge.text} className="flex items-center gap-3 px-5 py-5">
            <Icon size={22} className="shrink-0 text-camadel-red" strokeWidth={1.75} />
            <span className="font-body text-sm text-camadel-silverHi">{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
}
