import type { ContributionCalendar } from "@/types/contributions";
import type { GameState, GameStatus } from "./types";
import { buildBricks } from "./bricks";
import { draw } from "./renderer";
import { update } from "./physics";

const COLS = 53;
const ROWS = 7;
const GAP = 3;

export function createGame(
  canvas: HTMLCanvasElement,
  container: HTMLElement,
  calendar: ContributionCalendar,
  onStatus: (status: GameStatus) => void,
) {
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const DPR = window.devicePixelRatio || 1;
  const W = container.offsetWidth;
  const cell = (W - (COLS - 1) * GAP) / COLS;
  const brickAreaH = ROWS * cell + (ROWS - 1) * GAP;
  const CH = brickAreaH + 240;

  canvas.width = W * DPR;
  canvas.height = CH * DPR;
  ctx.scale(DPR, DPR);

  const layout = { W, CH };

  const BR = Math.max(4, cell * 0.38);
  const SPEED = Math.max(3.5, cell * 0.34);
  const PW = Math.max(60, W * 0.13);

  const state: GameState = {
    ball: { x: W / 2, y: brickAreaH + 90, vx: SPEED * 0.65, vy: -SPEED, radius: BR },
    paddle: { x: W / 2 - PW / 2, y: CH - 28, width: PW, height: 7 },
    bricks: buildBricks(calendar, cell, GAP),
  };

  let rafId: number;

  const onMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W / rect.width);
    state.paddle.x = Math.max(0, Math.min(W - state.paddle.width, mx - state.paddle.width / 2));
  };
  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const tx = (e.touches[0].clientX - rect.left) * (W / rect.width);
    state.paddle.x = Math.max(0, Math.min(W - state.paddle.width, tx - state.paddle.width / 2));
  };

  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("touchmove", onTouchMove, { passive: false });

  draw(ctx, state, layout);

  function loop() {
    const status = update(state, W, CH);
    draw(ctx, state, layout);
    if (status === "playing") {
      rafId = requestAnimationFrame(loop);
    } else {
      onStatus(status);
    }
  }

  return {
    start() {
      rafId = requestAnimationFrame(loop);
    },
    stop() {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove);
    },
  };
}
