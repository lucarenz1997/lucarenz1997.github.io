import { Technology } from './technology';

export interface Experience {
  title: string;
  company: string;
  location: string;
  from: string; // you can keep these as strings like "2023" or "Jan 2024"
  to: string; // or "Present"
  skills: Technology[];
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Java Software Engineer',
    company: 'SIX Group AG',
    location: 'Zurich, Switzerland',
    from: 'April 2023',
    to: 'January 2026',
    skills: [
      Technology.Docker,
      Technology.Java,
      Technology.Spring,
      Technology.SpringAudit,
      Technology.SpringBoot,
      Technology.SpringBatch,
      Technology.GitLab,
      Technology.Hibernate,
      Technology.JCR,
      Technology.JPA,
      Technology.Oracle,
      Technology.PostgreSQL,
    ],
    description:
      'Working on backend services with Java and Spring, focusing on clean architecture, testing and performance.',
  },
  {
    title: 'Master in Applied Data Science and Information',
    company: 'University of Lucerne',
    location: 'Lucerne, Switzerland',
    from: 'February 2024',
    to: 'Janaury 2026',
    skills: [
      Technology.Python,
      Technology.BeautifulSoup,
      Technology.Pandas,
      Technology.PostgreSQL,
      Technology.Selenium,
      Technology.Spacy,
      Technology.Torch,
      Technology.MachineLearning,
    ],
    description:
      'Full-time Master Programme while working 80%. Master Thesis within SIX Group AG related to Outlier Detection with Financial Data using Machine Learning',
  },
  {
    title: 'Graduate Programm',
    company: 'SIX Group AG',
    location: 'Zurich, Switzerland',
    from: 'October 2021',
    to: 'March 2023',
    skills: [
      Technology.Docker,
      Technology.Java,
      Technology.Spring,
      Technology.SpringBoot,
      Technology.GitLab,
      Technology.Hibernate,
      Technology.JPA,
      Technology.Oracle,
      Technology.Angular,
      Technology.React,
    ],
    description:
      'Working on backend services with Java and Spring, focusing on clean architecture, testing and performance.',
  },
];
