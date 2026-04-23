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
  const isDev = process.env.NODE_ENV === 'development';
  
  const getLocal = async () => {
    const fs = await import("fs/promises");
    const path = await import("path");
    const localPath = path.join(process.cwd(), "projects.json");
    const fileData = await fs.readFile(localPath, "utf-8");
    const data: Project[] = JSON.parse(fileData);
    return data.sort((a, b) => a.order - b.order);
  };

  const getRemote = async () => {
    const user = process.env.GITHUB_USER ?? "kalyanAVT";
    const repo = process.env.GITHUB_REPO ?? "Portfolio-Kalyan";
    const url  = `https://raw.githubusercontent.com/${user}/${repo}/main/projects.json`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Fetch failed");
    const data: Project[] = await res.json();
    return data.sort((a, b) => a.order - b.order);
  };

  // In development, always use local file for instant updates
  if (isDev) {
    try {
      return await getLocal();
    } catch (e) {
      console.warn("Dev: local projects.json not found, trying remote...");
    }
  }

  // In production, try remote first, then fallback to local
  try {
    return await getRemote();
  } catch (error) {
    try {
      return await getLocal();
    } catch (fsError) {
      console.error("Failed to load projects from both remote and local:", fsError);
      return [];
    }
  }
}
