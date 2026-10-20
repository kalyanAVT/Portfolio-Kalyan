import { ArrowDown, AudioLines, Check, Code2, Database, FileCheck2, GitPullRequest, Search, Workflow } from "lucide-react";

const WAVE_HEIGHTS = [12, 20, 14, 30, 44, 25, 52, 70, 42, 24, 54, 80, 60, 38, 74, 90, 64, 38, 58, 78, 50, 28, 46, 66, 40, 24, 34, 18, 26, 12];

export default function ProjectVisual({ id }: { id: string }) {
  if (id === "agentic-rag") {
    return (
      <div className="project-visual research-visual rag-visual" aria-hidden="true">
        <span className="visual-caption">LIVE REPOSITORIES / AGENTIC RAG</span>
        <div className="research-window">
          <div className="window-chrome"><span className="window-brand">agentic<span> / rag</span><span className="window-brand-dot">.</span></span><span className="window-dots"><i /><i /><i /></span></div>
          <div className="research-flow">
            <div className="flow-step flow-planner"><Workflow size={17} /><span>Plan the question</span><span className="flow-key">2–5 STEPS</span></div>
            <div className="flow-connector"><ArrowDown size={17} /></div>
            <div className="flow-parallel"><div><GitPullRequest size={17} /><strong>Live GitHub</strong><span>Issues · PRs · commits</span></div><div><Database size={17} /><strong>SQLite memory</strong><span>Recall across sessions</span></div></div>
            <div className="flow-connector"><ArrowDown size={17} /></div>
            <div className="flow-step flow-result"><FileCheck2 size={18} /><div><strong>Cited answers</strong><span>Every step traced</span></div><Check size={16} /></div>
          </div>
        </div>
        <div className="visual-footnote"><span className="status-dot" />86 pytest tests · Provider fallbacks</div>
      </div>
    );
  }

  if (id === "insyfy") {
    return (
      <div className="project-visual research-visual" aria-hidden="true">
        <span className="visual-caption">MULTI-AGENT RESEARCH / SYSTEM OVERVIEW</span>
        <div className="research-window">
          <div className="window-chrome"><span className="window-brand">in<span>syfy</span><span className="window-brand-dot">.</span></span><span className="window-dots"><i /><i /><i /></span></div>
          <div className="research-flow">
            <div className="flow-step flow-planner"><Workflow size={17} /><span>Plan the research</span><span className="flow-key">01</span></div>
            <div className="flow-connector"><ArrowDown size={17} /></div>
            <div className="flow-parallel"><div><Search size={17} /><strong>Web search</strong><span>Find the evidence</span></div><div><Database size={17} /><strong>Memory</strong><span>Retrieve context</span></div></div>
            <div className="flow-connector"><ArrowDown size={17} /></div>
            <div className="flow-step flow-result"><FileCheck2 size={18} /><div><strong>Grounded synthesis</strong><span>Answers with citations</span></div><Check size={16} /></div>
          </div>
        </div>
        <div className="visual-footnote"><span className="status-dot" />Plan. Retrieve. Verify.</div>
      </div>
    );
  }

  if (id === "sentiment-chatbot") {
    return (
      <div className="project-visual sentiment-visual" aria-hidden="true">
        <div className="visual-titleline"><span className="visual-caption">VOICE → LANGUAGE → UNDERSTANDING</span><AudioLines size={18} /></div>
        <div className="sentiment-demo">
          <div className="waveform">{WAVE_HEIGHTS.map((height, index) => <span key={index} style={{ height: height + "%" }} />)}</div>
          <div className="sentiment-labels"><span className="sentiment-selected"><span />Positive</span><span>Neutral</span><span>Negative</span></div>
        </div>
        <div className="visual-metric"><strong>93<span>%</span></strong><span>F1 SCORE<br />SENTIMENT CLASSIFICATION</span></div>
      </div>
    );
  }

  if (id === "crop-disease") {
    return (
      <div className="project-visual crop-visual" aria-hidden="true">
        <div className="visual-titleline"><span className="visual-caption">COMPUTER VISION / LEAF CLASSIFICATION</span><span className="scan-indicator" /></div>
        <div className="leaf-diagram">
          <svg viewBox="0 0 240 155" fill="none">
            <path d="M63 35V20H80M160 20H178V37M178 118V133H160M80 133H63V117" className="scan-corners" />
            <path d="M120 131C82 117 70 96 79 72L67 59L90 54L91 31L113 43L123 14L138 45L160 37L155 61L177 68L162 85C171 108 148 121 120 131Z" className="leaf-shape" />
            <path d="M120 144L124 36M122 116L91 95M123 99L100 67M124 78L145 57M123 111L152 88" className="leaf-veins" />
            <circle cx="111" cy="81" r="5" className="leaf-spot" /><circle cx="144" cy="97" r="7" className="leaf-spot" /><circle cx="106" cy="109" r="3" className="leaf-spot" />
            <path d="M55 84H186" className="scan-line" />
          </svg>
        </div>
        <div className="visual-metric"><strong>93<span>%</span></strong><span>TEST ACCURACY<br />GRAPE LEAF DISEASE DETECTION</span></div>
      </div>
    );
  }

  return <div className="project-visual generic-visual" aria-hidden="true"><Code2 size={60} strokeWidth={1} /><span className="mono-label">FROM CONCEPT TO CODE</span></div>;
}
