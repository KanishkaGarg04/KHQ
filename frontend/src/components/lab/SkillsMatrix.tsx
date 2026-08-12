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
  // Core
  { id: "JavaScript", x: 48, y: 48, group: "core", size: 1.3 },
  { id: "Java", x: 13, y: 28, group: "core" },
  { id: "TypeScript", x: 72, y: 42, group: "core" },

  // Frontend
  { id: "React.js", x: 28, y: 28, group: "frontend" },
  { id: "Next.js", x: 24, y: 50, group: "frontend" },
  { id: "Tailwind CSS", x: 22, y: 70, group: "frontend" },

  // Backend
  { id: "Node.js", x: 72, y: 25, group: "backend" },
  { id: "Express.js", x: 84, y: 45, group: "backend" },
  { id: "REST APIs", x: 80, y: 65, group: "backend" },
  { id: "Socket.IO", x: 67, y: 76, group: "backend" },

  // Python / AI
  { id: "Python", x: 35, y: 84, group: "ai" },
  { id: "Flask", x: 50, y: 90, group: "ai" },
  { id: "Machine Learning", x: 50, y: 14, group: "ml" },
  { id: "YOLOv8", x: 70, y: 10, group: "ml" },
  { id: "LSTM", x: 86, y: 15, group: "ml" },
  { id: "Gemini AI", x: 88, y: 82, group: "ml" },
  { id: "OCR", x: 63, y: 92, group: "ml" },

  // Databases
  { id: "MongoDB", x: 92, y: 58, group: "database" },
  { id: "PostgreSQL", x: 57, y: 62, group: "database" },
  { id: "Prisma", x: 45, y: 68, group: "database" },
  { id: "SQL", x: 37, y: 62, group: "database" },

  // Tools
  { id: "Git/GitHub", x: 10, y: 82, group: "tools" },
];

const EDGES: [string, string][] = [
  // Core → Frontend
  ["JavaScript", "React.js"],
  ["JavaScript", "Next.js"],
  ["JavaScript", "Node.js"],
  ["JavaScript", "TypeScript"],

  // Frontend
  ["React.js", "Next.js"],
  ["React.js", "Tailwind CSS"],

  // Backend
  ["TypeScript", "Node.js"],
  ["Node.js", "Express.js"],
  ["Express.js", "REST APIs"],
  ["REST APIs", "Socket.IO"],

  // Backend → Database
  ["Express.js", "MongoDB"],
  ["REST APIs", "PostgreSQL"],
  ["TypeScript", "Prisma"],
  ["Prisma", "PostgreSQL"],
  ["SQL", "PostgreSQL"],

  // Python / AI
  ["Python", "Flask"],
  ["Python", "Machine Learning"],
  ["Flask", "REST APIs"],
  ["Machine Learning", "YOLOv8"],
  ["Machine Learning", "LSTM"],
  ["Machine Learning", "Gemini AI"],
  ["OCR", "Gemini AI"],

  // Database connections
  ["Flask", "SQL"],
  ["Python", "SQL"],

  // Cross-stack
  ["JavaScript", "Python"],
  ["Git/GitHub", "React.js"],
  ["Git/GitHub", "Node.js"],
  ["Git/GitHub", "Python"],
  ["Git/GitHub", "Java"],
  ["Git/GitHub", "TypeScript"],

  // DSA
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

type RelationData = {
  projects: string[];
  badges: string[];
  experience: string[];
};

const RELATIONS: Record<string, RelationData> = {
  JavaScript: {
    projects: [
      "MedScan AI",
      "KrishiMitra AI",
      "Prapti AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "Modern ES6+ JavaScript",
      "Frontend Development",
      "API Integration",
      "Full-Stack Application Development",
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
      "Component-Based UI",
      "Responsive Interfaces",
      "State Management",
      "API Integration",
    ],
  },

  "Next.js": {
    projects: [
      "Task Automation Platform",
      "Portfolio / Lab",
    ],
    badges: [],
    experience: [
      "React-Based Applications",
      "Application Routing",
      "Frontend Architecture",
      "Production Builds",
    ],
  },

  "Tailwind CSS": {
    projects: [
      "Prapti AI",
      "Clinix",
      "Portfolio / Lab",
    ],
    badges: [],
    experience: [
      "Responsive Layouts",
      "Custom UI Systems",
      "Modern Component Styling",
      "Utility-First CSS",
    ],
  },

  TypeScript: {
    projects: [
      "Task Automation Platform",
      "Portfolio / Lab",
    ],
    badges: [],
    experience: [
      "Typed React Development",
      "Node.js Backend Development",
      "API Contracts",
      "Type-Safe Application Architecture",
    ],
  },

  "Node.js": {
    projects: [
      "MedScan AI",
      "Clinix",
      "Task Automation Platform",
    ],
    badges: [],
    experience: [
      "Backend Development",
      "REST APIs",
      "Authentication",
      "Asynchronous Task Processing",
    ],
  },

  "Express.js": {
    projects: [
      "MedScan AI",
      "Clinix",
      "Task Automation Platform",
    ],
    badges: [],
    experience: [
      "REST API Development",
      "JWT Authentication",
      "Middleware",
      "Backend Architecture",
    ],
  },

  "REST APIs": {
    projects: [
      "MedScan AI",
      "KrishiMitra AI",
      "Prapti AI",
      "Clinix",
      "Task Automation Platform",
    ],
    badges: [],
    experience: [
      "Frontend ↔ Backend Communication",
      "CRUD APIs",
      "Authentication Flows",
      "API Integration",
    ],
  },

  "Socket.IO": {
    projects: [
      "Task Automation Platform",
      "Clinix",
    ],
    badges: [],
    experience: [
      "Real-Time Status Updates",
      "Event-Based Communication",
      "Live Application State",
    ],
  },

  MongoDB: {
    projects: [
      "MedScan AI",
      "Clinix",
    ],
    badges: [],
    experience: [
      "MongoDB Atlas",
      "Schema Design",
      "CRUD Operations",
      "Document-Based Data Modeling",
    ],
  },

  PostgreSQL: {
    projects: [
      "Prapti AI",
      "Task Automation Platform",
    ],
    badges: [],
    experience: [
      "Relational Database Design",
      "Neon PostgreSQL",
      "Production Database Integration",
      "Structured Data Modeling",
    ],
  },

  Prisma: {
    projects: [
      "Task Automation Platform",
    ],
    badges: [],
    experience: [
      "ORM-Based Database Access",
      "Schema Modeling",
      "Type-Safe Queries",
      "PostgreSQL Integration",
    ],
  },

  SQL: {
    projects: [
      "KrishiMitra AI",
      "Task Automation Platform",
    ],
    badges: [],
    experience: [
      "Relational Data",
      "Database Design",
      "SQLAlchemy",
      "PostgreSQL",
    ],
  },

  Python: {
    projects: [
      "KrishiMitra AI",
      "Prapti AI",
    ],
    badges: [
      "AMD Slingshot — Top 10",
      "ET Gen AI Hackathon — Semi-Finalist",
    ],
    experience: [
      "AI Application Development",
      "Backend Logic",
      "Data Processing",
      "Model Integration",
    ],
  },

  Flask: {
    projects: [
      "KrishiMitra AI",
      "Prapti AI",
    ],
    badges: [],
    experience: [
      "REST API Development",
      "Python Backend Services",
      "JWT Authentication",
      "AI Model Integration",
    ],
  },

  "Machine Learning": {
    projects: [
      "KrishiMitra AI",
      "Prapti AI",
    ],
    badges: [
      "AMD Slingshot — Top 10",
      "ET Gen AI Hackathon — Semi-Finalist",
    ],
    experience: [
      "Model Training & Integration",
      "Prediction Pipelines",
      "Recommendation Systems",
      "AI-Assisted Applications",
    ],
  },

  YOLOv8: {
    projects: [
      "KrishiMitra AI",
    ],
    badges: [
      "IEEE Hackathon",
    ],
    experience: [
      "Crop Disease Detection",
      "Computer Vision",
      "Object Detection",
      "Model Integration",
    ],
  },

  LSTM: {
    projects: [
      "KrishiMitra AI",
    ],
    badges: [
      "IEEE Hackathon",
    ],
    experience: [
      "Time-Series Prediction",
      "Market Price Forecasting",
      "Sequence Modeling",
      "Model Integration",
    ],
  },

  "Gemini AI": {
    projects: [
      "MedScan AI",
    ],
    badges: [],
    experience: [
      "Medical Report Analysis",
      "AI-Generated Insights",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },

  OCR: {
    projects: [
      "MedScan AI",
    ],
    badges: [],
    experience: [
      "Medical Document Processing",
      "Text Extraction",
      "OCR Pipeline",
      "AI-Assisted Report Analysis",
    ],
  },

  Java: {
    projects: [
      "DSA Practice",
      "Problem-Solving Practice",
    ],
    badges: [
      "ICPC Algo Queen — Rank 509",
    ],
    experience: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Competitive Problem Solving",
      "Interview Preparation",
    ],
  },

  "Git/GitHub": {
    projects: [
      "KrishiMitra AI",
      "MedScan AI",
      "Prapti AI",
      "Clinix",
      "Task Automation Platform",
      "Portfolio / Lab",
    ],
    badges: [],
    experience: [
      "Version Control",
      "Branching & Collaboration",
      "GitHub Project Management",
      "Deployment Workflows",
    ],
  },
};

export function SkillsMatrix() {
  const [active, setActive] = useState<string | null>(null);

  const isConnected = (id: string) =>
    !active ||
    active === id ||
    EDGES.some(
      ([a, b]) =>
        (a === active && b === id) ||
        (b === active && a === id),
    );

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
        desc="Trace the technologies behind my full-stack, AI, backend, and problem-solving work. Select any node to see where it was actually used."
        accent="magenta"
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Network */}
        <div className="glass relative aspect-[16/11] w-full overflow-hidden rounded-3xl p-6">
          <div className="absolute inset-0 grid-bg opacity-30" />

          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {EDGES.map(([a, b], i) => {
              const A = NODES.find((n) => n.id === a)!;
              const B = NODES.find((n) => n.id === b)!;

              const lit =
                active &&
                (active === a || active === b);

              return (
                <line
                  key={i}
                  x1={A.x}
                  y1={A.y}
                  x2={B.x}
                  y2={B.y}
                  stroke={
                    lit
                      ? "var(--neon-cyan)"
                      : "oklch(0.85 0.16 200 / 0.2)"
                  }
                  strokeWidth={lit ? 0.35 : 0.15}
                  style={{
                    filter: lit
                      ? "drop-shadow(0 0 1px var(--neon-cyan))"
                      : undefined,
                    transition: "all 0.3s",
                  }}
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
                onClick={() =>
                  setActive(isActive ? null : n.id)
                }
                onMouseEnter={() => setActive(n.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                }}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  opacity: connected ? 1 : 0.3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <div
                  className="flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-md transition"
                  style={{
                    borderColor: `${color}50`,
                    background:
                      "oklch(0.16 0.03 260 / 0.6)",
                    boxShadow: isActive
                      ? `0 0 24px ${color}`
                      : `0 0 0 1px ${color}30`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: color,
                      boxShadow: `0 0 8px ${color}`,
                    }}
                  />

                  <span
                    className="font-mono text-[11px]"
                    style={{
                      fontSize: `${(n.size ?? 1) * 11}px`,
                    }}
                  >
                    {n.id}
                  </span>
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

        {/* Relations Panel */}
        <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
            ▸ Relation Trace
          </div>

          <AnimatePresence mode="wait">
            {active && RELATIONS[active] ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  {active}
                </h3>

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
                  label="Applied experience"
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
                Every node represents a technology I've actually
                worked with across projects, hackathons, backend
                systems, or DSA practice.

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "Machine Learning",
                  ].map((s) => (
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
      <div
        className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em]"
        style={{ color }}
      >
        <Icon className="h-3 w-3" />
        {label}
      </div>

      {items.length === 0 ? (
        <p className="mt-2 text-xs text-muted-foreground">
          — no entries yet, working on it.
        </p>
      ) : (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {items.map((it) => (
            <span
              key={it}
              className="rounded-md border px-2 py-1 font-mono text-[10px]"
              style={{
                borderColor: `${color}40`,
                color: "var(--foreground)",
                background: `${color}10`,
              }}
            >
              {it}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}