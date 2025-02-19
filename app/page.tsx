import React from "react";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Techstack from "@/components/Techstack";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About2 from "@/components/About2";

export default function Home() {
  return (
    <main className="z-auto mx-auto">
      <Dock />
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <Availability />
      <Contact />
    </main>
  );
}
