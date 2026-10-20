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

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Navbar name={personal.name} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects projects={projects} />
        <About />
        <Experience />
        <Skills />
        <div className="background-grid shell">
          <Hackathons />
          <Education />
        </div>
      </main>
      <Footer />
    </>
  );
}
