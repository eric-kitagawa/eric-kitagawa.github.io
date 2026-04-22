"use client";

import { useEffect, useRef, useState } from "react";
import type { ContributionCalendar } from "@/types/contributions";
import { createGame } from "@/lib/game/engine";
import type { GameStatus } from "@/lib/game/types";

interface Props {
  calendar: ContributionCalendar;
  onExit: () => void;
}

export default function GameCanvas({ calendar, onExit }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<GameStatus>("playing");
  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const game = createGame(canvas, container, calendar, setStatus);
    game.start();
    return game.stop;
  }, [calendar, gameKey]);

  function restart() {
    setStatus("playing");
    setGameKey((k) => k + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div ref={containerRef} className="w-full relative">
        <canvas ref={canvasRef} className="w-full block" />
        {status !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60">
            <p className="text-sm font-mono text-zinc-300">
              {status === "won" ? "you win" : "game over"}
            </p>
            <button
              onClick={restart}
              className="text-xs font-mono px-3 py-1.5 border border-zinc-600 rounded text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              ↺ restart
            </button>
          </div>
        )}
      </div>
      <button
        onClick={onExit}
        className="self-start text-xs font-mono px-3 py-1.5 border border-zinc-700 rounded hover:bg-zinc-900 transition-colors"
      >
        ✕ exit
      </button>
    </div>
  );
}
