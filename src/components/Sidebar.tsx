export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold text-slate-200 sm:text-5xl">Eric Kitagawa</h1>
        <h2 className="mt-3 text-lg font-medium text-slate-300 sm:text-xl">
          Student and Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Learning, building, growing.
        </p>
        <nav className="ml-1 mt-8 space-y-4">
            <a href="#about" className="block text-sm font-semibold uppercase tracking-wider hover:text-teal-300">
            About
            </a>
            <a href="#experience" className="block text-sm font-semibold uppercase tracking-wider hover:text-teal-300">
            Experience
            </a>
            <a href="#projects" className="block text-sm font-semibold uppercase tracking-wider hover:text-teal-300">
            Projects
            </a>
            <a href="#contact" className="block text-sm font-semibold uppercase tracking-wider hover:text-teal-300">
            Contact
            </a>
        </nav>
        </div>


        <div className="mt-8 flex items-center">
            <a href="https://github.com/yourusername" className="hover:text-teal-300">
                GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="hover:text-teal-300">
                LinkedIn
            </a>
        </div>
    </header>
  );
}