const projects = [
  {
    name: "SelfServe",
    stack: "Go · Fiber · React · TypeScript · TanStack · Tailwind · Ollama",
    year: "Ongoing",
    description:
      "Staff-facing hotel management app where an LLM-powered request generator (Go, Genkit, Ollama) converts natural-language guest requests into structured JSON for automated processing.",
    href: "#",
  },
  {
    name: "CineCircle",
    stack: "React Native · Expo · TypeScript · Express · Node.js · Supabase · Docker",
    year: "2025",
    description:
      "Social media app for movies: post ratings, find community, and discover events. Containerized dev environment with Postgres and a typed Express backend.",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto flex w-[50%] flex-col gap-6 py-10">
      <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Projects</h2>
      <div className="flex flex-col divide-y divide-zinc-800">
        {projects.map((p) => (
          <div key={p.name} className="flex flex-col gap-1 py-4">
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={p.href}
                className="text-sm font-mono hover:text-zinc-400 transition-colors"
              >
                {p.name} ↗
              </a>
              <span className="text-xs font-mono text-zinc-500 shrink-0">{p.year}</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">{p.stack}</span>
            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
