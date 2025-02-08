import React from 'react'
import {AnimatedBeamDemo} from "@/components/ui/techstack";

const Techstack = () => {
    return (
        <section className="py-10 pb-5 w-full" id='techstack'>
            <div className="max-w-7xl mx-auto  text-center pb-6">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pb-5">
                    Tech Stack
                </h2>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto pb-4">
                    I specialise in Java, JavaScript, TypeScript, Next.js, and
                    React.
                    I am constantly learning new technologies and pride myself on being highly adaptable,
                    ready to tackle challenges and embrace innovation in a rapidly evolving field.

            </p>
            </div>

            <AnimatedBeamDemo/>

        </section>
    )
}
export default Techstack
