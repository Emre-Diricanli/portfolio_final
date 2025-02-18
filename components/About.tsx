"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const About = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <section className="w-full relative z-0 h-full py-20" id="about">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                About Me
            </h2>
            <div>
                <Carousel items={cards}  />
            </div>
        </section>
    );
}
export default About;
const About_Me = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Hi there!
                </span>{" "}
                <p className='pb-5'>
                I’m Emre, a passionate and driven software engineering graduate with a strong interest in DevOps, cloud computing, and web development. My journey through college while working full-time has shaped me into someone who values hard work, resilience, and continuous learning.
                </p>
                <p className='pb-5'>
                With hands-on experience in JavaScript, TypeScript, and web development projects, I’m eager to bring my problem-solving skills and dedication to a dynamic team. I’m particularly interested in building efficient, scalable solutions and integrating AI-driven tools to enhance business operations.
                </p>
                <p className='pb-5'>
                Outside of tech, I’m an entrepreneur at heart, running my own online business in the health supplement space. I’m always looking for innovative ways to grow, automate, and engage with customers.
                </p>
                <p className='pb-5'>
                I thrive on challenges, enjoy collaborating with diverse teams, and am excited about the endless possibilities that technology offers. Let’s connect and build something amazing together!
                </p>
            </div>
            {/*<Image*/}
            {/*    src="/assets/texas.jpeg"*/}
            {/*    alt="Macbook mockup from Aceternity UI"*/}
            {/*    height="500"*/}
            {/*    width="500"*/}
            {/*    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto rounded-lg object-contain"*/}
            {/*/>*/}
        </div>
    );
};
const Education = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    My Educational history...
                </span>{" "}
                <p className='pb-5'>
                I hold a Bachelor of Science in Software Engineering, earned in May 2024. My studies focused on DevOps, cloud computing, web development, and network security, providing me with a strong technical foundation and hands-on experience with modern tools like JavaScript, TypeScript, and cloud platforms.
                </p>
                <p className='pb-5'>
                Balancing full-time work while completing my degree taught me resilience, time management, and the importance of perseverance. This journey has fueled my passion for building scalable, efficient solutions, and I’m excited to apply my knowledge and continue growing as a DevOps engineer.
                </p>
                </div>
            
        </div>
    );
};
const Passion = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div
                className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200 pb-5">
                    My passion for engineering
                </span>{" "}
                <p className='pb-5'>
                    My passion for software engineering comes from a deep curiosity about how things work and a drive to
                    build solutions that make a difference. From the moment I wrote my first line of code, I was hooked.
                    The ability to turn ideas into reality through technology is what fuels me every day.
                </p>
                <p className='pb-5'>
                    I’m especially drawn to DevOps and cloud computing because they combine problem-solving, automation,
                    and innovation. I love the challenge of optimizing systems, streamlining processes, and ensuring
                    seamless integration between development and operations. Web development also excites me because of
                    its ability to create intuitive, user-friendly experiences that reach people worldwide.
                </p>
                <p className='pb-5'>
                    For me, engineering is more than just writing code, it&#39;s about continuous learning,
                    collaboration, and pushing the boundaries of what’s possible. I’m eager to grow, contribute, and
                    build solutions that not only solve problems but also inspire others.
                </p>
                </div>

        </div>
    );
};
const Hobbies = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div
                className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    My Hobbies
                </span>{" "}
                <p className='pb-5'>
                Outside of software engineering, I have a deep passion for photography. Capturing moments through the
                lens allows me to see the world from unique perspectives and express creativity in a way that’s both
                fulfilling and exciting.
                </p>
                <p className='pb-5'>
                I’m also a huge Formula 1 fan—the speed, precision, and engineering behind every car fascinates me. This
                love for motorsport extends to working on cars in general. Whether it’s fine-tuning my own car or diving
                into hands-on projects with other vehicles, I find joy in understanding how every part works together to
                create something powerful and efficient.
                </p>
                    <p className='pb-5'>
                When I’m not under the hood or behind the camera, I’m exploring new tech, focusing on fitness and mental
                well-being, and continuously seeking ways to grow both personally and professionally.
                    </p>
                    </div>

        </div>
    );
};
const Future = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <div
                className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    My Future aspirations...
                </span>{" "}
                <p className='pb-5'>
                My ultimate goal is to become a skilled DevOps engineer, creating seamless, efficient systems that
                bridge development and operations. I’m passionate about cloud computing and automation, and I’m driven
                to build scalable solutions that enhance performance and reliability.
                </p>
                    <p className='pb-5'>
                In the near future, I aim to earn advanced cloud certifications and deepen my expertise in DevOps tools
                and practices. I’m also excited to contribute to open-source projects, collaborate with talented teams,
                and stay at the forefront of technological innovation.
                    </p>
                        <p className='pb-5'>
                Beyond my career, I aspire to grow my online business, integrating AI-driven solutions to enhance user
                experience and streamline operations. I also dream of living near the beach one day, capturing the world
                through photography, and continuing to work on cars—another passion that fuels my creativity and
                curiosity.
                        </p>
                <p className='pb-5'>
                Above all, I’m committed to lifelong learning, personal growth, and making a meaningful impact through
                technology and innovation.
                </p>
            </div>

        </div>
    );
};
// const Hiring = () => {
//     return (
//         <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto pb-8">
//                 <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                     Please hire me...
//                 </span>{" "}
//                 My name is Emre Diricanli, born in Izmir, Turkey.
//             </p>
//             <Image
//                 src="/assets/texas.jpeg"
//                 alt="Macbook mockup from Aceternity UI"
//                 height="500"
//                 width="500"
//                 className="md:w-1/2 md:h-1/2 h-full w-full mx-auto rounded-lg object-contain"
//             />
//         </div>
//     );
// };

const data = [
    {
        category: "Background",
        title: "About Me",
        src: "/assets/texas.jpeg",
        content: <About_Me />,
    },
    {
        category: "Education",
        title: "School History",
        src: "/assets/graduation.jpeg",
        content: <Education />,
    },
    {
        category: "Passion",
        title: "Love for Engineering",
        src: "/assets/carwoglasses.jpeg",
        content: <Passion />,
    },

    {
        category: "Hobbies",
        title: "More than just an engineer",
        src: "/assets/austin.jpeg",
        content: <Hobbies />,
    },
    {
        category: "Future",
        title: "Future Aspirations",
        src: "/assets/austin.jpeg",
        content: <Future />,
    },
    // {
    //     category: "Hiring",
    //     title: "Hiring for a Staff Software Engineer",
    //     src: "/assets/alphaandi.jpeg",
    //     content: <Hiring />,
    // },
];
