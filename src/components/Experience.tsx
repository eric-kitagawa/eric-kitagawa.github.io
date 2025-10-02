export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="mb-4 text-xl font-bold uppercase text-slate-200">
        Experience
      </h2>
      <div className="group">
      <ol className="group">
        <li className="group relative not-first-of-type:mb-12">
            <div id="hover" className="absolute inset-0 -mx-6 lg:-mx-10 hidden rounded-md transition motion-reduce:transition-none lg:block
            lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="relative pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

            <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              2025 — Present
            </header>
            <div className="sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <span>Software Engineer Co-op · Johnson & Johnson</span>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Lorem ipsum lalalal lorem asdf laura leorem askdfew asdfas fer
                Lorem ipsum lalalal lorem asdf laura leorem askdfew asdfas fer
                Lorem ipsum lalalal lorem asdf laura leorem askdfew asdfas fer
                Lorem ipsum lalalal lorem asdf laura leorem askdfew asdfas fer
                Lorem ipsum lalalal lorem asdf laura leorem askdfew asdfas fer
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {["TypeScript", "Angular", "Python", "Elixir", "PostgreSQL"].map(
                  (tech) => (
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tech}
                      </div>
                    </li>
                  )
                )}
              </ul>
          </div>
          </div>
        </li>
      </ol>
    </div>
    </section>
  );
}