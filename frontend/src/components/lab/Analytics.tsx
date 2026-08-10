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
  { name: "Java & DSA", v: 88 },
  { name: "MongoDB / SQL", v: 84 },
  { name: "AI Integration", v: 86 },
];

// Pseudo contribution graph
const WEEKS = 26;
const DAYS = 7;

export function Analytics() {
  return (
    <section id="analytics" className="relative px-6 py-32 md:px-12">
      <SectionHeader
        code="MODULE 02 · CODING ANALYTICS"
        title={
          <>
            Live telemetry from the{" "}
            <span className="text-holo">workshop floor</span>.
          </>
        }
        desc="Continuous signals from my coding practice, hackathons, AI projects, and technical growth."
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

            <s.icon className="h-5 w-5" style={{ color: s.color }} />

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

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        {/* Contribution Heatmap */}
        <div className="glass rounded-2xl p-6 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold">
              Coding Activity
            </h3>

            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              developer activity map
            </div>
          </div>

          <div className="flex gap-[3px]">
            {Array.from({ length: WEEKS }).map((_, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {Array.from({ length: DAYS }).map((_, d) => {
                  const seed = (w * 7 + d) * 9301 + 49297;
                  const r = (seed % 233280) / 233280;

                  const level =
                    r < 0.35 ? 0 : r < 0.6 ? 1 : r < 0.8 ? 2 : r < 0.93 ? 3 : 4;

                  const opacity = [0.06, 0.25, 0.5, 0.75, 1][level];

                  return (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity }}
                      viewport={{ once: true }}
                      transition={{
                        delay: w * 0.01 + d * 0.005,
                      }}
                      className="h-3 w-3 rounded-[3px]"
                      style={{
                        background: "var(--neon-cyan)",
                        opacity,
                        boxShadow:
                          level > 2
                            ? "0 0 6px var(--neon-cyan)"
                            : "none",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            less
            {[0.1, 0.3, 0.6, 0.85, 1].map((o, i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-[2px]"
                style={{
                  background: "var(--neon-cyan)",
                  opacity: o,
                }}
              />
            ))}
            more
          </div>
        </div>

        {/* Skills */}
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-display text-lg font-semibold">
            Technical Arsenal
          </h3>

          <div className="mt-5 space-y-4">
            {SKILLS.map((s, i) => (
              <div key={s.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{s.name}</span>

                  <span
                    className="font-mono"
                    style={{ color: "var(--neon-violet)" }}
                  >
                    {s.v}
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.1,
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
      </div>
    </section>
  );
}