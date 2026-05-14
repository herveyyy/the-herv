import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";

export function ValueMetrics() {
  return (
    <section id="value" className="space-y-12">
      <SectionTitle subtitle="I specialize in Web Application Systems because they offer long-term value that standard websites can't match.">
        Data-Driven Engineering
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {DATA.valueMetrics.map((item: any, idx: number) => (
          <BlurFade key={item.label} delay={idx * 0.1} yOffset={20}>
            <div className="text-center space-y-2">
              <div className="text-5xl font-black tracking-tighter text-foreground group-hover:scale-110 transition-transform">
                {item.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                {item.label}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.4}>
        <div className="p-8 rounded-3xl bg-foreground text-background">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Ready to Build Your Next Digital System?</h3>
              <p className="text-background/80 text-sm leading-relaxed">
                I'm currently accepting new projects for 2026. Whether you need a simple automation or a complex enterprise system, let's talk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
              <a 
                href={`mailto:${DATA.contact.email}`}
                className="px-6 py-3 bg-background text-foreground font-bold rounded-xl text-center hover:scale-105 active:scale-95 transition-all"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
