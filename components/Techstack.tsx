import React from 'react'
import {AnimatedBeamDemo} from "@/components/ui/techstack";
import {FileTree} from "@/components/ui/teckstackfiles";

const Techstack = () => {
    return (
        <section className="py-10 relative  pb-5 w-full" id='techstack'>
            <div className="max-w-7xl mx-auto  text-center pb-6">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans pb-5">
                    Tech Stack
                </h2>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto pb-4">
                    I specialise in Java, JavaScript, TypeScript, Next.js, and
                    React.
                    I am constantly learning new technologies and pride myself on being highly adaptable,
                    ready to tackle challenges and embrace innovation in a rapidly evolving field.

            </p>
            </div>
            <div className='flex lg:flex-row flex-col justify-center h-auto items-center px-24'>
                <div className='flex justify-center items-center h-auto w-screen'>
                    <FileTree />
                </div>
                <div className='flex relative -z-10 w-screen px-2 items-center justify-center'>
                    <AnimatedBeamDemo/>
                </div>
            </div>
        </section>
    )
}
export default Techstack
