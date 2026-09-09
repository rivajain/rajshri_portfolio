
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { metrics, profile } from "@/lib/resume";

import { Reveal } from "./Reveal";

const experienceText = "8+ years of experience";

export function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!flipped) {
      setTypedText("");
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      if (index < experienceText.length) {
        setTypedText(experienceText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [flipped]);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="drift-slow pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-purple-soft blur-3xl"
      />

      <div
        aria-hidden
        className="drift-slow pointer-events-none absolute top-52 -left-32 h-72 w-72 rounded-full bg-blue-soft blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_190px] lg:gap-16">
          {/* Main hero content */}
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

          {/* 3D Profile / Experience card */}
          <Reveal delay={280}>
            <div className="flex justify-center lg:justify-end">
              <button
                type="button"
                onClick={() => setFlipped((current) => !current)}
                aria-label={
                  flipped
                    ? "Show profile photo"
                    : "Show years of experience"
                }
                className="group relative h-40 w-40 cursor-pointer [perspective:1000px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <div
                  className={`relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] ${
                    flipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT — IMAGE */}
                  <div className="absolute inset-0 overflow-hidden rounded-full border border-border bg-muted shadow-xl [backface-visibility:hidden]">
                    <Image
                      src="/portfolio_img.png"
                      alt={`${profile.name ?? "Profile"} portrait`}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="160px"
                    />

                    {/* Subtle purple hover ring */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-purple/70" />
                  </div>

                  {/* BACK — TYPING EXPERIENCE */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-full border border-purple/40 bg-purple/10 px-5 text-center shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="font-sans text-sm font-medium tracking-wide text-white">
                      {typedText}
                      <span className="ml-0.5 text-purple animate-pulse">
                        |
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Metrics */}
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
