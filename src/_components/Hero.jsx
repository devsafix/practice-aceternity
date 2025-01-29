"use client";

import { Spotlight } from "@/components/ui/Spotlight";
import TinnyButton from "./shared/TinnyButton";
import OutlineButton from "./shared/OutlineButton";

export function Hero() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 relative z-10 w-full">
        {/* Small Button (e.g., Tagline) */}
        <TinnyButton name="🚀 Elevate Your Online Presence" />

        {/* Hero Title */}
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 bg-opacity-50">
          Build. Innovate. Dominate.
        </h1>

        {/* Hero Description */}
        <p className="mt-2 text-base md:text-lg text-neutral-300 max-w-2xl">
          Transform your ideas into high-performance digital experiences. We
          craft cutting-edge websites that **attract, engage, and convert**.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <OutlineButton name="📞 Get a Free Consultation" />
          <OutlineButton name="📂 View Our Work" />
        </div>
      </div>
    </div>
  );
}
