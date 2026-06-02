"use client";
import { motion } from "framer-motion";
import { Building2, Calendar, Star, CheckCircle, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Work Experience"
          title="My Professional"
          highlight="Journey"
          subtitle="From internships at AWS & Salesforce to building enterprise software at Cisco."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/60 via-neon-purple/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-5 h-5 -translate-x-1/2 z-10">
                  <div
                    className="w-full h-full rounded-full border-2"
                    style={{
                      background: exp.isHighlighted
                        ? "linear-gradient(135deg, #00d4ff, #7c3aed)"
                        : "rgba(255,255,255,0.1)",
                      borderColor: exp.isHighlighted ? "#00d4ff" : "rgba(255,255,255,0.2)",
                      boxShadow: exp.isHighlighted ? "0 0 16px rgba(0,212,255,0.6)" : "none",
                    }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <GlassCard
                    hover={false}
                    className={`p-6 ${exp.isHighlighted ? "border-neon-blue/25 shadow-glow-blue" : ""}`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.isHighlighted && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-neon-blue/20 text-neon-blue border border-neon-blue/30">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        <div className="flex items-center gap-3 text-sm text-white/50 mt-1">
                          <span className="flex items-center gap-1.5">
                            <Building2 size={13} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Type badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/50 mb-4">
                      {exp.type}
                    </span>

                    <p className="text-white/55 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Key achievements */}
                    <div className="space-y-2 mb-5">
                      {exp.achievements.slice(0, 3).map((a) => (
                        <div key={a} className="flex items-start gap-2 text-sm text-white/60">
                          <CheckCircle size={13} className="text-neon-blue mt-0.5 shrink-0" />
                          {a}
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-xs bg-white/5 border border-white/8 text-white/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
