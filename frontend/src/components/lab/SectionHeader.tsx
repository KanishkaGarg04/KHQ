import type { ReactNode } from "react";

export function SectionHeader({
  code,
  title,
  desc,
  accent = "cyan",
}: {
  code: string;
  title: ReactNode;
  desc?: string;
  accent?: "cyan" | "violet" | "magenta";
}) {
  const color = `var(--neon-${accent})`;
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color }}>
        <span className="h-px w-8" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
        {code}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">{title}</h2>
      {desc && <p className="mt-3 text-sm text-muted-foreground md:text-base">{desc}</p>}
    </div>
  );
}
