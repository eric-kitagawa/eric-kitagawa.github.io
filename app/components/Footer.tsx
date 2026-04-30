const links = [
  { label: "email", href: "mailto:kitagawa.e@northeastern.edu" },
  { label: "github", href: "https://github.com/eric-kitagawa" },
  { label: "linkedin", href: "https://linkedin.com/in/eric-kitagawa" },
];

export default function Footer() {
  return (
    <footer className="mx-auto flex w-[50%] items-center justify-between py-10 border-t border-zinc-800">
      <span className="text-xs font-mono text-zinc-500">© 2024 Eric Kitagawa</span>
      <nav className="flex gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
