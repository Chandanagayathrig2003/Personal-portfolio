"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "cyan" | "none";
  delay?: number;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = "none",
  delay = 0,
  onClick,
}: GlassCardProps) {
  const glowMap = {
    blue: "hover:shadow-glow-blue hover:border-neon-blue/30",
    purple: "hover:shadow-glow-purple hover:border-neon-purple/30",
    cyan: "hover:shadow-glow-cyan hover:border-neon-cyan/30",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      onClick={onClick}
      className={cn(
        "relative rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-xl",
        "transition-all duration-300",
        glow !== "none" && glowMap[glow],
        hover && "cursor-pointer",
        className
      )}
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Inner border highlight */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)" }}
      />
      {children}
    </motion.div>
  );
}
