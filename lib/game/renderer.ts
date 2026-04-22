import type { GameState, GameLayout } from "./types";

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export function draw(
  ctx: CanvasRenderingContext2D,
  state: GameState,
  layout: GameLayout,
) {
  const { W, CH } = layout;
  const { ball, paddle, bricks } = state;

  ctx.clearRect(0, 0, W, CH);

  for (const b of bricks) {
    if (b.alive) {
      const t = b.health / b.maxHealth;
      ctx.globalAlpha = 0.3 + 0.7 * t;
      ctx.fillStyle = b.color;
    } else {
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#ebedf0";
    }
    drawRoundRect(ctx, b.x, b.y, b.w, b.h, 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#d4d4d8";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#a1a1aa";
  drawRoundRect(ctx, paddle.x, paddle.y, paddle.width, paddle.height, 3);
  ctx.fill();
}
