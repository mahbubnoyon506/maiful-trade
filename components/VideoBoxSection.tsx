"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export default function VideoBoxSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-black text-white py-20 lg:py-32 font-space-grotesk relative overflow-hidden">
      {/* Background Graphic Pattern Layer (Simulated Video Thumbnail Grid Backdrop) */}
      <div
        className="absolute inset-0 bg-[#0A0D14] opacity-80 mix-blend-multiply transition-transform duration-700 ease-out scale-100 hover:scale-105"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* TEXT CONTENT HEADER PANEL */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold tracking-wider uppercase text-white">
            SEE IT IN ACTION
          </h2>
          <p className="text-base sm:text-lg text-white font-normal tracking-wide mx-auto font-roboto">
            Watch Our Video to Get a Clear Understanding of How It Works
          </p>
        </div>

        {/* CONTROLLER TRIGGER PLAY BADGE BUTTON */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => {
              setIsPlaying(true);
              console.log(
                "Trigger Video Modal or Embed playback stream instance.",
              );
            }}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-white text-[#FF3B30] rounded-full flex items-center justify-center shadow-2xl relative group transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Play video presentation"
          >
            {/* Pulsing Accent Wave Radios */}
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 group-hover:opacity-100" />
            <span className="absolute -inset-4 rounded-full bg-white/5 animate-pulse opacity-50 hidden sm:inline" />

            {/* Play Vector Icon Graphic Offset perfectly to center visually */}
            <Play
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 transition-transform duration-300 group-hover:rotate-12"
              strokeWidth={0}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
