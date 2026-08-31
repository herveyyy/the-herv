import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { Code2, Zap, Layers } from "lucide-react";

export function ValueMetrics() {
  return (
    <section id="value" className="space-y-10 py-6">
      <SectionTitle subtitle="Proven track record architecting high-throughput institutional software, custom MCP servers, and data-intensive web architectures.">
        Engineering Impact & Performance
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {DATA.valueMetrics.map((item: any, idx: number) => (
          <BlurFade key={item.label} delay={idx * 0.1} yOffset={20}>
            <div className="group h-full p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.07] transition-all flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-foreground transition-colors">
                {idx === 0 && <Code2 size={24} className="text-amber-500" />}
                {idx === 1 && <Zap size={24} className="text-emerald-500" />}
                {idx === 2 && <Layers size={24} className="text-blue-500" />}
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-zinc-500">
                  METRIC 0{idx + 1}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground">
                  {item.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  {item.label}
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
