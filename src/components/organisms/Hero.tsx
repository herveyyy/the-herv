import { motion } from "motion/react";
import { Mail, MapPin, ChevronRight, FileCode } from "lucide-react";
import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";

const BLUR_FADE_DELAY = 0.04;

export function Hero() {
  return (
    <section id="home" className="space-y-12 py-12">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-8">
        <div className="space-y-6 flex-1">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              System Status: Operational
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none">
              {DATA.name}
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-xl sm:text-2xl text-zinc-500 max-w-150 text-balance leading-relaxed">
              {DATA.description}
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="text-zinc-400 max-w-140 leading-relaxed">
              {DATA.summary}
            </p>
          </BlurFade>
          
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-foreground/10"
              >
                Start Your Project <ChevronRight size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground/5 border border-foreground/10 font-bold rounded-full hover:bg-foreground/10 transition-all"
              >
                View Case Studies <FileCode size={20} />
              </a>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-[2.5rem] overflow-hidden border-2 border-foreground/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            <img
              src={DATA.avatarUrl}
              alt={DATA.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </motion.div>
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="flex flex-wrap gap-6 border-t border-foreground/5 pt-8">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group"
          >
            <Mail size={16} className="group-hover:animate-bounce" /> {DATA.contact.email}
          </a>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={16} /> {DATA.location}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
