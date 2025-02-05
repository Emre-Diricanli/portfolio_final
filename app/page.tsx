import React from "react";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Techstack from "@/components/Techstack";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className=' mx-auto'>
        <Hero />
        <About />
        <Techstack />
        <Availability />
        <Contact />
        <Dock />

    </main>
  );
}
