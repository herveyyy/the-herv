import { DATA } from "../../constants";
import { ExperienceItem } from "../molecules/ExperienceItem";
import { SectionTitle } from "../atoms/SectionTitle";
import { BlurFade } from "../atoms/BlurFade";
import { ExternalLink, Award } from "lucide-react";

export function Experience() {
  return (
    <div id="experience" className="space-y-12 py-4">
      {/* Work Experience Section */}
      <section className="space-y-8">
        <SectionTitle subtitle="Professional engineering roles in enterprise institutional software, R&D, and web development.">
          Work Experience
        </SectionTitle>
        <div className="space-y-6">
          {DATA.work.map((job, idx) => (
            <ExperienceItem
              key={job.company + idx}
              company={job.company}
              href={job.href}
              badges={job.badges}
              location={job.location}
              start={job.start}
              end={job.end}
              title={job.title}
              description={job.description}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </section>

      {/* Certifications & Education Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-foreground/10">
        {/* Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-base font-bold tracking-tight">
            <Award size={18} className="text-amber-500" />
            <span>Certifications & Credentials</span>
          </div>
          <ul className="space-y-2.5">
            {DATA.certifications.map((cert, idx) => (
              <BlurFade key={cert.href} delay={idx * 0.03}>
                <li>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 text-xs sm:text-sm p-2.5 rounded-xl hover:bg-foreground/5 transition-colors border border-transparent hover:border-foreground/10"
                  >
                    <span>
                      <span className="font-semibold text-foreground group-hover:underline underline-offset-4">
                        {cert.title}
                      </span>
                      <span className="text-zinc-500 font-medium"> — {cert.issuer}</span>
                    </span>
                    <ExternalLink
                      size={13}
                      className="shrink-0 text-zinc-400 group-hover:text-foreground transition-colors"
                    />
                  </a>
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-base font-bold tracking-tight">
            <Award size={18} className="text-blue-500" />
            <span>Educational Background</span>
          </div>
          <div className="space-y-4">
            {DATA.education.map((edu, idx) => (
              <BlurFade key={edu.school} delay={idx * 0.05}>
                <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/10 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-sm text-foreground">
                      {edu.school}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      {edu.start} — {edu.end}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-zinc-400">
                    {edu.degree}
                  </p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-1 pt-1 border-t border-foreground/5 text-xs text-zinc-500">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
