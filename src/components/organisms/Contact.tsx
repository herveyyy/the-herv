import { Github, Linkedin, Facebook, ChevronRight } from "lucide-react";
import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";

export function Contact() {
  return (
    <section className="py-20 text-center space-y-8">
      <BlurFade yOffset={20}>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter">
            Let's Scale Your Business
          </h2>
          <p className="text-zinc-500 max-w-125 mx-auto text-balance leading-relaxed">
            I'm currently accepting new projects from startup founders and small business owners. If you're looking for a partner to build your next big system, let's talk.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.1}>
        <div className="flex justify-center gap-6">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <a
              key={name}
              href={social.url}
              className="p-3 bg-foreground/5 border border-foreground/10 rounded-2xl hover:bg-foreground hover:text-background transition-all group hover:scale-110 active:scale-95 duration-300"
              aria-label={name}
            >
              {social.icon === "Github" && <Github size={24} />}
              {social.icon === "Linkedin" && <Linkedin size={24} />}
              {social.icon === "Facebook" && <Facebook size={24} />}
            </a>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <a
          href={`mailto:${DATA.contact.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-foreground/10"
        >
          Work With Me <ChevronRight size={20} />
        </a>
      </BlurFade>
    </section>
  );
}
