import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title       : "Your Name — ML & AI Engineer",
  description : "Portfolio of [Your Name]. ML/AI Engineer specialising in agents, RAG, and production ML.",
  openGraph   : {
    title       : "Your Name — ML & AI Engineer",
    description : "ML/AI Engineer. Building agents that remember and reason.",
    images      : ["/og-image.png"],
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
      <body className="bg-[var(--bg)] text-[var(--fg)] font-sans transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
