"use client";
import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { position } = useMousePosition();

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(${position.x - 300}px, ${position.y - 300}px)`;
  }, [position]);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-0 transition-transform duration-100 ease-out"
      style={{
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, rgba(0, 212, 255, 0.06) 0%, rgba(124, 58, 237, 0.03) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
