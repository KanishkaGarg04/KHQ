import { useState } from "react";
import { motion } from "framer-motion";
import { FileWarning, Lock, Unlock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FILES = [
  {
    id: "ICPC-081",
    title: "ICPC Algo Queen — Mission Incomplete",
    cat: "Competition",
    severity: "med",
    summary:
      "Scored 81% in the assessment but narrowly missed qualification for the next round.",
    lesson:
      "Talent gets you into the arena. Consistency gets you through it. That result became the turning point for taking DSA seriously, solving problems every week, and treating competitive programming as a long-term skill instead of a contest-day sprint.",
  },
  {
    id: "GRID-800",
    title: "Flipkart GRID 8.0 — Resume Rejected",
    cat: "Application",
    severity: "high",
    summary:
      "Qualified for GRID 7.0 previously, but didn't clear the resume screening for GRID 8.0.",
    lesson:
      "Previous success doesn't guarantee the next checkpoint. Every application starts at zero. Since then, I've focused on building stronger projects, quantifying impact, improving my resume, and creating a portfolio that demonstrates my work instead of merely describing it.",
  },
  {
    id: "INT-404",
    title: "Internship Hunt — Access Denied",
    cat: "Career",
    severity: "low",
    summary:
      "Reached interview and assessment rounds multiple times but couldn't convert them into an internship offer.",
    lesson:
      "Every interview exposed another weak spot—DSA, communication, project depth, or fundamentals. Instead of counting rejections, I started treating each one as debugging information. This headquarters exists because of those iterations.",
  },
];

const SEV: Record<string, { c: string; label: string }> = {
  low: { c: "var(--neon-cyan)", label: "MINOR" },
  med: { c: "var(--neon-violet)", label: "NOTABLE" },
  high: { c: "var(--neon-magenta)", label: "CRITICAL" },
};

export function FailureArchive() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="failures" className="relative px-6 py-32 md:px-12">
      <SectionHeader
        code="MODULE 07 · FAILURE ARCHIVE · CLASSIFIED"
        title={<>The files I keep <span className="text-holo">on purpose</span>.</>}
        desc="Every mission doesn't end in success. These declassified reports document the setbacks that shaped how I learn, build, and improve."
        accent="magenta"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {FILES.map((f, i) => {
          const sev = SEV[f.severity];
          const isOpen = open === f.id;
          return (
            <motion.button
              key={f.id}
              onClick={() => setOpen(isOpen ? null : f.id)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 text-left"
              style={{ borderColor: isOpen ? `${sev.c}80` : undefined }}
            >
              {/* Confidential watermark */}
              <div
                className="pointer-events-none absolute -right-6 top-3 rotate-12 font-mono text-[9px] uppercase tracking-[0.3em] opacity-30"
                style={{ color: sev.c }}
              >
                ▰ CLASSIFIED ▰
              </div>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <FileWarning className="h-3.5 w-3.5" style={{ color: sev.c }} />
                  FILE · {f.id}
                </div>
                {isOpen ? (
                  <Unlock className="h-3.5 w-3.5" style={{ color: sev.c }} />
                ) : (
                  <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span
                  className="rounded-sm border px-1.5 py-px font-mono text-[9px] uppercase tracking-wider"
                  style={{ borderColor: `${sev.c}60`, color: sev.c }}
                >
                  {sev.label}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {f.cat}
                </span>
              </div>

              <h3 className="mt-2 font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.summary}</p>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="mt-4 border-t border-border pt-3">
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em]" style={{ color: sev.c }}>
                    ▸ Lesson Logged
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/90">{f.lesson}</p>
                </div>
              </motion.div>

              {!isOpen && (
                <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground transition group-hover:text-foreground">
                  ▸ tap to declassify
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
