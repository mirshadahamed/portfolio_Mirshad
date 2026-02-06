'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const navRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'About', href: '#services', sectionId: 'services' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    // { name: 'About', href: '#about', sectionId: 'about' },
    { name: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  // Handle smooth scrolling to sections
  const handleLinkClick = (name, href, sectionId) => {
    setActiveLink(name);
    setIsMenuOpen(false);
    
    // For mobile, close menu first
    if (isMenuOpen) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height for offset
      const headerHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      // Check each section
      for (const item of navItems) {
        const element = document.getElementById(item.sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(item.name);
            break;
          }
        }
      }
      
      // Clear scrolling flag
      setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle horizontal scroll on desktop nav
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (window.innerWidth < 768) return; // Only on mobile for horizontal nav
      
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', handleWheel);
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

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
            {/* Logo/Spacer */}
            <div className="w-8" />

            {/* Horizontal Scrolling Navigation for Mobile */}
            <div className="flex-1 md:hidden overflow-hidden mx-4">
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide py-2 space-x-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    className="relative flex-shrink-0"
                    onMouseEnter={() => setHoveredLink(item.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => handleLinkClick(item.name, item.href, item.sectionId)}
                  >
                    <div
                      className="relative px-4 py-2 rounded-lg overflow-hidden cursor-pointer"
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" ref={navRef}>
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(item.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onClick={() => handleLinkClick(item.name, item.href, item.sectionId)}
                >
                  <div
                    className="relative px-4 py-2 rounded-lg overflow-hidden cursor-pointer"
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
                  </div>
                </motion.div>
              ))}
              
              {/* RESUME BUTTON - New Different Style */}
              <motion.div
                className="relative ml-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="relative block px-6 py-2 rounded-lg overflow-hidden group cursor-pointer"
                  aria-label="Download resume"
                >
                  {/* Subtle Glass Background with Border */}
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-lg border border-orange-500/30" />
                  
                  {/* Orange/Yellow Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated Border Pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-orange-400/50"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(251, 146, 60, 0)',
                        '0 0 15px rgba(251, 146, 60, 0.3)',
                        '0 0 10px rgba(251, 146, 60, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Document Icon Animation */}
                  <motion.div
                    className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-orange-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Text */}
                  <span className="relative flex items-center justify-center text-sm font-semibold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                      Resume
                    </span>
                  </span>
                  
                  {/* Subtle Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-orange-400/50"
                        initial={{
                          x: Math.random() * 100 + '%',
                          y: Math.random() * 100 + '%',
                          opacity: 0,
                        }}
                        animate={{
                          x: [null, Math.random() * 100 + '%'],
                          y: [null, Math.random() * 100 + '%'],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </a>
              </motion.div>
            </nav>

            {/* Mobile Menu Button - Only shown when horizontal nav isn't enough */}
            <motion.button
              className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
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
                    <div
                      onClick={() => handleLinkClick(item.name, item.href, item.sectionId)}
                      className={`block px-6 py-4 text-sm font-medium transition-colors cursor-pointer ${
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
                    </div>
                  </motion.div>
                ))}
                
                {/* Mobile Resume Button - Matching New Style */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="p-4"
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="relative block w-full py-3 text-center text-sm font-semibold rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Download resume"
                  >
                    {/* Glass Background with Border */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/40 rounded-lg border border-orange-500/40" />
                    
                    {/* Gradient Text */}
                    <span className="relative flex items-center justify-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                      Download Resume
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        animate={{
                          y: [0, 2, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    </span>
                    
                    {/* Border Pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border border-orange-400/50"
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(251, 146, 60, 0)',
                          '0 0 15px rgba(251, 146, 60, 0.3)',
                          '0 0 10px rgba(251, 146, 60, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add CSS to hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
