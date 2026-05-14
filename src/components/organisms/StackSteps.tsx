import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function StackSteps() {
  return (
    <section id="stack" className="space-y-16 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <SectionTitle subtitle="Every system I build follows a rigid three-tier architecture to ensure maximum reliability and speed.">
          The System Blueprint
        </SectionTitle>
        <BlurFade delay={0.2}>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-mono text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Optimized for Production
          </div>
        </BlurFade>
      </div>
      
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Connecting lines for desktop */}
        <div className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent -translate-y-1/2 -z-10" />

        {DATA.stackSteps.map((item: any, idx: number) => (
          <BlurFade key={item.step} delay={idx * 0.2} yOffset={20}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative group flex flex-col items-center"
            >
              {/* Step indicator */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-foreground/10 rounded-full text-[10px] font-bold tracking-widest text-zinc-400 group-hover:text-foreground group-hover:border-foreground/30 transition-colors z-10">
                STEP {item.step}
              </div>

              <div className="w-full relative p-10 rounded-[2.5rem] bg-foreground/5 border border-foreground/10 flex flex-col items-center text-center space-y-6 group-hover:bg-foreground/[0.08] group-hover:border-foreground/20 transition-all duration-500">
                {/* Icon with orbital effect */}
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border border-dashed border-foreground/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                    {item.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-center gap-2">
                    {item.description}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </p>
                </div>

                {/* Technical badge */}
                <div className="pt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-2 py-1 rounded bg-foreground/5 text-[10px] font-mono text-zinc-400">
                    LATENCY: &lt;50ms
                  </span>
                </div>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
