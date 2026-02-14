import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    < div id="top" className='w-11/12 max-w-3xl  text-center mx-auto h-screen flex flex-col item-center justify-center gap-5'>
      <div className="flex flex-col items-center justify-center text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}

        >
          <Image
            src={assets.user2_image}
            alt="Profile Image"
            width={128}   // set width (128px = w-32)
            height={128}  // set height same as width
            className="rounded-full mb-4 mt-8 object-cover"
          />
        </motion.div>


        {/* Heading with hand icon */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi I am Prajwal M P
          <Image
            src={assets.hand_icon}
            alt="Hand Icon"
            className="w-6 inline-block"
          />
        </motion.h3>
      </div>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }} className='text-4xl sm:text-6xl lg:text-[66px] font-Ovo'>Java Full StacK Developer</motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }} className='max-w-2xl mx-auto font-Ovo'>I an strong in the Front-end technologies like React.js, HTML5, CSS3, Next.js, JavaScript, Springboot, Java and Sql. </motion.p>
      <div className="flex items-center gap-5 mt-8 justify-center">
        {/* Contact Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 
               bg-black text-white dark:bg-transparent dark:border-white
               transition-all duration-300 ease-in-out 
               hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg dark:hover:bg-white dark:hover:text-black"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Arrow Icon"
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="./prajwal mp.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 
               bg-black text-white dark:bg-transparent dark:border-white
               transition-all duration-300 ease-in-out 
               hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg dark:hover:bg-white dark:hover:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4 transition-transform duration-300 group-hover:rotate-12"
          />
        </motion.a>
      </div>

    </div>
  )
}

export default Header