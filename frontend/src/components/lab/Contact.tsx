import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 md:px-12">
      <SectionHeader
        code="MODULE 06 · CONTACT TERMINAL"
        title={<>Open a <span className="text-holo">secure channel</span>.</>}
        desc="Want to collaborate, hire, or just talk shop? Transmit a signal."
        accent="cyan"
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Terminal */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6 lg:col-span-3"
        >
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
              channel://kanishka.labs · encrypted
            </div>
            <div className="font-mono text-[10px] text-muted-foreground">UTF-8 · 256-bit</div>
          </div>

          <div className="mt-5 space-y-4">
            <Field label="// SENDER" placeholder="your name" />
            <Field label="// REPLY ADDRESS" placeholder="you@domain.com" type="email" />
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                // TRANSMISSION
              </label>
              <textarea
                rows={5}
                placeholder="Begin signal..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background/40 p-3 font-mono text-sm outline-none transition focus:border-cyan focus:glow-cyan"
              />
            </div>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan/50 bg-cyan/10 px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-cyan transition hover:glow-cyan"
            >
              Transmit
              <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>

        {/* Direct channels */}
        <div className="space-y-4 lg:col-span-2">
          {[
            {
  Icon: Mail,
  label: "Email",
  v: "kanishkagarg0410@gmail.com",
  color: "var(--neon-cyan)",
},
{
  Icon: FaGithub,
  label: "GitHub",
  v: "github.com/KanishkaGarg04",
  color: "var(--neon-violet)",
},
{
  Icon: FaLinkedin,
  label: "LinkedIn",
  v: "https://www.linkedin.com/in/kanishka-garg-65b086307/",
  color: "var(--neon-cyan)",
},
{
  Icon: FaTwitter,
  label: "X / Twitter",
  v: "@kanishkaG04",
  color: "var(--neon-magenta)",
},
          ].map(({ Icon, label, v, color }, i) => (
            <motion.a
              key={label}
              href="#"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:border-cyan/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${color}20`, boxShadow: `0 0 0 1px ${color}40` }}>
                <Icon className="h-5 w-5" style={{ color }} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                <div className="font-display text-sm font-medium">{v}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <footer className="mt-24 flex flex-col items-center gap-2 border-t border-border pt-8 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Kanishka Labs · est. 2025 · all systems nominal
        </div>
        <div className="text-xs text-muted-foreground">Designed and engineered by Kanishka Garg.</div>
      </footer>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background/40 p-3 font-mono text-sm outline-none transition focus:border-cyan focus:glow-cyan"
      />
    </div>
  );
}
