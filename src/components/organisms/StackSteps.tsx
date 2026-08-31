import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { Layers, Server, Database, Check } from "lucide-react";

export function StackSteps() {
  return (
    <section id="stack" className="space-y-8 py-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <SectionTitle subtitle="Decoupled 3-tier system architecture designed for clean separation of concerns, high throughput, and seamless MCP AI integration.">
          Enterprise System Architecture
        </SectionTitle>
        <BlurFade delay={0.2}>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-mono text-zinc-500 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Production Architecture
          </div>
        </BlurFade>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DATA.stackSteps.map((item: any, idx: number) => (
          <BlurFade key={item.step} delay={idx * 0.1} yOffset={8}>
            <div className="group flex flex-col justify-between h-full p-6 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.07] transition-all duration-300 space-y-6">
              
              {/* Top Header Badge Row */}
              <div className="flex items-center justify-between gap-2 border-b border-foreground/10 pb-3">
                <span className="px-2.5 py-1 bg-background border border-foreground/10 rounded-full text-[10px] font-mono font-bold tracking-wider text-foreground shrink-0 whitespace-nowrap">
                  LAYER {item.step}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 font-semibold truncate text-right">
                  {item.tag || "Production Core"}
                </span>
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                {idx === 0 && <Layers size={22} className="text-blue-500" />}
                {idx === 1 && <Server size={22} className="text-amber-500" />}
                {idx === 2 && <Database size={22} className="text-emerald-500" />}
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-foreground/10 flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                <Check size={14} className="text-emerald-500 shrink-0" />
                <span>High-Performance & Type-Safe</span>
              </div>

            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
