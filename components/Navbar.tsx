"use client";

import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar({ name }: { name: string }) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
      ${scrolled ? "bg-[var(--bg)]/80 backdrop-blur-sm border-b border-[var(--border)]" : ""}`}>
      <div className="max-w-[700px] mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-[var(--fg)] hover:opacity-70 transition-opacity">
          {name}
        </a>
        <div className="flex items-center gap-5">
          {/* Desktop links */}
          <nav className="hidden sm:flex items-center gap-5">
            {LINKS.map(({ label, href }) => (
              <a key={href} href={href}
                className={`text-sm transition-colors duration-200
                  ${active === href.slice(1)
                    ? "text-[var(--fg)] font-medium"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"}`}>
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}