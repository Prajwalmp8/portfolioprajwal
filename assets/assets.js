
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


export const assets = {
    user2_image,
    image1_png,


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
        title: 'Frontend project',
        description: 'Design-E-commerce website',
        fullDescription: 'A fully responsive E-commerce website featuring a modern UI/UX design. Includes product listings, shopping cart functionality, and seamless checkout experience. Built with a focus on performance and accessibility.',
        bgImage: '/work-1.png',
        link: 'https://example.com/ecommerce',
        github: 'https://github.com/example/ecommerce'
    },
    {
        title: 'Mobile App',
        description: 'Vulnerability Scanner using Flutter',
        fullDescription: 'A cross-platform mobile application developed using Flutter that scans networks for vulnerabilities. It integrates with machine learning models to predict potential security threats and provides real-time alerts.',
        bgImage: '/work-2.png',
        link: 'https://example.com/scanner',
        github: 'https://github.com/example/scanner'
    },
    {
        title: 'Web Design',
        description: 'Design BookStore',
        fullDescription: 'An online bookstore with an elegant interface for browsing and purchasing books. Features include user reviews, category filtering, and a personalized recommendation engine.',
        bgImage: '/work-3.png',
        link: 'https://example.com/bookstore',
        github: 'https://github.com/example/bookstore'
    },
    {
        title: 'backend project',
        description: 'Application for Live Update on ICD Schemes',
        fullDescription: 'A robust backend system designed to provide real-time updates on Integrated Child Development (ICD) schemes. It handles large-scale data processing and ensures data integrity across multiple government departments.',
        bgImage: '/work-4.png',
        link: 'https://example.com/icd-schemes',
        github: 'https://github.com/example/icd-schemes'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...' },
    { icon: assets.ui_icon, title: 'Flutter', description: 'Built UI components for integrating with ML-based security scanning.' },
    { icon: assets.graphics_icon, title: 'Sql', description: 'MySQL – Used for relational database design, queries, and CRUD operations.' },
    { icon: assets.graphics_icon, title: 'Java', description: 'Its robust and secure architecture enables reliable performance and strong memory management..', },
    { icon: assets.graphics_icon, title: 'Springboot', description: 'Seamless integration with databases, security, and REST APIs.' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Sql' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E in Computer Science and Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const languagesPercentage = [
    { language: 'HTML', percentage: 95 },
    { language: 'CSS', percentage: 90 },
    { language: 'JavaScript', percentage: 85 },
    { language: 'React Js', percentage: 80 },
    { language: 'Next Js', percentage: 80 },
    { language: 'Sql', percentage: 75 },
    { language: 'Java', percentage: 85 },
    { language: 'Springboot', percentage: 75 },
];

export const educationData = [
    { degree: 'B.E in Computer Science and Engineering', institution: 'Visvesvaraya Technological University', year: '2020 - 2024', description: 'Graduated with a CGPA of 8.5' },
    { degree: 'Pre-University Course', institution: 'Mysore Public School', year: '2018 - 2020', description: 'Passed with Distinction' },
    { degree: 'Secondary School', institution: 'Mysore Public School', year: '2018', description: 'Passed within Distinction' },
];
