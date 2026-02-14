"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { languagesPercentage, educationData, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const Details = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Enforce dark mode default or respect user choice if explicitly set
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
                <Link href="/#about" className='inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 shadow-sm'>
                    <Image src={assets.arrow_icon} alt="Back" className="w-4 rotate-180 dark:invert" />
                    <span className="font-medium">Back to About</span>
                </Link>
            </div>

            {/* Content Container */}
            <div className='max-w-5xl mx-auto relative z-10'>

                {/* Languages Section */}
                <div className='mb-24 relative'>
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center text-5xl font-Ovo mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent'>
                        Technical Skills
                    </motion.h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {languagesPercentage.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
                            >
                                <div className='flex justify-between items-end mb-4 font-semibold text-lg'>
                                    <div className='flex items-center gap-3'>
                                        {/* Placeholder for icon if available, or just text */}
                                        <span className='dark:text-white'>{item.language}</span>
                                    </div>
                                    <span className='text-gray-500 dark:text-gray-400'>{item.percentage}%</span>
                                </div>
                                <div className='h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden'>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.percentage}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className='h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full'
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className='mb-20 relative'>
                    <div className="absolute bottom-0 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center text-5xl font-Ovo mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent'>
                        Education
                    </motion.h2>

                    <div className='space-y-8 pl-8 md:pl-0'>
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='relative pl-8 md:pl-12 border-l-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300'
                            >
                                <span className='absolute px-2 py-1 -left-[14px] top-0 bg-white dark:bg-black border border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold'>
                                </span>
                                <div className='bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-300'>
                                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-1'>{edu.degree}</h3>
                                    <p className='text-blue-600 dark:text-blue-400 font-medium mb-3'>{edu.institution}</p>
                                    <span className='inline-block px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-4'>
                                        {edu.year}
                                    </span>
                                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>{edu.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
