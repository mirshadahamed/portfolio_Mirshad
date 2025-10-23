'use client'
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-5 flex justify-between items-center">
      

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links - Mobile and Desktop */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:justify-center gap-8 text-sm font-semibold md:flex-grow`}
      >
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link href="/services" className="hover:text-orange-500">
          Services
        </Link>
        <Link href="/about" className="hover:text-orange-500">
          About Me
        </Link>
        <Link href="/contact" className="hover:text-orange-500">
          Contact Me
        </Link>
      </nav>

      {/* Hire Me Button - Responsive */}
      <div className="flex items-center md:block">
        <a
          href="#hire-me"
          className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Header;