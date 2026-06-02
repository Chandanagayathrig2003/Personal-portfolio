"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  target?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function NeonButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  download,
  target,
  type = "button",
  disabled,
}: NeonButtonProps) {
  const sizeMap = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-8 py-4 text-base font-semibold",
  };

  const variantMap = {
    primary:
      "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow-blue hover:shadow-[0_0_30px_rgba(0,212,255,0.5),0_0_80px_rgba(0,212,255,0.2)]",
    secondary:
      "bg-gradient-to-r from-neon-purple to-pink-600 text-white shadow-glow-purple hover:shadow-[0_0_30px_rgba(124,58,237,0.5),0_0_80px_rgba(124,58,237,0.2)]",
    ghost: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
    outline:
      "bg-transparent border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue hover:shadow-glow-blue",
  };

  const base = cn(
    "relative inline-flex items-center gap-2 rounded-xl transition-all duration-300 font-medium tracking-wide",
    "active:scale-95 select-none",
    sizeMap[size],
    variantMap[variant],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const inner = (
    <motion.span
      className={base}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}
