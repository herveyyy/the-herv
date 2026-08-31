import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { motion } from "motion/react";
import { Layers, Server, Database } from "lucide-react";

export function StackSteps() {
  return (
    <section id="stack" className="space-y-12 py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <SectionTitle subtitle="Decoupled 3-tier system architecture designed for clean separation of concerns, high throughput, and seamless MCP AI integration.">
          Enterprise System Architecture
        </SectionTitle>
        <BlurFade delay={0.2}>
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-mono text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Production Architecture
          </div>
        </BlurFade>
      </div>
      
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6">
        {DATA.stackSteps.map((item: any, idx: number) => (
          <BlurFade key={item.step} delay={idx * 0.15} yOffset={20}>
            <motion.div 
              whileHover={{ y: -4 }}
              className="relative group flex flex-col h-full p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.07] transition-all duration-300 space-y-6"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-background border border-foreground/10 rounded-full text-[10px] font-bold tracking-widest font-mono text-zinc-400 group-hover:text-foreground transition-colors">
                  LAYER {item.step}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase font-semibold">
                  {item.tag || "Production Core"}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                {idx === 0 && <Layers size={28} className="text-blue-500" />}
                {idx === 1 && <Server size={28} className="text-amber-500" />}
                {idx === 2 && <Database size={28} className="text-emerald-500" />}
              </div>

              {/* Title & Tech Description */}
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="pt-3 border-t border-foreground/10">
                <span className="text-[11px] font-bold text-foreground/80 flex items-center gap-1.5">
                  ✓ High-Performance & Type-Safe
                </span>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
