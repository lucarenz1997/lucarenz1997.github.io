export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Web Scraper',
    description:
      'Dynamic web scraping tool for three Swiss e-commerce platforms.',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
    github: 'https://github.com/lucarenz1997/cip',
  },
  {
    name: 'Portfolio Website',
    description:
      'This portfolio, built with Angular to showcase projects, travel videos, and photography.',
    tech: ['Angular', 'TypeScript', 'SCSS'],
    github: 'https://github.com/youruser/my-portfolio',
  },
];
