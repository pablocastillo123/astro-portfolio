export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  location: string;
  modality: string;
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

export interface Socials {
  github: string;
  linkedin: string;
  twitter?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  description: string;
  socials: Socials;
  nav: NavItem[];
  hero: {
    greeting: string;
    description: string;
  };
  titles: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    certificates: string;
    contact: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  certificates: Certificate[];
  contact: {
    overline: string;
    title: string;
  };
}
