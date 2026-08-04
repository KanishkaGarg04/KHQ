import { motion } from "framer-motion";
import { Trophy, Award, Code2, Rocket, Zap, GitBranch, Sparkles, Flame } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const BADGES = [
  {
    icon: Trophy,
    title: "AMD Slingshot Finalist",
    sub: "Top 10 Finalist · AI Hackathon",
    rarity: "LEGENDARY",
    color: "var(--neon-magenta)",
    unlocked: true,
  },
  {
    icon: Award,
    title: "ET Gen AI Hackathon Semi-Finalist",
    sub: "Economics Times Gen AI Challenge",
    rarity: "EPIC",
    color: "var(--neon-violet)",
    unlocked: true,
  },
  {
    icon: Code2,
    title: "Hacksagon Finalist",
    sub: "ABV-IIITM Gwalior · 2100+ Participants",
    rarity: "EPIC",
    color: "var(--neon-cyan)",
    unlocked: true,
  },
  {
    icon: Rocket,
    title: "ICPC Algo Queen Rank 509",
    sub: "Global Competitive Programming Contest",
    rarity: "RARE",
    color: "var(--neon-cyan)",
    unlocked: true,
  },
  {
    icon: GitBranch,
    title: "NPTEL Elite Certification",
    sub: "Python for Data Science · 71%",
    rarity: "RARE",
    color: "var(--neon-violet)",
    unlocked: true,
  },
  {
    icon: Flame,
    title: "MERN Projects Deployed",
    sub: "Full-Stack AI Applications in Production",
    rarity: "RARE",
    color: "var(--neon-magenta)",
    unlocked: true,
  },
  {
    icon: Zap,
    title: "Open Source Contributor",
    sub: "Contributed to AI Infrastructure Projects",
    rarity: "RARE",
    color: "var(--neon-violet)",
    unlocked: true,
  },
  {
    icon: Sparkles,
    title: "Software Engineer Offer",
    sub: "Locked · Coming Soon",
    rarity: "MYTHIC",
    color: "var(--neon-cyan)",
    unlocked: false,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-32 md:px-12">
      <SectionHeader
        code="MODULE 04 · BADGES UNLOCKED"
        title={<>Achievements, <span className="text-holo">earned the hard way</span>.</>}
        desc="No participation trophies. Each badge marks a checkpoint that actually moved the needle."
        accent="magenta"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BADGES.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div
                className="glass relative overflow-hidden rounded-2xl p-5 text-center transition-all"
                style={{
                  borderColor: b.unlocked ? `${b.color}40` : undefined,
                  filter: b.unlocked ? undefined : "grayscale(0.9)",
                  opacity: b.unlocked ? 1 : 0.6,
                }}
              >
                
                {b.unlocked && (
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${b.color}30, transparent 70%)`,
                    }}
                  />
                )}

                
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-sm border px-1.5 py-px font-mono text-[8px] uppercase tracking-[0.2em]"
                    style={{ borderColor: `${b.color}60`, color: b.color }}
                  >
                    {b.rarity}
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">
                    {b.unlocked ? "✓ unlocked" : "● locked"}
                  </span>
                </div>

                
                <div className="relative mx-auto mt-4 h-20 w-20">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background: b.unlocked
                        ? `linear-gradient(135deg, ${b.color}, oklch(0.16 0.03 260))`
                        : "oklch(0.2 0.02 260)",
                      boxShadow: b.unlocked ? `0 0 0 1px ${b.color}40` : undefined,
                    }}
                  />
                  <div
                    className="absolute inset-[3px] flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background: "oklch(0.13 0.02 260)",
                    }}
                  >
                    <Icon
                      className="h-7 w-7 transition-all duration-500 group-hover:scale-110"
                      style={{
                        color: b.unlocked ? b.color : "oklch(0.4 0.02 260)",
                        filter: b.unlocked
                          ? `drop-shadow(0 0 6px ${b.color})`
                          : undefined,
                      }}
                    />
                  </div>
                 
                  {b.unlocked && (
                    <div
                      className="absolute -inset-2 rounded-full border opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        borderColor: `${b.color}30`,
                        animation: "spin-slow 8s linear infinite",
                      }}
                    />
                  )}
                </div>

                <h3 className="mt-4 font-display text-sm font-semibold leading-tight">{b.title}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {b.sub}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
