import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const milestones = [
  {
    year: "2025",
    title: "AMD Pervasive AI Slingshot — Finalist",
    description: "Top 1% of 14,000 global participants. Built an on-device defect detection pipeline.",
    icon: Award,
    color: "cyan"
  },
  {
    year: "2024",
    title: "Smart India Hackathon — Winner",
    description: "Built a multilingual disaster-response platform under 36 hours.",
    icon: Award,
    color: "purple"
  },
  {
    year: "2023",
    title: "First Open Source Contribution",
    description: "Merged PRs to PyTorch and Hugging Face ecosystem.",
    icon: Calendar,
    color: "emerald"
  },
  {
    year: "2019",
    title: "First line of code",
    description: "Wrote my first Python script — a Discord bot for a friend's server.",
    icon: Calendar,
    color: "amber"
  },
];

export default function Timeline() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16 text-center"
        >
          <div className="uppercase tracking-[4px] text-amber-400 text-sm mb-3">EXPEDITION LOG</div>
          <h2 className="text-6xl font-bold mb-6">
            The expedition log,<br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">in chronological order.</span>
          </h2>
        </motion.div>

        <div className="relative pl-8 border-l-2 border-white/10 ml-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="mb-16 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-black border-4 border-cyan-400 flex items-center justify-center">
                <milestone.icon className={`text-${milestone.color}-400`} size={18} />
              </div>

              <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-4xl text-cyan-400 font-bold">{milestone.year}</span>
                  <div className={`px-4 py-1 text-xs rounded-full bg-${milestone.color}-500/10 text-${milestone.color}-400`}>
                    MILESTONE
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}