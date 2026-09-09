import { metrics, profile } from "@/lib/resume";

import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden
        className="drift-slow pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-purple-soft blur-3xl"
      />

      <div
        aria-hidden
        className="drift-slow pointer-events-none absolute top-52 -left-32 h-72 w-72 rounded-full bg-blue-soft blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_300px] lg:gap-20">
          {/* LEFT — HERO COPY */}
          <div>
            <Reveal>
              <p className="label-caps text-purple">
                {profile.title}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.5rem]">
                Turning complex B2B SaaS
                <br />
                into{" "}
                <span className="italic text-purple">
                  clear market value
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                8+ years of B2B SaaS and enterprise software product
                marketing — go-to-market strategy, messaging and
                positioning, and cross-functional programme delivery
                across EMEA and US markets.
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
          </div>

          {/* RIGHT — PROFILE IMAGE */}
          <Reveal delay={280}>
            <div className="flex flex-col items-center lg:items-end">
              <a
                href="#experience"
                aria-label="View experience"
                className="group relative block"
              >
                <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border bg-muted shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:border-purple/60 group-hover:shadow-purple/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <img
                    src="/portfolio_img.png"
                    alt={`${profile.name ?? "Profile"} portrait`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-purple/70" />

                  {/* hover label */}
                  <div className="absolute inset-x-0 bottom-8 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-black/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                      View experience →
                    </span>
                  </div>
                </div>
              </a>

              {/* Small supporting links */}
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <a
                  href="#experience"
                  className="transition-colors hover:text-purple"
                >
                  Experience
                </a>

                <span className="h-1 w-1 rounded-full bg-border" />

                <a
                  href="#ask"
                  className="transition-colors hover:text-purple"
                >
                  Ask the AI
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* METRICS */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 90}>
              <p className="font-display text-4xl text-purple sm:text-5xl">
                {m.value}
              </p>

              <p className="mt-2 text-sm leading-snug text-muted-foreground">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
