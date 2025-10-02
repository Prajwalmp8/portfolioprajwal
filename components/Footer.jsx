import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-20 bg-white text-black py-12 relative shadow-lg">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <h1 className="animate-float text-2xl font-bold text-black">
  Prajwal M P
</h1>
        {/* <Image
          src={assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-6 drop-shadow-md"
        /> */}

        {/* Email */}
        <div className="flex items-center justify-center gap-3 mb-8 text-sm sm:text-lg font-light">
          <Image src={assets.mail_icon} alt="Mail Icon" className="w-6 animate-pulse" />
          <span className="hover:text-blue-600 transition-colors cursor-pointer">
            prajwalmp394@gmail.com
          </span>
        </div>

        {/* Links */}
        <ul className="flex flex-col sm:flex-row justify-center gap-8 mb-8 text-sm sm:text-lg font-medium">
          <li className="relative group transition-transform duration-300 hover:-translate-y-2">
            <a
              href="https://github.com/Prajwalmp8"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Github
            </a>
          </li>
          <li className="relative group transition-transform duration-300 hover:-translate-y-2">
            <a
              href="https://www.linkedin.com/in/prajwalmp8088/"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Linkedin
            </a>
          </li>
          <li className="relative group transition-transform duration-300 hover:-translate-y-2">
            <a
              href="https://www.naukri.com/mnjuser/profile"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Naukri
            </a>
          </li>
        </ul>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 mb-6"></div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          © {new Date().getFullYear()} <span className="font-semibold text-black">Prajwal M P</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
