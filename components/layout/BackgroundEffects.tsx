"use client";
import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(() => import("@/components/animations/ParticleCanvas"), { ssr: false });
const AuroraBackground = dynamic(() => import("@/components/animations/AuroraBackground"), { ssr: false });
const MouseSpotlight = dynamic(() => import("@/components/animations/MouseSpotlight"), { ssr: false });

export default function BackgroundEffects() {
  return (
    <>
      <AuroraBackground />
      <ParticleCanvas />
      <MouseSpotlight />
    </>
  );
}
