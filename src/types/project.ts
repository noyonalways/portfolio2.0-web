export type TProjectType = "frontend" | "backend" | "full-stack";
export type TProjectStatus = "active" | "completed" | "archived";
export interface ITeckStack {
  technologies: string[];
  deploymentLink: string;
  github: string;
}

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  description: string;
  brief: string;
  cover: string;
  likes: number;
  views: number;
  comments: number;
  features: string[];
  images: string[];
  type: TProjectType;
  status: TProjectStatus;
  frontend: ITeckStack;
  backend: ITeckStack;
}
