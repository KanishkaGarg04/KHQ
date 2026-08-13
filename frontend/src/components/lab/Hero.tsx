import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FlaskConical,
  BarChart3,
  Trophy,
  Network,
  Radio,
  ScrollText,
  Target,
  Code2,
  GitCommit,
  Send,
  Phone,
} from "lucide-react";
import { Particles } from "./Particles";

const NAV = [
  { id: "lab-status", label: "Status" },
  { id: "projects", label: "Projects" },
  { id: "analytics", label: "Telemetry" },
  { id: "skills", label: "Skill Matrix" },
  { id: "achievements", label: "Badges" },
  { id: "founder-log", label: "Log" },
  { id: "failures", label: "Failures" },
];

const METRICS = [
  {
    label: "Projects Built",
    value: 4,
    icon: FlaskConical,
    color: "var(--neon-cyan)",
  },
  {
    label: "Coding Problems solved by EOY",
    value: 100,
    icon: Code2,
    color: "var(--neon-violet)",
  },
  {
    label: "Hackathon Finals",
    value: 3,
    icon: Trophy,
    color: "var(--neon-magenta)",
  },
  {
    label: "Major AI Projects",
    value: 3,
    icon: GitCommit,
    color: "var(--neon-cyan)",
  },
  {
    label: "Internship Applications",
    value: 50,
    icon: Send,
    color: "var(--neon-violet)",
  },
  {
    label: "Interview Rounds",
    value: 8,
    icon: Phone,
    color: "var(--neon-magenta)",
  },
];

function useCount(target: number, dur = 1400) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);

      setN(Math.round(target * eased));

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [target, dur]);

  return n;
}

function MetricCard({
  m,
  i,
}: {
  m: (typeof METRICS)[number];
  i: number;
}) {
  const n = useCount(m.value);
  const Icon = m.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
      className="glass relative overflow-hidden rounded-xl p-4"
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-30 blur-2xl"
        style={{ background: m.color }}
      />

      <div className="flex items-center justify-between">
        <Icon className="h-4 w-4" style={{ color: m.color }} />

        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse-glow"
          style={{
            background: m.color,
            boxShadow: `0 0 8px ${m.color}`,
          }}
        />
      </div>

      <div className="mt-3 font-display text-2xl font-semibold tabular-nums">
        {n.toLocaleString()}
      </div>

      <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        {m.label}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const wrap = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    stiffness: 60,
    damping: 18,
  });

  const sy = useSpring(my, {
    stiffness: 60,
    damping: 18,
  });

  const tx = useTransform(sx, [-1, 1], [-10, 10]);
  const ty = useTransform(sy, [-1, 1], [-10, 10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = wrap.current?.getBoundingClientRect();

      if (!r) return;

      mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
      my.set(((e.clientY - r.top) / r.height) * 2 - 1);
    };

    window.addEventListener("mousemove", onMove);

    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const scrollTo = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      ref={wrap}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 grid-bg opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 85%)",
        }}
      />

      <div className="absolute inset-0 scanlines opacity-30" />

      <Particles />

      {/* Top nav */}
      <header className="relative z-30 flex items-center justify-between px-6 pt-6 md:px-12">
        <div className="flex items-center gap-2 font-display text-sm">
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_var(--neon-cyan)] animate-pulse-glow" />

          <span className="font-mono uppercase tracking-[0.2em] text-muted-foreground">
            KAN/LABS · HEADQUARTERS
          </span>
        </div>

        <nav className="hidden gap-5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground lg:flex">
          {NAV.map((m) => (
            <button
              key={m.id}
              onClick={() => scrollTo(m.id)}
              className="transition-colors hover:text-foreground"
            >
              {m.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("contact")}
          className="glass rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground transition hover:glow-cyan"
        >
          Initiate Contact
        </button>
      </header>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pt-20">
        {/* Left — identity + mission */}
        <motion.div
          style={{ x: tx, y: ty }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow shadow-[0_0_8px_var(--neon-cyan)]" />
            Subject 01 · Online
          </div>

          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            KANISHKA <span className="text-holo">GARG</span>
          </h1>

          <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Software Engineer in Training
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <Target className="h-3 w-3 text-cyan" />
                Current Mission
              </div>

              <div className="mt-2 font-display text-base font-semibold">
                Secure an <span className="text-holo">SDE Internship</span>
              </div>

              <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 1.4, delay: 0.3 }}
                  className="h-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--neon-cyan), var(--neon-violet))",
                  }}
                />
              </div>

              <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                phase · Internship Hunt
              </div>
            </div>

            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <Radio className="h-3 w-3 text-magenta" />
                lab status
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-70" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-magenta shadow-[0_0_10px_var(--neon-magenta)]" />
                </span>

                <span className="font-display text-base font-semibold tracking-wide">
                  ACTIVE
                </span>
              </div>

              <div className="mt-2 font-mono text-[10px] text-muted-foreground">
                Bhopal, IN · Open to relocate · Year '26
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="glass rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition hover:glow-cyan"
            >
              Tour the Lab
            </button>

            <button
              onClick={() => scrollTo("founder-log")}
              className="rounded-full border border-border px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-muted-foreground transition hover:border-violet/60 hover:text-foreground"
            >
              <ScrollText className="mr-2 inline h-3 w-3" />
              Read Founder Log
            </button>
          </div>
        </motion.div>

        {/* Right — radar + mission dashboard */}
        <div className="relative">
          {/* Radar */}
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="absolute inset-0 rounded-full border border-cyan/20" />
            <div className="absolute inset-[12%] rounded-full border border-cyan/15" />
            <div className="absolute inset-[28%] rounded-full border border-cyan/12" />
            <div className="absolute inset-[46%] rounded-full border border-violet/15" />

            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-cyan/10" />

            <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-cyan/10" />

            {/* Sweep */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, var(--neon-cyan) 30deg, transparent 60deg)",
                opacity: 0.18,
                animationDuration: "5s",
                maskImage:
                  "radial-gradient(circle, black 0%, black 70%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 0%, black 70%, transparent 72%)",
              }}
            />

            {/* Blips */}
            {[
              { x: 30, y: 38, c: "var(--neon-cyan)" },
              { x: 68, y: 30, c: "var(--neon-violet)" },
              { x: 58, y: 70, c: "var(--neon-magenta)" },
              { x: 22, y: 64, c: "var(--neon-cyan)" },
              { x: 78, y: 58, c: "var(--neon-violet)" },
            ].map((b, i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full"
                style={{
                  left: `${b.x}%`,
                  top: `${b.y}%`,
                  background: b.c,
                  boxShadow: `0 0 10px ${b.c}`,
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "var(--gradient-holo)",
                  boxShadow: "var(--glow-cyan)",
                }}
              >
                <span className="font-display text-2xl font-bold text-background">
                  KG
                </span>
              </div>
            </div>
          </div>

          {/* Mission dashboard */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {METRICS.map((m, i) => (
              <MetricCard key={m.label} m={m} i={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom band */}
            {/* Bottom band */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-12 md:px-8">
        <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-2xl px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <BarChart3 className="h-3 w-3 text-cyan" /> Uptime · 24/7 · Coffee-powered
          </span>

          <span className="hidden md:inline">
            Last commit · 2h ago · feat(hero): live mission dashboard
          </span>

          <span className="flex items-center gap-2">
            <Network className="h-3 w-3 text-violet" /> Scroll to enter facility
          </span>
        </div>
      </div>

      {/* Facility Introduction */}
      {/* Facility Introduction */}
<div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-8 text-center md:px-8">
  <p className="mx-auto max-w-2xl font-display text-sm leading-relaxed text-muted-foreground md:text-base">
    Welcome to{" "}
    <span className="text-holo">Kanishka Labs</span>
    {" "}— an innovation HQ where ideas are prototyped, tested, and shipped.
    Explore the modules above.
  </p>

  <div className="mt-8 flex items-center justify-center gap-4 font-mono text-[9px] uppercase tracking-[0.45em] text-muted-foreground">
    <span className="h-px w-16 bg-border/70" />
    <span>Scroll to enter facility</span>
    <span className="h-px w-16 bg-border/70" />
  </div>
</div>
    </section>
  );
}