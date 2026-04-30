"use client";

import { useRef, useState } from "react";
import type { ContributionCalendar } from "@/types/contributions";
import ContributionGraph from "@/components/ContributionGraph";
import GameCanvas from "@/components/GameCanvas";

interface Props {
  calendar: ContributionCalendar | null;
}

export default function GithubGraph({ calendar }: Props) {
  const [playing, setPlaying] = useState(false);
  const [calendarHeight, setCalendarHeight] = useState(0);
  const graphRef = useRef<HTMLDivElement>(null);

  function startPlaying() {
    setCalendarHeight(graphRef.current?.offsetHeight ?? 0);
    setPlaying(true);
  }

  return (
    <section className="mx-auto flex w-[50%] flex-col py-4 px-1">
      <div
        ref={graphRef}
        className={`relative group${calendar ? " cursor-pointer" : ""}${playing ? " hidden" : ""}`}
        onClick={calendar ? startPlaying : undefined}
      >
        <ContributionGraph calendar={calendar} />
        {calendar && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border border-zinc-600/70 bg-zinc-900/90 px-2.5 py-1 text-xs font-mono text-zinc-200 shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
          >
            ▶ play
          </span>
        )}
      </div>
      {playing && calendar && (
        <GameCanvas
          calendar={calendar}
          calendarHeight={calendarHeight}
          onExit={() => setPlaying(false)}
        />
      )}
    </section>
  );
}
