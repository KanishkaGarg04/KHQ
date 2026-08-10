import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const LOGS = [
  {
    ts: "2024-01",
    tag: "ORIGIN",
    title: "Started Programming with C",
    body: "Started my programming journey with C, learning the fundamentals of programming, logic building, variables, control flow, functions, and problem-solving.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2024-03",
    tag: "LEARN",
    title: "Moved to Java",
    body: "Started learning Java and strengthened my understanding of object-oriented programming, data structures, problem-solving, and writing more structured code.",
    color: "var(--neon-violet)",
  },
  {
    ts: "2024-09",
    tag: "BUILD",
    title: "Entered Full-Stack Development",
    body: "Started exploring web development and gradually moved into full-stack engineering — learning frontend development, backend systems, APIs, databases, authentication, and deployment.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2025-01",
    tag: "SHIP",
    title: "Built My First Project — Pet Adoption Platform",
    body: "Built my first complete development project: a pet adoption platform designed to connect users with pets available for adoption and give me hands-on experience building a real application.",
    color: "var(--neon-magenta)",
  },
  {
    ts: "2025-03",
    tag: "DSA",
    title: "Started Taking DSA Seriously",
    body: "Started a focused journey into Data Structures and Algorithms, working through core concepts and gradually building stronger problem-solving skills with consistent practice.",
    color: "var(--neon-violet)",
  },
  {
    ts: "2025-08",
    tag: "FOUNDATIONS",
    title: "Strengthened Core CS & Aptitude",
    body: "Started preparing more deliberately for software engineering opportunities by working on aptitude, core computer science subjects, problem-solving, and interview fundamentals.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2025-12",
    tag: "AI",
    title: "Started Going Deeper into Machine Learning",
    body: "Began exploring the mathematical and conceptual foundations behind machine learning and started understanding how models can be implemented rather than treating AI as a black box.",
    color: "var(--neon-violet)",
  },
  {
    ts: "2026-03",
    tag: "HACKATHON",
    title: "ET Gen AI Hackathon — First Hackathon",
    body: "Participated in my first hackathon, the ET Gen AI Hackathon, where I built ET Investor Guardian — an AI-powered solution focused on helping users make more informed investment decisions — and advanced to the Semi-Finals.",
    color: "var(--neon-magenta)",
  },
  {
    ts: "2026-04",
    tag: "HACKATHON",
    title: "AMD Regional Slingshot — Top 10",
    body: "Built Prapti AI, an AI-powered financial intelligence platform, and was selected among the Top 10 teams at the AMD Regional Slingshot Hackathon in Bhopal.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2026-05",
    tag: "SHIP",
    title: "Built & Deployed MedScan",
    body: "Built MedScan, an AI-powered medical report analysis platform using OCR and AI to extract information from medical reports and generate useful insights. Took the project from development to deployment.",
    color: "var(--neon-violet)",
  },
  {
    ts: "2026-05",
    tag: "ITERATE",
    title: "Reworked Prapti AI",
    body: "Returned to Prapti AI and expanded the platform with additional modules, improving its functionality and turning the hackathon prototype into a more complete product.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2026-06",
    tag: "HACKATHON",
    title: "IEEE Hackathon — Built Krishi AI",
    body: "Participated in an IEEE hackathon and built Krishi AI — an agriculture-focused AI platform exploring crop recommendations, disease detection, and intelligent farming assistance.",
    color: "var(--neon-magenta)",
  },
  {
    ts: "2026-06",
    tag: "SHIP",
    title: "Deployed Krishi AI",
    body: "Took Krishi AI beyond the hackathon environment and deployed the project, gaining more practical experience with production-ready applications and real-world AI integration.",
    color: "var(--neon-cyan)",
  },
  {
    ts: "2026-07",
    tag: "DEEP DIVE",
    title: "From Using AI to Understanding AI",
    body: "Started going deeper into AI implementation — exploring machine learning, deep learning, model behavior, AI-assisted applications, and how intelligent systems can be integrated into full-stack products.",
    color: "var(--neon-violet)",
  },
  {
    ts: "2026-08",
    tag: "SYSTEMS",
    title: "Exploring Backend & Cloud Architecture",
    body: "Expanded the focus beyond individual features toward backend architecture, APIs, databases, authentication, deployment, cloud infrastructure, and designing systems that can scale beyond a local development environment.",
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
