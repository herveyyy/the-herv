import { DATA } from "../../constants";
import { ExperienceItem } from "../molecules/ExperienceItem";
import { SectionTitle } from "../atoms/SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-4">
        {DATA.work.map((job, idx) => (
          <ExperienceItem
            key={job.company + idx}
            company={job.company}
            start={job.start}
            end={job.end}
            title={job.title}
            description={job.description}
            delay={idx * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
