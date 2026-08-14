import { DATA } from "../../constants";
import { ProjectCard } from "../molecules/ProjectCard";
import { SectionTitle } from "../atoms/SectionTitle";
import { BlurFade } from "../atoms/BlurFade";

function byYearAsc<T extends { dates: string }>(a: T, b: T) {
  return Number(a.dates) - Number(b.dates);
}

export function ProjectsGrid() {
  const work = [...DATA.projects.work].sort(byYearAsc);
  const personal = [...DATA.projects.personal].sort(byYearAsc);

  return (
    <div id="projects" className="space-y-24">
      <section className="space-y-12">
        <SectionTitle subtitle="Production systems built for schools, platforms, and internal tooling—LMS, AI assistants, MCPs, and ops dashboards.">
          Enterprise Grade Applications
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {work.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <SectionTitle subtitle="Personal builds, experiments, and side apps—from study tools to shop systems and open templates.">
          Projects
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {personal.map((project, idx) => (
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
            <a
              href={DATA.contact.social.GitHub.url}
              className="text-foreground font-bold hover:underline"
            >
              GitHub
            </a>
          </p>
        </BlurFade>
      </section>
    </div>
  );
}
