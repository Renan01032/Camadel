import type { ReactNode } from "react";

/**
 * Moldura de "marcas de corte" técnicas (cantos em L), como em uma planta
 * baixa ou desenho de engenharia. É o elemento de assinatura visual usado
 * em painéis de imagem no lugar de uma borda genérica — reforça o universo
 * de precisão/medição da marca (ver também RulerDivider).
 */
export function BlueprintFrame({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-3 sm:-inset-4" aria-hidden="true">
        {[
          "left-0 top-0 border-l border-t",
          "right-0 top-0 border-r border-t",
          "left-0 bottom-0 border-l border-b",
          "right-0 bottom-0 border-r border-b",
        ].map((pos) => (
          <span
            key={pos}
            className={`absolute h-6 w-6 border-camadel-red/70 sm:h-8 sm:w-8 ${pos}`}
          />
        ))}
      </div>
      {children}
      {label && (
        <span className="absolute -bottom-7 right-0 font-mono text-[10px] uppercase tracking-[0.25em] text-camadel-muted sm:-bottom-8">
          {label}
        </span>
      )}
    </div>
  );
}
