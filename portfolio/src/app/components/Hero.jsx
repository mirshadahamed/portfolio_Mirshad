'use client'
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImg from "../../public/asserts/my_photo.png";

export default function HeroSection() {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  
  const typingSpeed = 30; // ms per character
  const deletingSpeed = 20; // ms per character when deleting
  const pauseDuration = 2000; // pause before deleting
  const cursorBlinkSpeed = 500; // ms for cursor blink
  
  const fullText = "Building calm, high-performance products with care and precision. I design and engineer digital experiences with a focus on clarity, speed, and thoughtful details. From product strategy to production-ready builds.";
  
  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible(prev => !prev);
    }, cursorBlinkSpeed);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typing animation effect
  useEffect(() => {
    let timeout;
    
    if (isTyping && !isDeleting) {
      // Typing forward
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else if (isDeleting) {
      // Deleting backwards
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, start typing again
        setIsDeleting(false);
        timeout = setTimeout(() => {
          setCurrentIndex(0);
        }, 500);
      }
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentIndex, isTyping, isDeleting, fullText]);

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
    <section id="home" className="bg-black text-white pt-32 pb-24 px-6 md:px-20 font-mono relative overflow-hidden">
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
          {/* Welcome message - NOW AT TOP */}
          <div className="mb-6">
            <p className="text-lg text-gray-400 mb-8">
              Welcome to my digital space
            </p>
            
            {/* "Hi, I'm" - NOW BELOW WELCOME MESSAGE */}
            <div className="text-orange-500 text-sm font-medium mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span>Hi, I'm</span>
            </div>
          </div>

          {/* Name with subtle effect */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mt-2 text-white tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            MIRSHAD<span className="text-orange-500">.</span>AHAMED
          </motion.h1>

          {/* Title with clean design */}
          <div className="relative mt-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
              <span className="text-orange-500">&lt;</span>FULL STACK DEVELOPER<span className="text-orange-500">/&gt;</span>
            </h2>
            {/* Underline */}
            <div className="w-48 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mt-3"></div>
          </div>

          {/* Hero Copy with Typing Animation */}
          <div className="mt-10 text-gray-300 text-lg leading-relaxed min-h-[180px]">
            {/* Typing animation container */}
            <div className="relative">
              {/* Animated text with typewriter effect */}
              <motion.div 
                className="inline-block text-left font-mono whitespace-pre-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {displayedText}
                
                {/* Blinking cursor */}
                <motion.span
                  className={`inline-block ml-0.5 w-0.5 h-7 align-middle ${isCursorVisible ? 'bg-orange-500' : 'bg-transparent'}`}
                  animate={{
                    opacity: isCursorVisible ? 1 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>
              
              {/* Decorative typing elements */}
              <div className="absolute -left-6 top-0 flex items-center gap-1 opacity-30">
                <div className="w-1 h-1 rounded-full bg-orange-500"></div>
                <div className="w-1 h-1 rounded-full bg-orange-500"></div>
                <div className="w-1 h-1 rounded-full bg-orange-500"></div>
              </div>
            </div>
            
            {/* Status indicator for typing */}
            <motion.div 
              className="flex items-center gap-2 mt-4 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${isTyping && !isDeleting ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
                <span>
                  {isTyping && !isDeleting ? 'Typing...' : isDeleting ? 'Editing...' : 'Ready'}
                </span>
              </div>
              
              {/* Progress indicator */}
              <div className="ml-4 flex items-center gap-1">
                {[1, 2, 3].map((dot, i) => (
                  <motion.div
                    key={dot}
                    className="w-1 h-1 rounded-full bg-gray-600"
                    animate={{
                      scale: currentIndex > i * (fullText.length / 3) ? 1.2 : 0.8,
                      opacity: currentIndex > i * (fullText.length / 3) ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
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
        </motion.div>
      </div>
    </section>
  );
}