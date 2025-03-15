"use client";
import React from "react";
import { Ripple } from "@/components/ui/ripple";
import { motion } from "motion/react";

const Hero = () => {
  return (
      <section className="relative pb-5 w-full" id="hero">
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10 text-center"
          >
            <h1 className="lg:text-8xl text-6xl font-bold tracking-tighter text-white mb-4">
              Emre Diricanlı
            </h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="lg:text-3xl text-xl font-semibold text-white"
            >
              Bridging code and cloud to deliver seamless solutions.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12"
            >
              {/*<a*/}
              {/*    href="#projects"*/}
              {/*    className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all"*/}
              {/*>*/}
              {/*  View My Projects*/}
              {/*</a>*/}
            </motion.div>
          </motion.div>
          <Ripple mainCircleOpacity={0.8} mainCircleSize={80} numCircles={10} />
        </div>
      </section>
  );
};

export default Hero;
