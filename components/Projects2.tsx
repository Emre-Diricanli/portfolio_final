"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, X } from "lucide-react";

// Define project data structure
interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink?: string;
    category: "web" | "fullstack" | "devops" | "mobile";
}

// Project data
const projects: Project[] = [
    {
        id: 1,
        title: "Alpha Data Tech",
        description: "My Web Development Company",
        longDescription: "Alpha Data Tech LLC is a Georgia-based web development and IT solutions company dedicated to providing high-quality, customized digital services at competitive prices. Specializing in website design, online development, and a variety of tech solutions, Alpha Data Tech helps businesses build their online presence and streamline operations through innovative technology and personalized support.",
        image: "/assets/AlphaDataTech.png",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        githubLink: "https://github.com/Emre-Diricanli/alpha_data_tech_saas",
        liveLink: "https://master.d34rv1vum3rnjj.amplifyapp.com/",
        category: "web"
    },
    {
        id: 2,
        title: "LedgerLinkPro",
        description: "Full Stack Business Ledger App",
        longDescription: "LedgerLink Pro is a cutting-edge, web-based accounting and finance management software designed to revolutionize the way businesses handle their financial transactions and reporting. This innovative platform provides a comprehensive suite of tools that cater to the intricate needs of modern accounting, blending user-friendly design with robust functionality.",
        image: "/assets/LedgerLinkPro.png",
        technologies: ["React", "Docker", "C#", "TypeScript"],
        githubLink: "https://github.com/Emre-Diricanli/LedgerLink-Pro",
        category: "fullstack"
    },
    {
        id: 3,
        title: "Owl Judge",
        description: "Web based project judging app",
        longDescription: "Owl Judge is a sophisticated web application developed to streamline the process of project evaluation in academic and professional settings. This platform enables judges to efficiently review and score submissions using customizable rubrics, while providing participants with transparent feedback. The intuitive interface supports a variety of project types and evaluation formats, making it adaptable to different contexts from hackathons to semester projects.",
        image: "/assets/owljudge.png",
        technologies: ["JavaScript", "CSS", "HTML", ".NET"],
        githubLink: "https://github.com/Haktan8/Owl-Judge",
        category: "fullstack"
    },
    {
        id: 4,
        title: "Store It",
        description: "Google Drive Clone",
        longDescription: "Experience a powerful, user-friendly platform featuring secure Appwrite-based signup, login, and logout, along with seamless file uploads, viewing, and sharing. Stay organized with renaming, deleting, sorting, and global search capabilities, all while enjoying a clean, responsive design. The dynamic dashboard provides storage insights, recent uploads, and file summaries, while leveraging the latest React 19, Next.js 15, and modern code architecture for optimal performance and reusability.",
        image: "/assets/file.png",
        technologies: ["Next.js", "AppWrite", "Cloud Storage"],
        githubLink: "https://github.com/Emre-Diricanli/StorageManagementSolution",
        category: "fullstack"
    },
    {
        id: 5,
        title: "Metro Private Securities",
        description: "Local Security Agency Website",
        longDescription: "Metro Private Securities is a professional security company providing comprehensive protection services, including armed and unarmed guards, surveillance monitoring, and personal security, delivered by highly trained professionals committed to ensuring client safety and peace of mind.",
        image: "/assets/mps.png",
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
        githubLink: "https://github.com/Emre-Diricanli/mps",
        liveLink: "https://mps-drab.vercel.app/",
        category: "web"
    },
    {
        id: 6,
        title: "Restate",
        description: "Zillow Clone",
        longDescription: "Metro Private Securities is a professional security company providing comprehensive protection services, including armed and unarmed guards, surveillance monitoring, and personal security, delivered by highly trained professionals committed to ensuring client safety and peace of mind.",
        image: "/assets/restate.png",
        technologies: ["Expo", "AppWrite", "TypeScript", "TailwindCSS"],
        githubLink: "https://github.com/adrianhajdin/react_native-restate/blob/main/README.md",
        category: "mobile"
    },
    {
        id: 7,
        title: "DreamScape",
        description: "AI Dream Interpreter",
        longDescription: "This app is a dream interpreter that analyzes descriptions of your dreams, identifies common symbols like \"flying\" or \"water,\" and provides psychological interpretations of what these symbols might mean. It saves your dream history locally so you can review past interpretations, and includes a dark/light mode toggle.",
        image: "/assets/dreamscape.png",
        technologies: ["Next.Js", "Supabase", "TypeScript", "TailwindCSS", "OpenAI API"],
        githubLink: "https://github.com/Emre-Diricanli/Dreamy2",
        liveLink: "https://dreamy-alpha.vercel.app",
        category: "fullstack"
    }
];

const Projects2 = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Filter projects based on selected category
    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="py-20 bg-black" id="projects">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        A collection of my recent work, showcasing my skills in web development,
                        full-stack applications, and cloud solutions.
                    </p>
                </motion.div>

                {/* Project Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {["all", "web", "fullstack", "devops", "mobile"].map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                                activeFilter === category
                                    ? "bg-white text-black"
                                    : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-56">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p className="text-white/70">{project.description}</p>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80"
                                            >
                        {tech}
                      </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80">
                        +{project.technologies.length - 3}
                      </span>
                                        )}
                                    </div>

                                    <button
                                        className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* No projects message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-12 p-8 bg-white/5 rounded-xl"
                    >
                        <p className="text-white/70 text-lg">
                            No projects in this category yet. Check back soon!
                        </p>
                    </motion.div>
                )}

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25 }}
                                className="bg-neutral-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative h-72 md:h-96">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-contain"
                                    />
                                    <button
                                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-6 md:p-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <p className="text-white/70 mb-6">{selectedProject.longDescription}</p>

                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/80"
                                                >
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                                        >
                                            <Github size={18} />
                                            View on GitHub
                                        </a>

                                        {selectedProject.liveLink && (
                                            <a
                                                href={selectedProject.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-white/90 text-black rounded-full transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                View Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects2;