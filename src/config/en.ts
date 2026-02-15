import type { SiteConfig } from './types';

export const en: SiteConfig = {
  name: "Pablo Castillo",
  role: "Full Stack Developer",
  email: "",
  description: "Pablo Castillo's Portfolio",
  socials: {
    github: "https://github.com/pablocastillo123",
    linkedin: "https://www.linkedin.com/in/pablo-castillo-92b039207",
  },
  
  // UI Strings
  nav: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hi, I'm",
    description: "Software Engineer | Full-Stack Developer | +4 years of experience in software development."
  },
  titles: {
    about: "About Me",
    experience: "Work Experience",
    projects: "Featured Projects",
    skills: "Technical Skills",
    certificates: "Certifications",
    contact: "Contact"
  },

  about: {
    title: "About Me",
    description1: "Software Engineer with +4 years of experience. Track record in GovTech and FinTech sectors, leading the implementation of scalable functionalities, optimization of critical processes, and resolution of incidents in systems with +100k active users. Expert in the React, Node.js, TypeScript, and PostgreSQL ecosystem.",
    description2: "I possess a resilient and proactive profile, accustomed to high-demand environments. I prioritize work in multidisciplinary teams and constant updating of emerging technologies that allow me to evolve professionally and provide innovative solutions."
  },

  contact: {
    overline: "What's Next?",
    title: "Contact Me",
  },

  experience: [
    {
      title: "Full Stack Developer",
      company: "Waku Casa De Software",
      date: "February 2022 - Present",
      location: "Venezuela, Zulia, Maracaibo",
      modality: "On-site",
      description: "Optimized user experience (UX) and process flows for a tax collection system used by +100k active users in +3 states of Venezuela. Successfully integrated payment reconciliation with national banks and conducted on-site requirement gathering (San Cristóbal Mayor's Office) for future implementations."
    },
    {
      title: "Full Stack Developer",
      company: "a2 Softway",
      location: "Venezuela, Zulia, Maracaibo",
      date: "March 2021 - February 2022",
      modality: "On-site",
      description: "Developed key functionalities in a web accounting system (ERP) for both Back-End (PHP, Laravel, MySQL) and Front-End (Bootstrap, HTML, JavaScript, CSS)."
    },
    {
      title: "Front-End Developer",
      company: "Insiemp",
      location: "Venezuela, Zulia, Maracaibo",
      date: "March 2021 - February 2022",
      modality: "On-site",
      description: "Participated in the design and development of an interactive virtual whiteboard for an educational platform, implementing real-time collaborative tools using Socket.IO as well as new features in the Front-End with React."
    }
  ],
  projects: [
    {
      title: "Unified Procedures System (SUT)",
      description: "The Unified Procedures System (SUT) is a comprehensive e-government platform that increases revenue through digitized tax collection and automates all procedures and interactions with citizens from any computer or mobile device. The system is used in several states of Venezuela such as San Cristóbal, Anzoátegui, Yaracuy, and Barinas managing +100k active users and processing thousands of daily transactions.",
      tags: ["React", "TypeScript", "Ant Design", "Redux", "NodeJS", "ExpressJS", "PostgreSQL"],
      image: "/projects/sut.png"
    },
    {
      title: "a2 Web Accounting",
      description: "It is a financial information system designed to record, classify, summarize, and report the economic transactions of a company, in order to provide useful information for financial decision-making and compliance with tax obligations.",
      tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      image: "/projects/a2contabilidad.png"
    },
    {
      title: "B2B Dashboard",
      description: "This project was a technical test consisting of developing a B2B dashboard focused solely on the visual aspect (Front-End). The goal was to visualize and analyze recent sales, totals, and sales distribution using interactive charts and filterable tables.",
      tags: ["React", "TypeScript", "Material UI (MUI)", "Redux Toolkit", "Nivo (charts)", "React Testing Library", "Vitest", "Vite"],
      link: "https://dashboard-b2b-iota.vercel.app",
      github: "https://github.com/pablocastillo123/dashboard-b2b",
      image: "/projects/dashboard-b2b.png"
    },
  ],
  skills: [
    { name: 'Git', icon: 'devicon-git-plain'},
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "NodeJS", icon: "devicon-nodejs-plain" },
    { name: "ExpressJS", icon: "devicon-express-original" },
    { name: "Astro ", icon: "devicon-astro-plain"},
    { name: "React", icon: "devicon-react-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name:'Redux', icon:'devicon-redux-original'},
    { name: 'Ant Design', icon: 'devicon-antdesign-plain'},
    { name: "Python", icon: "devicon-python-plain" },
    { name: "NestJS", icon: "devicon-nestjs-plain" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain"},
    { name: "jQuery", icon: "devicon-jquery-plain" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain"},
    { name: "React Native", icon: "devicon-react-original" },
    { name: "Prisma", icon: "devicon-prisma-original" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Socket.io", icon: "devicon-socketio-original" },
    { name: "Pug", icon: "devicon-pug-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "PHP", icon: "devicon-php-plain" },
    { name: "Laravel", icon: "devicon-laravel-plain" },
  ],
  certificates: [
    {
      title: "English Certificate",
      issuer: "Venezuelan American Center of Zulia (CEVAZ)",
      date: "Issued in 2025",
      link: "https://www.cevaz.org/"
    },
    {
      title: "Complete Wordpress Website Developer Course",
      issuer: "Udemy",
      date: "Issued in 2023",
      link: "https://www.udemy.com/certificate/UC-69407787-4994-471d-a71a-fb0fb29cc4e3/"
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      issuer: "Coursera",
      date: "Issued in 2021",
      link: "https://www.coursera.org/account/accomplishments/verify/QXA9T37M44S2"
    },
  ],
};
