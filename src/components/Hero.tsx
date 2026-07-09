import { motion } from 'framer-motion';

export default function Hero({ setActiveModule }: any) {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#00f5ff10_0%,transparent_70%)]" />
      
      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-sm mb-6">
            KANISHA LABS HQ
          </div>
        </motion.div>

        <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-none">
          SUBJECT<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span><br />
          ACTIVE
        </h1>

        <p className="text-3xl text-gray-300 mb-8">Kanishka Garg</p>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Engineer • Builder • Researcher
        </p>

        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveModule('projects')}
            className="px-10 py-4 bg-white text-black font-medium rounded-xl flex items-center gap-3"
          >
            ENTER FACILITY
          </motion.button>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-12 text-center">
        <div>
          <div className="text-4xl font-mono text-cyan-400">28+</div>
          <div className="text-sm text-gray-500">PROJECTS</div>
        </div>
        <div>
          <div className="text-4xl font-mono text-purple-400">12</div>
          <div className="text-sm text-gray-500">HACK WINS</div>
        </div>
        <div>
          <div className="text-4xl font-mono text-pink-400">59K</div>
          <div className="text-sm text-gray-500">LINES OF CODE</div>
        </div>
      </div>
    </div>
  );
}