import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md shadow-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer text-xl font-semibold tracking-tight text-red-600">
          RedMarble
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-sm">
          <li className="hover:text-red-600 transition"><a href="#hero">Home</a></li>
          <li className="hover:text-red-600 transition"><a href="#about">About</a></li>
          <li className="hover:text-red-600 transition"><a href="#services">Services</a></li>
          <li className="hover:text-red-600 transition"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="cursor-pointer space-y-4 text-gray-700 font-medium text-base">
          <li className="hover:text-red-600 transition"><a href="#hero">Home</a></li>
          <li className="hover:text-red-600 transition"><a href="#about">About</a></li>
          <li className="hover:text-red-600 transition"><a href="#services">Services</a></li>
          <li className="hover:text-red-600 transition"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
