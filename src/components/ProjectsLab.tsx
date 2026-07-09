import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const specimens = [
  {
    id: 1,
    title: "NeuroSync",
    category: "AI / PRODUCTIVITY",
    description: "An adaptive meeting assistant that transcribes, summarizes and routes action items to the right tools in real-time.",
    gradient: "from-cyan-500 to-blue-600",
    status: "ACTIVE"
  },
  {
    id: 2,
    title: "Slingshot Orbit",
    category: "HARDWARE / ML",
    description: "AMD Slingshot finalist — an edge-ML pipeline that detects manufacturing defects on Ryzen NPUs at 60fps.",
    gradient: "from-purple-500 to-pink-600",
    status: "FINALIST"
  }
];

export default function ProjectsLab() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="uppercase tracking-[4px] text-cyan-400 text-sm mb-3">MODULE 01 • PROJECTS LAB</div>
          <h2 className="text-6xl font-bold leading-none mb-4">
            Experimental prototypes,<br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">in active testing.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Each chamber houses a project currently running in production or under iteration.
          </p>
        </motion.div>

        {/* Specimens Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {specimens.map((specimen, index) => (
            <motion.div
              key={specimen.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group relative bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden h-full flex flex-col"
            >
              {/* Top Glow Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${specimen.gradient}`} />

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{specimen.category}</div>
                    <h3 className="text-4xl font-bold">{specimen.title}</h3>
                  </div>
                  <div className="px-4 py-1.5 text-xs font-mono border border-emerald-500/30 text-emerald-400 rounded-full">
                    {specimen.status}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed flex-1">
                  {specimen.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center gap-3 transition-all"
                  >
                    <ExternalLink size={20} />
                    DEPLOYED INSTANCE
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center gap-3"
                  >
                    <Github size={20} />
                    VIEW SOURCE
                  </motion.button>
                </div>
              </div>

              {/* Bottom Scan Line Effect */}
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          Scroll to explore more chambers →
        </div>
      </div>
    </div>
  );
}