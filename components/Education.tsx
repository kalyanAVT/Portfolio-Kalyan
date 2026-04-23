"use client";

import { motion } from "framer-motion";
import { education } from "../lib/data";

export default function Education() {
  if (!education || education.length === 0) return null;

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-[700px] mx-auto px-5 py-16"
    >
      <h2 className="text-xl font-semibold text-[var(--fg)] mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <a key={i} href={edu.url} target="_blank" rel="noopener noreferrer" 
             className="block p-4 rounded-xl border border-[var(--border)]
                        bg-[var(--card-bg)] hover:border-[var(--muted)]
                        transition-colors duration-200 group">
             <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-semibold text-sm text-[var(--fg)] group-hover:underline">
                  {edu.institution}
                </span>
                <span className="font-mono text-xs text-[var(--muted)] whitespace-nowrap flex-shrink-0">
                  {edu.period}
                </span>
             </div>
             <p className="text-xs text-[var(--muted)]">{edu.degree}</p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
