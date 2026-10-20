import { Trophy } from "lucide-react";
import { hackathons } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Hackathons() {
  if (!hackathons.length) return null;
  return (
    <section id="hackathons" className="recognition-section" aria-labelledby="hackathons-title">
      <SectionHeading index="05" label="A LITTLE RECOGNITION" title="Ideas under pressure." id="hackathons-title" />
      <div className="award-list">
        {hackathons.map((hackathon) => (
          <article className="award" key={hackathon.name}>
            <span className="award-icon"><Trophy size={20} strokeWidth={1.5} aria-hidden="true" /></span>
            <div>
              <p className="award-date">{hackathon.date} <span> / </span> {hackathon.location}</p>
              <h3>{hackathon.name}</h3>
              <p className="award-summary">{hackathon.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
