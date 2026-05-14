import { DATA } from "../../constants";
import { Badge } from "../atoms/Badge";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <SectionTitle>Skills & Technologies</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((skill, idx) => (
          <BlurFade key={skill} delay={idx * 0.02} yOffset={5}>
            <Badge className="px-3 py-1.5 text-sm font-medium">
              {skill}
            </Badge>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
