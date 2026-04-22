import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "../lib/data";

// Terminal lines to type out
const TERMINAL_LINES = [
  { cmd: "whoami",          out: () => personal.name },
  { cmd: "cat status.txt",  out: () => personal.status },
];

// Terminal line component
function TermLine({ cmd, out, startDelay }: { cmd: string; out: string; startDelay: number }) {
  const [cmdText, setCmdText] = useState("");
  const [outText, setOutText] = useState("");
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    let i = 0;
    const t1 = setTimeout(() => {
      const iv = setInterval(() => {
        setCmdText(cmd.slice(0, ++i));
        if (i >= cmd.length) {
          clearInterval(iv);
          setTimeout(() => setShowOut(true), 200);
          setTimeout(() => {
            let j = 0;
            const iv2 = setInterval(() => {
              setOutText(out.slice(0, ++j));
              if (j >= out.length) clearInterval(iv2);
            }, 30);
          }, 400);
        }
      }, 45);
    }, startDelay);
    return () => clearTimeout(t1);
  }, [cmd, out, startDelay]);

  return (
    <div className="space-y-0.5">
      <div className="flex items-center gap-2 text-[var(--muted)]">
        <span className="text-[#28c840] select-none">$</span>
        <span className="text-[var(--fg)]" {}
          {cmdText.length < cmd.length && (
            <span className="inline-block w-1.5 h-3.5 bg-[var(--fg)] ml-0.5 animate-pulse align-middle" />
          )}
        ></span>
      </div>
      {showOut && (
        <div className="pl-4 text-[var(--muted)]">
          <span className="text-[var(--muted)] mr-2">→</span>{outText}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="max-w-[700px] mx-auto px-5 pt-28 pb-16">
      {/* Terminal block */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden text-xs font-mono"
      >
        {/* Mac-style dots */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--border)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="p-4 space-y-2">
          {TERMINAL_LINES.map((line, i) => (
            <TermLine key={i} cmd={line.cmd} out={line.out()} startDelay={i * 1000} />
          ))}
        </div>
      </motion.div>

      {/* Greeting – identical structure to samiksha.online */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-3"
      >
        <h1 className="text-3xl font-bold tracking-tight text-[var(--fg)]">
          Hi, I&apos;m {personal.firstName}
        </h1>
        <p className="text-sm text-[var(--muted)] leading-relaxed max-w-lg">
          {personal.tagline}
        </p>
        <div className="flex items-center gap-4 flex-wrap pt-1">
          <a href={`mailto:${personal.email}`}
             className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            {personal.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
