import { Github, Globe, FileText, ArrowUpRight, Star } from "lucide-react";
import { BlurFade } from "../atoms/BlurFade";
import { Badge } from "../atoms/Badge";

interface Link {
  type: string;
  href: string;
  icon: string;
}

interface Project {
  title: string;
  dates?: string;
  description: string;
  technologies?: string[];
  links: Link[];
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
  isFeatured?: boolean;
}

export function ProjectCard({ project, delay = 0, isFeatured = false }: ProjectCardProps) {
  return (
    <BlurFade delay={delay} yOffset={8}>
      <div
        className={`group flex flex-col rounded-3xl overflow-hidden transition-all duration-300 border ${
          isFeatured
            ? "bg-foreground/[0.07] border-foreground/20 hover:border-foreground/40 shadow-xl"
            : "bg-foreground/5 border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.07] shadow-md"
        }`}
      >
        {/* Top Header Accent */}
        <div className="px-5 py-3.5 bg-foreground/5 border-b border-foreground/10 flex items-center justify-between gap-2">
          {/* Terminal Dots */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/20 group-hover:bg-red-500/80 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/20 group-hover:bg-amber-500/80 transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/20 group-hover:bg-emerald-500/80 transition-colors" />
            </div>
            {isFeatured && (
              <span className="ml-1 inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Star size={11} /> Featured Build
              </span>
            )}
          </div>

          {/* Date Pill */}
          {project.dates && (
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-foreground/10 text-zinc-500">
              {project.dates}
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-2.5">
            {/* Title */}
            <h3 className="font-bold text-base sm:text-lg leading-tight group-hover:text-foreground transition-colors flex items-center justify-between gap-2">
              <span>{project.title}</span>
              {project.links.length > 0 && (
                <ArrowUpRight size={16} className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              )}
            </h3>

            {/* Full Organic Description for Collage Flow */}
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Tech Badges */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="text-[10px] px-2.5 py-0.5 font-mono font-medium">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}

            {/* Action Links */}
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-3 border-t border-foreground/10">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-foreground/10 hover:bg-foreground text-foreground hover:text-background rounded-xl transition-all flex items-center gap-1.5 text-[11px] font-bold"
                  >
                    {link.icon === "Github" && <Github size={13} />}
                    {link.icon === "Globe" && <Globe size={13} />}
                    {link.icon === "FileText" && <FileText size={13} />}
                    <span>{link.type}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
