import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer" data-nav-section aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow"><span className="status-dot" /> LET'S BUILD WHAT'S NEXT</p>
            <h2 id="contact-title">Good things start<br />with a <span>conversation.</span></h2>
            <p>Have an interesting problem, a role in mind, or an idea worth exploring? I&apos;d love to hear about it.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary contact-button" href={"mailto:" + personal.email}><Mail size={18} aria-hidden="true" /> Say hello <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="contact-email" href={"mailto:" + personal.email}>{personal.email}</a>
            <span className="contact-availability"><span className="status-dot" /> {personal.status}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personal.name}<span className="footer-divider">/</span><span>Built with intent.</span></p>
          <nav aria-label="Social links">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href={personal.twitter} target="_blank" rel="noopener noreferrer">X / Twitter <ArrowUpRight size={13} aria-hidden="true" /></a>
          </nav>
          <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
