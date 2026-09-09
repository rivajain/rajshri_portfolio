import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { submitAccessRequest, verifyAccessPasscode } from "@/lib/access.functions";
import { cn } from "@/lib/utils";

import { Reveal, SectionHeading } from "./Reveal";

const slides = [
  {
    title: "EMEA pipeline uplift",
    stat: "20%",
    note: "Uplift in regional pipeline generation from EMEA GTM strategy across 12 key markets.",
    bars: [46, 58, 71, 84],
  },
  {
    title: "Deal velocity",
    stat: "18%",
    note: "Improvement correlating with 40+ localised EMEA sales enablement assets.",
    bars: [52, 60, 68, 79],
  },
  {
    title: "Marketing-generated revenue",
    stat: "30%",
    note: "Year-on-year growth delivered through integrated campaigns.",
    bars: [40, 55, 70, 88],
  },
  {
    title: "GTM execution",
    stat: "100%",
    note: "On-time GTM execution while bridging 10+ functional teams across EMEA and global HQ.",
    bars: [70, 80, 90, 96],
  },
];

function AbstractChart({ bars, muted }: { bars: number[]; muted?: boolean }) {
  return (
    <div aria-hidden className="flex h-24 items-end gap-2">
      {bars.map((b, i) => (
        <span
          key={i}
          style={{ height: `${b}%` }}
          className={cn(
            "w-full rounded-sm transition-all duration-700",
            muted ? "bg-border" : i === bars.length - 1 ? "bg-purple" : "bg-blue/50",
          )}
        />
      ))}
    </div>
  );
}

export function BsiAnalytics() {
  const verify = useServerFn(verifyAccessPasscode);
  const request = useServerFn(submitAccessRequest);

  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({ fullName: "", email: "", organisation: "", reason: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  async function onUnlock(e: React.FormEvent) {
    e.preventDefault();
    setChecking(true);
    setError(null);
    try {
      const res = await verify({ data: { passcode } });
      if (res.granted) setUnlocked(true);
      else setError("That passcode wasn't recognised.");
    } catch {
      setError("Could not check the passcode. Please try again.");
    } finally {
      setChecking(false);
    }
  }

  async function onRequest(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setFormError(null);
    try {
      const res = await request({ data: form });
      if (res.ok) {
        setSent(res.message);
        setForm({ fullName: "", email: "", organisation: "", reason: "" });
      } else {
        setFormError(res.message);
      }
    } catch {
      setFormError("Please check your name and email, then try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="bsi" className="border-t border-border bg-ink py-24 text-background sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-caps text-blue-soft">Private presentation</p>
          <h2 className="mt-3 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            BSI analytics walkthrough
          </h2>
          <div className="rule-purple mt-6 h-px w-24" />
          <p className="mt-6 text-base leading-relaxed text-background/70">
            A short, access-controlled walkthrough of the marketing performance story behind the BSI
            roles. Figures shown are limited to those published in the resume — no confidential,
            internal or client-specific BSI information is included or available here.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {slides.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="relative h-full border border-background/15 bg-background/5 p-7">
                <div className={cn("transition-all duration-500", !unlocked && "blur-[7px] select-none")}>
                  <p className="label-caps text-background/50">{unlocked ? s.title : "Restricted"}</p>
                  <p className="mt-3 font-display text-4xl text-background">{s.stat}</p>
                  <div className="mt-6">
                    <AbstractChart bars={s.bars} muted={!unlocked} />
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-background/70">
                    {unlocked ? s.note : "Access required to view this summary."}
                  </p>
                </div>
                {!unlocked ? (
                  <span className="label-caps absolute inset-0 flex items-center justify-center text-background/70">
                    Locked
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        {unlocked ? (
          <Reveal className="mt-10">
            <p className="text-sm text-background/60">
              Access granted. This walkthrough presents only resume-published outcomes; anything
              beyond that remains confidential to BSI.
            </p>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-10 border-t border-background/15 pt-12 lg:grid-cols-2">
            <Reveal>
              <h3 className="text-2xl text-background">Already have a passcode?</h3>
              <form onSubmit={onUnlock} className="mt-5 flex flex-wrap gap-3">
                <label className="sr-only" htmlFor="passcode">
                  Access passcode
                </label>
                <input
                  id="passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode"
                  className="min-w-0 flex-1 border border-background/25 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/40 focus:border-blue-soft focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={checking}
                  className="bg-background px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-blue-soft disabled:opacity-60"
                >
                  {checking ? "Checking…" : "Unlock"}
                </button>
              </form>
              {error ? <p className="mt-3 text-sm text-blue-soft">{error}</p> : null}
            </Reveal>

            <Reveal delay={120}>
              <h3 className="text-2xl text-background">Request access</h3>
              {sent ? (
                <p className="mt-5 border border-background/20 bg-background/5 p-5 text-sm text-background/80">
                  {sent}
                </p>
              ) : (
                <form onSubmit={onRequest} className="mt-5 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      required
                      aria-label="Full name"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Full name"
                      className="border border-background/25 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/40 focus:border-blue-soft focus:outline-none"
                    />
                    <input
                      required
                      type="email"
                      aria-label="Work email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Work email"
                      className="border border-background/25 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/40 focus:border-blue-soft focus:outline-none"
                    />
                  </div>
                  <input
                    aria-label="Company or organisation"
                    value={form.organisation}
                    onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                    placeholder="Company or organisation (optional)"
                    className="w-full border border-background/25 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/40 focus:border-blue-soft focus:outline-none"
                  />
                  <textarea
                    aria-label="Reason for request"
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    placeholder="Why would you like access? (optional)"
                    rows={3}
                    className="w-full border border-background/25 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/40 focus:border-blue-soft focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-purple px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Send request"}
                  </button>
                  {formError ? <p className="text-sm text-blue-soft">{formError}</p> : null}
                </form>
              )}
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
