export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  location: string;
  modality:string
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const config = {
  name: "Pablo Castillo",
  role: "Desarrollador Full Stack",
  email: "pablo.castillo@gmail.com",
  socials: {
    github: "https://github.com/pablocastillo123",
    linkedin: "https://www.linkedin.com/in/pablo-castillo-92b039207",
  },
  experience: [
    {
      title: "Desarrollador Full Stack",
      company: "Waku Casa De Software",
      date: "Febrero 2022 - Presente",
      location: "Venezuela, Zulia, Maracaibo",
      modality:"Presencial",
      description: "Optimicé la experiencia de usuario (UX) y flujos de trámites para un sistema de recaudación de impuestos usado por +100k usuarios activos en +3 estados de Venezuela. Logré integrar con éxito la conciliación de pagos con la banca nacional venezolana y realicé levantamientos de requerimientos in-situ (Alcaldía de San Cristóbal) de implementaciones futuras."
    },
    {
      title: "Desarrollador Full Stack",
      company: "a2 Softway",
      location: "Venezuela, Zulia, Maracaibo",
      date: "Marzo 2021 - Febrero 2022",
      modality:"Presencial",
      description: "Desarrollé funcionalidades clave en un sistema de contabilidad web (ERP) tanto en el Back-End (PHP, Laravel, MySQL) como en el Front-End (Bootstrap, HTML, JavaScript, CSS)."
    },
    {
      title: "Desarrollador Front-End",
      company: "Insiemp",
      location: "Venezuela, Zulia, Maracaibo",
      date: "Marzo 2021 - Febrero 2022",
      modality:"Presencial",
      description: "Participé en el diseño y desarrollo de una pizarra virtual interactiva para una plataforma educativa, implementando herramientas colaborativas en tiempo real usando Socket.IO asi como nuevas funcionalidades en el Front-End con React."
    }
  ] as Experience[],
  projects: [
    {
      title: "Sistema Único de Trámites (SUT)",
      description: "El Sistema único de trámites (SUT) es una plataforma integral de gobierno electrónico que permite aumentar los ingresos a través de la recaudación de impuestos digitalizada y automatizar todos los trámites e interacciones con la ciudadanía desde cualquier computadora o dispositivo móvil. El sistema se utiliza en varios estados de Venezuela como San Cristóbal, Anzoátegui, Yaracuy y Barinas gestionando +100k usuarios activos y procesando miles de transacciones diarias.",
      tags: ["React", "TypeScript", "Ant Design", "Redux", "NodeJS", "ExpressJS", "PostgreSQL"],
      image: "/projects/sut.png"
    },
    {
      title: "a2 Contabilidad Web",
      description: "Es un sistema de información financiero diseñado para registrar, clasificar, resumir y reportar las transacciones económicas de una empresa, con el fin de proporcionar información útil para la toma de decisiones financieras y el cumplimiento de las obligaciones fiscales.",
      tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      image:"/projects/a2contabilidad.png"
    },
    {
      title: "Dashboard B2B",
      description: "Este proyecto fue una prueba técnica, la cual consiste en desarrollar un dashboard B2B unicamente el apartado visual (Front-End). Con el fin de visualizar y analizar ventas recientes, totales y distribución de ventas, utilizando gráficos interactivos y tablas filtrables.",
      tags: ["React", "TypeScript", "Material UI (MUI)", "Redux Toolkit", "Nivo (gráficas)", "React Testing Library", "Vitest", "Vite"],
      link: "https://dashboard-b2b-iota.vercel.app/login",
      github: "https://github.com/pablocastillo123/dashboard-b2b",
      image: "/projects/dashboard-b2b.png"
    },
  ] as Project[],
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
      title: "Certificado de Inglés",
      issuer: "Centro Venezolano Americano del Zulia (CEVAZ)",
      date: "2025",
      link: "https://www.cevaz.org/"
    },
    {
      title: "Complete Wordpress Website Developer Course",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/certificate/UC-69407787-4994-471d-a71a-fb0fb29cc4e3/"
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      issuer: "Coursera",
      date: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/QXA9T37M44S2"
    },
  ] as Certificate[],
};
