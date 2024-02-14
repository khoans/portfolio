import React from "react";

import corpcommentImg from "/public/corpcomment.png";
import rmtdevImg from "/public/rmtdev.png";
import wordanalyticsImg from "/public/wordanalytics.png";
import icons from "@/libs/icons";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = {
  frontend: ["HTML", "CSS", "ReactJS", "NextJS"],
  languages: ["Python", "JavaScript", "TypeScript"],
  backend: ["ExpressJS", "NestJS", "Django", "Firebase"],
  database: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: [
    "Git",
    "Github",
    "TailwindCSS",
    "SASS/SCSS",
    "Styled-Components",
    "Sequelize",
    "Prisma",
  ],
  libraries: [
    "Framer Motion",
    "Fabric JS",
    "Quill Editor",
    "CKEditor",
    "JQuery",
    "Redux Toolkit",
    "Flowbite UI",
  ],
} as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Tempor reprehenderit culpa eu sint aliqua velit deserunt sunt non deserunt laborum ea consectetur. Ad incididunt reprehenderit.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Tempor reprehenderit culpa eu sint aliqua velit deserunt sunt non deserunt laborum ea consectetur. Ad incididunt reprehenderit.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2023 - 02/2024",
  },
] as const;
