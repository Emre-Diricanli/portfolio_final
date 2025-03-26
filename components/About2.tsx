"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Icons
import { Code, GraduationCap, Heart, Rocket, User, Briefcase } from "lucide-react";

type TabType = "about" | "education" | "passion" | "hobbies" | "future";

const About2 = () => {
    const [activeTab, setActiveTab] = useState<TabType>("about");

    const tabs = [
        { id: "about", label: "About Me", icon: <User className="h-5 w-5" /> },
        { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
        { id: "passion", label: "Passion", icon: <Heart className="h-5 w-5" /> },
        { id: "hobbies", label: "Hobbies", icon: <Briefcase className="h-5 w-5" /> },
        { id: "future", label: "Future", icon: <Rocket className="h-5 w-5" /> },
    ];

    return (
        <section className="w-full py-20 bg-black" id="about">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-12 text-center"
                >
                    About Me
                </motion.h2>

                {/* Profile section with image and tabs */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                    {/* Profile image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3 lg:w-1/3 max-w-md mx-auto lg:mx-0 flex-shrink-0"
                    >
                        <div className="aspect-square relative overflow-hidden rounded-2xl border-2 border-white/10 bg-neutral-900">
                            <Image
                                src="/assets/texas.jpeg"
                                alt="Emre Diricanli"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-1">Emre Diricanli</h3>
                                <p className="text-white/80">Software Engineer & DevOps Specialist</p>
                            </div>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-2 mt-4 ">
                            <div className="bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                                <p className="text-white/60 text-xs mb-1">Experience</p>
                                <p className="text-white font-bold text-lg">3+ Years</p>
                            </div>
                            <div className="bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                                <p className="text-white/60 text-xs mb-1">Projects</p>
                                <p className="text-white font-bold text-lg">10+</p>
                            </div>
                            <div className="bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                                <p className="text-white/60 text-xs mb-1">Education</p>
                                <p className="text-white font-bold text-lg">B.S.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tabs and content - Fixed width issue here */}
                    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto">
                        {/* Tab navigation - Made scrollable on small screens and centered */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center overflow-x-auto pb-4 mb-6 hide-scrollbar"
                        >
                            <div className="flex gap-2 p-1 bg-neutral-900/50 backdrop-blur-sm rounded-full border border-white/10 mx-auto">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as TabType)}
                                        className={cn(
                                            "flex items-center transition-all rounded-full",
                                            activeTab === tab.id
                                                ? "bg-white text-black px-4 py-2"
                                                : "text-white/70 hover:bg-white/10 p-2"
                                        )}
                                    >
                        <span className="flex items-center justify-center">
                          {tab.icon}
                        </span>
                                        {activeTab === tab.id && (
                                            <span className="ml-2 whitespace-nowrap">{tab.label}</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tab content - Fixed width issue here */}
                        <div className="bg-neutral-900/50 w-full backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeTab === "about" && <AboutMeContent />}
                                    {activeTab === "education" && <EducationContent />}
                                    {activeTab === "passion" && <PassionContent />}
                                    {activeTab === "hobbies" && <HobbiesContent />}
                                    {activeTab === "future" && <FutureContent />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About2;


const AboutMeContent = () => (
    <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Hi there!</h3>
        <p className="mb-4 text-white/80 leading-relaxed">
            I'm Emre, a passionate and driven software engineering graduate with a strong interest in DevOps, cloud computing, and web development. My journey through college while working full-time has shaped me into someone who values hard work, resilience, and continuous learning.
        </p>
        <p className="mb-4 text-white/80 leading-relaxed">
            With hands-on experience in JavaScript, TypeScript, and web development projects, I'm eager to bring my problem-solving skills and dedication to a dynamic team. I'm particularly interested in building efficient, scalable solutions and integrating AI-driven tools to enhance business operations.
        </p>
        <p className="mb-4 text-white/80 leading-relaxed">
            Outside of tech, I'm an entrepreneur at heart, running my own online business in the health supplement space. I'm always looking for innovative ways to grow, automate, and engage with customers.
        </p>
        <p className="text-white/80 leading-relaxed">
            I thrive on challenges, enjoy collaborating with diverse teams, and am excited about the endless possibilities that technology offers. Let's connect and build something amazing together!
        </p>
    </div>
);

const FutureContent = () => (
    <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>

        <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 text-sm">1</span>
                    Professional Growth
                </h4>
                <p className="text-white/80 leading-relaxed">
                    My ultimate goal is to become a skilled DevOps engineer, creating seamless, efficient systems that bridge development and operations. I'm passionate about cloud computing and automation, and I'm driven to build scalable solutions that enhance performance and reliability.
                </p>
            </div>

            <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 text-sm">2</span>
                    Technical Advancement
                </h4>
                <p className="text-white/80 leading-relaxed">
                    In the near future, I aim to earn advanced cloud certifications and deepen my expertise in DevOps tools and practices. I'm also excited to contribute to open-source projects, collaborate with talented teams, and stay at the forefront of technological innovation.
                </p>
            </div>

            <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 text-sm">3</span>
                    Personal Aspirations
                </h4>
                <p className="text-white/80 leading-relaxed">
                    Beyond my career, I aspire to grow my online business, integrating AI-driven solutions to enhance user experience and streamline operations. I also dream of living near the beach one day, capturing the world through photography, and continuing to work on cars—another passion that fuels my creativity and curiosity.
                </p>
            </div>
        </div>

        <p className="text-white/80 leading-relaxed mt-6">
            Above all, I'm committed to lifelong learning, personal growth, and making a meaningful impact through technology and innovation.
        </p>
    </div>
);


const EducationContent = () => (
    <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">My Educational Journey</h3>

        <div className="relative border-l-2 border-white/20 pl-6 pb-2">
            <div className="absolute w-4 h-4 rounded-full bg-white left-[-9px] top-2"></div>
            <div className="mb-8">
                <div className="flex flex-wrap justify-between items-center mb-1">
                    <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h4>
                    <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">December 2024</span>
                </div>
                <p className="text-white/60 italic mb-3">Kennesaw State University</p>
                <p className="text-white/80 leading-relaxed">
                    My studies focused on DevOps, cloud computing, web development, and network security, providing me with a strong technical foundation and hands-on experience with modern tools like JavaScript, TypeScript, and cloud platforms.
                </p>
            </div>
        </div>

        <p className="text-white/80 leading-relaxed mt-4">
            Balancing full-time work while completing my degree taught me resilience, time management, and the importance of perseverance. This journey has fueled my passion for building scalable, efficient solutions, and I'm excited to apply my knowledge and continue growing as a DevOps engineer.
        </p>
    </div>
);

const PassionContent = () => (
    <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">My Passion for Engineering</h3>
        <p className="mb-4 text-white/80 leading-relaxed">
            My passion for software engineering comes from a deep curiosity about how things work and a drive to build solutions that make a difference. From the moment I wrote my first line of code, I was hooked. The ability to turn ideas into reality through technology is what fuels me every day.
        </p>
        <p className="mb-4 text-white/80 leading-relaxed">
            I'm especially drawn to DevOps and cloud computing because they combine problem-solving, automation, and innovation. I love the challenge of optimizing systems, streamlining processes, and ensuring seamless integration between development and operations. Web development also excites me because of its ability to create intuitive, user-friendly experiences that reach people worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <Code className="h-8 w-8 text-white/60 mb-2" />
                <h4 className="text-lg font-semibold mb-1">Development</h4>
                <p className="text-white/70 text-sm">Crafting clean, efficient code and building intuitive interfaces</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <svg className="h-8 w-8 text-white/60 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 9V4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 10L21 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 15V20H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 14L3 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4 className="text-lg font-semibold mb-1">DevOps</h4>
                <p className="text-white/70 text-sm">Streamlining deployment and optimizing operations</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <svg className="h-8 w-8 text-white/60 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 8C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4 className="text-lg font-semibold mb-1">Cloud</h4>
                <p className="text-white/70 text-sm">Creating scalable, resilient infrastructure</p>
            </div>
        </div>

        <p className="text-white/80 leading-relaxed">
            For me, engineering is more than just writing code, it's about continuous learning, collaboration, and pushing the boundaries of what's possible. I'm eager to grow, contribute, and build solutions that not only solve problems but also inspire others.
        </p>
    </div>
);

const HobbiesContent = () => (
    <div className="text-white">
        <h3 className="text-2xl font-bold mb-4">Beyond Engineering</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6H9C7.34315 6 6 7.34315 6 9V15C6 16.6569 7.34315 18 9 18H15C16.6569 18 18 16.6569 18 15V9C18 7.34315 16.6569 6 15 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Photography</h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                    Capturing moments through the lens allows me to see the world from unique perspectives and express creativity in a way that's both fulfilling and exciting.
                </p>
            </div>

            <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Formula 1</h4>
                </div>
                <p className="text-white/80 leading-relaxed">
                    I'm a huge Formula 1 fan—the speed, precision, and engineering behind every car fascinates me. The combination of cutting-edge technology and human skill is truly inspiring.
                </p>
            </div>
        </div>

        <div className="bg-white/5 rounded-lg p-5 border border-white/10 mb-6">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13V21H5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 8L12 2L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h4 className="text-lg font-semibold">Automotive</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
                This love for motorsport extends to working on cars in general. Whether it's fine-tuning my own car or diving into hands-on projects with other vehicles, I find joy in understanding how every part works together to create something powerful and efficient.
            </p>
        </div>

        <p className="text-white/80 leading-relaxed">
            When I'm not under the hood or behind the camera, I'm exploring new tech, focusing on fitness and mental well-being, and continuously seeking ways to grow both personally and professionally.
        </p>
    </div>
);