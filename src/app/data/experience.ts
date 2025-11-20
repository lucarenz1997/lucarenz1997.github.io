import { Technology } from './technology';

export interface Experience {
  title: string;
  company: string;
  location: string; // now: translation key
  from: string; // now: translation key
  to: string; // now: translation key
  skills: Technology[];
  description: string; // translation key
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Java Software Engineer',
    company: 'SIX Group AG',
    location: 'experience.javaSoftwareEngineer.location',
    from: 'experience.javaSoftwareEngineer.from',
    to: 'experience.javaSoftwareEngineer.to',
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
    description: 'experience.javaSoftwareEngineer.description',
  },
  {
    title: 'Master in Applied Data Science and Information',
    company: 'University of Lucerne',
    location: 'experience.masterAppliedDataScience.location',
    from: 'experience.masterAppliedDataScience.from',
    to: 'experience.masterAppliedDataScience.to',
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
    description: 'experience.masterAppliedDataScience.description',
  },
  {
    title: 'Graduate Programm',
    company: 'SIX Group AG',
    location: 'experience.graduateProgram.location',
    from: 'experience.graduateProgram.from',
    to: 'experience.graduateProgram.to',
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
    description: 'experience.graduateProgram.description',
  },
];
