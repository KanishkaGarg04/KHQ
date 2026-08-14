import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import { Hero } from "./components/lab/Hero";
import { BootScreen } from "./components/lab/BootScreen";
import { LabStatus } from "./components/lab/LabStatus";
import { ProjectsLab } from "./components/lab/ProjectsLab";
import { Analytics } from "./components/lab/Analytics";
import { SkillsMatrix } from "./components/lab/SkillsMatrix";
import { Achievements } from "./components/lab/Achievements";
import { FounderLog } from "./components/lab/FounderLog";
import { FailureArchive } from "./components/lab/FailureArchive";
import { Contact } from "./components/lab/Contact";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="dark relative">
      {!booted && (
        <BootScreen onDone={() => setBooted(true)} />
      )}

      <Hero />
      <LabStatus />
      <ProjectsLab />
      <Analytics />
      <SkillsMatrix />
      <Achievements />
      <FounderLog />
      <FailureArchive />
      <Contact />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);