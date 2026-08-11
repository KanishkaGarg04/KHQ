import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  FlaskConical,
  Wrench,
  AlertTriangle,
  Lightbulb,
  Cpu,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";

const PROJECTS = [
  {
    name: "KrishiMitra AI",
    tag: "AI · Agriculture · Team Project",

    github: "https://github.com/KanishkaGarg04/Krishi_AI",
    demo: " https://krishi-ai-sepia.vercel.app/",

    problem:
      "Farmers often rely on scattered information for crop planning, fertilizer selection, disease diagnosis, and market prices. KrishiMitra brings these capabilities together in a single AI-powered platform.",

    stack: [
      "React.js",
      "Flask",
      "Python",
      "JWT",
      "SQLAlchemy",
      "YOLOv8",
      "LSTM",
      "SQLite"
    ],

    arch: [
      "React Frontend",
      "Flask REST API",
      "AI Models",
      "Database"
    ],

    challenge:
      "Integrating multiple AI modules—including crop recommendation, fertilizer prediction, disease detection, and market forecasting—into a unified workflow while maintaining smooth communication between the frontend and backend.",

    lesson:
      "Built collaboratively in a team of two. Learned API integration, AI model deployment, backend architecture, authentication, and effective team collaboration throughout development.",

    metrics: [
      { k: "Team", v: "4" },
      { k: "AI Modules", v: "4" },
      { k: "Hackathon", v: "IEEE" }
    ],

    color: "var(--neon-cyan)",
  },

  {
    name: "MedScan AI",
    tag: "Healthcare · AI",

    github: "https://github.com/KanishkaGarg04/MedScan",
    demo: " https://med-scan-topaz.vercel.app/",

    problem:
      "Patients often struggle to understand complex medical reports. MedScan converts uploaded reports into simplified AI-generated health insights.",

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OCR",
      "Gemini AI"
    ],

    arch: [
      "React Client",
      "Express API",
      "OCR Engine",
      "Gemini AI",
      "MongoDB"
    ],

    challenge:
      "Extracting accurate text from medical reports while maintaining fast processing and generating meaningful AI summaries.",

    lesson:
      "Learned OCR pipelines, AI integration, secure backend development, REST APIs, and deploying a production-ready MERN application.",

    metrics: [
      { k: "OCR", v: "90%+" },
      { k: "AI", v: "<10s" },
      { k: "Stack", v: "MERN" }
    ],

    color: "var(--neon-violet)",
  },

  {
    name: "Prapti AI",
    tag: "FinTech · AI",

    github: "https://github.com/KanishkaGarg04/Prapti_AI",
    demo: " https://prapti-ai-nu.vercel.app/",

    problem:
      "Managing debt and financial planning is difficult without intelligent insights. Prapti AI helps users understand financial health and debt risks using AI-driven analysis.",

    stack: [
      "React",
      "Flask",
      "Python",
      "Neon DB",
      "AI"
    ],

    arch: [
      "React Dashboard",
      "Flask Backend",
      "Risk Engine",
      "Neon Database"
    ],

    challenge:
      "Designing a financial intelligence system capable of analyzing user financial data and presenting meaningful insights through an intuitive interface.",

    lesson:
      "Developed during the AMD Slingshot Hackathon. Strengthened my skills in AI product development, rapid prototyping, teamwork, and presenting technical solutions under strict deadlines.",

    metrics: [
      { k: "Award", v: "Top 10" },
      { k: "Hackathon", v: "AMD" },
      { k: "Focus", v: "FinTech AI" }
    ],

    color: "var(--neon-magenta)",
  },
];

export function ProjectsLab() {
  const [active, setActive] = useState(0);
  const p = PROJECTS[active];

  return (
    <section id="projects" className="relative px-6 py-32 md:px-12">
      <SectionHeader
        code="MODULE 01 · PROJECT CHAMBERS"
        title={<>Real projects, <span className="text-holo">shipped under pressure</span>.</>}
        desc="Each chamber documents one real build — the problem, the stack, the architecture, and the bug that almost killed it."
        accent="cyan"
      />

      {/* Specimen rail */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {PROJECTS.map((pr, i) => (
          <button
            key={pr.name}
            onClick={() => setActive(i)}
            className="glass group relative shrink-0 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition"
            style={{
              borderColor: i === active ? `${pr.color}80` : undefined,
              boxShadow: i === active ? `0 0 16px ${pr.color}80` : undefined,
              color: i === active ? "var(--foreground)" : "var(--muted-foreground)",
            }}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle" style={{ background: pr.color, boxShadow: `0 0 8px ${pr.color}` }} />
            SPEC-0{i + 1} · {pr.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={p.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="glass-strong relative overflow-hidden rounded-3xl"
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ background: p.color }}
          />
          <div className="absolute inset-x-8 top-0 h-1 rounded-b-full" style={{ background: p.color, boxShadow: `0 0 16px ${p.color}` }} />

          <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
            {/* Left — content */}
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <FlaskConical className="h-3 w-3" style={{ color: p.color }} />
                Specimen 0{active + 1} · {p.tag}
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-3xl font-semibold md:text-4xl">{p.name}</h3>
                <div className="flex gap-2">
                  <a className="glass rounded-full p-2 transition hover:glow-cyan" href="#" aria-label="Demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a className="glass rounded-full p-2 transition hover:glow-cyan" href="#" aria-label="GitHub">
                    <FaGithub className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <Block icon={AlertTriangle} color={p.color} label="Problem">
                {p.problem}
              </Block>
              <Block icon={Wrench} color={p.color} label="Challenge">
                {p.challenge}
              </Block>
              <Block icon={Lightbulb} color={p.color} label="Lesson">
                {p.lesson}
              </Block>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                {p.metrics.map((m) => (
                  <div key={m.k}>
                    <div className="font-display text-xl font-semibold" style={{ color: p.color }}>
                      {m.v}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — preview + architecture */}
            <div className="relative border-t border-border p-6 md:p-8 lg:border-l lg:border-t-0">
              {/* Preview */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.color}35, transparent 60%)` }} />
                <div className="absolute inset-0 scanlines opacity-50" />
                <div
                  className="absolute inset-y-0 w-1/3"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}25, transparent)`, animation: "sweep 4s linear infinite" }}
                />
                {/* Fake browser chrome */}
                <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-border/60 bg-background/40 px-3 py-2 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-magenta/60" />
                  <span className="h-2 w-2 rounded-full bg-violet/60" />
                  <span className="h-2 w-2 rounded-full bg-cyan/60" />
                  <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.name.toLowerCase()}.kanishka.dev
                  </span>
                </div>
                <div className="absolute inset-x-6 bottom-6 top-12 rounded-lg border border-border/50 bg-background/30 p-3">
                  <div className="h-2 w-1/3 rounded bg-foreground/20" />
                  <div className="mt-2 h-2 w-2/3 rounded bg-foreground/10" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-10 rounded-md border border-border/40" style={{ background: `${p.color}10` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture */}
              <div className="mt-6">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: p.color }}>
                  <Cpu className="h-3 w-3" /> Architecture Diagram
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {p.arch.map((node, i) => (
                    <div key={node} className="flex items-center gap-2">
                      <div
                        className="rounded-lg border px-3 py-2 font-mono text-[10px]"
                        style={{
                          borderColor: `${p.color}40`,
                          background: `oklch(0.16 0.03 260 / 0.6)`,
                          boxShadow: `inset 0 0 12px ${p.color}10`,
                        }}
                      >
                        {node}
                      </div>
                      {i < p.arch.length - 1 && (
                        <span className="font-mono text-xs" style={{ color: p.color }}>
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}

function Block({
  icon: Icon,
  color,
  label,
  children,
}: {
  icon: typeof Wrench;
  color: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color }}>
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
