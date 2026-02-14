
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';

import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

import image1_png from './image1.png.jpg';
import user2_image from './user2-image.jpg';
import postman from './OIP.png';
import eclipse from './OIP1.png';
import sql from './OIP2.png';

export const assets = {
    user2_image,
    image1_png,
    postman,
    eclipse,
    sql,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,

    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'website for farmers',
        description: 'E-Commerce Platform for Farmers',
        fullDescription: 'The E-Commerce Platform for Farmers is a full-stack web application designed to create a direct digital marketplace between farmers and customers. The platform removes intermediaries, enabling farmers to sell agricultural products directly to consumers at fair prices while customers gain access to fresh produce with complete transparency.',
        bgImage: '/work-1.png',
        link: 'https://example.com/ecommerce',
        github: 'https://github.com/Prajwalmp8/E-froming'
    },
    {
        title: 'Mobile App',
        description: 'Vulnerability Scanner (Flutter + Machine Learning)',
        fullDescription: 'The Vulnerability Scanner is a cross-platform security analysis application that leverages Machine Learning to automatically detect potential software and system vulnerabilities. The application provides a simple mobile interface built with Flutter, while powerful ML models running in Python analyze security data in real time. The goal is to make cybersecurity assessments accessible, fast, and automated.',
        bgImage: '/work-2.png',
        link: 'https://example.com/scanner',
        github: 'https://github.com/example/scanner'
    },
    {
        title: 'Web Design for BookStore',
        description: 'Design BookStore to sell books online ',
        fullDescription: 'An online bookstore with an elegant interface for browsing and purchasing books. Features include user reviews, category filtering, and a personalized recommendation engine.',
        bgImage: '/work-3.png',
        link: 'https://example.com/bookstore',
        github: 'https://github.com/Prajwalmp8/BOOKSTORE'
    },
    {
        title: 'Gemini AI',
        description: 'React-Based Intelligent Conversation Platform',
        fullDescription: 'Gemini AI Chat Assistant is an intelligent, interactive web application built using React.js and the Gemini API. It enables users to engage in real-time conversations with an AI capable of answering questions, generating content, assisting with coding, and providing instant insights.Designed with a clean, modern UI and smooth animations, the platform delivers fast responses, intuitive chat interactions, and a seamless user experience across all devices.',
        bgImage: '/work-4.png',
        link: 'https://chat-ai-t9sq.vercel.app/',
        github: 'https://github.com/Prajwalmp8/ChatAI'
    },
    {
        title: 'Netflix Clone',
        description: 'Fetch movies and TV shows using external APIs',
        fullDescription: 'The Netflix Clone is a responsive web application built using React.js and movie data APIs that replicates the core user experience of the original Netflix platform. The application allows users to explore trending movies, popular TV shows, and featured content through a visually rich and interactive interface.Designed with a modern UI, smooth animations, and dynamic content loading, the project demonstrates real-world API integration, component-based architecture, and responsive design principles.',
        bgImage: '/work-4.png',
        link: 'https://netflix-beta-blond.vercel.app/',
        github: 'https://github.com/Prajwalmp8/Netflix'
    },
]


export const serviceData = [
    { icon: assets.web_icon, title: 'Itvedant (2025)', description: 'Full Stack Development with Spring Boot & React', },
    { icon: assets.mobile_icon, title: 'HackerRank (2024)', description: 'Python Development', },
    { icon: assets.ui_icon, title: 'Infosys Springboard (2023)', description: 'Introduction to Artificial Intelligence', },
    { icon: assets.graphics_icon, title: 'National Cybersecurity Centre of Excellence (Oct 2023)', description: 'Ethical Hacking & Cybersecurity -Training in networking, vulnerability analysis, and web application scanning.', },
    { icon: assets.graphics_icon, title: 'Techciti (2024)', description: 'Web Development Intern', },
    { icon: assets.graphics_icon, title: '10 Seconds (2022)', description: 'Soft Skills & Microsoft Office', },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Java, Sql' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E in Computer Science and Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.postman, assets.eclipse, assets.sql
];

export const languagesPercentage = [
    { language: 'HTML', percentage: 95 },
    { language: 'CSS', percentage: 70 },
    { language: 'JavaScript', percentage: 85 },
    { language: 'React Js', percentage: 80 },
    { language: 'Sql', percentage: 75 },
    { language: 'Java', percentage: 85 },
    { language: 'Springboot', percentage: 50 },
    { language: 'Mongo Db', percentage: 50 },
];

export const educationData = [
    { degree: 'B.E in Computer Science and Engineering', institution: 'Navkis College of Engineering', year: '2021 - 2025', description: 'Graduated with a CGPA of 7.5' },
    { degree: 'Pre-University Course', institution: 'GLOBAL TIMES PU COLLEGE', year: '2019 - 2021', description: 'Passed with percentage of 87.16%' },
    { degree: 'Secondary Education', institution: 'TIMES INTERNATIONAL SCHOOL', year: '2019', description: 'Passed with percentage of   87.68%' },
];
