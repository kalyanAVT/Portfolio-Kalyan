"use client";

import { motion } from "framer-motion";
import { skills } from "../lib/data";

export default function Skills() {
  if (!skills || skills.length === 0) return null;

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-[700px] mx-auto px-5 py-16"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-xs font-medium text-[var(--fg)] mb-4">
          Capabilities
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)]">
          My Skills
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <span key={skill} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[var(--card-bg)] text-[var(--fg)] border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--muted)] hover:-translate-y-0.5 transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
