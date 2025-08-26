import React, { useState } from "react";
import { FaBars, FaTimes, FaInstagram, FaTwitter } from "react-icons/fa"; // Added Twitter icon
import useActiveSection from "../hooks/useActiveSection";
import logo from "../assets/logo-dark.png";

const Navbar = () => {
  const sections = ["home", "about", "features", "joinus", "news"];
  const { active, scrollToSection } = useActiveSection(sections, 80);
  const [open, setOpen] = useState(false);

  const labels = {
    home: "Home",
    about: "About",
    features: "Features",
    joinus: "Join Us",
    news: "News",
  };

  return (
    <nav className=" absolute top-0 left-0 w-full bg-transparent text-white p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-6" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {sections.map((id) => (
          <button
            key={id}
            className={`hover:text-yellow-400 ${
              active === id ? "text-yellow-400" : ""
            }`}
            onClick={() => scrollToSection(id)}
          >
            {labels[id]}
          </button>
        ))}

        {/* Social Media icons - only large screens */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 text-xl hidden lg:inline-flex"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 text-xl hidden lg:inline-flex"
        >
          <FaInstagram />
        </a>

        {/* CTA Button - only large screens */}
        <button
          onClick={() => scrollToSection("joinus")}
          className="bg-red-500 hover:bg-orange-500 px-4 py-2 rounded text-white font-semibold hidden lg:inline-flex"
        >
          Get in Touch
        </button>
      </div>

      {/* Mobile Hamburger / Cross */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-white text-2xl">
          {open ? <FaTimes /> : <FaBars />} {/* React Icons */}
        </button>
      </div>

      {/* Mobile Sidebar (only links, no button or icons) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col p-6 gap-6 md:hidden`}
      >
        {sections.map((id) => (
          <button
            key={id}
            className={`text-lg hover:text-yellow-400 ${
              active === id ? "text-yellow-400" : ""
            }`}
            onClick={() => {
              scrollToSection(id);
              setOpen(false);
            }}
          >
            {labels[id]}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
