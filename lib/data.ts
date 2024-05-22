import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import medical from "../public/portfolio-images/e-medical.png";
import veveAdmin from "../public/portfolio-images/admin-veva.png";
import multilevel from "../public/portfolio-images/multilevel.png";
import codekaplan from "../public/portfolio-images/codekaplan.png";

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

export const experiencesData = [
  {
    title: "Albison Academy",
    location: "Tashkent Yunosobod",
    description:
      "After successfully completing the Zero to FullStack course at Albison Academy, I started teaching at this academy. In the beginning, I started teaching as an assistant coach or assistant counselor, and then continued in several online groups. More than 75% of my online readers have found the job they wanted and I am very happy about that. I am currently teaching high quality web programming bootcamp classes.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022 - Aug 2024",
  },
  {
    title: "One of my big projects",
    location: "Online",
    description:
      "I took my first major project at the English Language Learning Center and it was very important for me to put the technologies I learned into practice. Project Summary I created a dashboard and a speech test landing page to test the mocks. Currently, about 200 people are regularly using this project. See this project in detail  👉  mock-tests.   And this project gave me good income",
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
  {
    title: "My collective projects at the Academy & Albison Group",
    location: "Houston, TX",
    description:
      "At the same time, I actively and regularly participate in projects with the team at the academy. Our team has more experienced programmers than me, and I get advice from them. I participate in code review processes to maintain high quality standards, provide constructive feedback, and ensure the application follows best practices. I also perform unit and integration testing using Jest and React Testing Library to ensure code reliability and functionality. Examples of our most successful collective projects are e-medical.uz, adminveva.com, codekaplan.com, veva.uz You can get complete information about these projects from the portfolio.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Automated medical service system",
    description:
      "We offer revolutionary solutions to improve the quality of medical services through digital technologies!",
    imageUrl: medical,
    navigate: {
      url: "https://e-medical.uz/",
      heading: "e-medical.uz",
    },
  },
  {
    title: "Veva - Чистая вода",
    description:
      "logo. Phone Number. user. Phone Number. Password *. visibility_off. Password *. Login. Welcome to the. Veva water dashboard! Clean packaged water for your ...",
    imageUrl: veveAdmin,
    navigate: {
      url: "https://adminveva.com/login",
      heading: "Veva Water Dashboard",
    },
  },
  {
    title: "Test Your English Any Time Any Where MultiLevel English Test App",
    description:
      "Free IELTS Speaking Test: Prepare with IELTS Speaking Topics and Templates for IELTS Speaking Part 1, 2, & 3",
    imageUrl: multilevel,
    navigate: {
      url: "https://mock-tests.vercel.app/",
      heading: "mock-tests.com",
    },
  },
  {
    title: "C Futuristic  IT Education platform",
    description: "Excellence is achieved by investing your todays for the brighter tomorrows. Invest in IT",
    imageUrl: codekaplan,
    navigate: {
      url: "https://www.codekaplan.com",
      heading: "codekaplan.com",
    },
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git & Github",
  "Tailwind CSS",
  "Zustand",
  "Antd Design",
  "Figma",
  "Firebase",
  "Redux",
  "GraphQL",
  "Framer Motion",
  "Solid Principles",
  "Jira",
  "Problems Solving",
  "Testing Skills",
  "Unit testing",
  "Integration Testing",
] as const;
