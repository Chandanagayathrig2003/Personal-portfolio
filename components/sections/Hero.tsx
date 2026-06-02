"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

// â”€â”€ Floating 3D glowing orb â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function GlowOrb({
  size,
  style,
  color,
  delay,
}: {
  size: number;
  style: React.CSSProperties;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 32% 30%, rgba(255,255,255,0.92), ${color}bb 45%, ${color}22 80%)`,
        boxShadow: `0 0 ${size * 0.7}px ${color}70, 0 0 ${size * 1.4}px ${color}25`,
        filter: "blur(1.5px)",
        ...style,
      }}
      animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
      transition={{ duration: 6 + delay * 0.8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

// â”€â”€ Floating 3D glowing cube â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function GlowCube({
  size,
  style,
  color,
  delay,
}: {
  size: number;
  style: React.CSSProperties;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        borderRadius: "22%",
        background: `linear-gradient(140deg, rgba(255,255,255,0.95) 0%, ${color}99 45%, ${color}22 100%)`,
        boxShadow: `0 0 ${size * 0.55}px ${color}80, 0 0 ${size * 1.1}px ${color}20`,
        opacity: 0.85,
        ...style,
      }}
      animate={{ y: [0, -28, 0], rotate: [12, 32, 12], x: [0, -14, 0] }}
      transition={{ duration: 7 + delay * 0.7, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
];

export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden"
      style={{ background: "#05050f" }}
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Central purple glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 50% at 50% 55%, rgba(100,50,220,0.09) 0%, transparent 70%)",
        }}
      />

      {/* 3D decorative orbs & cubes */}
      <GlowOrb size={200} style={{ top: "12%", left: "6%" }} color="#c084fc" delay={0} />
      <GlowCube size={155} style={{ top: "16%", right: "8%" }} color="#e0e7ff" delay={1.2} />
      <GlowOrb size={90} style={{ bottom: "22%", left: "4%" }} color="#818cf8" delay={2} />
      <GlowCube size={75} style={{ bottom: "18%", right: "6%" }} color="#f0e6ff" delay={0.6} />
      <GlowOrb size={55} style={{ top: "45%", right: "20%" }} color="#a78bfa" delay={3} />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* Big bold name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-black tracking-tight leading-none text-white mb-5"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          Chandhana Gayathri Gangaraju
        </motion.h1>

        {/* Typing role subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-xl sm:text-2xl text-white/45 mb-11 h-9"
        >
          <TypeAnimation
            sequence={[
              "Software Engineer & Full Stack Developer",
              2200,
              "AI/ML Developer & QA Automation Expert",
              2200,
              "Cisco Apprentice & Cloud Engineer",
              2200,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-11"
        >
          <button
            onClick={scrollToContact}
            className="px-9 py-3.5 rounded-xl bg-white text-black font-semibold text-[0.95rem] hover:bg-white/90 transition-all hover:scale-[1.04] shadow-[0_8px_30px_rgba(255,255,255,0.12)] active:scale-95"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex items-center justify-center gap-7"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/35 hover:text-white/80 transition-all duration-300 hover:scale-110"
            >
              <Icon size={23} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/45 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-current" />
        </motion.div>
      </motion.button>
    </section>
  );
}
