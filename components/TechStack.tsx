"use client";
import React, { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

// Tech icons and data with levels and categories
const techData = [
  // Languages
  { name: "JavaScript", icon: <StackIcon name="js" />, level: 90, color: "#F7DF1E", category: "Languages" },
  { name: "TypeScript", icon: <StackIcon name="typescript" />, level: 85, color: "#3178C6", category: "Languages" },
  { name: "Java", icon: <StackIcon name="java" />, level: 70, color: "#007396", category: "Languages" },
  { name: "Python", icon: <StackIcon name="python" />, level: 65, color: "#3776AB", category: "Languages" },
  
  // Frameworks & Libraries
  { name: "React", icon: <StackIcon name="reactjs" />, level: 85, color: "#61DAFB", category: "Frameworks" },
  { name: "Next.js", icon: <StackIcon name="nextjs2" />, level: 80, color: "#ffffff", category: "Frameworks" },
  { name: "Node.js", icon: <StackIcon name="nodejs" />, level: 75, color: "#339933", category: "Frameworks" },
  { name: "Spring", icon: <StackIcon name="spring" />, level: 65, color: "#6DB33F", category: "Frameworks" },
  
  // DevOps & Tools
  { name: "Docker", icon: <StackIcon name="docker" />, level: 70, color: "#2496ED", category: "DevOps" },
  { name: "Kubernetes", icon: <StackIcon name="kubernetes" />, level: 65, color: "#326CE5", category: "DevOps" },
  { name: "AWS", icon: <StackIcon name="aws" />, level: 65, color: "#FF9900", category: "DevOps" },
  { name: "GitHub", icon: <StackIcon name="github" />, level: 85, color: "#f0f6fc", category: "DevOps" },
  
  // Databases
  { name: "PostgreSQL", icon: <StackIcon name="postgresql" />, level: 75, color: "#4169E1", category: "Databases" },
  { name: "MongoDB", icon: <StackIcon name="mongodb" />, level: 70, color: "#47A248", category: "Databases" },
  { name: "Appwrite", icon: <StackIcon name="appwrite" />, level: 65, color: "#ee2e64", category: "Databases" }
];

// Category colors
const categoryColors = {
  "Languages": "#9c78ff",
  "Frameworks": "#4ed8c8",
  "DevOps": "#ff7849",
  "Databases": "#4caf50"
};

// Animation variants
const orbitAnimationClockwise = {
  animate: {
    rotate: 360,
    transition: {
      duration: 150,
      ease: "linear",
      repeat: Infinity
    }
  }
};

const orbitAnimationCounterClockwise = {
  animate: {
    rotate: -360,
    transition: {
      duration: 120,
      ease: "linear",
      repeat: Infinity
    }
  }
};

const orbitAnimationMedium = {
  animate: {
    rotate: 360,
    transition: {
      duration: 180,
      ease: "linear",
      repeat: Infinity
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Fixed TechStack component
const TechStack = () => {
  // Timeline data
  const timelineData = [
    {
      year: "2024",
      title: "Advanced Cloud Technologies",
      description: "Deepened my knowledge of cloud technologies and DevOps practices, focusing on AWS, Docker, and Kubernetes."
    },
    {
      year: "2023",
      title: "Full Stack Development",
      description: "Expanded my skills to include modern full-stack development with Next.js, React, and Node.js."
    },
    {
      year: "2022",
      title: "Software Engineering Fundamentals",
      description: "Focused on software engineering fundamentals, Java programming, and database design."
    },
    {
      year: "2021",
      title: "Web Development Foundations",
      description: "Started my journey with HTML, CSS, and JavaScript, building my first web applications."
    }
  ];

  return (
    <section className="py-20 bg-black overflow-hidden" id="techstack">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            With a robust background in various technologies and frameworks, I bring a versatile approach to software engineering, 
            focusing on creating scalable and resilient systems through modern development practices.
          </p>
        </motion.div>

        {/* Visual Tech Orbit */}
        <TechOrbit />

        {/* Journey timeline */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-2xl font-bold text-white mb-12 text-center">
            My Journey With Technology
          </h3>

          <div className="relative">
            {/* Glowing timeline line */}
            <div className="absolute hidden sm:block left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-white/30 to-white/5 transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  side={index % 2 === 0 ? "right" : "left"}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Memoized Tech Orbit Component
const TechOrbit = memo(() => {
  const orbitsRef = useRef<HTMLDivElement>(null);
  
  // Default values for SSR
  const defaultRadii = {
    inner: 150,
    middle: 210,
    outer: 270,
    orbitSizes: {
      inner: 300,
      middle: 420,
      outer: 540
    }
  };
  
  // State for responsive values
  const [radii, setRadii] = React.useState(defaultRadii);
  
  // Calculate radii based on screen size
  useEffect(() => {
    const handleResize = () => {
      // For small screens
      if (window.innerWidth < 768) {
        setRadii({
          inner: 80,
          middle: 130,
          outer: 180,
          orbitSizes: {
            inner: 160,
            middle: 260,
            outer: 360
          }
        });
      }
      // For medium screens
      else if (window.innerWidth < 1024) {
        setRadii({
          inner: 120,
          middle: 170,
          outer: 220,
          orbitSizes: {
            inner: 240,
            middle: 340,
            outer: 440
          }
        });
      }
      // For large screens
      else {
        setRadii({
          inner: 150,
          middle: 210,
          outer: 270,
          orbitSizes: {
            inner: 300,
            middle: 420,
            outer: 540
          }
        });
      }
    };
    
    // Set initial size
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { inner, middle, outer, orbitSizes } = radii;
  
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-5xl mx-auto overflow-hidden">
      {/* Central core */}
      <motion.div
        variants={pulseAnimation}
        animate="animate"
        className="absolute top-1/2 left-1/2 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20"
      >
        <div className="w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 rounded-full bg-gradient-to-br from-white/40 to-white/10 flex items-center justify-center">
          <span className="text-white font-bold text-sm md:text-base lg:text-lg">Skills</span>
        </div>
        
        {/* Emanating rings */}
        <div className="absolute w-24 md:w-32 lg:w-36 h-24 md:h-32 lg:h-36 rounded-full border border-white/10 animate-ping-slow"></div>
        <div className="absolute w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 rounded-full border border-white/5 animate-ping-slower"></div>
      </motion.div>

      {/* Category legends */}
      <div className="absolute top-0 right-0 flex flex-col gap-2 bg-black/50 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-white/10 z-30">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center gap-2">
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full" style={{ backgroundColor: color }}></div>
            <span className="text-white/70 text-[10px] md:text-xs">{category}</span>
          </div>
        ))}
      </div>

      {/* Orbits with tech icons */}
      <div ref={orbitsRef} className="absolute inset-0">
        {/* Orbit 1 - Inner */}
        <motion.div
          variants={orbitAnimationClockwise}
          animate="animate"
          className="absolute top-1/2 left-1/2 rounded-full border border-white/5 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: orbitSizes.inner, height: orbitSizes.inner }}
        >
          {techData.slice(0, 4).map((tech, index) => (
            <TechNode 
              key={tech.name}
              tech={tech}
              index={index}
              total={4}
              radius={inner}
            />
          ))}
        </motion.div>

        {/* Orbit 2 - Middle */}
        <motion.div
          variants={orbitAnimationCounterClockwise}
          animate="animate"
          className="absolute top-1/2 left-1/2 rounded-full border border-white/5 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: orbitSizes.middle, height: orbitSizes.middle }}
        >
          {techData.slice(4, 10).map((tech, index) => (
            <TechNode 
              key={tech.name}
              tech={tech}
              index={index}
              total={6}
              radius={middle}
            />
          ))}
        </motion.div>

        {/* Orbit 3 - Outer */}
        <motion.div
          variants={orbitAnimationMedium}
          animate="animate"
          className="absolute top-1/2 left-1/2 rounded-full border border-white/5 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: orbitSizes.outer, height: orbitSizes.outer }}
        >
          {techData.slice(10).map((tech, index) => (
            <TechNode 
              key={tech.name}
              tech={tech}
              index={index}
              total={5}
              radius={outer}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Mobile hint */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-white/50 text-xs mb-2 md:hidden">
        Rotate device for best experience
      </div>
    </div>
  );
});
TechOrbit.displayName = 'TechOrbit';

// Tech Node component
interface TechNodeProps {
  tech: {
    name: string;
    icon: JSX.Element;
    level: number;
    color: string;
    category: string;
  };
  index: number;
  total: number;
  radius: number;
}

const TechNode = memo(({ tech, index, total, radius }: TechNodeProps) => {
  // Calculate position on circle
  const angle = (index / total) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  // Get color based on category
  const categoryColor = categoryColors[tech.category as keyof typeof categoryColors] || "#ffffff";

  return (
    <div
      className="absolute z-10"
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="relative group"
      >
        {/* Node with icon - responsive sizing */}
        <div 
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/20 shadow-glow"
          style={{ 
            boxShadow: `0 0 8px ${categoryColor}30, 0 0 4px ${categoryColor}20` 
          }}
        >
          <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center text-white/90 transition-all">
            {tech.icon}
          </div>
        </div>
        
        {/* Tooltip - show on tap for mobile, hover for desktop */}
        <div className="absolute -top-12 md:-top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1.5 md:px-3 md:py-2 shadow-xl w-max">
            <p className="text-white font-medium text-xs md:text-sm whitespace-nowrap">{tech.name}</p>
            <div className="flex items-center gap-1 md:gap-2 mt-1">
              <div className="w-full bg-white/10 h-1 md:h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full"
                  style={{ width: `${tech.level}%`, backgroundColor: categoryColor }}
                ></div>
              </div>
              <span className="text-white/70 text-[10px] md:text-xs">{tech.level}%</span>
            </div>
          </div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-black/80 border-r border-b border-white/10 transform rotate-45 absolute -bottom-1 md:-bottom-1.5 left-1/2 -ml-1 md:-ml-1.5"></div>
        </div>
      </motion.div>
    </div>
  );
});
TechNode.displayName = 'TechNode';

// Timeline Item component
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const TimelineItem = memo(({ year, title, description, side }: TimelineItemProps) => {
  return (
    <div className={`flex flex-col ${side === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
      <div className="md:w-1/2"></div>

      <div className="flex items-center justify-center md:justify-start relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 bg-gradient-to-br from-white to-white/70 text-black rounded-full flex items-center justify-center font-bold text-base shadow-[0_0_15px_rgba(255,255,255,0.3)]"
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
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors duration-300">
          <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
          <p className="text-white/70">{description}</p>
        </div>
      </motion.div>
    </div>
  );
});
TimelineItem.displayName = 'TimelineItem';

// Animation styles are now in globals.css
export default memo(TechStack);