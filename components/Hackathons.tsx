"use client";

import { motion } from "framer-motion";
import { hackathons } from "../lib/data";
import { getInitialColor } from "../lib/utils";

export default function Hackathons() {
  if (!hackathons || hackathons.length === 0) return null;

  return (
    <motion.section
      id="hackathons"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-[700px] mx-auto px-5 py-16"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-xs font-medium text-[var(--fg)] mb-4">
          Hackathons
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)]">
          I like building things
        </h2>
      </div>

      <div className="relative border-l border-[var(--border)] ml-5 md:ml-6 space-y-10 py-2">
        {hackathons.map((hackathon, i) => {
           const color = getInitialColor(hackathon.name);
           return (
             <div key={i} className="relative pl-8 md:pl-10">
               {/* Timeline dot */}
               <div 
                 className="absolute -left-5 top-1 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 border-[var(--bg)] shadow-sm"
                 style={{ backgroundColor: color.bg, color: color.fg }}
               >
                 {hackathon.name[0]}
               </div>

               <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                 <h3 className="font-bold text-xl text-[var(--fg)]">{hackathon.name}</h3>
                 <span className="text-sm font-mono text-[var(--muted)]">{hackathon.date}</span>
               </div>
               
               <div className="mb-2">
                 <span className="text-[var(--muted)] font-medium text-sm">
                   {hackathon.location}
                 </span>
               </div>
               
               <p className="text-[var(--muted)] text-sm leading-relaxed mt-2">
                 {hackathon.summary}
               </p>
             </div>
           );
        })}
      </div>
    </motion.section>
  );
}
