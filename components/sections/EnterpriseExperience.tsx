"use client";
import { motion } from "framer-motion";
import {
  Link2, Database, Server, MessageSquare, ShieldCheck, LayoutDashboard,
} from "lucide-react";
import { enterpriseTools } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Link2, Database, Server, MessageSquare, ShieldCheck, LayoutKanban: LayoutDashboard,
};

export default function EnterpriseExperience() {
  return (
    <section id="enterprise" className="relative py-28 px-4 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,177,64,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center bg-[#00B14020] border border-[#00B14040]">
              <span className="text-base font-black text-[#00B140]">C</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00B140]">
              Cisco · Enterprise Stack
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Enterprise{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Tools and platforms I work with daily at Cisco Systems — enterprise-grade infrastructure
            at the cutting edge of networking and collaboration technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {enterpriseTools.map((tool, i) => {
            const Icon = iconMap[tool.icon] ?? Server;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl border p-6 overflow-hidden cursor-default transition-all duration-300"
                style={{
                  background: "rgba(10,10,26,0.7)",
                  backdropFilter: "blur(16px)",
                  borderColor: `${tool.color}25`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${tool.color}15, transparent 60%)` }}
                />

                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${tool.color}, ${tool.color}00)` }}
                />

                <div className="relative z-10">
                  {/* Icon + Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${tool.color}18`,
                        border: `1.5px solid ${tool.color}35`,
                      }}
                    >
                      <Icon size={20} style={{ color: tool.color }} />
                    </div>
                    <span
                      className="text-[10px] px-2 py-1 rounded-full font-semibold tracking-wide"
                      style={{ background: `${tool.color}15`, color: tool.color, border: `1px solid ${tool.color}30` }}
                    >
                      {tool.tag}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base mb-2">{tool.name}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cisco badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border"
            style={{ background: "rgba(0,177,64,0.08)", borderColor: "rgba(0,177,64,0.25)" }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00B140] animate-pulse" />
            <span className="text-sm text-white/50">Currently working at Cisco Systems as Software Engineer Trainee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
