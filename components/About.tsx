import { ArrowUpRight, Layers3, ScanLine } from "lucide-react";
import { about, personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="about-section section shell" data-nav-section aria-labelledby="about-title">
      <div className="about-heading">
        <p className="eyebrow"><span className="section-index">02</span> THE PERSON BEHIND THE CODE</p>
        <h2 id="about-title">Curiosity is the start.<br /><span className="muted-heading">Building is the point.</span></h2>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">More about me on LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="about-copy">
        <p className="about-lead">{about.trim()}</p>
        <div className="principles">
          <div><Layers3 size={21} aria-hidden="true" /><h3>Across the stack</h3><p>From the training pipeline to the API that puts a model to work.</p></div>
          <div><ScanLine size={21} aria-hidden="true" /><h3>Beyond the happy path</h3><p>Reliable retrieval, traceable experiments, and careful debugging.</p></div>
        </div>
      </div>
    </section>
  );
}
