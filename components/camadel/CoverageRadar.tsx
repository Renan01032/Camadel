"use client";

import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

/**
 * Visual generativo (grade estilo "planta técnica" + radar de cobertura
 * pulsando a partir de um ponto central) usado na página Área de Atuação
 * no lugar de um mapa fotográfico. É deliberadamente esquemático — não
 * pretende ser um mapa geográfico real.
 */
export function CoverageRadar({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    const start = performance.now();

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.max(1, Math.floor(width * dpr));
      canvas!.height = Math.max(1, Math.floor(height * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawGrid() {
      const step = 30;
      ctx!.strokeStyle = "rgba(242,242,240,0.05)";
      ctx!.lineWidth = 1;
      for (let x = 0; x < width; x += step) {
        ctx!.beginPath();
        ctx!.moveTo(x + 0.5, 0);
        ctx!.lineTo(x + 0.5, height);
        ctx!.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx!.beginPath();
        ctx!.moveTo(0, y + 0.5);
        ctx!.lineTo(width, y + 0.5);
        ctx!.stroke();
      }
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);
      drawGrid();

      const cx = width * 0.5;
      const cy = height * 0.52;
      const base = Math.min(width, height);
      const elapsed = (now - start) / 1000;

      for (let r = 1; r <= 4; r++) {
        ctx!.beginPath();
        ctx!.strokeStyle = "rgba(226,35,26,0.16)";
        ctx!.lineWidth = 1;
        ctx!.arc(cx, cy, r * base * 0.1, 0, Math.PI * 2);
        ctx!.stroke();
      }

      const period = 3.4;
      for (let i = 0; i < 3; i++) {
        const phase = ((elapsed + i * (period / 3)) % period) / period;
        const radius = phase * base * 0.42;
        const alpha = (1 - phase) * 0.5;
        ctx!.beginPath();
        ctx!.strokeStyle = `rgba(226,35,26,${alpha})`;
        ctx!.lineWidth = 2;
        ctx!.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx!.stroke();
      }

      ctx!.beginPath();
      ctx!.strokeStyle = "rgba(226,35,26,0.55)";
      ctx!.lineWidth = 1.5;
      ctx!.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.fillStyle = "#E2231A";
      ctx!.arc(cx, cy, 4.5, 0, Math.PI * 2);
      ctx!.fill();

      if (!reduceMotion) {
        rafId = requestAnimationFrame(draw);
      }
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden="true" />
      <div
        className="pointer-events-none absolute flex -translate-x-1/2 flex-col items-center gap-1"
        style={{ left: "50%", top: "52%" }}
      >
        <MapPin size={22} className="-translate-y-6 text-camadel-red drop-shadow" />
        <span className="rounded-xl border border-camadel-red/40 bg-camadel-black/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-camadel-silverHi">
          São Paulo — SP
        </span>
      </div>
    </div>
  );
}
