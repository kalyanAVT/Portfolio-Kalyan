import { ArrowUpRight, BrainCircuit, Braces, Database, Workflow } from "lucide-react";

export default function SystemIllustration() {
  return (
    <div className="system-illustration" aria-hidden="true">
      <div className="system-topline"><span className="system-dot" /><span>anatomy of an intelligent system</span><span className="system-plus">+</span></div>
      <div className="system-map">
        <svg className="system-connections" viewBox="0 0 440 330" fill="none">
          <circle cx="220" cy="167" r="112" className="orbit orbit-outer" />
          <circle cx="220" cy="167" r="78" className="orbit" />
          <path d="M112 86L180 145M331 98L260 146M220 203V270" className="connection-path" />
          <circle cx="153" cy="120" r="3" className="connection-point" />
          <circle cx="290" cy="125" r="3" className="connection-point" />
          <circle cx="220" cy="238" r="3" className="connection-point" />
          <path d="M20 167H65M375 167H420M220 12V38M22 20H34M28 14V26M406 300H418M412 294V306" className="diagram-tick" />
        </svg>
        <div className="system-core"><BrainCircuit size={36} strokeWidth={1.3} /><span>intelligence</span></div>
        <div className="system-node node-context"><Database size={17} /><div><span className="node-index">01 / CONTEXT</span><strong>Connect the dots</strong></div></div>
        <div className="system-node node-reason"><Workflow size={17} /><div><span className="node-index">02 / REASONING</span><strong>Think it through</strong></div></div>
        <div className="system-node node-output"><Braces size={17} /><div><span className="node-index">03 / EXECUTION</span><strong>Make it work</strong></div></div>
      </div>
      <div className="system-bottomline"><span>Built with curiosity.<br /><strong>Backed by engineering.</strong></span><ArrowUpRight size={25} strokeWidth={1.3} /></div>
    </div>
  );
}
