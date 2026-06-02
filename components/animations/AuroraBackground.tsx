"use client";
import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      timeRef.current += 0.003;
      const t = timeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Aurora blob 1 – electric blue
      const g1 = ctx.createRadialGradient(
        canvas.width * (0.3 + Math.sin(t * 0.7) * 0.15),
        canvas.height * (0.3 + Math.cos(t * 0.5) * 0.1),
        0,
        canvas.width * (0.3 + Math.sin(t * 0.7) * 0.15),
        canvas.height * (0.3 + Math.cos(t * 0.5) * 0.1),
        canvas.width * 0.45
      );
      g1.addColorStop(0, "rgba(0, 212, 255, 0.12)");
      g1.addColorStop(0.5, "rgba(0, 212, 255, 0.04)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aurora blob 2 – purple
      const g2 = ctx.createRadialGradient(
        canvas.width * (0.7 + Math.cos(t * 0.6) * 0.12),
        canvas.height * (0.6 + Math.sin(t * 0.4) * 0.12),
        0,
        canvas.width * (0.7 + Math.cos(t * 0.6) * 0.12),
        canvas.height * (0.6 + Math.sin(t * 0.4) * 0.12),
        canvas.width * 0.4
      );
      g2.addColorStop(0, "rgba(124, 58, 237, 0.15)");
      g2.addColorStop(0.5, "rgba(124, 58, 237, 0.05)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aurora blob 3 – cyan accent
      const g3 = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(t * 0.8) * 0.2),
        canvas.height * (0.8 + Math.cos(t * 0.3) * 0.1),
        0,
        canvas.width * (0.5 + Math.sin(t * 0.8) * 0.2),
        canvas.height * (0.8 + Math.cos(t * 0.3) * 0.1),
        canvas.width * 0.35
      );
      g3.addColorStop(0, "rgba(0, 255, 255, 0.07)");
      g3.addColorStop(0.5, "rgba(0, 255, 255, 0.02)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
