'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/_mirshaaad._/",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/mirshad-ahamed-bab963374/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/mirshadahamed",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/+94763958485",
      label: "WhatsApp",
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
          
          {/* Left: Logo & Brand */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-600 text-transparent bg-clip-text mb-3">
                MA
              </div>
              <p className="text-gray-400 max-w-xs">
                Full Stack Developer crafting digital experiences with modern technologies
              </p>
            </div>
          </motion.div>

          {/* Center: Social Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
            <div className="flex gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl p-3 bg-gray-900 rounded-full ${link.color} transition-all duration-300 hover:bg-gray-800 hover:shadow-lg`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div 
            className="text-center lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-end gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <FaEnvelope className="text-orange-500" />
                <a href="mailto:mirshadahamed135@gmail.com" className="text-sm lg:text-base">
                  mirshadahamed135@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300">
                <FaPhone className="text-orange-500" />
                <a href="tel:+94763958485" className="text-sm lg:text-base">
                  +94 76 395 8485
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Copyright */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Mirshad Ahamed. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Crafted with ❤️ using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;