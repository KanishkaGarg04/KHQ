import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const LOGS = [
  {
    ts: "2026-08",
    tag: "BUILD",
    title: "Launched Kanishka HQ",
    body: "Rebuilt my portfolio into an interactive engineering headquarters with a custom design system, immersive animations, and mission-based storytelling.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2026-07",
    tag: "SHIP",
    title: "Deployed MedScan AI",
    body: "Built and deployed an AI-powered medical report analyzer using the MERN stack, OCR, and Gemini AI to generate health insights from uploaded reports.",
    color: "var(--neon-violet)",
  },
  {
    ts: "2026-06",
    tag: "BUILD",
    title: "Released KrishiMitra AI",
    body: "Developed an AI-powered agriculture platform featuring crop recommendation, fertilizer prediction, disease detection, and market price forecasting.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2026-05",
    tag: "HACKATHON",
    title: "Prapti AI — AMD Slingshot Finalist",
    body: "Built an AI-powered financial intelligence platform that reached the Top 10 finalists at the AMD Slingshot Hackathon.",
    color: "var(--neon-magenta)",
  },
  {
    ts: "2026-04",
    tag: "COMPETE",
    title: "Economics Times Gen AI Hackathon",
    body: "Advanced to the Semi-Finals by developing an AI-based solution and presenting it among the selected teams.",
    color: "var(--neon-violet)",
  },
  {
    ts: "2026-03",
    tag: "LEARN",
    title: "250+ Coding Problems Solving in Progress",
    body: "Built strong problem-solving skills through consistent DSA practice across Java, arrays, trees, graphs, dynamic programming, and more.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2025-12",
    tag: "ORIGIN",
    title: "Mission Initiated",
    body: "Committed to becoming a full-stack software engineer by focusing on real-world projects, hackathons, AI, and continuous learning instead of only following tutorials.",
    color: "var(--neon-magenta)",
  },
];

export function FounderLog() {
  return (
    <section id="founder-log" className="relative px-6 py-32 md:px-12">
      <SectionHeader
        code="MODULE 05 · FOUNDER LOG"
        title={<>Mission control <span className="text-holo">log entries</span>.</>}
        desc="Not a polished resume. The actual log of what I built, broke, and learned — month by month."
        accent="violet"
      />

      <div className="mx-auto max-w-4xl">
        <div className="glass-strong relative overflow-hidden rounded-2xl">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 text-cyan" />
              kanishka@hq:~/log $ tail -f journey.log
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-magenta/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/60" />
            </div>
          </div>

          <div className="relative px-5 py-6 md:px-8">
            {/* Spine */}
            <div
              className="absolute left-[34px] top-6 bottom-6 w-px md:left-[42px]"
              style={{ background: "linear-gradient(180deg, var(--neon-cyan), var(--neon-violet), var(--neon-magenta))" }}
            />

            <div className="space-y-5">
              {LOGS.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div
                    className="absolute left-[28px] top-2 h-3 w-3 -translate-x-1/2 rounded-full md:left-[36px]"
                    style={{ background: l.color, boxShadow: `0 0 12px ${l.color}` }}
                  />
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>[{l.ts}]</span>
                    <span
                      className="rounded-sm border px-1.5 py-px"
                      style={{ borderColor: `${l.color}60`, color: l.color }}
                    >
                      {l.tag}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-semibold">{l.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{l.body}</p>
                </motion.div>
              ))}
              <div className="pl-12 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan md:pl-16">
                <span className="animate-pulse-glow">▍</span> ▍ next mission loading...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
