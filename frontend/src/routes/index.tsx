import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/lab/Hero";
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
          "The live headquarters of Kanishka Garg — projects shipped, hackathons fought, badges earned, failures archived.",
      },
      {
        property: "og:title",
        content: "Kanishka Labs — Engineering HQ",
      },
      {
        property: "og:description",
        content:
          "Tour the lab: mission dashboard, project chambers, skills network, founder log, failure archive.",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main className="dark relative">
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