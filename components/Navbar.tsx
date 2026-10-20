"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Toolkit", href: "#skills" },
];

export default function Navbar({ name }: { name: string }) {
  const active = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    headerRef.current?.querySelector<HTMLAnchorElement>("#primary-navigation a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner shell">
        <a className="wordmark" href="#home" aria-label={name + " — back to top"} onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">k<span>.</span></span>
          <span>{name}<span className="wordmark-dot">.</span></span>
        </a>
        <nav id="primary-navigation" aria-label="Main navigation" className={"primary-nav" + (isOpen ? " is-open" : "")}>
          {LINKS.map(({ label, href }) => (
            <a key={href} href={href} aria-current={active === href.slice(1) ? "location" : undefined} onClick={() => setIsOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className="mobile-contact" aria-current={active === "contact" ? "location" : undefined} onClick={() => setIsOpen(false)}>Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a href="#contact" className="header-contact" aria-current={active === "contact" ? "location" : undefined}>Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button type="button" ref={menuRef} className="icon-button menu-toggle" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
