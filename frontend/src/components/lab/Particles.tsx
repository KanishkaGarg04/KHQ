export function Particles({ count = 40 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 53) % 100;
        const delay = (i % 12) * 1.3;
        const dur = 12 + (i % 8) * 2.5;
        const size = 1 + (i % 3);
        const hue = i % 3 === 0 ? "var(--neon-cyan)" : i % 3 === 1 ? "var(--neon-violet)" : "var(--neon-magenta)";
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: hue,
              boxShadow: `0 0 ${size * 6}px ${hue}`,
              animation: `drift ${dur}s linear ${delay}s infinite`,
              opacity: 0.7,
            }}
          />
        );
      })}
    </div>
  );
}
