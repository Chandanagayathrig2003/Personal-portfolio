"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { certifications } from "@/lib/data";

function EnvelopeCard({ cert, index }: Readonly<{ cert: (typeof certifications)[0]; index: number }>) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex-shrink-0"
      style={{ width: 240 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Envelope body */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: `1px solid ${cert.color}40`,
          background: "rgba(8,8,20,0.9)",
          boxShadow: hovered ? `0 20px 60px ${cert.color}30, 0 0 0 1px ${cert.color}30` : "0 8px 24px rgba(0,0,0,0.4)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        {/* Certificate parchment that slides up */}
        <div className="relative overflow-hidden" style={{ height: 140 }}>
          {/* Envelope background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${cert.color}18 0%, rgba(8,8,20,0.9) 100%)`,
            }}
          />
          {/* Decorative lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, ${cert.color}44 0px, ${cert.color}44 1px, transparent 1px, transparent 20px)`,
            }}
          />
          {/* Certificate card that slides up on hover */}
          <motion.div
            animate={{ y: hovered ? -10 : 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 right-4 rounded-xl p-4"
            style={{
              bottom: 0,
              background: `linear-gradient(135deg, ${cert.color}22 0%, ${cert.color}08 100%)`,
              border: `1px solid ${cert.color}40`,
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} style={{ color: cert.color }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cert.color }}>Certificate</span>
            </div>
            <p className="text-white text-xs font-semibold leading-snug">{cert.name}</p>
          </motion.div>

          {/* Envelope flap top */}
          <div
            className="absolute top-0 left-0 right-0 h-8 opacity-40"
            style={{
              background: `linear-gradient(180deg, ${cert.color}22 0%, transparent 100%)`,
            }}
          />
        </div>

        {/* Bottom section with cert info */}
        <div className="px-4 py-4" style={{ borderTop: `1px solid ${cert.color}20` }}>
          <p className="text-white text-sm font-bold leading-tight mb-0.5">{cert.name}</p>
          <p className="text-white/40 text-xs mb-2">{cert.issuer}</p>
          <div className="flex items-center">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30`, color: cert.color }}
            >
              {cert.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [scrollIdx, setScrollIdx] = useState(0);
  const visible = 3;
  const maxIdx = Math.max(0, certifications.length - visible);

  const prev = () => setScrollIdx((i) => Math.max(0, i - 1));
  const next = () => setScrollIdx((i) => Math.min(maxIdx, i + 1));

  return (
    <section id="certifications" className="relative py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-10 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.4) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-3">Verified Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-white/35 text-sm max-w-xl mx-auto">
            Each certificate presented in an elegant envelope design â€” hover to reveal.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -(scrollIdx * (240 + 24)) }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {certifications.map((cert, i) => (
                <EnvelopeCard key={cert.name} cert={cert} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              disabled={scrollIdx === 0}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 hover:text-white disabled:opacity-25 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-1.5">
              {certifications.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setScrollIdx(Math.min(maxIdx, Math.max(0, i - 1)))}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background: i >= scrollIdx && i < scrollIdx + visible
                      ? "#00d4ff"
                      : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={scrollIdx >= maxIdx}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 hover:text-white disabled:opacity-25 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

