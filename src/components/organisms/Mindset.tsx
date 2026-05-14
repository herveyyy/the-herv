import { Shield, Zap, Users } from "lucide-react";
import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { motion } from "motion/react";

export function Mindset() {
  return (
    <section id="mindset" className="space-y-12">
      <SectionTitle subtitle="Every individual client deserves a world-class architectural stack. I don't compromise on the foundation.">
        The Mindset
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {DATA.mindset.map((item: any, idx: number) => (
          <BlurFade key={item.title} delay={idx * 0.15} yOffset={30}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative space-y-4 p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.07] transition-all group overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-foreground/5 rounded-full blur-3xl group-hover:bg-foreground/10 transition-colors" />
              
              <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500 shadow-lg shadow-transparent group-hover:shadow-foreground/20">
                {item.icon === "Shield" && <Shield size={28} className="group-hover:rotate-12 transition-transform" />}
                {item.icon === "Zap" && <Zap size={28} className="group-hover:scale-110 transition-transform" />}
                {item.icon === "Users" && <Users size={28} className="group-hover:-translate-y-1 transition-transform" />}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed text-balance">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-foreground w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
