"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import type { ContributionCalendar } from "@/types/contributions";
import { createGame } from "@/lib/game/engine";
import type { GameStatus } from "@/lib/game/types";

interface Props {
  calendar: ContributionCalendar;
  calendarHeight: number;
  onExit: () => void;
}

export default function GameCanvas({ calendar, calendarHeight, onExit }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<ReturnType<typeof createGame> | null>(null);
  const [status, setStatus] = useState<GameStatus>("playing");
  const [gameKey, setGameKey] = useState(0);
  const [waiting, setWaiting] = useState(true);
  const [containerHeight, setContainerHeight] = useState(calendarHeight);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const game = createGame(canvas, container, calendar, setStatus);
    gameRef.current = game;
    setWaiting(true);
    return game.stop;
  }, [calendar, gameKey]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf1: number;
    let raf2: number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setContainerHeight(container.scrollHeight);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  function handleStart() {
    setWaiting(false);
    gameRef.current?.start();
  }

  function handleExit() {
    gameRef.current?.stop();
    setExiting(true);
    setContainerHeight(calendarHeight);
  }

  function restart() {
    setStatus("playing");
    setGameKey((k) => k + 1);
  }

  return (
    <div
      ref={containerRef}
      className="game-canvas-container w-full relative overflow-hidden"
      style={{ '--canvas-height': `${containerHeight}px` } as React.CSSProperties}
      onTransitionEnd={(e) => {
        if (exiting && e.propertyName === "height") onExit();
      }}
    >
      <canvas ref={canvasRef} className="w-full block" />
      {waiting && !exiting && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handleStart}
        >
        </div>
      )}
      {status !== "playing" && !exiting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <p className="text-sm font-mono">
            {status === "won" ? "You Win" : "Game Over"}
          </p>
          <button
            onClick={restart}
            className="text-xs font-mono px-3 py-1.5 border border-zinc-600 rounded  hover:bg-zinc-400 transition-colors"
          >
            ↺ restart
          </button>
          <button
            onClick={handleExit}
            className="text-xs font-mono px-3 py-1.5 border border-zinc-600 rounded  hover:bg-zinc-400 transition-colors"
          >
            ✕ exit
          </button>
        </div>
      )}
    </div>
  );
}
