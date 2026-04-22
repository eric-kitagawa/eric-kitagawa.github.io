import { useState, useEffect } from "react";
import type { ContributionCalendar } from "@/types/contributions";

export function useContributions() {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/contributions")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contributions");
        return res.json() as Promise<ContributionCalendar>;
      })
      .then(setCalendar)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err : new Error(String(err)))
      )
      .finally(() => setLoading(false));
  }, []);

  return { calendar, loading, error };
}
