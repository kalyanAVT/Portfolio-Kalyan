"use client";

import { motion } from "framer-motion";
import { experiences } from "../lib/data";
import { getInitialColor } from "../lib/utils";

export default function Experience() {
  if (!experiences || experiences.length === 0) return null;
  
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-[700px] mx-auto px-5 py-16"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-xs font-medium text-[var(--fg)] mb-4">
          Experience
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)]">
          Work History
        </h2>
      </div>

      <div className="relative border-l border-[var(--border)] ml-5 md:ml-6 space-y-10 py-2">
        {experiences.map((company, i) => {
          const color = getInitialColor(company.company);
          return (
            <div key={i} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div 
                className="absolute -left-5 top-1 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 border-[var(--bg)] shadow-sm"
                style={{ backgroundColor: color.bg, color: color.fg }}
              >
                {company.company[0]}
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="font-bold text-xl text-[var(--fg)]">{company.role}</h3>
                <span className="text-sm font-mono text-[var(--muted)]">{company.period}</span>
              </div>
              
              <div className="mb-4">
                <a href={company.url} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors inline-flex items-center gap-1 font-medium">
                  {company.company} <span className="text-xs">↗</span>
                </a>
              </div>
              
              <ul className="space-y-2 mt-3">
                {company.bullets.map((b, idx) => (
                  <li key={idx} className="text-[var(--muted)] text-sm flex items-start gap-2 leading-relaxed">
                    <span className="text-[var(--fg)] mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--border)] shrink-0"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
