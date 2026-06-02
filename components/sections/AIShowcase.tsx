"use client";
import { motion } from "framer-motion";
import { MessageSquare, Cpu, Brain, BarChart3, Zap, FileText } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { aiCapabilities } from "@/lib/data";
import dynamic from "next/dynamic";

const NeuralNetworkCanvas = dynamic(
  () => import("@/components/animations/NeuralNetworkCanvas"),
  { ssr: false }
);

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, Cpu, Brain, BarChart3, Zap, FileText,
};

export default function AIShowcase() {
  return (
    <section id="ai" className="relative py-24 px-4">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="AI / ML"
          title="Artificial Intelligence"
          highlight="Capabilities"
          subtitle="Building intelligent systems that learn, reason, and solve real-world problems."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Neural network visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <GlassCard hover={false} className="p-4 aspect-video flex items-center justify-center">
              <NeuralNetworkCanvas />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-xs text-neon-blue/60 font-mono tracking-wider">
                  NEURAL NETWORK · REAL-TIME VISUALIZATION
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* AI description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Engineering the{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Intelligence Layer
              </span>
            </h3>
            <p className="text-white/55 leading-relaxed">
              From deep learning models that detect blood cancer to LLM-powered hiring assistants —
              I build AI systems that create real impact. My approach combines classical ML rigor with
              modern LLM capabilities and thoughtful prompt engineering.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "AI Projects", value: "4+" },
                { label: "ML Models", value: "10+" },
                { label: "LLM APIs", value: "5+" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-neon-purple/20 bg-neon-purple/5 text-center"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    {value}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "Scikit-learn", "HuggingFace"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-medium border border-neon-purple/30 bg-neon-purple/10 text-neon-purple"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiCapabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Brain;
            return (
              <GlassCard key={cap.title} delay={i * 0.08} className="p-6 group" glow="purple">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${cap.color}20`, border: `1px solid ${cap.color}40` }}
                >
                  <Icon size={22} style={{ color: cap.color }} />
                </div>

                <h4 className="text-white font-semibold mb-2">{cap.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{cap.description}</p>

                {/* Level bar */}
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cap.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${cap.color}80, ${cap.color})` }}
                  />
                </div>
                <p className="text-xs text-right mt-1" style={{ color: cap.color }}>
                  {cap.level}%
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
