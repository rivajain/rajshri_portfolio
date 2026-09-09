import { profile } from "@/lib/resume";

import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps text-purple">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Let's talk product marketing.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <p className="label-caps text-muted-foreground">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block text-base text-ink underline-offset-4 hover:text-purple hover:underline"
            >
              {profile.email}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p className="label-caps text-muted-foreground">Phone</p>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="mt-2 block text-base text-ink underline-offset-4 hover:text-purple hover:underline"
            >
              {profile.phone}
            </a>
          </Reveal>
          <Reveal delay={160}>
            <p className="label-caps text-muted-foreground">LinkedIn</p>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-base text-ink underline-offset-4 hover:text-purple hover:underline"
            >
              {profile.linkedin}
            </a>
          </Reveal>
          <Reveal delay={240}>
            <p className="label-caps text-muted-foreground">Location</p>
            <p className="mt-2 text-base text-ink">
              {profile.location}
              <span className="block text-sm text-muted-foreground">{profile.status}</span>
            </p>
          </Reveal>
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All content on this site is drawn from her
          resume.
        </p>
      </div>
    </footer>
  );
}
