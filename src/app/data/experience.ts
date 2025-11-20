import { Technology } from './technology';

export interface Experience {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  skills: Technology[];
  description: string;
  logo?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'experience.javaSoftwareEngineer.title',
    company: 'experience.javaSoftwareEngineer.company',
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
    logo: 'assets/logos/six.svg',
  },
  {
    title: 'experience.masterAppliedDataScience.title',
    company: 'experience.masterAppliedDataScience.company',
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
    logo: 'assets/logos/hslu.svg',
  },
  {
    title: 'experience.graduateProgram.title',
    company: 'experience.graduateProgram.company',
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
    logo: 'assets/logos/six.svg',
  },
  {
    title: 'experience.bachelor.title',
    company: 'experience.bachelor.company',
    location: 'experience.bachelor.location',
    from: 'experience.bachelor.from',
    to: 'experience.bachelor.to',
    skills: [
      Technology.Docker,
      Technology.Java,
      Technology.Spring,
      Technology.SpringBoot,
      Technology.GitLab,
      Technology.MySQL,
      Technology.JavaFX,
      // Technology.BPMN,
      // Technology.RE,
    ],
    description: 'experience.bachelor.description',
    logo: 'assets/logos/fhnw.svg',
  },
];
