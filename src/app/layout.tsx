import type { Metadata } from "next";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Eric Kitagawa – Portfolio",
  description:
    "Frontend Developer building accessible, inclusive digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-400 antialiased leading-relaxed selection:bg-teal-300 selection:text-teal-900 font-sans">
        {/* Outer wrapper that centers the site */}
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex lg:gap-4">
            <Sidebar />
            <main className="lg:w-[55%] overflow-y-auto py-12 lg:py-24">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}