import clsx from "clsx";
import { Github, Linkedin, Mail, Phone, Twitch } from "lucide-react";

const Footer = () => {
  return (
    <footer className={clsx("bg-gray-900 text-white py-12")}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold text-red-500 mb-2">
            Red Marble Automation
          </h2>
          <p className="text-sm text-gray-400">
            Driving intelligent automation for modern enterprises.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3 text-gray-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#hero" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="#services" className="hover:text-red-500 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3 text-gray-300">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 84592 10263
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> redmarble03@gmail.com
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" className="hover:text-red-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-red-500 transition">
                <Github size={20} />   
            </a>
            <a href="#" target="_blank" className="hover:text-red-500 transition">
                <Twitch size={20} />
            </a>                
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Red Marble Automation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
