import projectData from "@/projects.json";

export type Project = {
  id          : string;
  title       : string;
  description : string;
  category?   : string;
  summary?    : string;
  tags        : string[];
  techStack?  : string[];
  highlights? : string[];
  links       : { label: string; url: string }[];
  featured    : boolean;
  order       : number;
};

export async function getProjects(): Promise<Project[]> {
  // Bundle the checked-in content so previews and deployments use the same data.
  const projects: Project[] = projectData;
  return [...projects].sort((a, b) => a.order - b.order);
}
