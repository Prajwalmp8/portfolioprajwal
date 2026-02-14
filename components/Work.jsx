import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, scale } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work" className='w-full px-[5%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-Ovo'>My Projects</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        <span className="relative inline-block">
          MY latest work
          <motion.div
            className="absolute left-0 -bottom-2 h-1 bg-gray-700 dark:bg-white rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }} className='text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo'>Java Full Stack Developer</motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 max-w-[1300px] mx-auto">
        {workData.slice(0, 4).map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-md 
                 transition-transform duration-500 hover:scale-105 hover:shadow-xl group aspect-[4/3]"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay for dark effect   bg-black */}
            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-500"></div>

            {/* Text content */}
            <div className="relative p-6 flex flex-col justify-between h-full">
              <div className="bg-white dark:bg-[#040404ff] p-6 rounded-xl shadow-md transform transition-all duration-500 
                hover:-translate-y-2 hover:shadow-xl group">
                <h2 className="text-xl font-Ovo text-gray-900 dark:text-white mb-2 transition-colors duration-500 group-hover:text-blue-600">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-white/80 transition-colors duration-500 group-hover:text-gray-900 dark:group-hover:text-white">
                  {project.description}
                </p>
                <div className="mt-4 flex gap-3">
                  <Link href={`/project/${index}`}>
                    <button className="px-4 py-2 rounded-full border border-gray-500 text-gray-700 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-sm flex items-center gap-2">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>

              {/* Icon button */}
              {/* <div className="mt-4">
                <button className="bg-white dark:bg-[#040404ff] p-2 rounded-full transition-transform duration-500 
                             hover:scale-110 hover:bg-gray-200">
                  <Image src={assets.send_icon} alt="send icon" width={20} height={20} />
                </button>
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-6">
        <Link href="/projects" className="w-48 h-12 flex items-center justify-center gap-2
px-4 border border-gray-500 rounded-full text-gray-800
dark:text-white dark:border-white font-Ovo text-sm
transition-all duration-300 hover:bg-black hover:text-white
hover:gap-3 dark:hover:bg-white dark:hover:text-black">
          Show More
          <Image
            src={assets.right_arrow_bold}
            alt="right arrow"
            width={16}
            height={16}
            className="transition-transform duration-300"
          />
        </Link>
      </div>


    </motion.div>
  )
}

export default Work