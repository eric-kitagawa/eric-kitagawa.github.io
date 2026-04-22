export interface Brick {
  color: string;
  maxHealth: number;
  health: number;
  x: number;
  y: number;
  w: number;
  h: number;
  alive: boolean;
}

export interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export interface Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface GameLayout {
  W: number;
  CH: number;
}

export interface GameState {
  ball: Ball;
  paddle: Paddle;
  bricks: Brick[];
}

export type GameStatus = "playing" | "won" | "lost";
