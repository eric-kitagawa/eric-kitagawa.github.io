const entries = [
  {
    company: "eMoney Advisor",
    role: "Software Engineer Co-op",
    period: "Spring 2026",
    description:
      "Modernized eMoney's core facts suite end-to-end. Rebuilt client-facing forms, backend APIs, and cloud infrastructure powering all financial planning workflows across the platform.",
  },
  {
    company: "Northeastern — Khoury",
    role: "Research Assistant",
    period: "2023 – 2024",
    description:
      "Developed an NLP pipeline for large-scale legal document classification. Explored transformer fine-tuning and active learning strategies on low-resource datasets.",
  },
  {
    company: "Northeastern — CS Dept.",
    role: "Teaching Assistant",
    period: "2022 – 2023",
    description:
      "TA for CS 3000 Algorithms & Data Structures. Ran weekly office hours, graded problem sets, and helped design exam questions for a cohort of 200+ students.",
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
            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
