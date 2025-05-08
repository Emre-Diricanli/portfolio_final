"use client";
import React, { memo } from "react";
import dynamic from 'next/dynamic';
import { FileTree } from "@/components/ui/teckstackfiles";

// Lazily load TechBeam component only when needed (large screens)
const TechBeam = dynamic(() => import('@/components/ui/techstack').then(mod => mod.TechBeam), {
  ssr: false, // Don't render on server
  loading: () => <div className="w-full h-[400px] bg-black/20 rounded-lg animate-pulse"></div>
});

// Memoized static content
const TechStackHeader = memo(() => (
  <div className="max-w-7xl mx-auto relative -z-10 text-center pb-6">
    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans pb-5">
      Tech Stack
    </h2>
    <p className="text-sm md:text-lg text-neutral-300 max-w-2xl mx-auto pb-4">
      With a robust background in Java, JavaScript, and TypeScript, along
      with hands-on experience in frameworks like Next.js and Spring Boot, I
      bring a versatile approach to software engineering. I seamlessly
      integrate development with DevOps practices—emphasizing continuous
      integration, automated deployment, and infrastructure automation—to
      create scalable and resilient systems. I&apos;m committed to
      continuous learning, consistently embracing emerging technologies and
      innovations to meet the evolving challenges of the tech landscape.
    </p>
  </div>
));
TechStackHeader.displayName = 'TechStackHeader';

const Techstack = () => {
  return (
    <section className="py-10 relative pb-5 w-full" id="techstack">
      <TechStackHeader />
      <div className="flex lg:flex-row relative -z-10 flex-col justify-center h-auto items-center px-24">
        <div className="flex justify-center items-center h-auto w-screen">
          <FileTree />
        </div>
        <div className="flex relative -z-10 w-screen px-2 h-full items-center justify-center">
          {/* The TechBeam component will only display on large devices (lg and above) */}
          <div className="hidden lg:block w-full">
            <TechBeam />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Techstack);
