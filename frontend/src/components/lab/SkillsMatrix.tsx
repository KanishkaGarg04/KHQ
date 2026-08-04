import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FlaskConical, Trophy, Briefcase } from "lucide-react";

type Node = {
  id: string;
  x: number;
  y: number;
  group: string;
  size?: number;
};

const NODES: Node[] = [
  { id: "JavaScript", x: 50, y: 50, group: "core", size: 1.3 },

  { id: "React.js", x: 25, y: 30, group: "frontend" },
  { id: "Tailwind CSS", x: 18, y: 55, group: "frontend" },

  { id: "Node.js", x: 76, y: 28, group: "backend" },
  { id: "Express.js", x: 84, y: 52, group: "backend" },
  { id: "MongoDB", x: 72, y: 76, group: "backend" },

  { id: "Python", x: 25, y: 78, group: "ai" },
  { id: "Flask", x: 42, y: 88, group: "ai" },

  { id: "Machine Learning", x: 50, y: 15, group: "ml" },
  { id: "Gemini AI", x: 70, y: 12, group: "ml" },
  { id: "OCR", x: 86, y: 18, group: "ml" },

  { id: "Java", x: 10, y: 32, group: "core" },
  { id: "SQL", x: 60, y: 90, group: "database" },
  { id: "Git/GitHub", x: 10, y: 72, group: "tools" },
];

const EDGES: [string, string][] = [
  ["JavaScript", "React.js"],
  ["JavaScript", "Tailwind CSS"],
  ["JavaScript", "Node.js"],

  ["React.js", "Tailwind CSS"],

  ["Node.js", "Express.js"],
  ["Express.js", "MongoDB"],

  ["Python", "Flask"],
  ["Python", "Machine Learning"],
  ["Machine Learning", "Gemini AI"],
  ["Machine Learning", "OCR"],

  ["Flask", "SQL"],

  ["JavaScript", "Python"],
  ["Git/GitHub", "React.js"],
  ["Git/GitHub", "Node.js"],
  ["Git/GitHub", "Python"],

  ["Java", "JavaScript"],
];

const GROUP_COLOR: Record<string, string> = {
  core: "var(--neon-magenta)",
  frontend: "var(--neon-cyan)",
  backend: "var(--neon-violet)",
  ai: "var(--neon-cyan)",
  ml: "var(--neon-magenta)",
  database: "var(--neon-violet)",
  tools: "var(--neon-cyan)",
};

const RELATIONS: Record<
  string,
  {
    projects: string[];
    badges: string[];
    experience: string[];
  }
> = {
  "JavaScript": {
    projects: [
      "MedScan AI",
      "KrishiMitra AI",
      "Prapti AI",
      "Clinix",
    ],
    badges: [
      "AMD Slingshot Top 10",
      "ET Gen AI Hackathon Semi-Finalist",
    ],
    experience: [
      "Modern ES6+ JavaScript",
      "Frontend & Backend Development",
      "REST API Integration",
    ],
  },

  "React.js": {
    projects: [
      "MedScan AI",
      "KrishiMitra AI",
      "Prapti AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "Component-based UI",
      "Responsive Design",
      "State Management",
    ],
  },

  "Tailwind CSS": {
    projects: [
      "MedScan AI",
      "Prapti AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "Responsive Layouts",
      "Custom UI Systems",
      "Modern Styling",
    ],
  },

  "Node.js": {
    projects: [
      "MedScan AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "REST APIs",
      "Backend Development",
      "Authentication",
    ],
  },

  "Express.js": {
    projects: [
      "MedScan AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "JWT Authentication",
      "Express REST APIs",
      "Backend Architecture",
    ],
  },
    "MongoDB": {
    projects: [
      "MedScan AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "MongoDB Atlas",
      "Schema Design",
      "CRUD Operations",
    ],
  },

  "Python": {
    projects: [
      "KrishiMitra AI",
      "Prapti AI",
    ],
    badges: [
      "AMD Slingshot Top 10",
      "ET Gen AI Hackathon Semi-Finalist",
    ],
    experience: [
      "AI Development",
      "Backend Logic",
      "Data Processing",
    ],
  },

  "Flask": {
    projects: [
      "KrishiMitra AI",
      "Prapti AI",
    ],
    badges: [],
    experience: [
      "REST API Development",
      "JWT Authentication",
      "Backend Services",
    ],
  },

  "Machine Learning": {
    projects: [
      "KrishiMitra AI",
      "Prapti AI",
    ],
    badges: [
      "AMD Slingshot Top 10",
      "ET Gen AI Hackathon Semi-Finalist",
      "ICPC Algo Queen (Rank 509)",
    ],
    experience: [
      "LSTM Price Prediction",
      "YOLOv8 Disease Detection",
      "Recommendation Systems",
    ],
  },

  "Gemini AI": {
    projects: [
      "MedScan AI",
    ],
    badges: [],
    experience: [
      "Medical Report Analysis",
      "Prompt Engineering",
      "AI-generated Insights",
    ],
  },

  OCR: {
    projects: [
      "MedScan AI",
    ],
    badges: [],
    experience: [
      "Tesseract OCR",
      "Text Extraction",
      "Medical Document Processing",
    ],
  },

  Java: {
    projects: [
      "DSA Practice",
    ],
    badges: [
      "ICPC Algo Queen (Rank 509)",
    ],
    experience: [
      "Object-Oriented Programming",
      "Problem Solving",
      "Data Structures & Algorithms",
    ],
  },

  SQL: {
    projects: [
      "KrishiMitra AI",
    ],
    badges: [],
    experience: [
      "SQLAlchemy",
      "Relational Databases",
      "Database Design",
    ],
  },

  "Git/GitHub": {
    projects: [
      "KrishiMitra AI",
      "MedScan AI",
      "Prapti AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "Version Control",
      "Branching & Collaboration",
      "GitHub Project Management",
    ],
  },
};
export function SkillsMatrix() {
  const [active, setActive] = useState<string | null>(null);

  const isConnected = (id: string) =>
    !active || active === id || EDGES.some(([a, b]) => (a === active && b === id) || (b === active && a === id));

  return (
    <section id="skills" className="relative px-6 py-32 md:px-12">
     <SectionHeader
            code="MODULE 03 · SKILL NETWORK"
            title={
              <>
                Every technology in this lab is connected to{" "}
                <span className="text-holo">real projects</span>.
              </>
            }
            desc="Explore the technologies powering my AI, full-stack, and problem-solving journey. Click any node to trace where I've applied it."
            accent="magenta"
          />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Network */}
        <div className="glass relative aspect-[16/11] w-full overflow-hidden rounded-3xl p-6">
          <div className="absolute inset-0 grid-bg opacity-30" />

          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {EDGES.map(([a, b], i) => {
              const A = NODES.find((n) => n.id === a)!;
              const B = NODES.find((n) => n.id === b)!;
              const lit = active && (active === a || active === b);
              return (
                <line
                  key={i}
                  x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                  stroke={lit ? "var(--neon-cyan)" : "oklch(0.85 0.16 200 / 0.2)"}
                  strokeWidth={lit ? 0.35 : 0.15}
                  style={{ filter: lit ? "drop-shadow(0 0 1px var(--neon-cyan))" : undefined, transition: "all 0.3s" }}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {NODES.map((n) => {
            const color = GROUP_COLOR[n.group];
            const connected = isConnected(n.id);
            const isActive = active === n.id;
            return (
              <motion.button
                key={n.id}
                onClick={() => setActive(isActive ? null : n.id)}
                onMouseEnter={() => setActive(n.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                animate={{ scale: isActive ? 1.2 : 1, opacity: connected ? 1 : 0.3 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div
                  className="flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-md transition"
                  style={{
                    borderColor: `${color}50`,
                    background: `oklch(0.16 0.03 260 / 0.6)`,
                    boxShadow: isActive ? `0 0 24px ${color}` : `0 0 0 1px ${color}30`,
                  }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                  <span className="font-mono text-[11px]" style={{ fontSize: (n.size ?? 1) * 11 }}>{n.id}</span>
                </div>
              </motion.button>
            );
          })}

                  <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {active
                      ? `> analyzing :: ${active}`
                      : "> select a technology to inspect"}
                  </div>
        </div>

        {/* Relations panel */}
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">▸ Relation Trace</div>
          <AnimatePresence mode="wait">
            {active && RELATIONS[active] ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="mt-2 font-display text-2xl font-semibold">{active}</h3>
                <RelationRow
                  icon={FlaskConical}
                  label="Projects shipped"
                  color="var(--neon-cyan)"
                  items={RELATIONS[active].projects}
                />
                <RelationRow
                  icon={Trophy}
                  label="Badges earned"
                  color="var(--neon-magenta)"
                  items={RELATIONS[active].badges}
                />
                <RelationRow
                  icon={Briefcase}
                  label="Experience"
                  color="var(--neon-violet)"
                  items={RELATIONS[active].experience}
                />
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm text-muted-foreground"
              >
                Every technology in this network has been applied in one or more real
                projects, hackathons, or coding practice. Select a node to inspect its
                connections.

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["React.js", "Node.js", "Machine Learning"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setActive(s)}
                      className="rounded-lg border border-border bg-secondary/40 px-2 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition hover:text-foreground"
                    >
                      explore · {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function RelationRow({
  icon: Icon,
  label,
  color,
  items,
}: {
  icon: typeof FlaskConical;
  label: string;
  color: string;
  items: string[];
}) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color }}>
        <Icon className="h-3 w-3" />
        {label}
      </div>
      {items.length === 0 ? (
        <p className="mt-2 text-xs text-muted-foreground">— no entries yet, working on it.</p>
      ) : (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {items.map((it) => (
            <span
              key={it}
              className="rounded-md border px-2 py-1 font-mono text-[10px]"
              style={{ borderColor: `${color}40`, color: "var(--foreground)", background: `${color}10` }}
            >
              {it}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
