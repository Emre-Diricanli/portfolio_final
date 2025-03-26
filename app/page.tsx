import { lazy, Suspense } from "react";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import About2 from "@/components/About2";

// Lazy load heavy components
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

      <Hero />
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
        <Contact2 />
      </Suspense>
    </main>
  );
}
