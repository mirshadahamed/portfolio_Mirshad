'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'EXPERIENCE', emoji: '⌨️' },
    { id: 'philosophy', label: 'PHILOSOPHY', emoji: '⚙️' },
    { id: 'skills', label: 'TECH STACK', emoji: '💾' },
  ];

  const experiences = [
    {
      year: "2024",
      title: "FULL STACK DEVELOPER",
      company: "FREELANCE",
      description: "Building secure, scalable applications with modern tech stack for global clients.",
      tech: ["NEXT.JS", "REACT NATIVE", "FIREBASE", "TYPESCRIPT", "TAILWIND"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      year: "2023",
      title: "MOBILE DEVELOPER",
      company: "PERSONAL PROJECTS",
      description: "Developing cross-platform mobile solutions with focus on performance and security.",
      tech: ["KOTLIN", "REACT NATIVE", "ANDROID SDK", "MONGODB", "FIREBASE"],
      color: "from-purple-400 to-indigo-500"
    },
    {
      year: "2022",
      title: "WEB DEVELOPER",
      company: "SELF-TAUGHT",
      description: "Mastering web development through intensive learning and practical application.",
      tech: ["REACT", "NODE.JS", "EXPRESS", "JAVASCRIPT", "CSS3"],
      color: "from-green-400 to-emerald-500"
    }
  ];

  const skills = [
    {
      category: "FRONTEND",
      items: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION"],
      level: 95
    },
    {
      category: "BACKEND",
      items: ["NODE.JS", "FIREBASE", "MONGODB", "POSTGRESQL", "EXPRESS"],
      level: 88
    },
    {
      category: "MOBILE",
      items: ["REACT NATIVE", "KOTLIN", "ANDROID SDK", "EXPO", "JAVA"],
      level: 85
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24 font-mono relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_24px,#0ea5e9_25px)] bg-[size:50px_50px] opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,#0ea5e9_25px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Scan Line Effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header - Cyber Style */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
            <div className="relative">
              <span className="text-cyan-400 text-sm font-mono tracking-[0.5em] uppercase bg-black px-4 py-2 border border-cyan-400/30">
                00101010
              </span>
              <div className="absolute -inset-1 border border-cyan-400/20 blur-sm"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            <span className="text-white">ABOUT_</span>
            <span className="text-cyan-400">DEV</span>
            <span className="text-white">()</span>
            <span className="text-cyan-400">{"{"}</span>
            <span className="text-white">CODE</span>
            <span className="text-cyan-400">{"}"}</span>
          </h1>
          
          <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto tracking-wide">
            // BUILDING SECURE, SCALABLE SYSTEMS WITH MODERN ARCHITECTURE
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Profile Terminal */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Terminal Window */}
            <div className="bg-black border border-cyan-400/30 rounded-lg overflow-hidden mb-8">
              {/* Terminal Header */}
              <div className="bg-gray-900 px-4 py-3 border-b border-cyan-400/20 flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-cyan-400 font-mono text-sm tracking-wide">terminal@dev:~</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono">
                <div className="mb-6">
                  <p className="text-cyan-400 mb-2">$ whoami</p>
                  <p className="text-white text-xl font-bold tracking-wide">MIRSHAD_AHMED</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-cyan-400 mb-2">$ title</p>
                  <p className="text-white">FULL_STACK_DEVELOPER</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-cyan-400 mb-2">$ status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-400 text-sm">AVAILABLE_FOR_PROJECTS</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-cyan-400 mb-2">$ location</p>
                  <p className="text-white">SRI_LANKA</p>
                </div>
                
                <div>
                  <p className="text-cyan-400 mb-2">$ bio</p>
                  <p className="text-gray-400 leading-relaxed">
                    Passionate about building robust digital infrastructure. 
                    Specializing in scalable solutions with modern tech stack.
                  </p>
                </div>
                
                {/* Cursor */}
                <div className="flex items-center mt-6">
                  <span className="text-cyan-400">$</span>
                  <div className="w-3 h-5 bg-cyan-400 ml-2 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black border border-cyan-400/20 rounded p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
                <div className="text-gray-400 text-sm tracking-wide">PROJECTS</div>
                <div className="h-1 w-full bg-gray-800 mt-2 overflow-hidden">
                  <div className="h-full bg-cyan-400 w-3/4"></div>
                </div>
              </div>
              
              <div className="bg-black border border-cyan-400/20 rounded p-4">
                <div className="text-3xl font-bold text-cyan-400 mb-1">2+</div>
                <div className="text-gray-400 text-sm tracking-wide">YEARS</div>
                <div className="h-1 w-full bg-gray-800 mt-2 overflow-hidden">
                  <div className="h-full bg-cyan-400 w-2/3"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Main Content */}
          <div className="lg:w-3/5">
            {/* Cyber Tabs */}
            <div className="flex gap-1 mb-8 bg-black border border-cyan-400/20 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-3 font-mono tracking-wide ${
                    activeTab === tab.id
                      ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  <span>{tab.emoji}</span>
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div className="flex gap-6">
                        {/* Binary Year Indicator */}
                        <div className="flex flex-col items-center pt-1">
                          <div className="bg-black border border-cyan-400/30 rounded p-3">
                            <span className="text-cyan-400 font-mono text-sm font-bold">
                              {parseInt(exp.year).toString(2).padStart(8, '0')}
                            </span>
                          </div>
                          {index < experiences.length - 1 && (
                            <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400/20 to-transparent mt-4"></div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-black border border-cyan-400/20 rounded-lg p-6 group-hover:border-cyan-400/40 transition-all duration-300">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-white mb-1 font-mono tracking-wide">
                                {exp.title}
                              </h4>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                <p className="text-cyan-400 font-mono text-sm">{exp.company}</p>
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-cyan-400/10 rounded border border-cyan-400/20">
                              <span className="text-cyan-400 font-mono text-sm">[ {exp.year} ]</span>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-5 leading-relaxed font-mono">
                            // {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-black border border-cyan-400/10 text-gray-300 rounded text-sm font-mono hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Philosophy Tab */}
              {activeTab === 'philosophy' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Code Block Philosophy */}
                  <div className="bg-black border border-cyan-400/20 rounded-lg overflow-hidden">
                    <div className="bg-gray-900 px-4 py-3 border-b border-cyan-400/20">
                      <span className="text-cyan-400 font-mono text-sm">philosophy.js</span>
                    </div>
                    <div className="p-6 font-mono text-sm">
                      <div className="text-cyan-400 mb-4">// DEVELOPMENT PRINCIPLES</div>
                      
                      {[
                        { line: "1", code: "export const PRINCIPLES = {" },
                        { line: "2", code: "  CLEAN_CODE: 'Write maintainable, scalable systems'," },
                        { line: "3", code: "  PERFORMANCE: 'Optimize for speed and efficiency'," },
                        { line: "4", code: "  SECURITY: 'Build with security-first mindset'," },
                        { line: "5", code: "  SCALABILITY: 'Design for future growth'," },
                        { line: "6", code: "  INNOVATION: 'Leverage cutting-edge technology'," },
                        { line: "7", code: "};" },
                      ].map((item) => (
                        <div key={item.line} className="flex gap-4 mb-1">
                          <span className="text-gray-500 w-8">{item.line}</span>
                          <span className={`${item.code.includes("const") ? "text-purple-400" : 
                                           item.code.includes("//") ? "text-cyan-400" : 
                                           "text-gray-300"}`}>
                            {item.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Principles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "CODE QUALITY", desc: "Emphasis on clean, maintainable code architecture", icon: "🔐" },
                      { title: "PERFORMANCE", desc: "Optimized solutions for maximum efficiency", icon: "⚡" },
                      { title: "SECURITY", desc: "Security-first approach in all implementations", icon: "🛡️" },
                      { title: "SCALABILITY", desc: "Systems designed to scale with demand", icon: "📈" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-black border border-cyan-400/10 rounded-lg p-4 hover:border-cyan-400/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{item.icon}</span>
                          <h4 className="text-white font-bold font-mono tracking-wide">{item.title}</h4>
                        </div>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {skills.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <h4 className="text-xl font-bold text-white font-mono tracking-wide">
                            {category.category}
                          </h4>
                        </div>
                        <div className="px-3 py-1 bg-cyan-400/10 rounded border border-cyan-400/20">
                          <span className="text-cyan-400 font-mono text-sm">
                            LVL: {category.level}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Binary Progress Bar */}
                      <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${category.level}%` }}
                          transition={{ duration: 1, delay: catIndex * 0.2 }}
                        />
                        <div className="absolute inset-0 flex">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="h-full w-1 bg-black"
                              style={{ marginLeft: `${i * 5}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-4 py-2 bg-black border border-cyan-400/10 text-gray-300 rounded-lg font-mono text-sm hover:border-cyan-400/30 hover:text-white transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* System Status Bar */}
            <div className="mt-8 bg-black border border-cyan-400/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400 font-mono text-sm">SYSTEM_STATUS</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono">ONLINE</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-400 text-xs font-mono">UPTIME</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-gray-400 text-xs font-mono">RELIABILITY</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">&lt;50ms</div>
                  <div className="text-gray-400 text-xs font-mono">RESPONSE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Binary Numbers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;