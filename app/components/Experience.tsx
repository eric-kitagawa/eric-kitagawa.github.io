const entries = [
  {
    company: "eMoney Advisor",
    role: "Software Engineer Co-op",
    period: "Boston · Jan 2026 – Present",
    stack: "React · TypeScript · C# · AWS · Docker",
    description:
      "Modernizing a core financial planning feature across the full stack: client-facing forms, REST APIs, and CI/CD infrastructure.",
  },
  {
    company: "Johnson & Johnson",
    role: "Software Engineer Co-op",
    period: "Boston · Jan 2025 – Jun 2025",
    stack: "React · TypeScript · Elixir · Python · JavaScript",
    description:
      "Built a cardiac monitoring application for patients in cardiogenic shock, spanning real-time waveform visualization, streaming data pipelines, and medical device reliability tooling.",
  },
  {
    company: "Generate Product Development",
    role: "Software Engineer",
    period: "Boston · Jan 2025 – Present",
    stack: "React Native · Expo · TypeScript · Supabase",
    description:
      "Building mobile apps for Northeastern startups with a cross-functional team. Owns frontend architecture with Expo routing, React Context, and Supabase auth.",
  },
  {
    company: "Northeastern University",
    role: "Teaching Assistant",
    period: "Boston · Aug 2024 – Dec 2025",
    stack: "Python",
    description:
      "TA for Northeastern's introductory CS course over two semesters. Led labs and office hours teaching Python, data structures, and program design.",
  },
];

export default function Experience() {
  return (
    <section className="mx-auto flex w-[50%] flex-col gap-6 py-10">
      <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Experience</h2>
      <div className="flex flex-col divide-y divide-zinc-800">
        {entries.map((e) => (
          <div key={e.company} className="flex flex-col gap-1 py-4">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-mono">{e.company}</span>
              <span className="text-xs font-mono text-zinc-500 shrink-0">{e.period}</span>
            </div>
            <span className="text-xs font-mono text-zinc-400">{e.role}</span>
            <span className="text-xs font-mono text-zinc-500">{e.stack}</span>
            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
