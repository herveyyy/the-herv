import { Shield, Zap, Users } from "lucide-react";
import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { motion } from "motion/react";

export function Mindset() {
  return (
    <section id="mindset" className="space-y-10 py-6">
      <SectionTitle subtitle="Principled software engineering for production systems—balancing strict type safety, high-concurrency throughput, and intelligent AI automation.">
        Engineering Philosophy
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {DATA.mindset.map((item: any, idx: number) => (
          <BlurFade key={item.title} delay={idx * 0.15} yOffset={20}>
            <motion.div 
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-full flex flex-col justify-between space-y-4 p-7 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.07] transition-all group overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-foreground/5 rounded-full blur-3xl group-hover:bg-foreground/10 transition-colors pointer-events-none" />
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-md">
                  {item.icon === "Shield" && <Shield size={24} className="group-hover:rotate-12 transition-transform" />}
                  {item.icon === "Zap" && <Zap size={24} className="group-hover:scale-110 transition-transform" />}
                  {item.icon === "Users" && <Users size={24} className="group-hover:-translate-y-0.5 transition-transform" />}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 bg-foreground w-0 group-hover:w-full transition-all duration-500 mt-4" />
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
