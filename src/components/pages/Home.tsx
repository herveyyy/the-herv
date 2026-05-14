import { Hero } from "../organisms/Hero";
import { Mindset } from "../organisms/Mindset";
import { StackSteps } from "../organisms/StackSteps";
import { ProjectsGrid } from "../organisms/ProjectsGrid";
import { ValueMetrics } from "../organisms/ValueMetrics";
import { StackComparison } from "../organisms/StackComparison";
import { Experience } from "../organisms/Experience";
import { Contact } from "../organisms/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <Mindset />
      <StackSteps />
      <StackComparison />
      <ProjectsGrid />
      <Experience />
      <ValueMetrics />
      <Contact />
    </>
  );
}
