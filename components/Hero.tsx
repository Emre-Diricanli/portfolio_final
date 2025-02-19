"use client";
import React from "react";
import {Ripple} from "@/components/ui/ripple";

const Hero = () => {

    return (
        <section className="relative pb-5 w-full" id='hero'>
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
                <p className="z-10 whitespace-pre-wrap text-center lg:text-8xl text-4xl font-bold tracking-tighter text-white">
                    Emre Diricanlı
                </p>
                <p className='lg:text-3xl font-semibold text-center text-lg'>
                    Bridging code and cloud to deliver seamless solutions.
                </p>
                <Ripple mainCircleOpacity={.8} mainCircleSize={10} numCircles={50} />
            </div>
        </section>);

}
export default Hero;