import { BlurFade } from "../atoms/BlurFade";

interface ExperienceItemProps {
  company: string;
  start: string;
  end: string;
  title: string;
  description: string;
  delay?: number;
}

export function ExperienceItem({
  company,
  start,
  end,
  title,
  description,
  delay = 0,
}: ExperienceItemProps) {
  return (
    <BlurFade delay={delay}>
      <div className="group relative pl-8 border-l border-foreground/10 py-2">
        <div className="absolute left-0 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground border-4 border-background group-hover:scale-150 transition-transform duration-300" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
          <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">
            {company}
          </h3>
          <span className="text-sm text-zinc-500 font-mono">
            {start} — {end}
          </span>
        </div>
        <p className="text-sm font-medium text-zinc-400 mb-3">
          {title}
        </p>
        <p className="text-sm text-zinc-500 leading-relaxed text-balance">
          {description}
        </p>
      </div>
    </BlurFade>
  );
}
