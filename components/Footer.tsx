"use client";

import { motion } from "framer-motion";
import { personal } from "../lib/data";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-[700px] mx-auto px-5 py-16 pt-24 border-t border-[var(--border)] text-center"
    >
      <h2 className="text-xl font-semibold text-[var(--fg)] mb-6">Let's Connect</h2>
      <p className="text-sm text-[var(--muted)] mb-8 max-w-sm mx-auto">
        Feel free to reach out for collaborations, opportunities, or just a quick chat.
      </p>
      
      <div className="flex justify-center gap-6 mb-12">
        <a href={`mailto:${personal.email}`} className="text-sm font-mono text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
          Email
        </a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
          LinkedIn
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
          GitHub
        </a>
        <a href={personal.twitter} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
          Twitter
        </a>
      </div>
      
      <p className="text-xs text-[var(--muted)] font-mono">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </motion.footer>
  );
}
