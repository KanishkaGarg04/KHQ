import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";

export function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSending(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("error");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        code="MODULE 06 · CONTACT TERMINAL"
        title={<>Open a secure channel.</>}
        desc="Want to collaborate, hire, or just talk shop? Transmit a signal."
        accent="cyan"
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Terminal */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 lg:col-span-3"
        >
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-cyan" />
              channel://kanishka.labs · encrypted
            </div>

            <div className="font-mono text-[10px] text-muted-foreground">
              UTF-8 · 256-bit
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <Field
              label="// SENDER"
              placeholder="your name"
              name="name"
            />

            <Field
              label="// REPLY ADDRESS"
              placeholder="you@domain.com"
              type="email"
              name="email"
            />

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                // TRANSMISSION
              </label>

              <textarea
                name="message"
                rows={5}
                placeholder="Begin signal..."
                required
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background/40 p-3 font-mono text-sm outline-none transition focus:border-cyan focus:glow-cyan"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan/50 bg-cyan/10 px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-cyan transition hover:glow-cyan disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "Transmitting..." : "Transmit"}

              <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>

            {status === "success" && (
              <div className="rounded-xl border border-cyan/30 bg-cyan/5 p-3 text-center font-mono text-xs text-cyan">
                ✓ TRANSMISSION RECEIVED
                <br />
                <span className="text-muted-foreground">
                  Your message has reached Kanishka Labs.
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-red-400/30 bg-red-400/5 p-3 text-center font-mono text-xs text-red-400">
                ✕ TRANSMISSION FAILED
                <br />
                <span className="text-muted-foreground">
                  Please check the fields and try again.
                </span>
              </div>
            )}
          </div>
        </motion.form>

        {/* Direct channels */}
        <div className="space-y-4 lg:col-span-2">
          {[
            {
              Icon: Mail,
              label: "Email",
              v: "kanishkagarg0410@gmail.com",
              href: "mailto:kanishkagarg0410@gmail.com",
              color: "var(--neon-cyan)",
            },
            {
              Icon: FaGithub,
              label: "GitHub",
              v: "github.com/KanishkaGarg04",
              href: "https://github.com/KanishkaGarg04",
              color: "var(--neon-violet)",
            },
            {
              Icon: FaLinkedin,
              label: "LinkedIn",
              v: "linkedin.com/in/kanishka-garg-65b086307",
              href: "https://www.linkedin.com/in/kanishka-garg-65b086307/",
              color: "var(--neon-cyan)",
            },
            {
              Icon: FaTwitter,
              label: "X / Twitter",
              v: "@kanishkaG04",
              href: "https://twitter.com/kanishkaG04",
              color: "var(--neon-magenta)",
            },
          ].map(({ Icon, label, v, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:border-cyan/40"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: `${color}20`,
                  boxShadow: `0 0 0 1px ${color}40`,
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color }}
                />
              </div>

              <div className="min-w-0">
                <div className="font-display text-sm font-semibold">
                  {label}
                </div>

                <div className="mt-1 truncate font-mono text-[10px] text-muted-foreground">
                  {v}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <footer className="mt-24 flex flex-col items-center gap-2 border-t border-border pt-8 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Kanishka Labs · est. 2025 · all systems nominal
        </div>

        <div className="text-xs text-muted-foreground">
          Designed and engineered by Kanishka Garg.
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl border border-border bg-background/40 p-3 font-mono text-sm outline-none transition focus:border-cyan focus:glow-cyan"
      />
    </div>
  );
}