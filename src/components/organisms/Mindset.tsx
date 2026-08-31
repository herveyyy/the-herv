import { Shield, Zap, Users } from "lucide-react";
import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";

export function Mindset() {
  return (
    <section id="mindset" className="space-y-8 py-6">
      <SectionTitle subtitle="Principled software engineering for production systems—balancing strict type safety, high-concurrency throughput, and intelligent AI automation.">
        Engineering Philosophy
      </SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DATA.mindset.map((item: any, idx: number) => (
          <BlurFade key={item.title} delay={idx * 0.1} yOffset={8}>
            <div className="group flex flex-col justify-between h-full p-6 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.07] transition-all duration-300 space-y-5">
              
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform duration-300 shrink-0">
                  {item.icon === "Shield" && <Shield size={20} className="text-amber-500" />}
                  {item.icon === "Zap" && <Zap size={20} className="text-emerald-500" />}
                  {item.icon === "Users" && <Users size={20} className="text-blue-500" />}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-foreground/10 text-[11px] font-mono font-semibold text-zinc-500">
                0{idx + 1} / PRINCIPLE
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
