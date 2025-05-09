"use client";
import React, { useState, useCallback, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Icons
import { Code, GraduationCap, Heart, Rocket, User, Briefcase } from "lucide-react";

type TabType = "about" | "education" | "passion" | "hobbies" | "future";

// Pre-defined animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInScaleVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

// Memoized tabs array to prevent re-creation on each render
const tabs = [
  { id: "about", label: "About Me", icon: <User className="h-5 w-5" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
  { id: "passion", label: "Passion", icon: <Heart className="h-5 w-5" /> },
  { id: "hobbies", label: "Hobbies", icon: <Briefcase className="h-5 w-5" /> },
  { id: "future", label: "Future", icon: <Rocket className="h-5 w-5" /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  
  // Memoized tab change handler
  const handleTabChange = useCallback((tabId: TabType) => {
    setActiveTab(tabId);
  }, []);

  return (
    <section className="w-full py-20 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
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
            variants={fadeInScaleVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 lg:w-1/3 max-w-md mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="aspect-square relative overflow-hidden rounded-2xl border-2 border-white/10 bg-neutral-900">
              <Image
                src="/assets/texas.jpeg"
                alt="Emre Diricanli"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Emre Diricanli</h3>
                <p className="text-white/80">Software Engineer & DevOps Specialist</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2 mt-4">
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

          {/* Tabs and content */}
          <div className="w-full md:w-4/5 lg:w-2/3 mx-auto">
            {/* Tab navigation */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center overflow-x-auto pb-4 mb-6 hide-scrollbar"
            >
              <div className="flex gap-2 p-1 bg-neutral-900/50 backdrop-blur-sm rounded-full border border-white/10 mx-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id as TabType)}
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

            {/* Tab content */}
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

export default memo(About);


const AboutMeContent = memo(() => (
  <div className="text-white">
    <h3 className="text-2xl font-bold mb-6">Hi there! 👋</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="font-semibold mb-2 text-white/90">Who I Am</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Software Engineer with DevOps expertise</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Recent CS graduate who worked full-time during studies</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Passionate about cloud computing and web development</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="font-semibold mb-2 text-white/90">What I Do</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Build with JavaScript, TypeScript, and modern frameworks</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Create efficient, scalable cloud solutions</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Implement DevOps practices to streamline development</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
      <h4 className="font-semibold mb-2 text-white/90">Beyond Tech</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Entrepreneur running an online health supplement business</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Always exploring innovative ways to automate and improve processes</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Enjoy collaborating with diverse teams to solve challenging problems</span>
        </li>
      </ul>
    </div>
    
    <div className="text-sm text-white/80 italic border-l-2 border-white/20 pl-4">
      "I'm excited about the endless possibilities that technology offers. Let's connect and build something amazing together!"
    </div>
  </div>
));

const FutureContent = memo(() => (
  <div className="text-white">
    <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>

    <div className="space-y-4">
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="font-semibold mb-2 flex items-center">
          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 text-xs">1</span>
          Professional Growth
        </h4>
        <ul className="space-y-2 pl-8">
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Become an expert DevOps engineer bridging development and operations</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Master cloud computing platforms and infrastructure-as-code</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Build scalable solutions that enhance performance and reliability</span>
          </li>
        </ul>
      </div>

      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="font-semibold mb-2 flex items-center">
          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 text-xs">2</span>
          Technical Advancement
        </h4>
        <ul className="space-y-2 pl-8">
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Earn advanced cloud certifications (AWS, Azure, GCP)</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Contribute to meaningful open-source projects</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Stay at the forefront of technological innovation</span>
          </li>
        </ul>
      </div>

      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <h4 className="font-semibold mb-2 flex items-center">
          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 text-xs">3</span>
          Personal Aspirations
        </h4>
        <ul className="space-y-2 pl-8">
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Grow my online business with AI-driven solutions</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Live near the beach and pursue photography as a creative outlet</span>
          </li>
          <li className="flex items-start">
            <span className="text-white/60 mr-2">•</span>
            <span className="text-white/80 text-sm">Continue working on cars—a passion that fuels my creativity</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-sm text-white/80 italic border-l-2 border-white/20 pl-4 mt-4">
      "I'm committed to lifelong learning and making a meaningful impact through technology and innovation."
    </div>
  </div>
));


const EducationContent = memo(() => (
  <div className="text-white">
    <h3 className="text-2xl font-bold mb-4">My Educational Journey</h3>

    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
      <div className="flex flex-wrap justify-between items-center mb-2">
        <h4 className="text-lg font-semibold">Bachelor of Science in Software Engineering</h4>
        <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">December 2024</span>
      </div>
      <p className="text-white/60 italic mb-3 text-sm">Kennesaw State University</p>
      
      <h5 className="text-white/90 font-medium mb-2 text-sm">Focus Areas:</h5>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80">DevOps</div>
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80">Cloud Computing</div>
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80">Web Development</div>
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80">Network Security</div>
      </div>
      
      <h5 className="text-white/90 font-medium mb-2 text-sm">Technical Skills Gained:</h5>
      <ul className="space-y-1 mb-2">
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">JavaScript & TypeScript development</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Cloud platforms & infrastructure</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Software design patterns & best practices</span>
        </li>
      </ul>
    </div>

    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <h4 className="font-semibold mb-2 text-white/90">Life Lessons</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Resilience through balancing full-time work with studies</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Time management and prioritization skills</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Value of perseverance in achieving long-term goals</span>
        </li>
      </ul>
    </div>
    
    <div className="text-sm text-white/80 italic border-l-2 border-white/20 pl-4 mt-4">
      "My educational journey fueled my passion for building scalable, efficient solutions."
    </div>
  </div>
));

const PassionContent = memo(() => (
  <div className="text-white">
    <h3 className="text-2xl font-bold mb-4">My Passion for Engineering</h3>
    
    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
      <h4 className="font-semibold mb-2 text-white/90">What Drives Me</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Deep curiosity about how things work</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Drive to build solutions that make a difference</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Love for turning ideas into reality through technology</span>
        </li>
      </ul>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
      <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex flex-col items-center text-center">
        <Code className="h-6 w-6 text-white/60 mb-2" />
        <h4 className="font-semibold mb-1 text-sm">Development</h4>
        <ul className="space-y-1 text-xs text-white/70">
          <li>Clean, efficient code</li>
          <li>Intuitive interfaces</li>
          <li>Modern frameworks</li>
        </ul>
      </div>
      <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex flex-col items-center text-center">
        <svg className="h-6 w-6 text-white/60 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 9V4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 10L21 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 15V20H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 14L3 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h4 className="font-semibold mb-1 text-sm">DevOps</h4>
        <ul className="space-y-1 text-xs text-white/70">
          <li>CI/CD pipelines</li>
          <li>Automated testing</li>
          <li>Container orchestration</li>
        </ul>
      </div>
      <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex flex-col items-center text-center">
        <svg className="h-6 w-6 text-white/60 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 8C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h4 className="font-semibold mb-1 text-sm">Cloud</h4>
        <ul className="space-y-1 text-xs text-white/70">
          <li>Scalable infrastructure</li>
          <li>Multi-region deployments</li>
          <li>Cost optimization</li>
        </ul>
      </div>
    </div>

    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
      <h4 className="font-semibold mb-2 text-white/90">Why DevOps & Cloud?</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Perfect combination of problem-solving, automation, and innovation</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Love the challenge of optimizing systems and streamlining processes</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Ensuring seamless integration between development and operations</span>
        </li>
      </ul>
    </div>
    
    <div className="text-sm text-white/80 italic border-l-2 border-white/20 pl-4">
      "Engineering is about continuous learning, collaboration, and pushing the boundaries of what's possible."
    </div>
  </div>
));

const HobbiesContent = memo(() => (
  <div className="text-white">
    <h3 className="text-2xl font-bold mb-4">Beyond Engineering</h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
      <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6H9C7.34315 6 6 7.34315 6 9V15C6 16.6569 7.34315 18 9 18H15C16.6569 18 18 16.6569 18 15V9C18 7.34315 16.6569 6 15 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h4 className="font-semibold text-sm">Photography</h4>
        </div>
        <ul className="space-y-1 pl-6 text-xs text-white/80">
          <li className="list-disc">Capturing unique perspectives</li>
          <li className="list-disc">Creative expression</li>
          <li className="list-disc">Travel documentation</li>
        </ul>
      </div>

      <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h4 className="font-semibold text-sm">Formula 1</h4>
        </div>
        <ul className="space-y-1 pl-6 text-xs text-white/80">
          <li className="list-disc">Speed and precision</li>
          <li className="list-disc">Engineering excellence</li>
          <li className="list-disc">Team strategy</li>
        </ul>
      </div>

      <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13V21H5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 8L12 2L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h4 className="font-semibold text-sm">Automotive</h4>
        </div>
        <ul className="space-y-1 pl-6 text-xs text-white/80">
          <li className="list-disc">Fine-tuning performance</li>
          <li className="list-disc">Hands-on projects</li>
          <li className="list-disc">Mechanical problem-solving</li>
        </ul>
      </div>
    </div>

    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
      <h4 className="font-semibold mb-2 text-white/90">Why These Interests?</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">They all involve precision, attention to detail, and technical knowledge</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">Each provides a creative outlet that complements my technical work</span>
        </li>
        <li className="flex items-start">
          <span className="text-white/60 mr-2">•</span>
          <span className="text-white/80 text-sm">They help me maintain balance while challenging me in different ways</span>
        </li>
      </ul>
    </div>

    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <h4 className="font-semibold mb-2 text-white/90">Other Activities</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80 text-center">Fitness</div>
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80 text-center">Reading</div>
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80 text-center">Tech Exploration</div>
        <div className="bg-white/10 rounded px-3 py-2 text-xs text-white/80 text-center">Personal Growth</div>
      </div>
    </div>
  </div>
));