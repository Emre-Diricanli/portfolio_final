import React from "react";
import { ExpandableCardDemo } from "@/components/ui/expandable-card-demo-grid";

const Projects = () => {
  return (
    <section
      className="py-10 pb-5 z-0 relative items-center justify-center w-full"
      id="projects"
    >
      <div className="max-w-7xl mx-auto  text-center pb-6">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans text-white pb-5">
          Projects
        </h2>
      </div>
      <div>
        <ExpandableCardDemo />
      </div>
    </section>
  );
};
export default Projects;
