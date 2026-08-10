/**
 * Elemento de assinatura visual da página: um divisor em forma de régua/
 * paquímetro, ecoando o universo de "medição e precisão" da marca.
 * Usado entre seções no lugar de divisores genéricos.
 */
export function RulerDivider({ label }: { label?: string }) {
  const ticks = Array.from({ length: 41 });

  return (
    <div className="flex w-full items-center gap-4 select-none" aria-hidden="true">
      <div className="hidden h-px flex-1 bg-camadel-steel sm:block" />
      <div className="flex items-end gap-[3px] py-2">
        {ticks.map((_, i) => {
          const isMajor = i % 10 === 0;
          const isMid = i % 5 === 0;
          const isAccent = i === 20;
          return (
            <div
              key={i}
              className={isAccent ? "bg-camadel-red" : "bg-camadel-steelLight"}
              style={{
                width: 1,
                height: isMajor ? 12 : isMid ? 8 : 4,
              }}
            />
          );
        })}
      </div>
      {label && (
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-camadel-muted">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-camadel-steel" />
    </div>
  );
}
