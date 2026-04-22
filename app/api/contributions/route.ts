import { getRedisClient } from "@/lib/redis";
import type { ContributionCalendar } from "@/types/contributions";

const USERNAME = "eric-kitagawa";
const CACHE_KEY = `github:contributions:${USERNAME}`;
const CACHE_TTL = 3600;

const QUERY = `
  query {
    user(login: "${USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const redis = await getRedisClient();

    const cached = await redis.get(CACHE_KEY);
    if (cached) {
      return Response.json(JSON.parse(cached));
    }

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY }),
    });

    if (!res.ok) {
      return Response.json({ error: "GitHub API error" }, { status: 502 });
    }

    const json = await res.json();
    const calendar: ContributionCalendar =
      json.data.user.contributionsCollection.contributionCalendar;

    await redis.set(CACHE_KEY, JSON.stringify(calendar), { EX: CACHE_TTL });

    return Response.json(calendar);
  } catch (err) {
    console.error("contributions route error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
