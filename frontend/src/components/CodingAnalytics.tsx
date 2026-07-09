import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Trophy, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

const skills = [
  { name: "Systems Engineering", level: 92, color: "from-cyan-400 to-blue-500" },
  { name: "Machine Learning", level: 86, color: "from-purple-400 to-pink-500" },
  { name: "Frontend / UX", level: 90, color: "from-emerald-400 to-cyan-500" },
];

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = count.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.floor(latest).toLocaleString();
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [end, count]);

  return <span ref={nodeRef} className="font-mono text-7xl">0</span>;
}

export default function CodingAnalytics() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <div className="uppercase tracking-[4px] text-purple-400 text-sm mb-3">MODULE 02 • CODING ANALYTICS</div>
          <h2 className="text-6xl font-bold leading-none mb-4">
            Live telemetry from the<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">workshop floor.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl">
            Continuous signals from competitive programming, open source contributions, and skill progression.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* LeetCode Card */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-cyan-500/20 rounded-3xl p-10 relative overflow-hidden h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Trophy className="text-black" size={28} />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-widest text-amber-400">GLOBAL RANKING</div>
                  <div className="text-2xl font-medium">LeetCode Rating</div>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <AnimatedCounter end={2148} />
                <span className="text-4xl text-gray-500">/ 3000</span>
              </div>

              <div className="text-emerald-400 font-medium flex items-center gap-2">
                <TrendingUp size={18} /> TOP 3%
              </div>

              {/* Animated Background Grid */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <div className="grid grid-cols-8 gap-1 p-8">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 50}ms` }} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skill Progression */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-950 border border-white/10 rounded-3xl p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-semibold">Skill progression</h3>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  LESS <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className={`w-2 h-3 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-sm`} />
                    ))}
                  </div> MORE
                </div>
              </div>

              {skills.map((skill, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex justify-between text-sm mb-3">
                    <span>{skill.name}</span>
                    <span className="font-mono text-cyan-400">{skill.level}</span>
                  </div>
                  <div className="h-2.5 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}