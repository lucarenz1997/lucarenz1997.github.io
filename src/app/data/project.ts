import { ProjectTopic } from './project-topic.enum';

export interface Project {
  name: string;
  description: string;
  topic: ProjectTopic;
  programmingLanguages?: string[];
  frameworks?: string[];
  libraries?: string[];
  platforms?: string[];
  github?: string;
  link?: string;
  icon?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Master Thesis - Outlier Detection using Machine Learning (TBD)',
    description: 'projects.thesis.description',
    topic: ProjectTopic.DataScience,
    programmingLanguages: ['Python'],
    frameworks: ['TensorFlow'],
    libraries: ['Pandas', 'scikit-learn'],
    platforms: ['DataBricks'],
    icon: 'analytics',
  },
  {
    name: 'Natural Language Processing',
    description: 'projects.nlp.description',
    topic: ProjectTopic.DataScience,
    programmingLanguages: ['Python'],
    frameworks: ['PyTorch'],
    libraries: ['Transformers', 'spaCy'],
    github: 'https://github.com/lucarenz1997/NLP',
    icon: 'chat',
  },
  {
    name: 'Web Scraper',
    description: 'projects.webScraper.description',
    topic: ProjectTopic.DataScience,
    programmingLanguages: ['Python'],
    frameworks: [],
    libraries: ['Selenium', 'BeautifulSoup', 'Pandas'],
    github: 'https://github.com/lucarenz1997/cip',
    icon: 'build',
  },
  {
    name: 'Recommender System',
    description: 'projects.recommender.description',
    topic: ProjectTopic.DataScience,
    programmingLanguages: ['Python'],
    frameworks: ['TensorFlow', 'PyTorch'],
    libraries: ['Surprise', 'Pandas', 'scikit-learn'],
    platforms: ['PySpark'],
    github: 'https://github.com/lucarenz1997/recommender_systems',
    icon: 'thumb_up',
  },
  {
    name: 'Time Series in Finance',
    description: 'projects.timeSeries.description',
    topic: ProjectTopic.DataScience,
    programmingLanguages: ['R'],
    libraries: [],
    platforms: [],
    github: 'https://github.com/lucarenz1997/time-series-in-finance',
    icon: 'timeline',
  },
];
