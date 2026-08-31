import { Hero } from "../organisms/Hero";
import { Experience } from "../organisms/Experience";
import { ProjectsGrid } from "../organisms/ProjectsGrid";
import { Skills } from "../organisms/Skills";
import { StackSteps } from "../organisms/StackSteps";
import { Mindset } from "../organisms/Mindset";
import { StackComparison } from "../organisms/StackComparison";
import { ValueMetrics } from "../organisms/ValueMetrics";
import { Contact } from "../organisms/Contact";

export function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <Hero />
      <Experience />
      <ProjectsGrid />
      <Skills />
      <StackSteps />
      <Mindset />
      <StackComparison />
      <ValueMetrics />
      <Contact />
    </div>
  );
}
