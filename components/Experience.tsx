import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  if (!experiences.length) return null;
  return (
    <section id="experience" className="section shell experience-section" data-nav-section aria-labelledby="experience-title">
      <SectionHeading index="03" label="IN PRACTICE" title="Where I've put it to work." id="experience-title" />
      {experiences.map((experience) => (
        <article className="experience-card" key={experience.company}>
          <div className="experience-meta">
            <span className="experience-icon"><BriefcaseBusiness size={23} strokeWidth={1.5} aria-hidden="true" /></span>
            <p className="mono-label">{experience.period}</p>
            <span className="subtle-label">AI DEVELOPER / INTERNSHIP</span>
          </div>
          <div className="experience-content">
            <h3>{experience.role}</h3>
            {experience.url && experience.url !== "#" ? (
              <a className="experience-company text-link" href={experience.url} target="_blank" rel="noopener noreferrer">{experience.company}<ArrowUpRight size={16} aria-hidden="true" /></a>
            ) : <p className="experience-company">{experience.company}</p>}
            <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </article>
      ))}
    </section>
  );
}
