"use client";
import React, {JSX, useState} from "react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
// import { Icons } from "@/components/icons"; // Make sure this path is correct

// Tech categories and icons
const technologies = {
    languages: [
        {
            name: "JavaScript",
            icon: <StackIcon name="js" />,
            level: 90,
            color: "#F7DF1E"
        },
        {
            name: "TypeScript",
            icon: <StackIcon name="typescript" />
            ,
            level: 85,
            color: "#3178C6"
        },
        {
            name: "Java",
            icon: <StackIcon name="java" />
            ,
            level: 70,
            color: "#007396"
        },
        {
            name: "Python",
            icon: <StackIcon name="python" />,
            level: 65,
            color: "#3776AB"
        }
    ],
    frameworks: [
        {
            name: "React",
            icon: <StackIcon name="reactjs" />
            ,
            level: 85,
            color: "#61DAFB"
        },
        {
            name: "Next.js",
            icon: <StackIcon name="nextjs2" />,
            level: 80,
            color: "#000000"
        },
        {
            name: "Node.js",
            icon: <StackIcon name="nodejs" />,
            level: 75,
            color: "#339933"
        },
        {
            name: "Spring Boot",
            icon: <StackIcon name="spring" />,
            level: 65,
            color: "#6DB33F"
        }
    ],
    devops: [
        {
            name: "Docker",
            icon: <StackIcon name="docker" />,
            level: 70,
            color: "#2496ED"
        },
        {
            name: "Kubernetes",
            icon: <StackIcon name="kubernetes" />,
            level: 65,
            color: "#326CE5"
        },
        {
            name: "AWS",
            icon: <StackIcon name="aws" />,
            level: 65,
            color: "#FF9900"
        },
        {
            name: "GitHub",
            icon: <StackIcon name="github" />,
            level: 85,
            color: "#777676"
        }
    ],
    databases: [
        {
            name: "PostgreSQL",
            icon: <StackIcon name="postgresql" />,
            level: 75,
            color: "#4169E1"
        },
        {
            name: "MongoDB",
            icon: <StackIcon name="mongodb" />, // Check if this should be mongodb instead
            level: 70,
            color: "#47A248"
        },
        {
            name: "Appwrite",
            icon: <StackIcon name="appwrite" />,
            level: 65,
            color: "#ee2e64"
        }
    ]
};

type Category = "languages" | "frameworks" | "devops" | "databases";

// Updated tech interface to handle JSX.Element for icons
interface Tech {
    name: string;
    icon: JSX.Element;
    level: number;
    color: string;
}

const TechStack = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("languages");

    // // Placeholder is likely not needed since we're using JSX.Element for icons
    // const placeholder = (color: string) => (
    //     <div
    //         className="w-10 h-10 rounded-full"
    //         style={{ backgroundColor: color }}
    //     ></div>
    // );

    return (
        <section className="py-20 bg-black" id="techstack">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        With a robust background in various technologies and frameworks, I bring a versatile approach to software engineering, focusing on creating scalable and resilient systems through modern development practices.
                    </p>
                </motion.div>

                {/* Category Selection */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {(Object.keys(technologies) as Category[]).map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                                activeCategory === category
                                    ? "bg-white text-black"
                                    : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* Tech Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {technologies[activeCategory].map((tech, index) => (
                        <TechCard
                            key={tech.name}
                            tech={tech}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Tech Experience Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">My Journey With Technology</h3>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute hidden sm:block left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/50 to-white/5 transform -translate-x-1/2"></div>

                        <div className="space-y-12">
                            <TimelineItem
                                year="2024"
                                title="Advanced Cloud Technologies"
                                description="Deepened my knowledge of cloud technologies and DevOps practices, focusing on AWS, Docker, and Kubernetes."
                                side="right"
                            />

                            <TimelineItem
                                year="2023"
                                title="Full Stack Development"
                                description="Expanded my skills to include modern full-stack development with Next.js, React, and Node.js."
                                side="left"
                            />

                            <TimelineItem
                                year="2022"
                                title="Software Engineering Fundamentals"
                                description="Focused on software engineering fundamentals, Java programming, and database design."
                                side="right"
                            />

                            <TimelineItem
                                year="2021"
                                title="Web Development Foundations"
                                description="Started my journey with HTML, CSS, and JavaScript, building my first web applications."
                                side="left"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Updated interface for TechCardProps
interface TechCardProps {
    tech: Tech;
    index: number;
}

const TechCard = ({ tech, index }: TechCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center"
        >
            <div className="mb-4 w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                {tech.icon}
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>

            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-2">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                />
            </div>
            <div className="text-white/60 text-sm mt-2">{tech.level}%</div>
        </motion.div>
    );
};

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    side: "left" | "right";
}

const TimelineItem = ({ year, title, description, side }: TimelineItemProps) => {
    return (
        <div className={`flex flex-col ${side === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
            <div className="md:w-1/2"></div>

            <div className="flex items-center justify-center md:justify-start relative z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm"
                >
                    {year}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: side === "right" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/2 pt-4 md:pt-0 md:px-6"
            >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
                    <p className="text-white/70">{description}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default TechStack;