import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";

export function About() {
  return (
    <section className="space-y-4">
      <SectionTitle>About</SectionTitle>
      <BlurFade delay={0.1}>
        <p className="text-zinc-500 leading-relaxed text-balance">
          {DATA.summary}
        </p>
      </BlurFade>
    </section>
  );
}
