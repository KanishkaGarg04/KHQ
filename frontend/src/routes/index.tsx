import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Hero } from "@/components/lab/Hero";
import { BootScreen } from "@/components/lab/BootScreen";
import { LabStatus } from "@/components/lab/LabStatus";
import { ProjectsLab } from "@/components/lab/ProjectsLab";
import { Analytics } from "@/components/lab/Analytics";
import { SkillsMatrix } from "@/components/lab/SkillsMatrix";
import { Achievements } from "@/components/lab/Achievements";
import { FounderLog } from "@/components/lab/FounderLog";
import { FailureArchive } from "@/components/lab/FailureArchive";
import { Contact } from "@/components/lab/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kanishka Labs — HQ of a Software Engineer in Training",
      },
      {
        name: "description",
        content:
          "The live headquarters of Kanishka Garg — projects shipped, hackathons fought, badges earned, failures archived. Actively hunting an SDE internship.",
      },
      {
        property: "og:title",
        content: "Kanishka Labs — Engineering HQ",
      },
      {
        property: "og:description",
        content:
          "Tour the lab: mission dashboard, project chambers, founder log, failure archive.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

function Index() {
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