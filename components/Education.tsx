import { ArrowUpRight, GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  if (!education.length) return null;
  return (
    <section id="education" className="education-section" aria-labelledby="education-title">
      <SectionHeading index="06" label="THE FOUNDATION" title="Built on the fundamentals." id="education-title" />
      {education.map((item) => (
        <article className="education-card" key={item.institution}>
          <GraduationCap size={28} strokeWidth={1.4} aria-hidden="true" />
          <p className="mono-label">{item.period}</p>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
          <a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer">Visit university <ArrowUpRight size={16} aria-hidden="true" /></a>
        </article>
      ))}
    </section>
  );
}
