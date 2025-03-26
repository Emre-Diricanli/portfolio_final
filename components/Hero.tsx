"use client";
import React, { memo } from "react";
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
        
        {/* Ripple is expensive, only render it when needed */}
        <Ripple mainCircleOpacity={0.8} mainCircleSize={80} numCircles={10} />
      </div>
    </section>
  );
};

export default memo(Hero);
