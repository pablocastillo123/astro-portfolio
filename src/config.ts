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
  link: string;
  github: string;
}

export const config = {
  name: "Pablo Castillo",
  role: "Full Stack Developer",
  email: "pablo.castillo@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/pablo-castillo-92b039207",
  },
  experience: [
    {
      title: "Full-Stack Developer",
      company: "Waku Casa De Software",
      date: "Febrero 2022 - Presente",
      location: "Venezuela, Zulia, Maracaibo",
      modality:"Presencial",
      description: "Contribuí en la implementación de mejoras, soporte técnico y corrección de errores para un sistema de recaudación de impuestos con más de 100k usuarios registrados en más de 3 estados de Venezuela. Lideré la integración de validaciones de pagos con la banca nacional y la optimización de procesos críticos."
    },
    {
      title: "Full-Stack Developer",
      company: "a2 Softway",
      location: "Venezuela, Zulia, Maracaibo",
      date: "Marzo 2021 - Febrero 2022",
      modality:"Presencial",
      description: "Participé en el desarrollo y mantenimiento de un sistema administrativo web (ERP), colaborando en la implementación de funcionalidades clave tanto en el Back-End como en el Front-End para optimizar procesos de gestión empresarial."
    },
    {
      title: "Web Developer",
      company: "Insiemp",
      location: "Venezuela, Zulia, Maracaibo",
      date: "Marzo 2021 - Febrero 2022",
      modality:"Presencial",
      description: "Participé en el diseño y desarrollo de una pizarra virtual interactiva para una plataforma educativa, implementando herramientas colaborativas en tiempo real y nuevas funcionalidades orientadas a optimizar la experiencia de aprendizaje digital."
    }
  ] as Experience[],
  projects: [
    {
      title: "Dashboard B2B",
      description: "Dashboard B2B es una aplicación web para visualizar y analizar ventas recientes, totales, clientes destacados y distribución de ventas, utilizando gráficos interactivos y tablas filtrables.",
      tags: ["React", "TypeScript", "Material UI (MUI)", "Redux Toolkit", "Nivo (gráficas)", "React Testing Library", "Vitest", "Vite"],
      link: "#",
      github: "https://github.com/pablocastillo123/dashboard-b2b",
    },
  ] as Project[],
  skills: [
    { name: "React", icon: "devicon-react-original" },
    { name: "React Native", icon: "devicon-react-original" },
    { name: "PHP", icon: "devicon-php-plain" },
    { name: "Laravel", icon: "devicon-laravel-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "NestJS", icon: "devicon-nestjs-plain" },
    { name: "Prisma", icon: "devicon-prisma-original" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "Socket.io", icon: "devicon-socketio-original" },
    { name: "Python", icon: "devicon-python-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
  ],
};
