import { assets } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Active link observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // 50% visibility

    const sections = document.querySelectorAll("#top, #about, #services, #work, #contact");
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Background header image */}
      <div className="fixed top-0 left-0 w-full h-24 -z-10 dark:hidden">
        <Image
          src={assets.header_bg_color}
          className="w-full h-24 object-cover"
          alt="header background"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-black dark:shadow-white/20" : ""
          } `}
      >
        {/* Logo */}
        <h1 className="animate-float text-2xl font-bold text-black dark:text-white">
          Prajwal
        </h1>

        {/* <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </a> */}

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll
            ? ""
            : "bg-white/50 backdrop-blur-lg shadow-sm border border-gray-500/50 dark:border-white/50 dark:bg-transparent"
            }`}
        >
          <li>
            <a className={`font-ovo ${activeSection === "top" ? "font-bold text-blue-600 dark:text-blue-400" : ""}`} href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`font-ovo ${activeSection === "about" ? "font-bold text-blue-600 dark:text-blue-400" : ""}`}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className={`font-ovo ${activeSection === "services" ? "font-bold text-blue-600 dark:text-blue-400" : ""}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className={`font-ovo ${activeSection === "work" ? "font-bold text-blue-600 dark:text-blue-400" : ""}`}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className={`font-ovo ${activeSection === "contact" ? "font-bold text-blue-600 dark:text-blue-400" : ""}`}>
              Contact Me
            </a>
          </li>
        </ul>

        {/* Right Side: Icons + Buttons */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)} className="p-2 rounded-full hover:bg-gray-200 transition">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="toggle theme"
              width={24}
              height={24}
              className=""
            />
          </button>

          {/* Contact button (Desktop only) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-full ml-4 font-ovo text-sm hover:bg-gray-100 transition dark:border-white/50 dark:hover:bg-darkHover"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              width={12}
              height={12}
            />
          </a>

          {/* Mobile menu button */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        <ul
          className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 bottom-0 w-64 h-screen bg-black shadow-lg border-l transition-all duration-500 z-50 text-white
          ${menuOpen ? "right-0" : "-right-64"}`}
        >
          {/* Close Button */}
          <li className="absolute top-6 right-6 cursor-pointer list-none bg-white p-3 rounded-full">
            <button onClick={() => setMenuOpen(false)}>
              <Image
                src={assets.close_black}
                alt="close"
                width={20}
                height={20}
              />
            </button>
          </li>

          {/* Mobile Nav Links */}
          <li>
            <a
              href="#top"
              className={`font-ovo text-lg ${activeSection === "top" ? "text-blue-400 font-bold" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`font-ovo text-lg ${activeSection === "about" ? "text-blue-400 font-bold" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`font-ovo text-lg ${activeSection === "services" ? "text-blue-400 font-bold" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`font-ovo text-lg ${activeSection === "work" ? "text-blue-400 font-bold" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`font-ovo text-lg ${activeSection === "contact" ? "text-blue-400 font-bold" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
