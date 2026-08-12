"use client";

import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};

/**
 * Fundo animado e original em <canvas> — um jorro contínuo de faíscas,
 * remetendo ao corte/desbaste (linha de Abrasivos) sem reproduzir
 * nenhuma fotografia. Aleatoriedade determinística (mulberry32) para um
 * movimento orgânico, porém estável entre re-renders.
 */
export function GenerativeSparks({ className = "" }: { className?: string }) {
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
    let sparks: Spark[] = [];
    let rafId = 0;
    let seedState = 913_247;

    function rand() {
      seedState |= 0;
      seedState = (seedState + 0x6d2b79f5) | 0;
      let t = Math.imul(seedState ^ (seedState >>> 15), 1 | seedState);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.max(1, Math.floor(width * dpr));
      canvas!.height = Math.max(1, Math.floor(height * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function origin() {
      return { x: width * 0.8, y: height * 0.58 };
    }

    function spawn() {
      const { x, y } = origin();
      const angle = -Math.PI * 0.62 + rand() * Math.PI * 0.5;
      const speed = 1.1 + rand() * 2.6;
      sparks.push({
        x: x + (rand() - 0.5) * 14,
        y: y + (rand() - 0.5) * 14,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 45 + rand() * 55,
        size: 0.7 + rand() * 1.5,
      });
    }

    function frame() {
      ctx!.clearRect(0, 0, width, height);

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vy += 0.05;
        s.vx *= 0.986;
        s.vy *= 0.986;
        s.x += s.vx;
        s.y += s.vy;
        s.life += 1;

        const t = s.life / s.maxLife;
        if (t >= 1) {
          sparks.splice(i, 1);
          continue;
        }

        const alpha = (1 - t) * 0.85;
        const rgb = t < 0.3 ? "255,244,222" : t < 0.65 ? "226,35,26" : "110,18,14";

        ctx!.beginPath();
        ctx!.strokeStyle = `rgba(${rgb},${alpha * 0.3})`;
        ctx!.lineWidth = s.size * 0.6;
        ctx!.moveTo(s.x, s.y);
        ctx!.lineTo(s.x - s.vx * 2.4, s.y - s.vy * 2.4);
        ctx!.stroke();

        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${rgb},${alpha})`;
        ctx!.arc(s.x, s.y, s.size * (1 - t * 0.5), 0, Math.PI * 2);
        ctx!.fill();
      }

      if (sparks.length < 90 && rand() < 0.92) {
        spawn();
        spawn();
      }

      rafId = requestAnimationFrame(frame);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduceMotion) {
      for (let i = 0; i < 18; i++) spawn();
      ctx.clearRect(0, 0, width, height);
      for (const s of sparks) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(226,35,26,0.35)";
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      rafId = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      sparks = [];
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
