import { useState } from "react";

import { roles } from "@/lib/resume";
import { cn } from "@/lib/utils";

import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  const [activeId, setActiveId] = useState(roles[0]!.id);
  const active = roles.find((r) => r.id === activeId) ?? roles[0]!;

  return (
    <section id="experience" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Professional experience"
          title="Eight years, five teams, one throughline"
          intro="Select a role to read what it involved."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <ol className="relative border-l border-border">
              {roles.map((r) => {
                const isActive = r.id === active.id;
                return (
                  <li key={r.id} className="relative">
                    <button
                      type="button"
                      onClick={() => setActiveId(r.id)}
                      aria-current={isActive}
                      className={cn(
                        "w-full py-4 pl-6 pr-3 text-left transition-colors",
                        isActive ? "text-ink" : "text-muted-foreground hover:text-ink",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-6 h-2 w-2 -translate-x-[4.5px] rounded-full transition-colors",
                          isActive ? "bg-purple" : "bg-border",
                        )}
                      />
                      <span className="block text-sm font-medium">{r.company}</span>
                      <span className="mt-1 block text-xs leading-snug">{r.role}</span>
                      <span className="label-caps mt-2 block text-[0.625rem] text-muted-foreground">
                        {r.period}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <article key={active.id} className="border border-border bg-card p-7 sm:p-10">
              <p className="label-caps text-blue">{active.period}</p>
              <h3 className="mt-3 text-3xl leading-tight tracking-tight text-ink">{active.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {active.company} — {active.companyContext}
              </p>
              <div className="rule-purple mt-6 h-px w-16" />
              <ul className="mt-7 space-y-5">
                {active.bullets.map((b) => (
                  <li key={b} className="flex gap-4 text-sm leading-relaxed text-ink/80">
                    <span className="mt-2 h-1 w-4 shrink-0 bg-purple/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
