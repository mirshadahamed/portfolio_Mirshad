'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // 取消注释这行
import Card1 from "../../public/asserts/SM-.jpeg";
 import Card2 from "../../public/asserts/bucksy.jpg"; 
import Card3 from "../../public/asserts/think-edge.png";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'web', label: 'WEB APPS' },
    { id: 'mobile', label: 'MOBILE APPS' },
    { id: 'fullstack', label: 'FULL STACK' },
  ];

  const projects = [
    {
      id: 1,
      title: "VEHICLE SPARE PARTS",
      category: "web",
      description: "Modern online vehicle spare parts application with real-time features and interactive UI.",
      longDescription: "A feature-rich social media platform built with modern web technologies. Includes user profiles, news feed, real-time messaging, media sharing, and engagement analytics.",
      tech: ["NEXT.JS", "TAILWIND CSS", "MONGO DB", "AUTH"],
      status: "LIVE",
      // liveUrl: "https://social-app-demo.com",
      githubUrl: "https://github.com/mirshadahamed/SM-Motors.git",
      features: ["Real-time Chat", "Media Upload", "User Analytics", "Notifications"],
      stats: [
        { label: "Users", value: "500+" },
        { label: "Uptime", value: "99.8%" },
        { label: "Load Time", value: "1.5s" }
      ],
      image: Card1, // 使用导入的图片
    },
    {
      id: 2,
      title: "FITNESS TRACKER APP",
      category: "mobile",
      description: " Personal Finance Tracker Mobile Application with finances tracking, budgeting, and meaningful insights..",
      longDescription: "Kotlin mobile app for fitness enthusiasts. Tracks workouts, calories, and progress. Includes social features, workout plans, and integration with wearables.",
      tech: ["KOTLIN", "JAVA","SQLite"],
      status: "DEPLOYED",
      // liveUrl: "https://play.google.com/store/apps/details?id=com.fitness",
      githubUrl: "https://github.com/mirshadahamed/Bucksy.git",
      features: ["Finances Tracking", "Budgeting", "Notifications", "Wearable Integration"],
      stats: [
        { label: "App Rating", value: "4.8★" },
        { label: "Users", value: "10K+" },
        { label: "FPS", value: "60fps" }
      ],
      image: Card2, // 
    },
    {
      id: 3,
      title: "E-LEARNING PLATFORM",
      category: "web",
      description: "A full-featured e-learning management dashboard designed to manage courses, learners, instructors, and learning progress efficiently.",
      longDescription: "Admin dashboard for managing e-commerce operations. Features include product catalog, inventory management, order processing, customer management, and sales analytics.",
      tech: ["REACT", "Express", "MONGODB", "Node"],
      status: "LIVE",
      // liveUrl: "https://ecommerce-dashboard.com",
      githubUrl: "https://github.com/mirshadahamed/ThinkEdge.git",
      features: ["Course Management", "Student Enrollment & Progress Tracking", "Learning Analytics", "Student Dashboard"],
      stats: [
        { label: "Products", value: "1000+" },
        { label: "Orders", value: "5K+" },
        { label: "Revenue", value: "$50K+" }
      ],
      image: Card3, // 暂时使用同一张图片
    },
    // {
    //   id: 4,
    //   title: "TASK MANAGEMENT APP",
    //   category: "mobile",
    //   description: "Productivity app for task management, team collaboration and project tracking.",
    //   longDescription: "Feature-rich task management application with team collaboration capabilities. Includes project boards, task assignment, deadline tracking, and progress monitoring.",
    //   tech: ["REACT NATIVE", "NODE.JS", "SOCKET.IO", "MONGODB", "JWT"],
    //   status: "DEPLOYED",
    //   liveUrl: "https://apps.apple.com/app/taskmanager",
    //   githubUrl: "https://github.com/mirshad/task-app",
    //   features: ["Team Collaboration", "Project Boards", "Deadline Tracking", "Progress Reports"],
    //   stats: [
    //     { label: "Teams", value: "200+" },
    //     { label: "Tasks", value: "10K+" },
    //     { label: "Rating", value: "4.7★" }
    //   ],
    //   image: Card1, 
    // }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Glow - MATCHING SERVICES SECTION STYLE */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-orange-500"></div>
            <span className="text-orange-500 text-lg tracking-widest">PROJECTS</span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="text-white">Projects</span>
          </h2>
          
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Showcase of my recent work and development projects
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg border font-mono tracking-wide transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-orange-500/50 hover:text-white hover:bg-black/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-xs px-3 py-1 rounded-full bg-black/80 text-orange-400 border border-orange-500/30">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* 使用 Image 组件显示图片 */}
                <div className="relative w-full h-full">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0} // 首张图片优先加载
                    />
                  ) : (
                    // 图片加载失败时的占位符
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">
                          {project.category === 'web' ? '🌐' : 
                           project.category === 'mobile' ? '📱' : '⚡'}
                        </div>
                        <div className="text-white font-mono text-sm">
                          {project.title.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white font-mono tracking-wide mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="mb-6">
                  <div className="text-orange-400 font-mono text-xs mb-2 tracking-wide">TECH STACK</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-900/50 border border-gray-800 rounded text-xs text-gray-300 font-mono hover:border-orange-500/30 hover:text-orange-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Features */}
                <div className="mb-6">
                  <div className="text-orange-400 font-mono text-xs mb-2 tracking-wide">KEY FEATURES</div>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-lg text-white font-mono text-xs hover:bg-orange-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-sm">🌐</span>
                        <span>LIVE</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white font-mono text-xs hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm">💻</span>
                      <span>CODE</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Category Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-800"></div>
            <span className="text-gray-600 font-mono text-sm">
              SHOWING {filteredProjects.length} PROJECTS
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gray-800"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
