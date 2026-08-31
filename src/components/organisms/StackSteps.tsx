import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { Badge } from "../atoms/Badge";
import { Layers, Server, Database, ArrowDown, CheckCircle2 } from "lucide-react";

export function StackSteps() {
  const layerBadges = [
    ["Next.js", "React 19", "Vue 3", "Tailwind", "shadcn"],
    ["NestJS", "Frappe v15", "ERPNext APIs", "REST", "Bun.js"],
    ["PostgreSQL", "MySQL", "Drizzle ORM", "Custom MCP", "RAG"],
  ];

  return (
    <section id="stack" className="space-y-4 py-4">
      {/* Compact Header */}
      <SectionTitle subtitle="Decoupled 3-tier production architecture designed for high throughput, type safety, and custom MCP AI bindings.">
        Enterprise System Architecture
      </SectionTitle>
      
      {/* Ultra-Compact Architecture Rows */}
      <div className="space-y-2 pt-2">
        {DATA.stackSteps.map((item: any, idx: number) => {
          const isLast = idx === DATA.stackSteps.length - 1;
          const techList = layerBadges[idx] || [];

          return (
            <div key={item.step} className="space-y-2">
              <BlurFade delay={idx * 0.05} yOffset={5}>
                <div className="group w-full px-4 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.07] transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                  
                  {/* Left: Layer Badge + Icon + Title */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-8 h-8 rounded-xl bg-foreground/10 flex items-center justify-center shrink-0">
                      {idx === 0 && <Layers size={16} className="text-blue-500" />}
                      {idx === 1 && <Server size={16} className="text-amber-500" />}
                      {idx === 2 && <Database size={16} className="text-emerald-500" />}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-background border border-foreground/10 rounded-md text-[10px] font-mono font-bold text-foreground shrink-0 whitespace-nowrap">
                        L{item.step}
                      </span>
                      <h3 className="font-bold text-sm text-foreground whitespace-nowrap">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline-block">
                        ({item.tag})
                      </span>
                    </div>
                  </div>

                  {/* Middle: Badges */}
                  <div className="flex flex-wrap gap-1 items-center">
                    {techList.map((tech) => (
                      <Badge key={tech} className="text-[10px] px-2 py-0.5 font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Right: Status */}
                  <div className="flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 shrink-0 whitespace-nowrap">
                    <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
                    <span>Type-Safe & High-Throughput</span>
                  </div>

                </div>
              </BlurFade>

              {/* Minimal Connector */}
              {!isLast && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown size={12} className="text-zinc-500 animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
