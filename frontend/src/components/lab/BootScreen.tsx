import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINES = [
  "$ init kanishka-labs --env=production",
  "> booting neural core .............. OK",
  "> mounting /projects /skills /badges  OK",
  "> loading founder.log (48 entries) .. OK",
  "> decrypting failure.archive ........ OK",
  "> calibrating radar sweep ........... OK",
  "$ launch --hq",
];

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [typed, setTyped] = useState<string[]>([]);
  const [cur, setCur] = useState("");
  const [progress, setProgress] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let line = 0;
    let char = 0;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;
      if (line >= LINES.length) {
        setTimeout(() => {
          if (cancelled) return;
          setGone(true);
          setTimeout(onDone, 650);
        }, 420);
        return;
      }
      const text = LINES[line];
      char += 1;
      setCur(text.slice(0, char));
      setProgress(Math.round(((line + char / text.length) / LINES.length) * 100));
      if (char >= text.length) {
        setTyped((t) => [...t, text]);
        setCur("");
        line += 1;
        char = 0;
        setTimeout(step, 160);
      } else {
        setTimeout(step, 14);
      }
    };
    const id = setTimeout(step, 250);
    return () => {
      cancelled = true;
      clearTimeout(id);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-4"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 scanlines opacity-40" />

          <div className="relative w-full max-w-lg">
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--neon-cyan)] animate-pulse-glow" />
              Kanishka Labs · System Boot
            </div>

            <div className="glass-strong rounded-2xl p-4 sm:p-6">
              <div className="min-h-[168px] font-mono text-[11px] leading-relaxed text-muted-foreground sm:min-h-[190px] sm:text-xs">
                {typed.map((l) => (
                  <div key={l} className={l.startsWith("$") ? "text-cyan" : ""}>
                    {l}
                  </div>
                ))}
                {cur && (
                  <div className={cur.startsWith("$") ? "text-cyan" : ""}>
                    {cur}
                    <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[1px] bg-cyan animate-pulse-glow" />
                  </div>
                )}
              </div>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full transition-all duration-150"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-violet), var(--neon-magenta))",
                  }}
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>compiling experience</span>
                <span className="tabular-nums">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
