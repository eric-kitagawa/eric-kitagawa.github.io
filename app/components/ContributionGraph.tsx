"use client";

import type { ContributionCalendar } from "@/types/contributions";

interface Props {
  calendar: ContributionCalendar | null;
}

export default function ContributionGraph({ calendar }: Props) {
  if (!calendar) {
    return (
      <div className="flex gap-[3px] animate-pulse">
        {Array.from({ length: 53 }, (_, wi) => (
          <div key={wi} className="flex flex-col gap-[3px] flex-1">
            {Array.from({ length: 7 }, (_, di) => (
              <div key={di} className="w-full aspect-square rounded-[2px] bg-[#ebedf0]" />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="contrib-calendar flex gap-[3px]">
        {calendar.weeks.map((week, wi) => (
          <div key={wi} className="contrib-week flex flex-col gap-[3px] flex-1">
            {week.contributionDays.map((day) => (
              <div
                key={day.date}
                data-level={day.contributionLevel}
                title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""}`}
                className="contrib-cell shimmer-cell w-full aspect-square rounded-[2px]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
