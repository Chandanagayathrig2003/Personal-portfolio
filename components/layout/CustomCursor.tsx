"use client";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { position } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const onMouseEnter = () => setIsHidden(false);
    const onMouseLeave = () => setIsHidden(true);

    const checkCursor = () => {
      const el = document.elementFromPoint(position.x, position.y);
      if (el) {
        const style = window.getComputedStyle(el).cursor;
        setIsPointer(style === "pointer");
      }
    };

    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [position]);

  if (isHidden) return null;

  return (
    <>
      {/* Main dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75 ease-out"
        style={{
          left: position.x - 7,
          top: position.y - 7,
          width: 14,
          height: 14,
          background: isPointer ? "#7c3aed" : "#00d4ff",
          boxShadow: `0 0 18px ${isPointer ? "#7c3aed" : "#00d4ff"}`,
          transform: `scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      {/* Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border transition-all duration-200 ease-out"
        style={{
          left: position.x - 28,
          top: position.y - 28,
          width: 56,
          height: 56,
          borderColor: isPointer ? "rgba(124,58,237,0.5)" : "rgba(0,212,255,0.4)",
          transform: `scale(${isPointer ? 1.3 : 1})`,
        }}
      />
    </>
  );
}
