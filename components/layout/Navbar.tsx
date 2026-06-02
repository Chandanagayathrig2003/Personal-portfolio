"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 backdrop-blur-2xl bg-[#05050f]/85 border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-4 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Gradient name logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            aria-label="Back to top"
          >
            Chandhana Gayathri Gangaraju
          </button>

          {/* Desktop Nav — centered plain links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      "text-sm transition-colors duration-200",
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Let's Talk CTA */}
          <button
            onClick={() => handleNav("#contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-[#12122a] border border-white/12 text-white hover:border-cyan-500/40 hover:bg-[#12122a]/80 transition-all duration-300"
          >
            <ArrowRight size={14} />
            Let&apos;s Talk
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#05050f]/95 backdrop-blur-xl border-b border-white/8 py-3 px-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left py-3 text-sm text-white/60 hover:text-white transition-colors border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-[#12122a] border border-white/12 text-white"
            >
              <ArrowRight size={14} />
              Let&apos;s Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
