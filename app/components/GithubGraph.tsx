"use client";

import { useState } from "react";
import type { ContributionCalendar } from "@/types/contributions";
import ContributionGraph from "@/components/ContributionGraph";
import GameCanvas from "@/components/GameCanvas";

const GITHUB_USERNAME = "eric-kitagawa";

export default function GithubGraph() {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <section className="mx-auto flex w-[50%] flex-col py-4">
      {!playing ? (
        <div className="flex flex-col gap-4">
          <ContributionGraph userName={GITHUB_USERNAME} onReady={setCalendar} />

          {calendar && (
            <button
              onClick={() => setPlaying(true)}
              className="self-start text-xs font-mono px-3 py-1.5 border border-zinc-700 rounded hover:bg-zinc-900 transition-colors"
            >
              ▶ play
            </button>
          )}
        </div>
      ) : (
        calendar && (
          <GameCanvas calendar={calendar} onExit={() => setPlaying(false)} />
        )
      )}
    </section>
  );
}
