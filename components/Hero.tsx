import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Terminal } from "lucide-react";
import { personal } from "@/lib/data";
import SystemIllustration from "./SystemIllustration";

export default function Hero() {
  return (
    <section id="home" className="hero shell" data-nav-section aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="eyebrow"><Terminal size={14} aria-hidden="true" /> AI / ML ENGINEER</p>
        <span className="status-badge"><span className="status-dot" />{personal.status}</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <Image src="/profile.png" alt={personal.name} width={44} height={44} priority />
            <span>Hey, I&apos;m <strong>{personal.firstName}.</strong></span>
          </div>
          <h1 id="hero-title">Intelligence,<br /><span>engineered.</span></h1>
          <p className="hero-description">
            I build AI that holds up beyond the demo. From agents that reason to models that learn—turning complex ideas into systems that work.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore my work <ArrowDown size={17} aria-hidden="true" /></a>
            <a href={personal.github} className="button button-secondary" target="_blank" rel="noopener noreferrer">
              <Code2 size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <SystemIllustration />
      </div>
      <div className="hero-bottomline">
        <span className="mono-label">RESEARCH MEETS REAL-WORLD IMPACT</span>
        <ul aria-label="Areas of focus"><li>LLMs & agents</li><li>Machine learning</li><li>Production AI</li></ul>
        <a href="#projects" className="scroll-cue" aria-label="Scroll to selected work"><ArrowDown size={18} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
