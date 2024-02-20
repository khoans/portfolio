import React from "react";

import icons from "@/libs/icons";
// import image1 from "/public/project_images/project1/image1.jpg";
import codepen from "/public/codepen.png";
import phongtro from "/public/phongtro.png";
import zing from "/public/zing.png";

const { LuGraduationCap, CgWorkAlt } = icons;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Code Showcase",
    description:
      "A collection of code snippets that will auto render on the website.",
    tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    imageUrl: codepen,
    url: "https://khoa-codepen.netlify.app/",
  },
  {
    title: "Music Playlist",
    description:
      "A public web app for music playlist that can filter, search based on song names, albums and artists.",
    tags: ["React", "Tailwind", "Redux", "Express"],
    imageUrl: zing,
    url: "https://khoa-testzing.netlify.app/",
  },
  {
    title: "Rental Real Estate",
    description:
      "A public web app for rental real estate that can filter, search based on location, price and acreage.",
    tags: ["React", "PostgresSQL", "Tailwind"],
    imageUrl: phongtro,
    url: "https://khoa-phongtro.netlify.app/",
  },
] as const;

export const skillsData = {
  frontend: ["HTML", "CSS", "ReactJS", "NextJS"],
  languages: ["Python", "JavaScript", "TypeScript"],
  backend: ["ExpressJS", "NestJS", "Django", "Firebase", "Odoo 16"],
  database: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: ["Git", "Github", "Mongoose", "Sequelize", "Prisma"],
  libraries: [
    "TailwindCSS",
    "SASS/SCSS",
    "Styled-Components",
    "Framer Motion",
    "Fabric JS",
    "Quill Editor",
    "CKEditor",
    "JQuery",
    "Redux Toolkit",
    "Flowbite React",
    "Liveblocks",
  ],
} as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Ho Chi Minh City, Vietnam",
    description: `Develop a course hosting platform for corporates training.\n\nBackend: Create custom modules involving managing clients, teachers, courses, feedbacks, CMS, grading system.\n\nFrontend: Create responsive layout for course content, course profile, dashboard for admin and teachers.`,
    icon: React.createElement(LuGraduationCap),
    date: "08/2023 - 02/2024",
  },
] as const;

export const individualProjectData = [{}];
