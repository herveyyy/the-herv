import { DATA } from "../../constants";
import { ProjectCard } from "../molecules/ProjectCard";
import { SectionTitle } from "../atoms/SectionTitle";
import { BlurFade } from "../atoms/BlurFade";

export function ProjectsGrid() {
  const allProjects = [...DATA.projects.work, ...DATA.projects.personal];
  
  return (
    <div className="space-y-24">
      <section id="projects" className="space-y-12">
        <SectionTitle subtitle="Selected projects that showcase my focus on scalability, AI integration, and performance-driven engineering.">
          Featured Architectures
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {allProjects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={idx * 0.05}
            />
          ))}
        </div>
        
        <BlurFade delay={0.4} className="text-center pt-8">
          <p className="text-zinc-500 text-sm">
            View more on my full portfolio or explore source code on{" "}
            <a href={DATA.contact.social.GitHub.url} className="text-foreground font-bold hover:underline">GitHub</a>
          </p>
        </BlurFade>
      </section>
    </div>
  );
}
