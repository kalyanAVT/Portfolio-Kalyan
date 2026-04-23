"use client";

import { motion } from "framer-motion";
import { about } from "../lib/data";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-[700px] mx-auto px-5 py-16"
    >
      <h2 className="text-xl font-semibold text-[var(--fg)] mb-6">
        About
      </h2>
      <p className="text-sm leading-relaxed text-[var(--muted)] whitespace-pre-line">
        {about}
      </p>
    </motion.section>
  );
}