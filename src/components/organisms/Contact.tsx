import { useState } from "react";
import { Github, Linkedin, Facebook, Mail, Check, Send, Sparkles } from "lucide-react";
import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12">
      <BlurFade yOffset={20}>
        <div className="relative overflow-hidden p-8 sm:p-12 rounded-[2.5rem] bg-foreground text-background shadow-2xl space-y-8">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-background/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/15 text-[11px] font-bold uppercase tracking-widest text-background/80">
              <Sparkles size={13} className="text-amber-300" /> Let's Connect
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Open for Engineering Roles & Core Projects
            </h2>
            <p className="text-background/80 text-sm sm:text-base leading-relaxed text-balance">
              Looking for a Full-Stack Developer or AI Systems Engineer to architect high-throughput applications, custom MCP servers, or enterprise LMS/ERP infrastructure? Let's talk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-4 border-t border-background/15">
            {/* Direct Email Action */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-background text-foreground font-bold text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Send an Email <Send size={16} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-background/10 hover:bg-background/20 text-background border border-background/20 font-bold text-xs rounded-full transition-all"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-300" />
                    <span className="text-emerald-300 font-mono">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Mail size={14} />
                    <span className="font-mono">{DATA.contact.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/10 hover:bg-background hover:text-foreground rounded-2xl transition-all duration-300 text-background hover:scale-110 active:scale-95 border border-background/15"
                  aria-label={name}
                >
                  {social.icon === "Github" && <Github size={20} />}
                  {social.icon === "Linkedin" && <Linkedin size={20} />}
                  {social.icon === "Facebook" && <Facebook size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
