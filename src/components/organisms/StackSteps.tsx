import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { Badge } from "../atoms/Badge";
import { Layers, Server, Database, ArrowDown, CheckCircle2 } from "lucide-react";

export function StackSteps() {
  const layerBadges = [
    ["Next.js (App Router/SSR)", "React 19", "Vue 3", "Tailwind CSS", "shadcn/ui"],
    ["NestJS Microservices", "Frappe Framework v15", "ERPNext APIs", "REST Services", "Bun.js"],
    ["PostgreSQL", "MySQL Engine", "Drizzle ORM", "Custom MCP Servers", "Permission-Gated RAG"],
  ];

  return (
    <section id="stack" className="space-y-8 py-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="max-w-xl">
          <SectionTitle subtitle="Decoupled 3-tier system architecture designed for clean separation of concerns, high throughput, and seamless MCP AI integration.">
            Enterprise System Architecture
          </SectionTitle>
        </div>
        
        <BlurFade delay={0.2} className="shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 whitespace-nowrap shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>3-Tier Production Stack</span>
          </div>
        </BlurFade>
      </div>
      
      {/* Row-by-Row Architecture Stack */}
      <div className="space-y-4">
        {DATA.stackSteps.map((item: any, idx: number) => {
          const isLast = idx === DATA.stackSteps.length - 1;
          const techList = layerBadges[idx] || [];

          return (
            <div key={item.step} className="space-y-4">
              <BlurFade delay={idx * 0.1} yOffset={8}>
                <div className="group relative w-full p-6 sm:p-7 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.07] transition-all duration-300 shadow-md">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    {/* Left: Layer Pill + Icon + Tier Name */}
                    <div className="flex items-start sm:items-center gap-4 min-w-[280px]">
                      <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform duration-300 shrink-0">
                        {idx === 0 && <Layers size={24} className="text-blue-500" />}
                        {idx === 1 && <Server size={24} className="text-amber-500" />}
                        {idx === 2 && <Database size={24} className="text-emerald-500" />}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-background border border-foreground/10 rounded-full text-[10px] font-mono font-bold tracking-wider text-foreground whitespace-nowrap shrink-0">
                            LAYER {item.step}
                          </span>
                          <span className="text-[11px] font-mono font-semibold text-zinc-500 whitespace-nowrap">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Middle: Technology Stack Badges */}
                    <div className="flex-1 flex flex-wrap gap-1.5 items-center">
                      {techList.map((tech) => (
                        <Badge key={tech} className="text-xs px-3 py-1 font-mono font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Right: Status Indicator */}
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 shrink-0 whitespace-nowrap pt-2 lg:pt-0 border-t lg:border-t-0 border-foreground/10">
                      <CheckCircle2 size={15} className="shrink-0" />
                      <span>Type-Safe & High Throughput</span>
                    </div>

                  </div>
                </div>
              </BlurFade>

              {/* Data Flow Connector Arrow between rows */}
              {!isLast && (
                <div className="flex justify-center py-1">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                    <ArrowDown size={12} className="animate-bounce" />
                    <span>Data & API Pipeline Flow</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
