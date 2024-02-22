"use client";
import React from "react";
import { SparklesCore } from "@/components/sparkle";
import { TypewriterEffect } from "./ui/typewriter-effects";

export function SparklesPreview() {
  const words = [
    {
      text: "Welcome",
      className: "text-white",
    },
    {
      text: "to",
      className: "text-white",
    },
    {
      text: "my",
      className: "text-white",
    },
    {
      text: "Portfolio",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-black rounded-md">
      <div className="absolute inset-0 w-full h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="relative z-20 text-3xl font-bold text-center text-white md:text-7xl lg:text-6xl">

        <TypewriterEffect words={words} />
      </h1>
    </div>
  );
}
