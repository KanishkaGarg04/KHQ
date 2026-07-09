import { motion } from 'framer-motion';
import { Terminal, Trophy, Zap, Users } from 'lucide-react';

const navItems = [
  { id: 'projects', label: 'PROJECTS LAB', icon: Terminal },
  { id: 'analytics', label: 'CODING ANALYTICS', icon: Trophy },
  { id: 'skills', label: 'SKILLS MATRIX', icon: Zap },
  { id: 'timeline', label: 'EXPEDITION LOG', icon: Users },
];

export default function Navbar({ activeModule, setActiveModule }: any) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold">KG</div>
          <div>
            <div className="font-mono text-xl tracking-tighter">KANISHKA LABS HQ</div>
            <div className="text-[10px] text-cyan-400 -mt-1">V1.0 • INNOVATION FACILITY</div>
          </div>
        </div>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`flex items-center gap-2 text-sm uppercase tracking-widest transition-all ${
                activeModule === item.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon size={18} />
              {item.label}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium"
          onClick={() => setActiveModule('contact')}
        >
          INITIATE CONTACT
        </motion.button>
      </div>
    </nav>
  );
}