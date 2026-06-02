"use client";
import { motion } from "framer-motion";
import {
  GraduationCap, Globe, Cloud, Brain, Shield, Zap, Rocket,
  Heart, Smile, MessageSquare, Building2, Link2, Server, TestTube, Database,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { journeySteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Globe, Cloud, Brain, Shield, Zap, Rocket,
  Heart, Smile, MessageSquare, Building2, Link2, Server, TestTube, Database,
};

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 px-4">
      {/* BG glow */}
      <div
        className="absolute inset-x-0 top-0 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="The Story"
          title="From Apprentice"
          highlight="to Engineer"
          subtitle="Every milestone, every internship, every project — a step forward in my journey to become a world-class Software Engineer."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-neon-blue/60 via-neon-purple/40 via-70% to-transparent" />

          <div className="space-y-8">
            {journeySteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Rocket;
              const isLeft = i % 2 === 0;
              const isLast = i === journeySteps.length - 1;

              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Card side */}
                  <div className="flex-1 flex justify-end">
                    <div
                      className={`w-full max-w-[420px] p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                        isLeft ? "" : "ml-auto"
                      }`}
                      style={{
                        background: isLast
                          ? `linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.08))`
                          : "rgba(10, 10, 26, 0.6)",
                        backdropFilter: "blur(12px)",
                        borderColor: isLast ? `${step.color}50` : "rgba(255,255,255,0.08)",
                        boxShadow: isLast ? `0 0 30px ${step.color}20` : undefined,
                      }}
                    >
                      {/* Year */}
                      <span
                        className="inline-block px-3 py-0.5 rounded-full text-xs font-bold mb-3 font-mono"
                        style={{
                          background: `${step.color}20`,
                          border: `1px solid ${step.color}40`,
                          color: step.color,
                        }}
                      >
                        {step.year}
                      </span>

                      <h3 className="text-white font-bold text-base mb-0.5">{step.title}</h3>
                      <p className="text-xs text-white/40 mb-3">{step.subtitle}</p>
                      <p className="text-white/55 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-xs bg-white/5 border border-white/8 text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}40, ${step.color}20)`,
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 0 20px ${step.color}50`,
                      }}
                    >
                      <Icon size={18} style={{ color: step.color }} />
                    </motion.div>
                  </div>

                  {/* Empty side */}
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/30 text-sm mb-2">The story continues...</p>
          <p className="text-white font-bold text-xl">
            Next chapter:{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Your Company 🚀
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
