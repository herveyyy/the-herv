import { DATA } from "../../constants";
import { ExperienceItem } from "../molecules/ExperienceItem";
import { SectionTitle } from "../atoms/SectionTitle";
import { BlurFade } from "../atoms/BlurFade";
import { ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <>
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

      <section id="certifications" className="space-y-8">
        <SectionTitle>Certifications</SectionTitle>
        <ul className="space-y-3">
          {DATA.certifications.map((cert, idx) => (
            <BlurFade key={cert.href} delay={idx * 0.05}>
              <li>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 text-sm hover:text-foreground transition-colors"
                >
                  <span>
                    <span className="font-medium text-foreground/90 group-hover:underline underline-offset-4">
                      {cert.title}
                    </span>
                    <span className="text-zinc-500"> — {cert.issuer}</span>
                  </span>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </li>
            </BlurFade>
          ))}
        </ul>
      </section>
    </>
  );
}
