"use client";
import React, { memo, useCallback } from "react";
import { Ripple } from "@/components/ui/ripple";
import { motion } from "motion/react";

// Pre-defined animation variants to reduce object creation during render
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Animation for scroll arrow
const bounceVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Memoized heading component to prevent unnecessary re-renders
const Heading = memo(() => (
  <h1 className="lg:text-8xl text-6xl font-bold tracking-tighter text-white mb-4">
    Emre Diricanlı
  </h1>
));
Heading.displayName = 'Heading';

// Memoized subheading component
const Subheading = memo(() => (
  <motion.p
    variants={fadeInVariant}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.4, duration: 0.8 }}
    className="lg:text-3xl text-xl font-semibold text-white"
  >
    Bridging code and cloud to deliver seamless solutions.
  </motion.p>
));
Subheading.displayName = 'Subheading';

// Memoized scroll indicator component
const ScrollIndicator = memo(() => {
  const scrollToAbout = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-28 left-0 right-0 flex flex-col items-center z-20"
    >
      <p className="text-white/60 text-sm mb-2">Scroll to explore</p>
      <motion.div
        variants={bounceVariant}
        initial="initial"
        animate="animate"
        onClick={scrollToAbout}
        className="cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/80"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/60 mt-1"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
});
ScrollIndicator.displayName = 'ScrollIndicator';

// Main Hero component
const Hero = () => {
  return (
    <section className="relative pb-5 bg-black w-full" id="hero">
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <Heading />
          <Subheading />

          <motion.div
            variants={fadeInUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          />
        </motion.div>
        
        {/* Scroll indicator */}
        <div>
          <ScrollIndicator />

        </div>

        {/* Ripple is expensive, only render it when needed */}
        <Ripple mainCircleOpacity={0.8} mainCircleSize={80} numCircles={10} />
      </div>
    </section>
  );
};

export default memo(Hero);
