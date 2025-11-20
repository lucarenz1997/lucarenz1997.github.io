import { ProjectTopic } from './project-topic.enum';

export interface Project {
  name: string;
  description: string;
  tech: string[];
  topic: ProjectTopic;
  github?: string;
  link?: string;
  icon?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Natural Language Processing',
    description: 'projects.nlp.description',
    topic: ProjectTopic.DataScience,
    tech: ['Python', 'Transformers', 'Torch', 'Spacy'],
    github: 'https://github.com/lucarenz1997/NLP',
    icon: 'language',
  },
  {
    name: 'Web Scraper',
    description: 'projects.webScraper.description',
    topic: ProjectTopic.DataScience,
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas'],
    github: 'https://github.com/lucarenz1997/cip',
    icon: 'build',
  },
];
