"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

// â”€â”€ Tech icons orbiting the profile photo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const orbitIcons = [
  { label: "React",  bg: "#61DAFB22", border: "#61DAFB55", text: "#61DAFB", short: "âš›" },
  { label: "Node",   bg: "#33993322", border: "#33993355", text: "#339933", short: "N" },
  { label: "Python", bg: "#3776AB22", border: "#3776AB55", text: "#3776AB", short: "Py" },
  { label: "TS",     bg: "#3178C622", border: "#3178C655", text: "#3178C6", short: "TS" },
  { label: "AWS",    bg: "#FF990022", border: "#FF990055", text: "#FF9900", short: "â˜" },
  { label: "JS",     bg: "#F7DF1E22", border: "#F7DF1E55", text: "#F7DF1E", short: "JS" },
  { label: "Mongo",  bg: "#47A24822", border: "#47A24855", text: "#47A248", short: "M" },
  { label: "Docker", bg: "#2496ED22", border: "#2496ED55", text: "#2496ED", short: "ðŸ³" },
];

const RADIUS = 145;
const CENTER = 180;

function OrbitRing() {
  return (
    <div className="relative" style={{ width: CENTER * 2, height: CENTER * 2 }}>
      {/* Orbit circle */}
      <div
        className="absolute inset-0 rounded-full border border-dashed border-white/10"
        style={{ margin: CENTER - RADIUS }}
      />

      {/* Profile circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        style={{
          width: 140,
          height: 140,
          background: "linear-gradient(135deg, #1a1a3a 0%, #0d0d22 100%)",
          border: "3px solid rgba(0,212,255,0.35)",
          boxShadow: "0 0 40px rgba(0,212,255,0.15), inset 0 0 30px rgba(0,212,255,0.05)",
        }}
      >
        <span className="text-4xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent select-none">
          CG
        </span>
      </div>

      {/* Orbiting icons */}
      {orbitIcons.map((icon, i) => {
        const angle = (i / orbitIcons.length) * 2 * Math.PI - Math.PI / 2;
        const x = CENTER + RADIUS * Math.cos(angle) - 22;
        const y = CENTER + RADIUS * Math.sin(angle) - 22;
        return (
          <motion.div
            key={icon.label}
            className="absolute flex items-center justify-center rounded-full text-sm font-bold"
            style={{
              width: 44,
              height: 44,
              left: x,
              top: y,
              background: icon.bg,
              border: `1.5px solid ${icon.border}`,
              color: icon.text,
              fontSize: icon.short.length > 1 ? "11px" : "18px",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            whileHover={{ scale: 1.2 }}
            title={icon.label}
          >
            <motion.span
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
            >
              {icon.short}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
}

// â”€â”€ Coding Stats Card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function StatsCard() {
  const stats = [
    { label: "Projects Built", value: "20+", color: "#00d4ff" },
    { label: "Certifications", value: "9+", color: "#a855f7" },
    { label: "Technologies", value: "30+", color: "#10b981" },
    { label: "Internships", value: "3", color: "#f59e0b" },
  ];

  const skills = [
    { label: "Full Stack Dev", pct: 90, color: "#00d4ff" },
    { label: "AI / ML", pct: 82, color: "#a855f7" },
    { label: "QA Automation", pct: 88, color: "#10b981" },
    { label: "Cloud & DevOps", pct: 78, color: "#f59e0b" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-7 space-y-6"
      style={{
        background: "rgba(10,10,26,0.7)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">ðŸ’»</span>
        <h3 className="text-xl font-bold text-white">Developer Stats</h3>
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-2xl font-black" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Skill bars */}
      <div className="space-y-3.5">
        {skills.map((s, i) => (
          <div key={s.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-white/60">{s.label}</span>
              <span style={{ color: s.color }} className="font-mono">{s.pct}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${s.color}88, ${s.color})` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Current role badge */}
      <div
        className="flex items-center gap-3 rounded-xl px-4 py-3"
        style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)" }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
        <span className="text-sm text-white/70">Currently at <span className="text-white font-semibold">Cisco Systems</span> as Software Engineer Trainee</span>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            More Than Just{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Code
            </span>
          </h2>
          <p className="mt-5 text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left â€” orbit ring */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <OrbitRing />
          </motion.div>

          {/* Right â€” stats card */}
          <StatsCard />
        </div>
      </div>
    </section>
  );
}
