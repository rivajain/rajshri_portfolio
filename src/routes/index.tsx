import { createFileRoute } from "@tanstack/react-router";

import { BsiAnalytics } from "@/components/site/BsiAnalytics";
import { Contact } from "@/components/site/Contact";
import { Experience } from "@/components/site/Experience";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Profile } from "@/components/site/Profile";
import { ResumeChat } from "@/components/site/ResumeChat";
import { Skills } from "@/components/site/Skills";
import { Work } from "@/components/site/Work";

const title = "Rajshri Jain — Senior Product Marketing Manager, B2B SaaS";
const description =
  "Portfolio of Rajshri Jain: 8+ years of B2B SaaS product marketing — GTM strategy, messaging and positioning, and cross-functional programme delivery across EMEA and US markets.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Profile />
      <Experience />
      <Work />
      <Skills />
      <BsiAnalytics />
      <ResumeChat />
      <Contact />
    </main>
  );
}
