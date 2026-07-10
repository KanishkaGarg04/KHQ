import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsLab from './components/ProjectsLab';
import CodingAnalytics from './components/CodingAnalytics';
import SkillsMatrix from './components/SkillsMatrix';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  const [activeModule, setActiveModule] = useState('hero');

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <AnimatePresence mode="wait">
        {activeModule === 'hero' && <Hero setActiveModule={setActiveModule} />}
        {activeModule === 'projects' && <ProjectsLab />}
        {activeModule === 'analytics' && <CodingAnalytics />}
        {activeModule === 'skills' && <SkillsMatrix />}
        {activeModule === 'timeline' && <Timeline />}
        {activeModule === 'contact' && <Contact />}
      </AnimatePresence>
    </div>
  );
}

export default App;