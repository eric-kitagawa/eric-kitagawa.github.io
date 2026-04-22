import type { ContributionCalendar } from "@/types/contributions";
import type { Brick } from "./types";

const COLOR_HEALTH: Record<string, number> = {
  "#9be9a8": 1,
  "#40c463": 2,
  "#30a14e": 3,
  "#216e39": 4,
};

export function buildBricks(
  calendar: ContributionCalendar,
  cell: number,
  GAP: number,
): Brick[] {
  const bricks: Brick[] = [];
  calendar.weeks.forEach((week, wi) => {
    week.contributionDays.forEach((day, di) => {
      const hasContribution = day.contributionCount > 0;
      const maxHealth = hasContribution ? (COLOR_HEALTH[day.color] ?? 1) : 0;
      bricks.push({
        color: day.color,
        maxHealth,
        health: maxHealth,
        x: wi * (cell + GAP),
        y: di * (cell + GAP),
        w: cell,
        h: cell,
        alive: hasContribution,
      });
    });
  });
  return bricks;
}
