import { education, skillGroups, additional } from "@/lib/resume";

import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Skills, tools & certifications" title="The working toolkit" />

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <h3 className="text-xl text-ink">{g.title}</h3>
              <div className="rule-purple mt-4 h-px w-12" />
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-card px-3 py-1.5 text-xs text-ink/80 transition-colors hover:border-blue hover:text-purple"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div id="education" className="mt-24 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="label-caps text-purple">Education</p>
            <ul className="mt-6 divide-y divide-border border-t border-border">
              {education.map((e) => (
                <li key={e.degree} className="py-6">
                  <h3 className="text-xl leading-snug text-ink">{e.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.school} · {e.period} · {e.grade}
                  </p>
                  {e.detail ? (
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{e.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <p className="label-caps text-purple">Additional</p>
            <div className="mt-6 space-y-6 border-t border-border pt-6">
              <div>
                <h3 className="text-lg text-ink">Community & volunteering</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {additional.community}
                </p>
              </div>
              <div>
                <h3 className="text-lg text-ink">Memberships</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {additional.memberships}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
