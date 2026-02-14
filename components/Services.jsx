import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-Ovo'>what I offer</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        <span className="relative inline-block">
          Certifications
          <motion.div
            className="absolute left-0 -bottom-2 h-1 bg-gray-700 dark:bg-white rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> Java Full StacK Developer </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}

            whileInView={{ scale: 1.05 }}

            className="border border-gray-400 dark:border-white/50 bg-white dark:bg-[#040404ff] p-5 rounded-lg shadow-md transform transition-all duration-500 
                 hover:-translate-y-2 hover:shadow-xl hover:bg-black dark:hover:bg-white group"
          >
            <div className="flex items-center mb-4">
              <Image
                src={icon}
                alt={title}
                width={48}
                height={48}
                className="mr-3 invert hover:invert-0 transition-all duration-500 dark:invert-0 dark:group-hover:invert"
              />
              <h3 className="text-xl font-Ovo dark:text-white group-hover:text-white dark:group-hover:text-black">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-white/80 mb-4 transition-colors duration-500 group-hover:text-white dark:group-hover:text-black">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services