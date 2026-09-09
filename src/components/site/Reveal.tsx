import type { ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "reveal-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="label-caps text-purple">{eyebrow}</p>
      <h2 className="mt-3 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">{title}</h2>
      <div className="rule-purple mt-6 h-px w-24" />
      {intro ? <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </Reveal>
  );
}
