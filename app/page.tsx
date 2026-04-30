import Intro from "@/components/Intro";
import GithubGraph from "@/components/GithubGraph";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import type { ContributionCalendar } from "@/types/contributions";

const USERNAME = "eric-kitagawa";

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
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

async function fetchContributions(): Promise<ContributionCalendar | null> {
  if (!process.env.GITHUB_TOKEN) return null;
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data.user.contributionsCollection.contributionCalendar ?? null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const calendar = await fetchContributions();
  return (
    <div className="flex flex-col items-center justify-center">
      <Intro />
      <GithubGraph calendar={calendar} />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
