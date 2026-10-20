import { ArrowUpRight, ChevronDown, Code2, Globe } from "lucide-react";
import type { Project } from "@/lib/getProjects";
import { personal } from "@/lib/data";
import ProjectVisual from "./ProjectVisual";
import SectionHeading from "./SectionHeading";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section shell projects-section" data-nav-section aria-labelledby="projects-title">
      <SectionHeading index="01" label="SELECTED WORK" title="Built to solve. Built to ship." description="A few explorations in making AI more useful, reliable, and accessible." id="projects-title" />
      {projects.length ? (
        <div className="projects-grid">
          {projects.map((project, index) => {
            const hasDetails = project.summary || project.highlights?.length || project.techStack?.length;
            return (
              <article className={"project-card" + (project.featured ? " project-featured" : "")} key={project.id} aria-labelledby={"project-" + project.id}>
                <ProjectVisual id={project.id} />
                <div className="project-content">
                  <div className="project-eyebrow"><span>{project.category ?? "SOFTWARE · ENGINEERING"}</span><span className="project-number">{String(index + 1).padStart(2, "0")}</span></div>
                  <h3 id={"project-" + project.id}>{project.title}</h3>
                  <p className="project-summary">{project.summary ?? project.description}</p>
                  <ul className="tag-list project-tags" aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  {Boolean(hasDetails) && (
                    <details className="project-details">
                      <summary><span>Technical notes</span><ChevronDown size={15} aria-hidden="true" /></summary>
                      {project.summary && <p>{project.description}</p>}
                      {Boolean(project.highlights?.length) && <ul className="project-highlights">{project.highlights?.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                      {Boolean(project.techStack?.length) && <p className="project-stack"><strong>Full stack:</strong> {project.techStack?.join(", ")}</p>}
                    </details>
                  )}
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.url} key={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label + " — " + project.title}>
                        {link.label === "GitHub" ? <Code2 size={16} aria-hidden="true" /> : <Globe size={16} aria-hidden="true" />}{link.label === "GitHub" ? "View source" : link.label}<ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : <p className="empty-projects">Projects are temporarily unavailable. You can explore my work on GitHub below.</p>}
      <div className="projects-endnote"><span>Always experimenting. Always building.</span><a className="text-link" href={personal.github} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a></div>
    </section>
  );
}
