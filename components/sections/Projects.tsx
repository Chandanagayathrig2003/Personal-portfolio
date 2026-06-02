"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink, CheckCircle } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [idx, setIdx] = useState(0);
  const safeIdx = Math.min(idx, projects.length - 1);
  const project = projects[safeIdx];

  const prev = () => setIdx((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIdx((i) => (i + 1) % projects.length);

  return (
    <section id="projects" className="relative py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none opacity-10 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.5) 0%, transparent 70%)", filter: "blur(80px)" }}
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
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">Featured Work</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="relative flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(8,8,20,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}>
          {/* Left â€” visual preview */}
          <div className="relative lg:w-[55%] min-h-[320px] lg:min-h-[520px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={safeIdx}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}33 0%, #05050f 100%)` }}
              >
                {project.image ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ opacity: 0.72 }}
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.accentColor}22 0%, rgba(5,5,15,0.45) 100%)` }} />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(${project.accentColor}55 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
                      style={{ width: 300, height: 300, background: `radial-gradient(circle, ${project.accentColor}66 0%, transparent 70%)`, filter: "blur(40px)" }}
                    />
                    <span
                      className="relative text-[140px] font-black leading-none select-none"
                      style={{ color: `${project.accentColor}22`, textShadow: `0 0 40px ${project.accentColor}44` }}
                    >
                      {String(safeIdx + 1).padStart(2, "0")}
                    </span>
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 px-8 py-6" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}>
                  <p className="text-xs font-semibold tracking-widest uppercase opacity-60" style={{ color: project.accentColor }}>
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-black text-white mt-1">{project.title}</h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right â€” info */}
          <div className="lg:w-[45%] flex flex-col justify-between p-8 lg:p-10" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={safeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 flex-1"
              >
                <div>
                  <h3 className="text-2xl font-black text-white mb-3">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.description ?? project.shortDesc}</p>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: project.accentColor }}>
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {(project.features ?? []).slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                        <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: project.accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.challenges && project.challenges.length > 0 && (
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-3 text-white/30">
                      Challenges Solved
                    </p>
                    <ul className="space-y-1.5">
                      {project.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-xs text-white/35">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accentColor }} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.slice(0, 4).map((m) => (
                      <div key={m.label} className="rounded-xl p-3 text-center" style={{ background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}20` }}>
                        <p className="text-sm font-black" style={{ color: project.accentColor }}>{m.value}</p>
                        <p className="text-[10px] text-white/35 mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: project.accentColor }}>
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: `${project.accentColor}15`,
                          border: `1px solid ${project.accentColor}30`,
                          color: project.accentColor,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                      style={{ color: project.accentColor }}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{ background: i === safeIdx ? project.accentColor : "rgba(255,255,255,0.15)", boxShadow: i === safeIdx ? `0 0 8px ${project.accentColor}` : "none" }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  <ChevronLeft size={18} />
                </button>
                <button onClick={next}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Chandanagayathrig2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all"
          >
            <Github size={16} />
            See All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
