"use client";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/6 bg-bg-primary/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">
              CG
            </p>
            <p className="text-white/40 text-sm">{personalInfo.shortBio}</p>
          </div>

          {/* Center - made with love */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-white/40 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-neon-blue fill-neon-blue animate-pulse" /> in India
            </p>
            <p className="text-white/25 text-xs">© 2026 Chandhana Gayathri Gangaraju · All rights reserved</p>
          </div>

          {/* Social + Scroll up */}
          <div className="flex items-center justify-end gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-neon-blue/40 hover:bg-neon-blue/10 hover:shadow-glow-blue transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-neon-blue/40 hover:bg-neon-blue/10 hover:shadow-glow-blue transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-neon-blue/40 hover:bg-neon-blue/10 hover:shadow-glow-blue transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollTop}
              className="p-2.5 rounded-xl bg-neon-blue/10 border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/20 hover:shadow-glow-blue transition-all duration-300 ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient bottom bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
    </footer>
  );
}
