import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="uppercase tracking-[4px] text-cyan-400 text-sm mb-3">CHANNEL://KANISHKA.LABS • ENCRYPTED</div>
          <h2 className="text-6xl font-bold mb-4">
            Open a secure channel.
          </h2>
          <p className="text-xl text-gray-400">
            Want to collaborate, hire, or just talk shop? Transmit a signal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-950 border border-cyan-500/30 rounded-3xl p-10 font-mono"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs text-gray-500 mb-2">// SENDER</label>
              <input
                type="text"
                placeholder="your name"
                className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-400 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">// REPLY ADDRESS</label>
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-400 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">// TRANSMISSION</label>
              <textarea
                rows={6}
                placeholder="Begin signal..."
                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-400 transition-colors resize-y"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-medium text-lg rounded-2xl flex items-center justify-center gap-3 hover:brightness-110 transition-all"
            >
              <Send size={22} />
              TRANSMIT SIGNAL
            </motion.button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center text-emerald-400 font-medium"
            >
              SIGNAL TRANSMITTED SUCCESSFULLY ✓
            </motion.div>
          )}
        </motion.div>

        <div className="text-center text-xs text-gray-600 mt-8">
          UTF-8 • 256-bit • END-TO-END ENCRYPTED
        </div>
      </div>
    </div>
  );
}