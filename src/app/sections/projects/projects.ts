export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Web Scraping',
    description:
      'A dynamic web scraping tool for Swiss e-commerce websites like Interdiscount, Galaxus, and Digitec. Built to explore pricing and product data across categories.',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
    github: 'https://github.com/lucarenz1997/cip',
  },
];
