import { profile } from "@/lib/resume";

import { Reveal, SectionHeading } from "./Reveal";

const pillars = [
  "GTM strategy across EMEA and US markets",
  "Messaging, positioning and value propositions",
  "Competitive intelligence and Gartner analyst engagement",
  "Pricing strategy and integrated campaign management",
];

export function Profile() {
  return (
    <section id="profile" className="border-t border-border bg-secondary/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Career profile" title="A product marketer who lands the message" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-4 border-l border-border pl-6">
              {pillars.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                  <span className="mr-3 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-blue align-middle" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Based in {profile.location} · {profile.status}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
