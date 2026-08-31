import { useState } from "react";
import { Github, Linkedin, Facebook, Mail, Check, Send } from "lucide-react";
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
    <section id="contact" className="py-4">
      <BlurFade yOffset={15}>
        <div className="relative overflow-hidden p-6 sm:p-10 rounded-3xl bg-foreground text-background shadow-xl space-y-6">
          {/* Background overlay */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-background/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/10 border border-background/15 text-[11px] font-bold uppercase tracking-widest text-background/80">
              <Mail size={13} /> Get In Touch
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-balance">
              Let's Connect & Build
            </h2>
            <p className="text-background/80 text-xs sm:text-sm leading-relaxed text-balance">
              Looking for a Full-Stack Developer or Software Engineer to build enterprise web platforms, custom MCP integrations, or digital tools? Feel free to reach out directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-background/15">
            {/* Direct Email Action */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground font-bold text-xs rounded-full hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                Send an Email <Send size={14} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 bg-background/10 hover:bg-background/20 text-background border border-background/20 font-bold text-xs rounded-full transition-all"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-300" />
                    <span className="text-emerald-300 font-mono">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Mail size={13} />
                    <span className="font-mono">{DATA.contact.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-background/10 hover:bg-background hover:text-foreground rounded-xl transition-all duration-300 text-background border border-background/15"
                  aria-label={name}
                >
                  {social.icon === "Github" && <Github size={18} />}
                  {social.icon === "Linkedin" && <Linkedin size={18} />}
                  {social.icon === "Facebook" && <Facebook size={18} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
