import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Activity, Flame, Trophy, GitCommit } from "lucide-react";

const STATS = [
  {
    label: "LeetCode Problems",
    value: "100+",
    sub: "Java • DSA Practice",
    icon: Trophy,
    color: "var(--neon-cyan)",
  },
  {
    label: "Hackathon Finals",
    value: "3",
    sub: "AMD Slingshot • ET Gen AI • Hacksagon",
    icon: Activity,
    color: "var(--neon-violet)",
  },
  {
    label: "ICPC Algo Queen",
    value: "509",
    sub: "Global Rank",
    icon: Flame,
    color: "var(--neon-magenta)",
  },
  {
    label: "AI Projects",
    value: "4+",
    sub: "MERN + AI Applications",
    icon: GitCommit,
    color: "var(--neon-cyan)",
  },
];

const SKILLS = [
  { name: "React.js", v: 92 },
  { name: "Node.js & Express.js", v: 90 },
  { name: "Java & DSA", v: 75 },
  { name: "AI / LLM Integration", v: 60 },
  { name: "Python & Flask", v: 50 },
  { name: "PostgreSQL / SQL", v: 80 },
  { name: "MongoDB", v: 85 },
  { name: "Next.js", v: 80 },
];

export function Analytics() {
  return (
    <section id="analytics" className="relative px-6 py-32 md:px-12">
      <SectionHeader
        code="MODULE 02 · CODING ANALYTICS"
        title={
          <>
            Technical signals from the{" "}
            <span className="text-holo">workshop floor</span>.
          </>
        }
        desc="A snapshot of the technologies I use to build full-stack applications, AI-powered systems, and production-ready products."
        accent="violet"
      />

      {/* Stats Cards */}
      <div className="grid gap-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass relative overflow-hidden rounded-2xl p-6"
          >
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl"
              style={{ background: s.color }}
            />

            <s.icon
              className="h-5 w-5"
              style={{ color: s.color }}
            />

            <div className="mt-4 font-display text-3xl font-semibold">
              {s.value}
            </div>

            <div className="mt-1 text-xs text-muted-foreground">
              {s.label}
            </div>

            <div
              className="mt-3 font-mono text-[10px] uppercase tracking-wider"
              style={{ color: s.color }}
            >
              {s.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Arsenal */}
      <div className="mt-8 glass rounded-2xl p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold">
              Technical Arsenal
            </h3>

            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Current proficiency matrix
            </p>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Full Stack · AI · Systems
          </div>
        </div>

        <div className="mt-7 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {SKILLS.map((s, i) => (
            <div key={s.name}>
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">
                  {s.name}
                </span>

                <span
                  className="font-mono text-[11px]"
                  style={{ color: "var(--neon-violet)" }}
                >
                  {s.v}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.v}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))",
                    boxShadow: "0 0 12px var(--neon-violet)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}