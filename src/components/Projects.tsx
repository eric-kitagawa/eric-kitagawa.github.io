export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="mb-4 text-xl font-bold uppercase text-slate-200">
        Projects
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a href="#" className="text-teal-300 hover:underline">
            Portfolio Site
          </a>{" "}
          – A personal site showcasing my projects.
        </li>
        <li>
          <a href="#" className="text-teal-300 hover:underline">
            Spotify Profile App
          </a>{" "}
          – Visualizes Spotify listening history.
        </li>
      </ul>
    </section>
  );
}