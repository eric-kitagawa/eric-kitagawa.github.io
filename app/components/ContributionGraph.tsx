"use client";

import { useEffect } from "react";
import { useContributions } from "@/hooks/github";
import type { ContributionCalendar } from "@/types/contributions";

interface Props {
  userName: string;
  onReady: (calendar: ContributionCalendar) => void;
}

export default function ContributionGraph({ onReady }: Props) {
  const { calendar, loading, error } = useContributions();

  useEffect(() => {
    if (calendar) onReady(calendar);
  }, [calendar, onReady]);

  if (loading) {
    return (
      <p className="text-xs font-mono text-zinc-500">loading contributions...</p>
    );
  }

  if (error) {
    return (
      <p className="text-xs font-mono text-red-500">
        failed to load contributions
      </p>
    );
  }

  if (!calendar) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-[3px]">
        {calendar.weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px] flex-1">
            {week.contributionDays.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""}`}
                className="w-full aspect-square rounded-[2px]"
                style={{ backgroundColor: day.color }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
