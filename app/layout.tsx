import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
      : "https://kalyan-avt.vercel.app"
  ),
  title: "Kalyan A — AI & ML Engineer",
  description: "AI/ML engineer building agents, retrieval systems, and production machine learning. Explore Kalyan's projects, experience, and approach to engineering AI.",
  openGraph: {
    title: "Kalyan A — AI & ML Engineer",
    description: "Intelligence, engineered. Building AI that holds up beyond the demo.",
    images: [{ url: "/profile.png", width: 1024, height: 1024, alt: "Kalyan A" }],
  },
  twitter: {
    card: "summary",
    title: "Kalyan A — AI & ML Engineer",
    description: "Intelligence, engineered. Building AI that holds up beyond the demo.",
    images: ["/profile.png"],
  },
};

// Apply the saved preference before first paint. New visitors see the dark design.
const themeScript = "(function(){var theme='dark';try{var saved=localStorage.getItem('theme');if(saved==='light'||saved==='dark')theme=saved;}catch(e){}document.documentElement.setAttribute('data-theme',theme);})()";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={GeistSans.variable + " " + GeistMono.variable}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
