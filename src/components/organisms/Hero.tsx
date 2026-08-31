import { useState } from "react";
import { Mail, MapPin, ChevronRight, FileCode, Check, Sparkles, Terminal } from "lucide-react";
import { DATA } from "../../constants";
import { BlurFade } from "../atoms/BlurFade";

const BLUR_FADE_DELAY = 0.03;

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="py-2 space-y-6">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-4 flex-1">
          {/* Availability Status Badge */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Full-Stack & AI Systems Roles
            </div>
          </BlurFade>

          {/* Name & Headline */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {DATA.name}
            </h1>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-base sm:text-lg font-medium text-foreground/90 leading-relaxed text-balance">
              {DATA.description}
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-xl">
              {DATA.summary}
            </p>
          </BlurFade>

          {/* Contact / Action Row */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-semibold text-xs rounded-xl hover:opacity-90 transition-opacity shadow-md"
              >
                Browse Projects <ChevronRight size={15} />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground/5 border border-foreground/10 font-semibold text-xs rounded-xl hover:bg-foreground/10 transition-colors"
              >
                Experience <FileCode size={15} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground/5 border border-foreground/10 font-semibold text-xs rounded-xl hover:bg-foreground/10 transition-colors text-zinc-500 hover:text-foreground"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-500" />
                    <span className="text-emerald-500 font-mono text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail size={13} />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </BlurFade>
        </div>

        {/* Avatar Profile */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-foreground/15 shadow-lg bg-foreground/5">
              <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Highlights Summary Bar */}
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-foreground/10 text-xs">
          <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/5 space-y-0.5">
            <div className="font-bold text-foreground flex items-center gap-1.5 text-xs">
              <Sparkles size={13} className="text-amber-500" /> 4+ Years
            </div>
            <p className="text-[10px] text-zinc-500">Software Engineering</p>
          </div>

          <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/5 space-y-0.5">
            <div className="font-bold text-foreground flex items-center gap-1.5 text-xs">
              <Terminal size={13} className="text-blue-500" /> Enterprise
            </div>
            <p className="text-[10px] text-zinc-500">LMS, SMS & ERP Systems</p>
          </div>

          <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/5 space-y-0.5">
            <div className="font-bold text-foreground flex items-center gap-1.5 text-xs">
              <Sparkles size={13} className="text-purple-500" /> Custom MCP
            </div>
            <p className="text-[10px] text-zinc-500">RAG & Agent Workflows</p>
          </div>

          <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/5 space-y-0.5">
            <div className="font-bold text-foreground flex items-center gap-1.5 text-xs">
              <MapPin size={13} className="text-emerald-500" /> PH / Remote
            </div>
            <p className="text-[10px] text-zinc-500">Cagayan de Oro City</p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
