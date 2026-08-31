import { BlurFade } from "../atoms/BlurFade";
import { Badge } from "../atoms/Badge";
import { ExternalLink } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  href?: string;
  badges?: string[];
  location?: string;
  start: string;
  end: string;
  title: string;
  description: string;
  delay?: number;
}

export function ExperienceItem({
  company,
  href,
  badges,
  location,
  start,
  end,
  title,
  description,
  delay = 0,
}: ExperienceItemProps) {
  return (
    <BlurFade delay={delay}>
      <div className="group relative pl-6 border-l-2 border-foreground/10 hover:border-foreground/40 transition-colors py-3 space-y-3">
        {/* Timeline Indicator Dot */}
        <div className="absolute left-0 top-4 -translate-x-[7px] w-3 h-3 rounded-full bg-background border-2 border-foreground/30 group-hover:border-foreground group-hover:bg-foreground transition-all duration-300" />
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5">
              {company}
              {href && href !== "#" && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-foreground transition-colors"
                  aria-label={company}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </h3>
            {location && (
              <span className="text-[11px] text-zinc-500 font-medium">
                • {location}
              </span>
            )}
          </div>

          <span className="text-xs font-mono font-semibold text-zinc-500 shrink-0">
            {start} — {end}
          </span>
        </div>

        {/* Title & Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-foreground/80">
            {title}
          </span>
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {badges.map((badge) => (
                <Badge key={badge} className="text-[10px] px-2 py-0.5 font-mono">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </BlurFade>
  );
}
