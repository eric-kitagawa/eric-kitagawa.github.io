import type { GameState, GameStatus } from "./types";

export function update(state: GameState, W: number, CH: number): GameStatus {
  const { ball, paddle, bricks } = state;

  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.x - ball.radius < 0) {
    ball.x = ball.radius;
    ball.vx = Math.abs(ball.vx);
  } else if (ball.x + ball.radius > W) {
    ball.x = W - ball.radius;
    ball.vx = -Math.abs(ball.vx);
  }

  if (ball.y - ball.radius < 0) {
    ball.y = ball.radius;
    ball.vy = Math.abs(ball.vy);
  }

  if (
    ball.vy > 0 &&
    ball.y + ball.radius >= paddle.y &&
    ball.y - ball.radius < paddle.y + paddle.height &&
    ball.x + ball.radius > paddle.x &&
    ball.x - ball.radius < paddle.x + paddle.width
  ) {
    const rel =
      (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
    const angle = rel * (Math.PI / 3);
    const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
    ball.vx = speed * Math.sin(angle);
    ball.vy = -speed * Math.cos(angle);
    ball.y = paddle.y - ball.radius;
  }

  if (ball.y - ball.radius > CH) return "lost";

  let reflected = false;
  for (const b of bricks) {
    if (!b.alive) continue;
    const cx = Math.max(b.x, Math.min(ball.x, b.x + b.w));
    const cy = Math.max(b.y, Math.min(ball.y, b.y + b.h));
    const dx = ball.x - cx;
    const dy = ball.y - cy;
    if (dx * dx + dy * dy >= ball.radius * ball.radius) continue;

    b.health--;
    if (b.health <= 0) b.alive = false;

    if (!reflected) {
      reflected = true;
      if (Math.abs(dx) < Math.abs(dy)) {
        ball.vy = -ball.vy;
      } else {
        ball.vx = -ball.vx;
      }
    }
  }

  return bricks.every((b) => !b.alive) ? "won" : "playing";
}
