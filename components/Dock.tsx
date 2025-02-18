'use client'

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconHome,

} from "@tabler/icons-react";
import {CircleUserRound, Cpu, Globe, Phone, FolderGit2} from "lucide-react"


const  Dock = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "About Me",
            icon: (
                <CircleUserRound className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
            title: "Tech Stack",
            icon: (
                <Cpu className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#techstack",
        },
        {
            title: "Projects",
            icon: (
                <FolderGit2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Availability",
            icon: (
                <Globe className="h-full w-full text-neutral-500 dark:text-neutral-300" />

            ),
            href: "#availability",
        },
        {
            title: "Contact Me",
            icon: (
                <Phone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#contact",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Emre-Diricanli?tab=repositories",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/emre-diricanli/",
        },

    ];
    return (
        <div className="flex fixed z-10 bottom-8 items-end lg:justify-center md:justify-end justify-end h-auto w-full md:pr-5 pr-5 ">
            <FloatingDock
                // mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
export default Dock;