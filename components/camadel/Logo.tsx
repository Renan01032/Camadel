import Link from "next/link";

const SIZE_MAP = {
  sm: { bars: "h-4", text: "text-lg" },
  md: { bars: "h-5", text: "text-xl" },
  lg: { bars: "h-6", text: "text-2xl" },
} as const;

export function Logo({
  size = "md",
  className = "",
}: {
  size?: keyof typeof SIZE_MAP;
  className?: string;
}) {
  const { bars, text } = SIZE_MAP[size];

  return (
    <Link href="/" className={`group flex items-center gap-2 ${className}`}>
      <span className={`flex items-end gap-[3px] ${bars}`} aria-hidden="true">
        <span className="h-full w-[5px] -skew-x-[18deg] bg-camadel-red transition-transform group-hover:translate-y-[-2px]" />
        <span className="h-full w-[5px] -skew-x-[18deg] bg-camadel-red transition-transform group-hover:translate-y-[-2px] [transition-delay:40ms]" />
      </span>
      <span className={`text-metal font-display ${text} font-bold uppercase tracking-tight`}>
        Camadel
      </span>
    </Link>
  );
}
