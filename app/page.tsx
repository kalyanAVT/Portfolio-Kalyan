import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { personal } from "@/lib/data";
import { getProjects } from "@/lib/getProjects";

export const metadata = {
  title: `${personal.name} — ML & AI Engineer`,
  description: `Portfolio of ${personal.name}. ML/AI Engineer specializing in agents, RAG, and production ML.`,
  openGraph: {
    title: `${personal.name} — ML & AI Engineer`,
    description: "ML/AI Engineer. Building agents that remember and reason.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ML & AI Engineer`,
    description: `ML/AI Engineer. Building agents that remember and reason.`,
  },
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Navbar name={personal.name} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects projects={projects} />
        <Hackathons />
        <Education />
        <Footer />
      </main>
    </>
  );
}
