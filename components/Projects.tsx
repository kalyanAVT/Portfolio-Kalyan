"use client";

import { motion } from "framer-motion";
import type { Project } from "../lib/getProjects";
import { Globe, Box } from "lucide-react";

// Inline SVG – lucide-react no longer ships brand icons
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  const getIcon = (label: string) => {
    const lower = label.toLowerCase();
    if (lower.includes("github") || lower.includes("source")) return <GitHubIcon className="w-3.5 h-3.5" />;
    if (lower.includes("package")) return <Box className="w-3.5 h-3.5" />;
    return <Globe className="w-3.5 h-3.5" />;
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-[700px] mx-auto px-5 py-16 text-center"
    >
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-xs font-medium text-[var(--fg)] mb-4">
        My Projects
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)] mb-4">
        Check out my latest work
      </h2>
      <p className="text-[var(--muted)] text-base md:text-lg max-w-xl mx-auto mb-10">
        I&apos;ve worked on a variety of AI/ML projects, from memory systems to workflow automation platforms. Here are a few of my favorites.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        {projects.map((project) => (
          <div key={project.id} className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-5 hover:border-[var(--muted)] transition-colors duration-200 flex flex-col h-full">
            <h3 className="font-bold text-lg text-[var(--fg)] mb-2">{project.title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-grow">{project.description}</p>
          
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold bg-[var(--tag-bg)] text-[var(--tag-fg)] border border-[var(--border)] cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          
            {/* Links */}
            <div className="flex gap-2 flex-wrap mt-auto">
              {project.links.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--fg)] text-[var(--bg)] hover:opacity-80 transition-opacity">
                  {getIcon(link.label)}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
