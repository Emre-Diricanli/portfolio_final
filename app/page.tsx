import React from "react";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Techstack from "@/components/Techstack";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <main className=' mx-auto'>
        <Dock />
        <Hero />
        <About />
        <Techstack />
        <Experience />
        <Availability />
        <Contact />

    </main>
  );
}
