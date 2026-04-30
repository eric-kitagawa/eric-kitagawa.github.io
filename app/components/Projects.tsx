const projects = [
  {
    name: "Daylog",
    stack: "Next.js · Postgres · Tailwind",
    year: "2024",
    description:
      "A minimal daily journaling app with streak tracking and mood tagging. Built around the idea that friction is the enemy of consistency.",
    href: "#",
  },
  {
    name: "Fencetrack",
    stack: "React · Firebase",
    year: "2023",
    description:
      "Tournament bracket manager for fencing clubs. Handles pools, DE tables, and live result syncing across devices at a venue.",
    href: "#",
  },
  {
    name: "Pathfinder",
    stack: "TypeScript · Canvas",
    year: "2023",
    description:
      "Interactive visualizer for graph search algorithms — BFS, DFS, Dijkstra, A*. Draw walls, set weights, watch the frontier expand in real time.",
    href: "#",
  },
  {
    name: "eric-kitagawa.github.io",
    stack: "Next.js · Tailwind",
    year: "2024",
    description:
      "This site. Personal portfolio with a brick-breaker game built from GitHub contribution data.",
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
