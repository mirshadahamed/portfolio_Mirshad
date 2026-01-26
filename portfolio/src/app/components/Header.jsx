'use client'
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact#contact' },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background - Orange/Yellow Theme */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/80 border-b border-orange-500/20">
        {/* Orange/Yellow Flow Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
              style={{
                top: `${20 + i * 30}%`,
                width: '100%',
              }}
              animate={{
                x: [0, 100, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Spacer - Replaces logo */}
            <div className="w-8" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(item.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => handleLinkClick(item.name)}
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 rounded-lg overflow-hidden group"
                  >
                    {/* Glass Background */}
                    <div className="absolute inset-0 bg-orange-500/5 backdrop-blur-sm rounded-lg border border-orange-500/10" />
                    
                    {/* Hover Orange/Yellow Fill */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20"
                      initial={false}
                      animate={{
                        scale: hoveredLink === item.name || activeLink === item.name ? 1 : 0,
                        opacity: hoveredLink === item.name || activeLink === item.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Active Border */}
                    {activeLink === item.name && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border border-orange-500/50"
                        layoutId="activeBorder"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Text */}
                    <span className="relative px-2">
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        activeLink === item.name 
                          ? 'text-orange-400' 
                          : 'text-gray-300 hover:text-orange-300'
                      }`}>
                        {item.name}
                      </span>
                    </span>
                    
                    {/* Orange Drop Indicator */}
                    <motion.div
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"
                      animate={{
                        scale: hoveredLink === item.name ? [1, 1.5, 1] : 0,
                        opacity: hoveredLink === item.name ? [0.5, 1, 0.5] : 0,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              {/* CTA Button - Orange/Yellow Theme */}
              <motion.div
                className="relative ml-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#contact"
                  className="relative block px-6 py-2 rounded-lg overflow-hidden group"
                >
                  {/* Orange/Yellow Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg" />
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Text */}
                  <span className="relative text-sm font-semibold text-white">
                    Hire Me
                  </span>
                </a>
              </motion.div>
            </nav>

            {/* Mobile Menu Button - Orange Theme */}
            <motion.button
              className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-orange-500/10 backdrop-blur-sm rounded-lg border border-orange-500/20" />
              
              {/* Icon */}
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute left-0 top-1 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 top-3 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 bottom-1 w-6 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Orange/Yellow Theme */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 left-4 right-4 bg-black/90 backdrop-blur-xl border border-orange-500/20 rounded-xl overflow-hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Orange/Yellow Liquid Flow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10"
                animate={{
                  x: [0, 100, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ width: '200%' }}
              />
              
              {/* Menu Items */}
              <div className="relative divide-y divide-orange-500/10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(item.name)}
                      className={`block px-6 py-4 text-sm font-medium transition-colors ${
                        activeLink === item.name
                          ? 'text-orange-400 bg-orange-500/10'
                          : 'text-gray-300 hover:text-orange-300 hover:bg-orange-500/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {activeLink === item.name && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"
                            layoutId="mobileDot"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA - Orange/Yellow */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="p-4"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative block w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg overflow-hidden group"
                  >
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span>Hire Me</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;