'use client'
import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      title: "WEB APPLICATIONS",
      description: "Building high-performance web applications with cutting-edge technologies and optimized code.",
      longDescription: "Specializing in Next.js, React, and modern web technologies. Creating fast, scalable, and secure web applications with optimal performance and SEO optimization.",
      command: "> npm start web",
      tech: ["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "TAILWIND", "MONGODB"],
      stats: [
        { label: "Performance", value: "+95%" },
        { label: "Uptime", value: "99.9%" },
        { label: "SEO Score", value: "100/100" }
      ],
      terminal: [
        "$ npm init web_project",
        "$ installing dependencies...",
        "$ building application...",
        "$ deployment successful!",
        "> web_server_started: true"
      ]
    },
    {
      id: 2,
      title: "MOBILE APPLICATIONS",
      description: "Developing cross-platform mobile applications with native performance and smooth UX.",
      longDescription: "Expert in React Native and Flutter for building high-performance mobile apps. Focus on smooth animations, offline capabilities, and native device integration.",
      command: "> adb start mobile",
      tech: ["REACT NATIVE", "FLUTTER", "KOTLIN", "FIREBASE", "REDUX", "ANDROID SDK"],
      stats: [
        { label: "Cross-Platform", value: "100%" },
        { label: "FPS", value: "60fps" },
        { label: "App Store", value: "5.0★" }
      ],
      terminal: [
        "$ react-native init mobile_project",
        "$ compiling native modules...",
        "$ optimizing performance...",
        "$ building APK/IPA...",
        "> mobile_app_ready: true"
      ]
    },
    {
      id: 3,
      title: "UX/UI DESIGNS",
      description: "Creating intuitive user interfaces with focus on usability and visual appeal.",
      longDescription: "Designing user-centric interfaces with pixel-perfect precision. From wireframes to interactive prototypes, delivering exceptional user experiences.",
      command: "> figma export design",
      tech: ["FIGMA", "ADOBE XD", "USER RESEARCH", "PROTOTYPING", "DESIGN SYSTEMS", "ANIMATION"],
      stats: [
        { label: "User Satisfaction", value: "98%" },
        { label: "Prototype Speed", value: "2x Faster" },
        { label: "Design Quality", value: "Premium" }
      ],
      terminal: [
        "$ mkdir design_project",
        "$ creating wireframes...",
        "$ designing components...",
        "$ exporting assets...",
        "> design_exported: true"
      ]
    }
  ];

  const selectedService = services.find(s => s.id === activeService);

  return (
    <section className="relative bg-black text-white py-28 px-6 md:px-20 font-mono relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#f97316_50%,transparent_51%)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,#f97316_50%,transparent_51%)] bg-[size:40px_40px]" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Section Header with Glow - MATCHING ABOUT SECTION STYLE */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
            <span className="text-orange-500 text-lg tracking-widest">SERVICES</span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              What I Offer
            </span>
            <br />
            <span className="text-white">Digital Solutions</span>
          </h2>
          
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive development services to bring your digital ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Service Selection Panel */}
          <div className="space-y-6">
            <div className="bg-black/80 border border-orange-500/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-green-400 font-mono text-sm mb-4">
                $ select_service --
              </div>
              
              <div className="space-y-3">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 rounded border transition-all duration-300 font-mono ${
                      activeService === service.id
                        ? 'bg-orange-500/20 border-orange-500 text-white'
                        : 'bg-black/50 border-gray-800 text-gray-400 hover:border-orange-500/50 hover:text-white'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-orange-500">[{service.id}]</span>
                        <span className="font-bold tracking-wider">{service.title}</span>
                      </div>
                      <span className="text-xs text-green-400">
                        {activeService === service.id ? "ACTIVE" : "READY"}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      {service.description}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Stats Panel */}
            <div className="bg-black/80 border border-yellow-500/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-yellow-400 font-mono text-sm mb-4">
                $ service_stats --
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {selectedService.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-black/50 border border-gray-800 rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-orange-400 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal Output */}
          <div className="bg-black/90 border border-orange-500/30 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-900/50 px-4 py-3 border-b border-orange-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-mono">$</span>
                <span className="text-green-400 font-mono">{selectedService.command}</span>
              </div>
              <div className="text-xs text-gray-500 font-mono">
                STATUS: <span className="text-green-400">RUNNING</span>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="p-6 font-mono">
              <div className="space-y-2 mb-6">
                {selectedService.terminal.map((line, index) => (
                  <motion.div
                    key={index}
                    className="text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {line.startsWith('$') ? (
                      <span className="text-green-400">{line}</span>
                    ) : line.startsWith('>') ? (
                      <span className="text-orange-400">{line}</span>
                    ) : (
                      <span className="text-gray-400">{line}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <div className="text-yellow-400 mb-3">// TECH_STACK</div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded text-sm text-gray-300 font-mono"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: "#f97316",
                        backgroundColor: "rgba(249, 115, 22, 0.1)"
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="bg-gray-900/50 px-4 py-3 border-t border-orange-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-gray-400 font-mono">SERVICE_ACTIVE</span>
                  </div>
                  <span className="text-xs text-orange-400 font-mono">CPU: 42%</span>
                  <span className="text-xs text-blue-400 font-mono">RAM: 3.2GB</span>
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  <span className="text-yellow-400">[CTRL+C]</span> TO EXIT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Status Summary */}
        <div className="bg-black/80 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
          <div className="text-orange-400 font-mono text-sm mb-4">
            $ service_status --
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`p-4 border rounded font-mono ${
                  activeService === service.id
                    ? 'border-orange-500 bg-orange-500/10'
                    : 'border-gray-800 bg-black/50'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold tracking-wider">{service.title}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    activeService === service.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    ID: {service.id}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mb-3">{service.description}</div>
                <div className="text-xs text-green-400">STATUS: ONLINE</div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-800">
            <div className="text-center text-gray-500 text-sm font-mono">
              <span className="text-green-400">//</span> SERVICES READY FOR DEPLOYMENT <span className="text-green-400">//</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}