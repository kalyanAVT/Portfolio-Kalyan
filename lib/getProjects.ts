export type Project = {
  id          : string;
  title       : string;
  description : string;
  tags        : string[];
  links       : { label: string; url: string }[];
  featured    : boolean;
  order       : number;
};

export async function getProjects(): Promise<Project[]> {
  const user = process.env.GITHUB_USER ?? "yourusername";
  const repo = process.env.GITHUB_REPO ?? "portfolio";
  const url  = `https://raw.githubusercontent.com/${user}/${repo}/main/projects.json`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Fetch failed");
    const data: Project[] = await res.json();
    return data.sort((a, b) => a.order - b.order);
  } catch (error) {
    try {
      // Fallback to local file
      const fs = await import("fs/promises");
      const path = await import("path");
      const localPath = path.join(process.cwd(), "projects.json");
      const fileData = await fs.readFile(localPath, "utf-8");
      const data: Project[] = JSON.parse(fileData);
      return data.sort((a, b) => a.order - b.order);
    } catch (fsError) {
      console.error("Failed to load local projects:", fsError);
      return []; // never breaks the build
    }
  }
}
