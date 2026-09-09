import { useEffect, useRef, useState } from "react";

import { Reveal, SectionHeading } from "./Reveal";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What did Rajshri own at BSI Group?",
  "Which marketing tools has she worked with?",
  "Tell me about the AI chatbot launch.",
  "What are her qualifications?",
];

export function ResumeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streaming]);

  async function send(question: string) {
    const text = question.trim();
    if (!text || streaming) return;
    setError(null);
    setInput("");
    const history: Message[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "The assistant is unavailable right now.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) {
        setMessages([
          ...history,
          { role: "assistant", content: "I couldn't produce an answer for that. Please try rephrasing." },
        ]);
      }
    } catch (e) {
      setMessages(history);
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setStreaming(false);
    }
  }

  return (
    <section id="ask" className="border-t border-border bg-secondary/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="AI resume chat"
          title="Ask the resume anything"
          intro="Answers come only from Rajshri's resume. Nothing is invented, and no confidential employer information is available here."
        />

        <Reveal className="mt-12">
          <div className="border border-border bg-card">
            <div ref={listRef} className="max-h-[26rem] space-y-5 overflow-y-auto p-6 sm:p-8">
              {messages.length === 0 ? (
                <div>
                  <p className="text-sm text-muted-foreground">
                    Try one of these to start:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="border border-border px-3 py-2 text-xs text-ink/80 transition-colors hover:border-purple hover:text-purple"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m, i) => (
                  <div
                    key={i}
                    className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                  >
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[85%] rounded-sm bg-ink px-4 py-3 text-sm text-background"
                          : "max-w-[90%] rounded-sm bg-purple-soft/60 px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap text-ink"
                      }
                    >
                      {m.content ||
                        (streaming && i === messages.length - 1 ? "Thinking…" : "")}
                    </div>
                  </div>
                ))
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex gap-3 border-t border-border p-4 sm:p-5"
            >
              <label className="sr-only" htmlFor="chat-input">
                Your question
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about roles, results, tools or education…"
                className="min-w-0 flex-1 border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-purple focus:outline-none"
              />
              <button
                type="submit"
                disabled={streaming || !input.trim()}
                className="bg-purple px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {streaming ? "…" : "Send"}
              </button>
            </form>
          </div>
          {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
