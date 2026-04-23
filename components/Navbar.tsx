"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Home, Briefcase, Code, FolderGit2, Mail, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Home",       href: "#",           icon: Home },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills",     href: "#skills",     icon: Code },
  { label: "Projects",   href: "#projects",   icon: FolderGit2 },
  { label: "Contact",    href: "#contact",    icon: Mail },
];

export default function Navbar({ name }: { name: string }) {
  const active = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navigation Toggle (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--card-bg)] border border-[var(--border)] shadow-lg text-[var(--fg)] hover:bg-[var(--border)] transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Floating Bottom Navigation Pill */}
      <header className={`fixed bottom-6 inset-x-0 z-40 flex justify-center transition-transform duration-300 ${isOpen ? "translate-y-0" : "translate-y-24 sm:translate-y-0"}`}>
        <nav className="flex items-center gap-1 sm:gap-2 px-2 py-2 rounded-full bg-neutral-900/80 dark:bg-white/10 backdrop-blur-md border border-white/10 shadow-xl">
          {LINKS.map(({ label, href, icon: Icon }) => {
            const isActive = active === href.slice(1) || (href === "#" && !active);
            return (
              <a 
                key={href} 
                href={href}
                className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 group
                  ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                title={label}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-neutral-400 group-hover:text-white"}`} />
                
                {/* Tooltip */}
                <span className="absolute -top-10 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                  {label}
                </span>
              </a>
            );
          })}
          
          <div className="w-px h-8 bg-white/20 mx-1"></div>
          
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}