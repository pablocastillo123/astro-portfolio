export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
}

export const config = {
  name: "Alex Dev",
  role: "Senior Frontend Developer",
  bio: "Passionate about building accessible, pixel-perfect user interfaces that blend form and function. Experienced in React, Astro, and Tailwind CSS.",
  email: "alex@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      date: "2023 - Present",
      description: "Leading the frontend team in rebuilding the core product using Next.js and Tailwind. Improved performance by 40%."
    },
    {
      title: "Software Engineer",
      company: "StartUp Inc",
      date: "2021 - 2023",
      description: "Developed and maintained multiple React applications. Implemented a comprehensive design system."
    },
    {
      title: "Junior Developer",
      company: "Web Agency",
      date: "2020 - 2021",
      description: "Collaborated with designers to create responsive landing pages and marketing sites."
    }
  ] as Experience[],
  projects: [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for online retailers to manage inventory, sales, and analytics.",
      tags: ["React", "TypeScript", "Tailwind", "Recharts"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      tags: ["Vue", "Firebase", "Pinia"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio v1",
      description: "My previous portfolio built with Gatsby and styled components.",
      tags: ["Gatsby", "GraphQL", "Styled Components"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio v1",
      description: "My previous portfolio built with Gatsby and styled components.",
      tags: ["Gatsby", "GraphQL", "Styled Components"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio v1",
      description: "My previous portfolio built with Gatsby and styled components.",
      tags: ["Gatsby", "GraphQL", "Styled Components"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio v1",
      description: "My previous portfolio built with Gatsby and styled components.",
      tags: ["Gatsby", "GraphQL", "Styled Components"],
      link: "#",
      github: "#",
    },
  ] as Project[],
};
