import { Braces, BrainCircuit, Database, Workflow } from "lucide-react";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  { title: "Models & learning", icon: BrainCircuit, description: "Train, fine-tune, evaluate.", names: ["Python", "PyTorch", "Scikit-learn", "HuggingFace Transformers", "LoRA", "QLoRA"] },
  { title: "LLMs & agents", icon: Workflow, description: "Give intelligence a workflow.", names: ["Large Language Models (LLMs)", "AI Agents", "Agentic Workflows", "LLM Tool Calling", "Prompt Engineering", "LangChain", "LangGraph", "Multi-Agent Systems", "Retrieval-Augmented Generation (RAG)", "Vector Databases (Qdrant)", "LLM Observability"] },
  { title: "Engineering & deployment", icon: Braces, description: "Get it into the real world.", names: ["AWS", "Docker", "GitHub Actions", "Weights & Biases", "FastAPI", "Pydantic", "Async Python", "Server-Sent Events", "Streamlit", "REST APIs", "CI-ready Testing (pytest)"] },
  { title: "Data & storage", icon: Database, description: "Build on solid foundations.", names: ["Pandas", "NumPy", "MySQL", "SQLite", "Redis"] },
];

export default function Skills() {
  if (!skills.length) return null;
  const known = new Set(GROUPS.flatMap((group) => group.names));
  const additionalSkills = skills.filter((skill) => !known.has(skill));
  return (
    <section id="skills" className="section shell" data-nav-section aria-labelledby="skills-title">
      <SectionHeading index="04" label="THE TOOLKIT" title="The right tools. Real outcomes." description="A practical stack for taking AI from the first experiment to production." id="skills-title" />
      <div className="skills-grid">
        {GROUPS.map(({ title, icon: Icon, description, names }) => (
          <div className="skill-group" key={title}>
            <div className="skill-heading"><span className="skill-icon"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></div>
            <ul className="tag-list">{names.filter((name) => skills.includes(name)).map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        ))}
        {additionalSkills.length > 0 && <div className="skill-group"><h3>Also in my toolkit</h3><ul className="tag-list">{additionalSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>}
      </div>
    </section>
  );
}
