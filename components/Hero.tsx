"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

const Hero = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.0, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.0, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.0, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.0, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <div
            className="h-[200vh] w-full rounded-md relative pt-15 overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
                title={"Emre Diricanli"}
                description={"Bridging code and cloud to deliver seamless solutions."}
                className={"w-screen"}
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
            />
        </div>
    );
}
export default Hero;