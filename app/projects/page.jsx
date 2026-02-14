"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const AllProjects = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className='w-full min-h-screen px-[12%] py-10 scroll-mt-20 bg-gray-50 dark:bg-black text-gray-800 dark:text-white transition-colors duration-300 relative overflow-hidden'>
            {/* Background Animation */}
            <div className='absolute top-0 left-0 w-full h-full z-0 pointer-events-none'>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]'
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [360, 180, 0],
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className='absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]'
                />
            </div>

            {/* Back Button */}
            <div className='mb-12 relative z-10'>
                <Link href="/" className='inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 shadow-sm'>
                    <Image src={assets.arrow_icon} alt="Back" className="w-4 rotate-180 dark:invert" />
                    <span className="font-medium">Back to Home</span>
                </Link>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    All Projects
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workData.map((project, index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-md 
                                transition-transform duration-500 hover:scale-105 hover:shadow-xl group aspect-[4/3]"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        >
                            {/* Overlay for dark effect */}
                            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-500"></div>

                            {/* Text content */}
                            <div className="relative p-6 flex flex-col justify-between h-full">
                                <div className="bg-white dark:bg-[#040404ff] p-6 rounded-xl shadow-md transform transition-all duration-500 
                                    hover:-translate-y-2 hover:shadow-xl group">
                                    <h2 className="text-xl font-Ovo text-gray-900 dark:text-white mb-2 transition-colors duration-500 group-hover:text-blue-600">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-700 dark:text-white/80 transition-colors duration-500 group-hover:text-gray-900 dark:group-hover:text-white line-clamp-3">
                                        {project.fullDescription || project.description}
                                    </p>
                                    <div className="mt-5 flex gap-3">
                                        <Link href={`/project/${index}`}>
                                            <button className="px-4 py-2 rounded-full border border-gray-500 text-gray-700 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-sm flex items-center gap-2">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProjects
