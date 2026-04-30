import Intro from "@/components/Intro";
import GithubGraph from "@/components/GithubGraph";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Intro />
      <GithubGraph />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
