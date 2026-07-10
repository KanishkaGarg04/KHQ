import { motion } from 'framer-motion';
import { useState } from 'react';

const technologies = [
  { name: "PyTorch", x: "35%", y: "25%", color: "bg-purple-500" },
  { name: "ONNX", x: "65%", y: "22%", color: "bg-pink-500" },
  { name: "Docker", x: "15%", y: "55%", color: "bg-cyan-500" },
  { name: "React", x: "28%", y: "65%", color: "bg-blue-500" },
  { name: "Node.js", x: "72%", y: "58%", color: "bg-emerald-500" },
  { name: "AWS", x: "80%", y: "45%", color: "bg-orange-500" },
];

export default function SkillsMatrix() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="uppercase tracking-[4px] text-pink-400 text-sm mb-3">MODULE 03 • SKILLS MATRIX</div>
          <h2 className="text-6xl font-bold leading-none mb-6">
            An interconnected<br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">technology network.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Hover a node to trace the related stack. Every tool below has shipped in a production system.
          </p>
        </motion.div>

        {/* Network Container */}
        <div className="relative h-[620px] bg-zinc-950/50 border border-white/10 rounded-3xl overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {technologies.map((tech, i) => 
              technologies.slice(i + 1).map((other, j) => (
                <motion.line
                  key={`${i}-${j}`}
                  x1={tech.x} 
                  y1={tech.y} 
                  x2={other.x} 
                  y2={other.y}
                  stroke={hoveredTech === tech.name || hoveredTech === other.name ? "#67e8f9" : "#ffffff15"}
                  strokeWidth="1.5"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              ))
            )}
          </svg>

          {/* Technology Nodes */}
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="absolute"
              style={{ left: tech.x, top: tech.y }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              <div className={`w-28 h-14 ${tech.color} rounded-2xl flex items-center justify-center text-black font-medium shadow-2xl shadow-black/80 cursor-pointer border border-white/20 hover:border-white/50 transition-all`}>
                {tech.name}
              </div>
            </motion.div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-8 left-8 bg-black/70 px-6 py-3 rounded-2xl text-sm border border-white/10">
            Hover nodes to highlight connections
          </div>
        </div>
      </div>
    </div>
  );
}