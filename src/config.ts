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
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/pablo-castillo-92b039207",
  },
  experience: [
    {
      title: "Desarrollador Full Stack",
      company: "Waku Casa De Software",
      date: "Febrero 2022 - Presente",
      location: "Venezuela, Zulia, Maracaibo",
      modality:"Presencial",
      description: "Optimicé la experiencia de usuario (UX) y flujos de trámites de un sistema de recaudación de impuestos usado por +100k usuarios activos en +3 estados de Venezuela. Logré integrar con éxito la conciliación de pagos con la banca nacional venezolana y de resolver errores críticos en momentos de alta demanda."
    },
    {
      title: "Desarrollador Full Stack",
      company: "a2 Softway",
      location: "Venezuela, Zulia, Maracaibo",
      date: "Marzo 2021 - Febrero 2022",
      modality:"Presencial",
      description: "Participé en el desarrollo y mantenimiento de un sistema de contabilidad web (ERP), colaborando en la implementación de funcionalidades clave tanto en el Back-End como en el Front-End."
    },
    {
      title: "Desarrollador Web",
      company: "Insiemp",
      location: "Venezuela, Zulia, Maracaibo",
      date: "Marzo 2021 - Febrero 2022",
      modality:"Presencial",
      description: "Participé en el diseño y desarrollo de una pizarra virtual interactiva para una plataforma educativa, implementando herramientas colaborativas en tiempo real y nuevas funcionalidades orientadas a optimizar la experiencia de aprendizaje digital."
    }
  ] as Experience[],
  projects: [
    {
      title: "Sistema Único de Trámites (SUT)",
      description: "El SUT es una plataforma integral de gobierno electrónico que permite aumentar los ingresos a través de la recaudación de impuestos digitalizada y automatizar todos los trámites e interacciones con la ciudadanía desde cualquier computadora o dispositivo móvil. El sistema se utiliza en varios estados de Venezuela como San Cristóbal, Anzoátegui, Yaracuy y Barinas gestionando +100k usuarios activos y procesando miles de transacciones diarias.",
      tags: ["React", "TypeScript", "Ant Design", "Redux", "NodeJS", "ExpressJS", "PostgreSQL"],
      image: "/projects/sut.png"
    },
    {
      title: "a2 Contabilidad Web",
      description: "a2 Contabilidad es un sistema de información financiero diseñado para registrar, clasificar, resumir y reportar las transacciones económicas de una empresa, con el fin de proporcionar información útil para la toma de decisiones financieras y el cumplimiento de las obligaciones fiscales.",
      tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
      image:"/projects/a2contabilidad.png"
    },
    {
      title: "Dashboard B2B",
      description: "Dashboard B2B es una aplicación web visual (Front-End) para visualizar y analizar ventas recientes, totales, clientes destacados y distribución de ventas, utilizando gráficos interactivos y tablas filtrables.",
      tags: ["React", "TypeScript", "Material UI (MUI)", "Redux Toolkit", "Nivo (gráficas)", "React Testing Library", "Vitest", "Vite"],
      link: "https://dashboard-b2b-iota.vercel.app/login",
      github: "https://github.com/pablocastillo123/dashboard-b2b",
      image: "/projects/dashboard-b2b.png"
    },
  ] as Project[],
  skills: [
    { name: 'Git', icon: 'devicon-git-plain'},
    { name: "Python", icon: "devicon-python-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "NestJS", icon: "devicon-nestjs-plain" },
    { name: "NodeJS", icon: "devicon-nodejs-plain" },
    { name: "ExpressJS", icon: "devicon-expressjs-plain" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain"},
    { name: "jQuery", icon: "devicon-jquery-plain" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain"},
    { name: 'Ant Design', icon: ''},
    { name:'Redux', icon:''},
    { name: "Astro ", icon: "devicon-astro-plain"},
    { name: "React", icon: "devicon-react-original" },
    { name: "React Native", icon: "devicon-react-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "Prisma", icon: "devicon-prisma-original" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Socket.io", icon: "devicon-socketio-original" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "PHP", icon: "devicon-php-plain" },
    { name: "Laravel", icon: "devicon-laravel-plain" },
  ],
  certificates: [
    {
      title: "Certificado de Inglés",
      issuer: "CEVAZ",
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
