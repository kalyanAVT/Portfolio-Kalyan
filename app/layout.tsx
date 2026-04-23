import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title       : "Kalyan A — ML & AI Engineer",
  description : "Portfolio of Kalyan A. ML/AI Engineer specialising in LLMs, MLOps, NLP, and Computer Vision.",
  openGraph   : {
    title       : "Kalyan A — ML & AI Engineer",
    description : "ML/AI Engineer. Building production AI systems.",
    images      : ["/profile.png"],
  },
};

// Prevent flash of wrong theme on load
const themeScript = `
  (function() {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
  })()
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] font-sans transition-colors duration-200 min-h-screen">
        {/* Ambient Glow Background */}
        <div className="fixed inset-0 z-[-1] flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
