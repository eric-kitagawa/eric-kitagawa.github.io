"use client";

import type { ContributionCalendar } from "@/types/contributions";

interface Props {
  calendar: ContributionCalendar;
  onExit: () => void;
}

export default function GameCanvas({ onExit }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-mono text-zinc-500">game coming soon</p>
      <button
        onClick={onExit}
        className="self-start text-xs font-mono px-3 py-1.5 border border-zinc-700 rounded hover:bg-zinc-900 transition-colors"
      >
        ✕ exit
      </button>
    </div>
  );
}
