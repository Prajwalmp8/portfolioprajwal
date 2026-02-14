"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useParams } from 'next/navigation';
import { workData, assets } from '@/assets/assets';
import Image from 'next/image'
import Link from 'next/link'

const ProjectDetails = () => {
    const { id } = useParams();
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [project, setProject] = useState(null);

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

    useEffect(() => {
        if (id && workData[id]) {
            setProject(workData[id]);
        }
    }, [id]);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center dark:bg-black dark:text-white">Loading...</div>
    }

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
                <Link href="/#work" className='inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 shadow-sm'>
                    <Image src={assets.arrow_icon} alt="Back" className="w-4 rotate-180 dark:invert" />
                    <span className="font-medium">Back to Work</span>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    {project.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg backdrop-blur-sm">
                    <div className="h-64 w-full bg-gray-200 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                        <Image src={project.bgImage} alt={project.title} fill className="object-cover" />
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.fullDescription || project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {['React', 'Next.js', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                            <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-full text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <Link href={project.link || "#"} target="_blank" className="flex-1">
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                                Live Demo
                            </button>
                        </Link>
                        <Link href={project.github || "#"} target="_blank" className="flex-1">
                            <button className="w-full py-3 border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl font-medium transition-colors">
                                Source Code
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectDetails
