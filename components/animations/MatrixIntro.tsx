"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BINARY = "01";
const SPECIAL = "^|)<#*={}[];,.~!@&";

const terminalLines = [
  { text: "~/workspace", type: "path" },
  { text: "$ git init && git add .", type: "cmd" },
  { text: '$ git commit -m "chore: bootstrap"', type: "cmd" },
  { text: "$ pnpm i && pnpm dev", type: "cmd" },
  { text: "⏳  compiling...", type: "info" },
  { text: "✓ types ok · ✓ lint ok · ✓ built in 1.23s", type: "success" },
  { text: "localhost:3000 — ready", type: "ready" },
];

export default function MatrixIntro({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showTerminal, setShowTerminal] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [exiting, setExiting] = useState(false);
  const animRef = useRef<number>(0);

  // Matrix rain on canvas
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

    const fontSize = 15;
    const colWidth = Math.ceil(fontSize * 0.65);
    let cols = Math.floor(canvas.width / colWidth);
    let drops: number[] = Array(cols).fill(0).map(() => Math.random() * -80);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const isSpecial = Math.random() > 0.93;
        const pool = isSpecial ? SPECIAL : BINARY;
        const char = pool[Math.floor(Math.random() * pool.length)];
        const rand = Math.random();

        if (rand > 0.98) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#00d4ff";
          ctx.shadowBlur = 8;
        } else if (rand > 0.88) {
          ctx.fillStyle = "#00d4ff";
          ctx.shadowColor = "#00d4ff";
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = "rgba(0,212,255,0.35)";
          ctx.shadowBlur = 0;
        }

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * colWidth, drops[i] * fontSize);
        ctx.shadowBlur = 0;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    const termTimer = setTimeout(() => setShowTerminal(true), 1600);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(termTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Type terminal lines one by one
  useEffect(() => {
    if (!showTerminal) return;
    if (visibleLines >= terminalLines.length) {
      const t = setTimeout(() => {
        setExiting(true);
        setTimeout(onComplete, 700);
      }, 1100);
      return () => clearTimeout(t);
    }
    const delay = visibleLines === 0 ? 150 : [500, 500, 600, 700, 500, 600][visibleLines - 1] ?? 500;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [showTerminal, visibleLines, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Bottom code strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showTerminal ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center z-10 px-4"
      >
        <p className="font-mono text-sm text-cyan-400/60 text-center">
          const app = init(skills) =&gt;{"{ "}
          <span className="text-white/80">return skills.map(s) &amp;&amp; deploy(s)</span>
          {" }"}
        </p>
      </motion.div>

      {/* Terminal window */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[580px] max-w-[92vw] rounded-2xl overflow-hidden"
            style={{
              background: "rgba(5,5,18,0.93)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(0,212,255,0.18)",
              boxShadow:
                "0 0 80px rgba(0,212,255,0.12), 0 40px 80px rgba(0,0,0,0.85)",
            }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/25 font-mono tracking-wide">
                bash — ~/workspace
              </span>
            </div>

            {/* Terminal body */}
            <div className="px-6 py-5 font-mono text-sm space-y-2 min-h-[210px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={
                    line.type === "path"
                      ? "text-cyan-400 font-semibold"
                      : line.type === "cmd"
                      ? "text-white"
                      : line.type === "success"
                      ? "text-green-400"
                      : line.type === "ready"
                      ? "text-cyan-300 font-bold text-base"
                      : "text-white/50"
                  }
                >
                  {line.text}
                  {i === visibleLines - 1 && visibleLines < terminalLines.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-0.5 inline-block"
                    >
                      ▋
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
