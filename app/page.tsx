import React, {lazy, Suspense} from "react";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
// import Availability from "@/components/Availability";


// Look 1
import About from "@/components/About";
import Techstack from "@/components/Techstack";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";


// Look 2
import About2 from "@/components/About2";
// import Projects2 from "@/components/Projects2";
// import TechStack2 from "@/components/TechStack2";
// import Contact2 from "@/components/Contact2";


const TechStack2 = lazy(() => import('@/components/TechStack2'));
const Projects2 = lazy(() => import('@/components/Projects2'));
const Availability = lazy(() => import('@/components/Availability'));
const Contact2 = lazy(() => import('@/components/Contact2'));

const LoadingFallback = () => (
    <div className="w-full h-64 flex items-center justify-center">
        <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin"></div>
    </div>
);

export default function Home() {
  return (
    <main className="z-auto mx-auto">
      <Dock />
      <Hero />
        {/*<About />*/}
        {/*<Techstack />*/}
        {/*<Projects />*/}
        {/*<Availability />*/}
        {/*<Contact />*/}

        <About2 />
        <Suspense fallback={<LoadingFallback />}>
            <TechStack2 />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
            <Projects2 />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
            <Availability />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
            <Contact2/>
        </Suspense>
    </main>
  );
}
