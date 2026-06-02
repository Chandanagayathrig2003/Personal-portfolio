"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Award, Cpu, Briefcase, BookOpen, Code2, Building2, TestTube, Brain } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { achievements } from "@/lib/data";
import { useInView } from "react-intersection-observer";

const iconMap: Record<string, React.ElementType> = {
  Rocket, Award, Cpu, Briefcase, BookOpen, Code2, Building2, TestTube, Brain,
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      {/* Top + bottom glow lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="By The Numbers"
          title="Impact &"
          highlight="Achievements"
          subtitle="Numbers that reflect my dedication to learning, building, and growing."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Rocket;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300">
                  <Icon size={22} className="text-neon-blue" />
                </div>

                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent leading-none mb-2">
                  <AnimatedCounter target={item.value} suffix={item.suffix} />
                </p>

                <p className="text-white/60 text-xs font-semibold leading-tight mb-1">{item.label}</p>
                {item.description && (
                  <p className="text-white/25 text-[10px] leading-tight">{item.description}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Extra marquee-style fact bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-4 rounded-2xl border border-white/6 bg-white/3 flex flex-wrap justify-center gap-6 text-sm text-white/30"
        >
          {[
            "🎓 B.Tech CSE 2024",
            "🏢 Cisco Apprentice",
            "☁️ AWS Certified",
            "🤖 AI/ML Projects",
            "🧪 QA Automation Expert",
            "🌏 Based in India",
          ].map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
