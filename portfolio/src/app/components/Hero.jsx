'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "../../public/asserts/my_photo.png";

export default function HeroSection() {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimatedSkills([
        { label: "UX/UI", value: "80%" },
        { label: "Mobile Application", value: "60%" },
        { label: "Web Application", value: "70%" },
      ]);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="bg-black text-white pt-32 pb-24 px-6 md:px-20 font-mono relative overflow-hidden">
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-yellow-600/5 to-orange-400/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content - Minimal Modern Style */}
        <motion.div 
          className="max-w-xl text-center md:text-left md:mr-16 ml-0 md:ml-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Minimal greeting */}
          <div className="mb-8">
            <div className="text-orange-500 text-sm font-medium mb-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span>Hi, I'm</span>
            </div>
            <p className="text-lg text-gray-400">
              Welcome to my digital space
            </p>
          </div>

          {/* Name with subtle effect */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mt-2 text-white tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            MIRSHAD<span className="text-orange-500">.</span>AHAMED
          </motion.h1>

          {/* Title with clean design */}
          <div className="relative mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
              <span className="text-orange-500">&lt;</span>FULL STACK DEVELOPER<span className="text-orange-500">/&gt;</span>
            </h2>
            {/* Underline */}
            <div className="w-48 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mt-3"></div>
          </div>

          {/* Download Button - Clean Modern Style */}
          <div className="mt-12">
            <motion.button
              className="group relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Main button */}
              <div className="relative bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-lg py-4 px-8 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/30">
                {/* Button content */}
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={isHovering ? { y: [-2, 2, -2] } : { y: 0 }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.div>
                  <span className="font-bold tracking-wider text-lg">
                    Download CV
                  </span>
                  <motion.span
                    animate={isHovering ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    ↓
                  </motion.span>
                </div>
              </div>
            </motion.button>
          </div>

          {/* Skills - Clean Minimal Style */}
          <div className="mt-16 space-y-6">
            <div className="text-orange-500 text-lg font-medium mb-6">
              Core Competencies
            </div>
            
            {animatedSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium tracking-wide">
                    {skill.label}
                  </span>
                  <span className="text-orange-500 text-sm font-bold">{skill.value}</span>
                </div>
                
                {/* Progress bar container - Clean design */}
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  {/* Progress bar */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500"
                    initial={{ width: 0 }}
                    animate={{ width: skill.value }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image - Clean Minimal Style */}
        <motion.div 
          className="mt-16 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Simple Image Container */}
          <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] overflow-hidden group">
            {/* Main Image */}
            <div className="relative w-full h-full">
              <Image
                src={profileImg}
                alt="Profile"
                className="object-cover object-center rounded-2xl"
                fill
                priority
                sizes="(max-width: 768px) 256px, 500px"
                style={{ objectPosition: "center 25%" }}
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-orange-500 rounded-tr-2xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl"></div>
          </div>
          
          {/* Tech Stack Badges - Clean Design */}
          <div className="flex justify-center gap-4 mt-8 md:mt-12">
            <motion.div
              className="px-4 py-2 bg-gray-900/50 rounded-lg backdrop-blur-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-orange-400 text-sm font-medium">REACT</span>
            </motion.div>
            <motion.div
              className="px-4 py-2 bg-gray-900/50 rounded-lg backdrop-blur-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className="text-yellow-400 text-sm font-medium">NEXT.JS</span>
            </motion.div>
            <motion.div
              className="px-4 py-2 bg-gray-900/50 rounded-lg backdrop-blur-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="text-orange-400 text-sm font-medium">NODE.JS</span>
            </motion.div>
          </div>
          
          {/* Status Indicator */}
          {/* <div className="absolute -bottom-20 right-4 md:right-8">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-orange-500/30">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-gray-300">Available for work</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}