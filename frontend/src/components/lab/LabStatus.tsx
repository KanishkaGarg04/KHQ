import { motion } from "framer-motion";
import { Brain, Hammer, BookOpen, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const PANELS = [
  {
    code: "FOCUS.NOW",
    label: "Current Focus",
    body: "Data Structures & Algorithms",
    sub: "Java • Arrays • Strings • Problem solving • Building consistency through daily practice",
    icon: Brain,
    color: "var(--neon-cyan)",
    progress: 30,
  },
  {
    code: "BUILD.NOW",
    label: "Current Build",
    body: "Backend Engineering & Cloud",
    sub: "REST APIs • Authentication • Databases • Deployment • Cloud fundamentals & scalable backend architecture",
    icon: Hammer,
    color: "var(--neon-violet)",
    progress: 45,
  },
  {
    code: "EXPLORE.NOW",
    label: "Exploring",
    body: "AI Systems & Integrations",
    sub: "Understanding API keys, webhooks, request flows, AI APIs, third-party integrations & how intelligent products work under the hood",
    icon: BookOpen,
    color: "var(--neon-magenta)",
    progress: 35,
  },
  {
    code: "NEXT.GOAL",
    label: "Next Goal",
    body: "SDE Internship",
    sub: "Preparing for product-based companies through projects, DSA, system design, and real-world engineering",
    icon: Rocket,
    color: "var(--neon-cyan)",
    progress: 55,
  },
];

export function LabStatus() {
  return (
    <section id="lab-status" className="relative px-6 py-24 md:px-12">
      <SectionHeader
        code="MODULE 00 · LAB STATUS"
        title={<>What I'm <span className="text-holo">working on right now</span>.</>}
        desc="A live readout of the four threads I'm actively pulling on this week. Refreshed manually — no fluff."
        accent="cyan"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PANELS.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass relative overflow-hidden rounded-2xl p-5"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-3xl"
                style={{ background: p.color }}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: p.color }}>
                  <Icon className="h-3.5 w-3.5" />
                  {p.code}
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">live</span>
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.label}</div>
              <div className="mt-1 font-display text-xl font-semibold leading-tight">{p.body}</div>
              <p className="mt-2 text-xs text-muted-foreground">{p.sub}</p>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
                  className="h-full"
                  style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
                />
              </div>
              <div className="mt-1 text-right font-mono text-[9px] text-muted-foreground">{p.progress}%</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
