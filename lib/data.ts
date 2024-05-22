import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import medical from "../public/portfolio-images/e-medical.png";
import veveAdmin from "../public/portfolio-images/admin-veva.png"

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
    title: "Graduated bootcamp",
    location: "Self study",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Zustand",
  "Antd Design",
  "Figma",
  "Animete CSS",
  "Firebase",
  "Redux",
  "GraphQL",
  "Framer Motion",
] as const;
