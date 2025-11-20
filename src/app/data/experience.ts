import { Technology } from './technology';
import { Skill } from './skill';

export interface Experience {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  technologies: Technology[];
  skills?: Skill[];
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
    technologies: [
      Technology.Kubernetes,
      Technology.OpenShift,
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
      Technology.SQL,
    ],
    skills: [
      Skill.BusinessProcessManagement,
      Skill.RequirementsEngineering,
      Skill.StakeholderManagement,
      Skill.AgileScrum,
      Skill.TechnicalDocumentation,
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
    technologies: [
      Technology.Python,
      Technology.BeautifulSoup,
      Technology.Pandas,
      Technology.PostgreSQL,
      Technology.Selenium,
      Technology.Spacy,
      Technology.Torch,
      Technology.DataBricks,
      Technology.SQL,
    ],
    skills: [
      Skill.MachineLearning,
      Skill.Scraping,
      Skill.DataWrangling,
      Skill.ExploratoryDataAnalysis,
      Skill.ModelEvaluation,
      Skill.ResearchExperimentation,
      Skill.TimeSeries,
      Skill.DataEngineering,
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
    technologies: [
      Technology.Kubernetes,
      Technology.OpenShift,
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
      Technology.SQL,
    ],
    skills: [
      Skill.StakeholderManagement,
      Skill.RequirementsEngineering,
      Skill.AgileScrum,
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
    technologies: [
      Technology.Java,
      Technology.Spring,
      Technology.SpringBoot,
      Technology.GitLab,
      Technology.MySQL,
      Technology.JavaFX,
      Technology.SQL,
    ],
    skills: [
      Skill.BusinessProcessManagement,
      Skill.RequirementsEngineering,
      Skill.ProjectManagement,
    ],
    description: 'experience.bachelor.description',
    logo: 'assets/logos/fhnw.svg',
  },
];
