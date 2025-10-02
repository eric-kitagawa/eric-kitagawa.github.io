import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main id="content" className="mt-12 lg:mt-0 scroll-smooth">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}