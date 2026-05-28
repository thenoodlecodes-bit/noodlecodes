"use client";

import { useEffect, useRef } from "react";

export default function NoodleCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const canvas = canvasRef.current;
    if (!dot || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const pts: { x: number; y: number }[] = [];
    const MAX = 18;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let dx = tx, dy = ty;

    let raf = 0;
    let on = false;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!on) {
        dot.classList.add("on");
        on = true;
      }
      const t = e.target as HTMLElement | null;
      if (t && t.closest("a, button, [role='button']")) {
        dot.classList.add("hover");
      } else {
        dot.classList.remove("hover");
      }
    };

    const leave = () => {
      dot.classList.remove("on");
      on = false;
    };

    const loop = () => {
      dx += (tx - dx) * 0.22;
      dy += (ty - dy) * 0.22;
      dot.style.transform = `translate(${dx}px, ${dy}px)`;

      pts.push({ x: dx, y: dy });
      if (pts.length > MAX) pts.shift();

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      if (pts.length > 2) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 1; i < pts.length; i++) {
          const p0 = pts[i - 1];
          const p1 = pts[i];
          const alpha = i / pts.length;
          ctx.strokeStyle = `rgba(242, 161, 4, ${alpha * 0.55})`;
          ctx.lineWidth = 2 + alpha * 4;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          const mx = (p0.x + p1.x) / 2;
          const my = (p0.y + p1.y) / 2;
          ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="noodle-trail" aria-hidden="true" />
      <div ref={dotRef} className="noodle-cursor" aria-hidden="true" />
    </>
  );
}
