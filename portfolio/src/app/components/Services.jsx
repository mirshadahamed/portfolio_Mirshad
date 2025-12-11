'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import img from '../../public/asserts/web.png';
import img1 from '../../public/asserts/mobile.png';
import img2 from '../../public/asserts/uiux.png';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Applications",
      description: "Turning your big web ideas into functional, reliable, and user-loving sites.",
      image: img,
      command: "startWebServer()",
      tech: ["React", "Next.js", "Node.js", "Express"]
    },
    {
      id: 2,
      title: "Mobile Application",
      description: "Building seamless mobile apps with modern technologies.",
      image: img1,
      command: "buildMobileApp()",
      tech: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      id: 3,
      title: "UX Designs",
      description: "Crafting human-centered designs that deliver smooth user experiences.",
      image: img2,
      command: "designUserInterface()",
      tech: ["Figma", "Adobe XD", "User Research", "Prototyping"]
    }
  ];

  return (
    <section className="bg-black text-white py-10 px-6 font-mono">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide text-gray-300 mb-4">
          <span className="text-orange-500">//</span> SERVICES
        </h2>
        <div className="text-gray-500 max-w-2xl mx-auto text-lg">
          <span className="text-green-500">/*</span> Building scalable, user-focused applications with clean, efficient code <span className="text-green-500">*/</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
          >
            {/* Card with new hover effects */}
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all duration-300 group-hover:border-orange-500 group-hover:shadow-xl group-hover:shadow-orange-500/20 overflow-hidden">
              
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-yellow-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Glowing corner effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500 to-transparent rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-600 to-transparent rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              {/* Command Terminal Header */}
              <div className="mb-4 p-3 bg-black/50 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-500 text-sm">service_{service.id}.js</span>
                </div>
                <div className="text-green-400 font-bold group-hover:text-orange-400 transition-colors duration-300">
                  <span className="text-gray-500">$</span> {service.command}
                </div>
              </div>

              {/* Image with hover effect */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    className="w-40 h-40 object-cover rounded-full border-2 border-gray-800 group-hover:border-orange-500 group-hover:scale-105 transition-all duration-300" 
                  />
                  <div className="absolute -bottom-2 -right-2 bg-black px-3 py-1 rounded-full border border-gray-700 text-xs group-hover:border-orange-500 group-hover:bg-orange-900/30 transition-all duration-300">
                    <span className="text-orange-500 group-hover:text-yellow-400 transition-colors duration-300">{service.tech[0]}</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Tech Stack with hover effects */}
              <div className="mt-6 pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <div className="text-green-400 text-sm mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  // tech_stack
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700 group-hover:border-orange-500 group-hover:bg-gray-900 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse group-hover:animate-none group-hover:bg-orange-500 transition-colors duration-300"></div>
                <span className="text-xs text-gray-500">status: <span className="text-green-400 group-hover:text-orange-400 transition-colors duration-300">available</span></span>
              </div>

              {/* Hover indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 text-xs">
                ↓ hover active
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Terminal Footer */}
      <div className="mt-16 max-w-3xl mx-auto bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="text-green-400 mb-3">$ services --status</div>
        <div className="text-gray-300 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Web Applications: <span className="text-orange-500">Ready for deployment</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Mobile Applications: <span className="text-orange-500">Cross-platform support</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>UX Designs: <span className="text-orange-500">User-centric approach</span></span>
          </div>
        </div>
        <div className="mt-4 text-gray-500 text-sm">
          <span className="text-green-500">//</span> All services include maintenance & support
        </div>
      </div>
    </section>
  );
}