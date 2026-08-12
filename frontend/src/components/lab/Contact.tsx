import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Portfolio Enquiry — Kanishka Labs");
    formData.append("from_name", "Kanishka Labs Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        console.error(data);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
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
              required
            />

            <Field
              label="// REPLY ADDRESS"
              placeholder="you@domain.com"
              type="email"
              name="email"
              required
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
              disabled={status === "sending"}
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan/50 bg-cyan/10 px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-cyan transition hover:glow-cyan disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? "Transmitting..."
                : status === "success"
                  ? "✓ Signal Received"
                  : status === "error"
                    ? "Transmission Failed"
                    : "Transmit"}

              {status === "idle" || status === "sending" ? (
                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              ) : null}
            </button>

            {status === "success" && (
              <p className="text-center font-mono text-[10px] uppercase tracking-wider text-cyan">
                Message delivered successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-center font-mono text-[10px] uppercase tracking-wider text-red-400">
                Transmission failed. Please try again.
              </p>
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
  name,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  required?: boolean;
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
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background/40 p-3 font-mono text-sm outline-none transition focus:border-cyan focus:glow-cyan"
      />
    </div>
  );
}