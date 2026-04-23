"use client";

import { motion } from "framer-motion";
import { personal } from "../lib/data";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-[700px] mx-auto px-5 pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8"
      >
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--fg)]">
            Hi, I&apos;m {personal.firstName}
          </h1>
          <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-lg">
            {personal.tagline}
          </p>
          <div className="pt-2">
            <a 
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] bg-[var(--card-bg)] hover:bg-[var(--border)] border border-[var(--border)] px-4 py-2 rounded-full transition-colors"
            >
              <Mail className="w-4 h-4" />
              {personal.email}
            </a>
          </div>
        </div>
        
        {/* Avatar Profile Picture */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-[var(--border)] shrink-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center shadow-xl">
          {/* Replace with next/image when a real photo is available */}
          <span className="text-4xl font-bold text-neutral-400 select-none">
            {personal.initials}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
