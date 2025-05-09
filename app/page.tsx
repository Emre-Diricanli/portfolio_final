import { lazy, Suspense } from "react";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Lazy load heavy components
const TechStack = lazy(() => import('@/components/TechStack'));
const Projects = lazy(() => import('@/components/Projects'));
const Availability = lazy(() => import('@/components/Availability'));
const Contact = lazy(() => import('@/components/Contact'));

const LoadingFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <main className="z-auto mx-auto">

      <Hero />
      <About />
      <Suspense fallback={<LoadingFallback />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Availability />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </main>
  );
}
