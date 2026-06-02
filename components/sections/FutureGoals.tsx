"use client";
import { motion } from "framer-motion";
import { Code2, Brain, Github, Mic2, Users, Globe } from "lucide-react";
import { futureGoals } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code2, Brain, Github, Mic2, Users, Globe,
};

export default function FutureGoals() {
  return (
    <section id="future" className="relative py-28 px-4 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(245,158,11,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400 mb-3">
            The Horizon
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Future{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Goals & Vision
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            The destination is clear. Here is where I am heading — and why it matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {futureGoals.map((goal, i) => {
            const Icon = iconMap[goal.icon] ?? Globe;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl border p-6 overflow-hidden cursor-default transition-all duration-300"
                style={{
                  background: "rgba(8,8,20,0.7)",
                  backdropFilter: "blur(20px)",
                  borderColor: `${goal.color}25`,
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: goal.color, filter: "blur(30px)" }}
                />

                {/* Hover top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${goal.color}, transparent)` }}
                />

                <div className="relative z-10">
                  {/* Icon + Timeline */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `${goal.color}18`,
                        border: `1.5px solid ${goal.color}40`,
                      }}
                    >
                      <Icon size={20} style={{ color: goal.color }} />
                    </div>
                    <span
                      className="text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wider"
                      style={{ background: `${goal.color}15`, color: goal.color, border: `1px solid ${goal.color}30` }}
                    >
                      {goal.timeline}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-white transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{goal.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Motivational quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-white/25 text-lg italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;The best time to plant a tree was 20 years ago. The second best time is now.&rdquo;
          </blockquote>
          <p className="text-white/15 text-sm mt-2">— Chinese Proverb</p>
        </motion.div>
      </div>
    </section>
  );
}
