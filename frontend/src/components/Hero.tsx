import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero({ setActiveModule }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Radar Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.width = 520;
    canvas.height = 520;

    let angle = 0;
    let pulse = 0;

    const drawRadar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Background circles
      for (let i = 1; i <= 6; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, i * 42, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 245, 255, ${0.08 + i * 0.03})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Pulsing outer ring
      pulse += 0.02;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 240 + Math.sin(pulse) * 8, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 245, 255, 0.15)`;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Scanning line
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      
      // Main scan line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -245);
      ctx.strokeStyle = '#67e8f9';
      ctx.lineWidth = 4;
      ctx.shadowBlur = 25;
      ctx.shadowColor = '#67e8f9';
      ctx.stroke();

      // Glow trail
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -180);
      ctx.strokeStyle = 'rgba(103, 232, 249, 0.4)';
      ctx.lineWidth = 12;
      ctx.stroke();

      ctx.restore();

      angle += 0.025;
      requestAnimationFrame(drawRadar);
    };

    drawRadar();
  }, []);

  // Floating Particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 35; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60';
      
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `float ${8 + Math.random() * 12}s linear infinite`;
      particle.style.animationDelay = `-${Math.random() * 15}s`;

      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 bg-black/70 border border-cyan-400/30 rounded-full mb-8"
        >
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          <span className="uppercase tracking-widest text-sm text-cyan-400">SUBJECT 01 • ONLINE</span>
        </motion.div>

        <h1 className="text-7xl md:text-[5.5rem] font-bold tracking-[-3px] leading-none mb-6">
          KANISHKA <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">GARG</span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-400 mb-12">Software Engineer in Training</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveModule('projects')}
            className="px-10 py-4 bg-white text-black rounded-2xl font-semibold text-lg"
          >
            TOUR THE LAB
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveModule('timeline')}
            className="px-10 py-4 border border-white/30 hover:border-white/60 rounded-2xl font-medium text-lg transition-colors"
          >
            READ FOUNDER LOG
          </motion.button>
        </div>
      </div>

      {/* Radar Container */}
      <div className="absolute right-8 bottom-12 hidden xl:block">
        <div className="relative">
          <canvas 
            ref={canvasRef} 
            className="w-[520px] h-[520px]"
          />
          
          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 via-cyan-400 to-pink-500 flex items-center justify-center shadow-[0_0_60px_-10px] shadow-cyan-400">
            <div className="text-5xl font-black text-black tracking-tighter">KG</div>
          </div>
        </div>
      </div>

      {/* Floating Particles Container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Add this to your global CSS (index.css or App.css) */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}