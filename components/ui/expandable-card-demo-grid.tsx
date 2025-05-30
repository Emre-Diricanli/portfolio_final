"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    // @ts-ignore
    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />

                )}

            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >

                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={2500}
                                    height={2500}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-top object-contain"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">

                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base"
                                        >
                                            {active.description}
                                        </motion.p>

                                    </div>

                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">

                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}

                                    </motion.div>

                                </div>

                            </div>
                        </motion.div>

                    </div>

                ) : null}
            </AnimatePresence>


            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">

                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={900}
                                    height={900}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-60 w-full rounded-xl object-contain object-top"
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                                >
                                    {card.description}
                                </motion.p>

                            </div>

                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />

        </motion.svg>

    );
};

const cards = [
    {
        description: "My Web Development Company",
        title: "Alpha Data Tech",
        src: "/assets/AlphaDataTech.png",
        ctaText: "Check out the source code",
        ctaLink: "https://github.com/Emre-Diricanli/StorageManagementSolution",
        content: () => {
            return (
                <>
                    <p>
                        Alpha Data Tech LLC is a Georgia-based web development and IT solutions company dedicated to providing high-quality, customized digital services at competitive prices. Specializing in website design, online development, and a variety of tech solutions, Alpha Data Tech helps businesses build their online presence and streamline operations through innovative technology and personalized support.                    </p>
                </>
            );
        },

    },
    {
        description: "Full Stack Business Ledger App",
        title: "LedgerLinkPro",
        src: "/assets/LedgerLinkPro.png",
        ctaText: "Check out the source code",
        ctaLink: "https://github.com/Emre-Diricanli/LedgerLink-Pro",
        content: () => {
            return (
                <p>
                    LedgerLink Pro is a cutting-edge, web-based accounting and finance management software designed to revolutionize the way businesses handle their financial transactions and reporting. This innovative platform provides a comprehensive suite of tools that cater to the intricate needs of modern accounting, blending user-friendly design with robust functionality.
                </p>
            );
        },
    },

    {
        description: "Web based project judging app",
        title: "Owl Judge",
        src: "/assets/owljudge.png",
        ctaText: "Check out the source code",
        ctaLink: "https://github.com/Haktan8/Owl-Judge",
        content: () => {
            return (
                <p>
                    Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br /> Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.
                </p>
            );
        },
    },
    {
        description: "Google Drive Clone",
        title: "Store It",
        src: "/assets/file.png",
        ctaText: "Check out the source code",
        ctaLink: "https://github.com/Emre-Diricanli/StorageManagementSolution",
        content: () => {
            return (
                <>
                    <p>
                        Experience a powerful, user-friendly platform featuring secure Appwrite-based signup, login, and logout, along with seamless file uploads, viewing, and sharing. Stay organized with renaming, deleting, sorting, and global search capabilities, all while enjoying a clean, responsive design. The dynamic dashboard provides storage insights, recent uploads, and file summaries, while leveraging the latest React 19, Next.js 15, and modern code architecture for optimal performance and reusability.
                    </p>
                </>
            );
        },
    },
];
