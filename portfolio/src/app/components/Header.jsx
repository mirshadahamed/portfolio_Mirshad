'use client'
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [buttonHover, setButtonHover] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Me', href: '/about' },
    { name: 'Contact Me', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Transparent background with subtle glass effect on scroll */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent backdrop-blur-md transition-all duration-300 border-b border-white/10" />
      
      <div className="relative p-5 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-bold">
          <motion.span 
            className="bg-gradient-to-r from-orange-500 to-yellow-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            MA
          </motion.span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <motion.div 
          className="md:hidden" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <button className="text-white relative w-6 h-6">
            <motion.span
              className="absolute left-0 top-1 w-6 h-0.5 bg-white rounded-full"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute left-0 top-3 w-6 h-0.5 bg-white rounded-full"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute left-0 bottom-1 w-6 h-0.5 bg-white rounded-full"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold relative">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredLink(item.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={item.href}
                className="relative px-4 py-2 overflow-hidden group"
              >
                {/* Transparent hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-600/10 rounded-lg"
                  initial={{ x: '-100%' }}
                  animate={{ x: hoveredLink === item.name ? '0%' : '-100%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Subtle dots animation */}
                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-orange-500/20"
                  animate={{
                    scale: hoveredLink === item.name ? 1 : 0,
                    opacity: hoveredLink === item.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-yellow-600/20"
                  animate={{
                    scale: hoveredLink === item.name ? 1 : 0,
                    opacity: hoveredLink === item.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Text */}
                <span className="relative flex items-center gap-2">
                  <motion.span
                    animate={{ color: hoveredLink === item.name ? '#f97316' : '#ffffff' }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Arrow indicator */}
                  <motion.span
                    animate={{ 
                      opacity: hoveredLink === item.name ? 1 : 0,
                      x: hoveredLink === item.name ? 0 : -10 
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-500"
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Hire Me Button - Transparent Style */}
        <motion.div 
          className="hidden md:block relative"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#hire-me"
            className="relative block"
          >
            {/* Outer glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 opacity-0"
              animate={{ 
                opacity: buttonHover ? 0.2 : 0,
                scale: buttonHover ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
              style={{
                filter: 'blur(10px)'
              }}
            />
            
            {/* Main Button Container with transparent background */}
            <div className="relative bg-black/20 backdrop-blur-sm border border-orange-500/30 rounded-xl px-8 py-3 overflow-hidden group">
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-yellow-600/5 to-orange-500/5"
                animate={{
                  x: buttonHover ? ['100%', '-100%'] : '100%',
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.2
                }}
              />
              
              {/* Scanning line effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
                animate={{ 
                  y: buttonHover ? ['0%', '100%', '0%'] : '0%',
                  opacity: buttonHover ? [0.2, 0.6, 0.2] : 0
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: buttonHover ? Infinity : 0,
                  ease: "linear"
                }}
              />
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-3">
                {/* Animated icon */}
                <motion.div
                  animate={{
                    rotate: buttonHover ? 360 : 0,
                    scale: buttonHover ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Outer ring */}
                  <motion.div
                    className="absolute -inset-2 rounded-full border border-orange-500/20"
                    animate={{
                      scale: buttonHover ? 1.2 : 1,
                      opacity: buttonHover ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Inner icon */}
                  <svg 
                    className="w-5 h-5 text-orange-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </motion.div>
                
                {/* Text with glow effect */}
                <motion.span
                  className="font-bold tracking-wider text-lg bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: buttonHover ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%'
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  HIRE_ME
                </motion.span>
                
                {/* Animated arrow */}
                <motion.div
                  animate={{
                    x: buttonHover ? [0, 5, 0] : 0,
                    opacity: buttonHover ? 1 : 0.7
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: buttonHover ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                  className="text-yellow-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Loading indicator bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"
                animate={{
                  width: buttonHover ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating particles */}
              {buttonHover && (
                <>
                  <motion.div
                    className="absolute top-2 left-2 w-1 h-1 bg-orange-500/50 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-500/50 rounded-full"
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  />
                </>
              )}
            </div>
          </a>
        </motion.div>
      </div>

      {/* Mobile Menu with Transparent Effect */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-50 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0 }}
        animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Semi-transparent backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        {/* Transparent menu panel */}
        <motion.div
          className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-black/80 backdrop-blur-xl border-l border-white/10 shadow-2xl"
          initial={{ x: 100 }}
          animate={isMenuOpen ? { x: 0 } : { x: 100 }}
          transition={{ duration: 0.3, type: "spring", damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-8 h-full">
            {/* Close button */}
            <div className="flex justify-end mb-8">
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            {/* Navigation items */}
            <div className="space-y-6 flex-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {item.name}
                    </span>
                    <motion.span
                      className="text-orange-500"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Hire Me Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 + 0.2 }}
              className="pt-8"
            >
              <a
                href="#hire-me"
                className="relative block w-full bg-gradient-to-r from-orange-500/80 to-yellow-600/80 text-white py-4 px-6 rounded-xl text-center font-bold overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Content */}
                <div className="relative flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="tracking-wider text-lg">HIRE_ME</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-yellow-300"
                  >
                    →
                  </motion.span>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;