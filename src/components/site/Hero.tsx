import { metrics, profile } from "@/lib/resume";

import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="drift-slow pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-purple-soft blur-3xl"
      />
      <div
        aria-hidden
        className="drift-slow pointer-events-none absolute top-52 -left-32 h-72 w-72 rounded-full bg-blue-soft blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps text-purple">{profile.title}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.5rem]">
            Turning complex B2B SaaS
            <br />
            into <span className="italic text-purple">clear market value</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            8+ years of B2B SaaS and enterprise software product marketing — go-to-market strategy,
            messaging and positioning, and cross-functional programme delivery across EMEA and US
            markets.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-purple"
            >
              Explore experience
            </a>
            <a
              href="#ask"
              className="rounded-sm border border-input px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-purple hover:text-purple"
            >
              Ask the AI resume
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 90}>
              <p className="font-display text-4xl text-purple sm:text-5xl">{m.value}</p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
