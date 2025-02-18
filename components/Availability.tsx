"use client";
import WorldMap from "@/components/ui/world-map";
import React from "react";
import {Globe} from "@/components/ui/globe";

const Availability = () =>{
    return (
        <section className=" py-20  w-full" id='availability'>
            <div className="max-w-7xl mx-auto  text-center">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pb-5">
                    Availability
                </h2>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    I am based in Atlanta, GA, USA, I embrace the flexibility of remote work
                    and thrive in collaborative digital environments. Whether it&apos;s contributing to a startup’s growth
                    or enhancing a team’s efficiency, I bring strong communication, problem-solving, and development
                    skills to the table. Let’s build something amazing together!
                </p>
            </div>
            <Globe className='relative ' />

        </section>
    );
}
export default Availability;