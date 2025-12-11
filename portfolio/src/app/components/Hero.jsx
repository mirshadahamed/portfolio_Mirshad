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
      {/* Grid Background with orange/yellow theme */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-600/10 to-orange-400/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-700"></div>

      <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content - Orange/Yellow Style */}
        <motion.div 
          className="max-w-xl text-center md:text-left md:mr-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style greeting */}
          <div className="mb-6">
            <div className="text-green-400 text-lg mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>$ user_profile</span>
            </div>
            <p className="text-xl">
              <span className="text-orange-500 font-bold">[SYSTEM]</span> HI, I AM
            </p>
          </div>

          {/* Name with glow effect */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mt-2 text-gray-300 tracking-tight"
            animate={{
              textShadow: [
                "0 0 10px rgba(249, 115, 22, 0.5)",
                "0 0 20px rgba(249, 115, 22, 0.8)",
                "0 0 10px rgba(249, 115, 22, 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            MIRSHAD<span className="text-orange-500">_</span>AHAMED
          </motion.h1>

          {/* Title with orange/yellow gradient */}
          <div className="relative mt-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-600 to-orange-400 rounded-lg blur opacity-30"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold relative bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-300 text-transparent bg-clip-text">
              <span className="bg-black/50 px-4 py-2 rounded-lg">FULL_STACK_DEV</span>
            </h2>
            {/* Scan line - orange */}
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent animate-pulse"></div>
          </div>

          {/* Download Button - Orange/Yellow Style */}
          <div className="mt-10">
            <motion.button
              className="group relative overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer glow - orange/yellow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-600 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Scanning line - orange */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 animate-scan"></div>
              
              {/* Main button */}
              <div className="relative bg-black border-2 border-orange-500/50 rounded-lg py-4 px-8 group-hover:border-yellow-500 transition-all duration-300">
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={isHovering ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-orange-400"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.div>
                  <span className="text-white font-bold tracking-wider text-lg">
                    DOWNLOAD_CV
                  </span>
                  <motion.span
                    animate={isHovering ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.5 }}
                    className="text-yellow-400"
                  >
                    →
                  </motion.span>
                </div>
                
                {/* Progress indicator - orange gradient */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500"
                  initial={{ width: "0%" }}
                  animate={isHovering ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>

          {/* Skills - Orange/Yellow Style */}
          <div className="mt-12 space-y-6">
            <div className="text-green-400 text-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>$ system_status</span>
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
                  <span className="text-gray-300 font-mono tracking-wide">
                    [{skill.label.replace(/\s+/g, '_').toUpperCase()}]
                  </span>
                  <span className="text-orange-400 text-sm font-bold">{skill.value}</span>
                </div>
                
                {/* Progress bar container */}
                <div className="w-full bg-gray-900 h-3 rounded-full overflow-hidden border border-gray-800">
                  {/* Glowing progress bar - orange gradient */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 relative"
                    initial={{ width: 0 }}
                    animate={{ width: skill.value }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.3 }}
                  >
                    {/* Scan effect on progress bar */}
                    <motion.div
                      className="absolute top-0 right-0 h-full w-2 bg-white/50"
                      animate={{
                        x: ["0%", "100%", "0%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Percentage indicator dots - orange */}
                <div className="flex justify-between mt-1">
                  {[0, 25, 50, 75, 100].map((percent) => (
                    <div
                      key={percent}
                      className={`w-1.5 h-1.5 rounded-full ${
                        parseInt(skill.value) >= percent ? 'bg-orange-400' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image - Orange/Yellow Style with Enhanced Glow Rings */}
        <motion.div 
          className="mt-16 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Outer glow ring - orange/yellow */}
          <div className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-r from-orange-500 via-yellow-600 to-orange-400 opacity-20 blur-xl animate-pulse"></div>
          
          {/* Middle glow ring - pulse effect */}
          <motion.div 
            className="absolute -inset-3 md:-inset-5 rounded-full border border-orange-500/30 glow-ring"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Spinning ring with dots - Main glow effect */}
          <div className="absolute -inset-2 md:-inset-4">
            {/* Spinning ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-orange-500/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Glowing dots on the ring */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 10px #f97316",
                    "0 0 20px #f97316",
                    "0 0 10px #f97316",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-yellow-600 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 10px #ca8a04",
                    "0 0 20px #ca8a04",
                    "0 0 10px #ca8a04",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 10px #fb923c",
                    "0 0 20px #fb923c",
                    "0 0 10px #fb923c",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 10px #eab308",
                    "0 0 20px #eab308",
                    "0 0 10px #eab308",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </motion.div>

            {/* Inner ring - reverse spin */}
            <motion.div
              className="absolute inset-3 md:inset-4 rounded-full border border-yellow-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Floating particles */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-500/70 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-300/70 rounded-full"
              animate={{
                rotate: -360,
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />
          </div>
          
          {/* Image container - FIXED IMAGE SCALING */}
          <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-gray-900 group">
            {/* Grid overlay - orange */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(249,115,22,0.1)_50%,transparent_52%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Scan line effect - orange */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 animate-scan"></div>
            
            {/* Image - FIXED: Better object positioning and scaling */}
            <div className="relative w-full h-full">
              <Image
                src={profileImg}
                alt="Profile"
                className="object-cover object-center transform scale-100 group-hover:scale-100 transition-transform duration-500"
                fill
                priority
                sizes="(max-width: 768px) 256px, 500px"
                style={{ objectPosition: "center 25%" }} /* Adjust this to show face properly */
              />
            </div>
            
            {/* Data overlay - orange */}
            {/* <div className="absolute bottom-20 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-orange-400 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>SYSTEM_OPERATOR</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  [STATUS: ONLINE]
                </div>
              </div>
            </div> */}
          </div>
          
          {/* Floating tech badges - orange theme with improved animations */}
          <motion.div
            className="absolute -top-4 -right-4 bg-black/80 border border-orange-500/50 rounded-lg px-3 py-1 text-xs text-orange-400 backdrop-blur-sm z-20"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            REACT
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 bg-black/80 border border-yellow-500/50 rounded-lg px-3 py-1 text-xs text-yellow-400 backdrop-blur-sm z-20"
            animate={{ 
              y: [0, 8, 0],
              rotate: [0, -5, 0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            NEXT.JS
          </motion.div>
          
          {/* Additional floating badge */}
          <motion.div
            className="absolute -top-6 left-1/4 bg-black/80 border border-orange-300/50 rounded-lg px-2 py-1 text-[10px] text-orange-300 backdrop-blur-sm z-20"
            animate={{ 
              x: [0, 10, 0, -10, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            NODE.JS
          </motion.div>
        </motion.div>
      </div>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3),
                        0 0 40px rgba(249, 115, 22, 0.2),
                        0 0 60px rgba(249, 115, 22, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(249, 115, 22, 0.5),
                        0 0 60px rgba(249, 115, 22, 0.3),
                        0 0 90px rgba(249, 115, 22, 0.1);
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .glow-ring {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}