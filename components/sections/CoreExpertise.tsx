"use client";
import { motion } from "framer-motion";
import { coreExpertise } from "@/lib/data";

const typeColors: Record<string, string> = {
  Frontend: "#00d4ff",
  Language: "#8b5cf6",
  QA: "#2EAD33",
  Cloud: "#ff9900",
  Backend: "#7c3aed",
  Database: "#10b981",
  AI: "#a855f7",
  DevOps: "#f59e0b",
};

export default function CoreExpertise() {
  return (
    <section id="core-expertise" className="relative py-28 px-4 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-400 mb-3">
            What I Do Best
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Core{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            The technologies and disciplines I&apos;ve mastered across Full Stack, QA Automation, and AI.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {coreExpertise.map((item, i) => {
            const catColor = typeColors[item.category] ?? item.color;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="relative group rounded-2xl border p-5 flex flex-col items-center text-center gap-3 cursor-default overflow-hidden transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${item.bg}, rgba(5,5,15,0.8))`,
                  borderColor: `${item.color}30`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    boxShadow: `inset 0 0 40px ${item.color}20`,
                    background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)`,
                    border: `1.5px solid ${item.color}40`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                {/* Name */}
                <p className="text-white font-bold text-sm relative z-10 group-hover:text-white transition-colors">
                  {item.name}
                </p>

                {/* Category badge */}
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide relative z-10"
                  style={{ background: `${catColor}20`, color: catColor, border: `1px solid ${catColor}30` }}
                >
                  {item.category}
                </span>

                {/* Corner accent */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: item.color, filter: "blur(20px)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
