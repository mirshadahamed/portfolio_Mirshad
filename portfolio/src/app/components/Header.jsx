import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-5 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500">
        <span className="text-3xl">MA</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-8 text-sm font-semibold">
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

      {/* Hire Me Button */}
      <div>
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
