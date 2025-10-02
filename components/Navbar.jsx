import { assets } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-50 dark:backdrop-blur-lg dark:shadow-white/20" : ""
        } `}
      >
        {/* Logo */}
        <h1 className="animate-float text-2xl font-bold text-black">
  Prajwal
</h1>

        {/* <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </a> */}

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/30 backdrop-blur-sm border border-gray-300/30 shadow-md shadow-gray-300/20"
          }`}
        >
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Right Side: Icons + Buttons */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)} className="p-2 rounded-full hover:bg-gray-200 transition">
            <Image
              src={ isDarkMode ? assets.moon_icon : assets.sun_icon}
              alt="moon"
              width={24}
              height={24}
              className=""
            />
          </button>

          {/* Contact button (Desktop only) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 border border-gray-800 rounded-full ml-2 font-ovo text-sm hover:bg-gray-100 transition"
          >
            Contact
            <Image
              src={assets.arrow_icon}
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
              src={assets.menu_black}
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
              className="font-ovo text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-ovo text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-ovo text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="font-ovo text-lg"
              onClick={() => setMenuOpen(false)}
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-ovo text-lg"
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
