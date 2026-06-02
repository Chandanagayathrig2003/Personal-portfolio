"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, coreExpertise } from "@/lib/data";

const categoryColors: Record<string, string> = {};
skillsData.forEach(cat => { categoryColors[cat.category] = cat.color; });

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-white/70 group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-mono text-white/30" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const active = skillsData[activeTab];

  return (
    <section id="skills" className="relative py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-10 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.5) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">
            Complete Skill Set
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Skills{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Galaxy
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            70+ skills across 10 categories. Explore the full stack of what I bring to the table.
          </p>
        </motion.div>

        {/* Core Skills Showcase — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-6">
            Core Expertise — Visible at a Glance
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {coreExpertise.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl border cursor-default select-none transition-all duration-300"
                style={{
                  background: skill.bg,
                  borderColor: `${skill.color}30`,
                  boxShadow: `0 4px 20px ${skill.color}10`,
                }}
              >
                <span className="text-sm font-black" style={{ color: skill.color }}>{skill.icon}</span>
                <span className="text-sm font-semibold text-white/80">{skill.name}</span>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                  style={{ background: `${skill.color}20`, color: skill.color }}
                >
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Tabs + Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-white/8 overflow-hidden"
          style={{ background: "rgba(10,10,30,0.6)", backdropFilter: "blur(20px)" }}
        >
          {/* Tab scroll row */}
          <div className="flex overflow-x-auto gap-0 border-b border-white/6 scrollbar-hide">
            {skillsData.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className={`flex-shrink-0 px-5 py-4 text-xs font-semibold tracking-wide transition-all duration-300 relative whitespace-nowrap ${
                  activeTab === i ? "text-white" : "text-white/30 hover:text-white/60"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0"
                    style={{ background: `${cat.color}12`, borderBottom: `2px solid ${cat.color}` }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-2 h-8 rounded-full"
                style={{ background: active.color }}
              />
              <div>
                <h3 className="text-white font-bold text-lg">{active.category}</h3>
                <p className="text-white/30 text-sm">{active.skills.length} skills</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5"
              >
                {active.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35 }}
                  >
                    <SkillBar name={skill.name} level={skill.level} color={active.color} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
