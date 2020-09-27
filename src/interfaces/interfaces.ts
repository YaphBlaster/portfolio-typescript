export interface IProject {
  title: string;
  image: string;
  imageDescription?: string | undefined;
  description: string;
  techStack: string[];
  codeLink?: string[] | string;
  demoLink?: string;
  year: number;
}

export interface ISkill {
  name: string;
  image: string;
}
