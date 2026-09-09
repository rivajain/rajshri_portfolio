import { useState } from "react";

import { projects } from "@/lib/resume";
import { cn } from "@/lib/utils";

import { Reveal, SectionHeading } from "./Reveal";

export function Work() {
  const [openId, setOpenId] = useState<string | null>(projects[0]!.id);

  return (
    <section id="work" className="border-t border-border bg-secondary/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Programmes, launches and analyses"
          intro="Drawn directly from the roles above. Open a card for detail and outcomes."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const open = openId === p.id;
            return (
              <Reveal key={p.id} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : p.id)}
                  aria-expanded={open}
                  className={cn(
                    "group flex h-full w-full flex-col border bg-card p-7 text-left transition-all duration-300",
                    open ? "border-purple shadow-[0_16px_40px_-28px_rgba(60,20,120,0.5)]" : "border-border hover:border-blue",
                  )}
                >
                  <span className="label-caps text-blue">{p.org} · {p.period}</span>
                  <span className="mt-4 font-display text-2xl leading-snug text-ink">{p.title}</span>
                  <span className="mt-3 text-sm text-muted-foreground">{p.focus}</span>

                  <span
                    className={cn(
                      "grid overflow-hidden transition-all duration-500",
                      open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="overflow-hidden">
                      <span className="block space-y-3 border-t border-border pt-5">
                        {p.detail.map((d) => (
                          <span key={d} className="block text-sm leading-relaxed text-ink/80">
                            {d}
                          </span>
                        ))}
                      </span>
                      <span className="mt-5 flex flex-wrap gap-2">
                        {p.outcomes.map((o) => (
                          <span
                            key={o}
                            className="rounded-sm bg-purple-soft px-3 py-1.5 text-xs font-medium text-purple"
                          >
                            {o}
                          </span>
                        ))}
                      </span>
                    </span>
                  </span>

                  <span className="label-caps mt-6 text-purple">
                    {open ? "Close —" : "Read more +"}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
