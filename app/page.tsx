"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatrixIntro from "@/components/animations/MatrixIntro";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import CoreExpertise from "@/components/sections/CoreExpertise";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import EnterpriseExperience from "@/components/sections/EnterpriseExperience";
import Projects from "@/components/sections/Projects";
import AIShowcase from "@/components/sections/AIShowcase";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import FutureGoals from "@/components/sections/FutureGoals";

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <MatrixIntro onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <About />
            <Journey />
            <CoreExpertise />
            <Skills />
            <Experience />
            <EnterpriseExperience />
            <Projects />
            <AIShowcase />
            <Certifications />
            <Achievements />
            <Contact />
            <FutureGoals />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

