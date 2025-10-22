// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500 mb-4">
          <span className="text-3xl">MA</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-4">
          <Link href="https://www.instagram.com" target="_blank" className="hover:text-orange-500">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" className="hover:text-orange-500">
            LinkedIn
          </Link>
          <Link href="https://www.github.com" target="_blank" className="hover:text-orange-500">
            GitHub
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-sm mb-2">
          <p>mirshadahamed135@gmail.com</p>
          <p>+94-76-395-8485</p>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-xs">
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;