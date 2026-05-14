import { Github, Globe, FileText } from "lucide-react";
import { BlurFade } from "../atoms/BlurFade";
import { Badge } from "../atoms/Badge";

interface Link {
  type: string;
  href: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies?: string[];
  links: Link[];
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <BlurFade delay={delay} yOffset={10}>
      <div className="group flex flex-col h-full bg-foreground/5 border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/30 transition-all hover:shadow-[0_0_30px_rgba(var(--foreground),0.05)]">
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="font-bold text-lg leading-tight group-hover:text-foreground transition-colors">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-foreground/10 hover:bg-foreground text-foreground hover:text-background rounded-lg transition-all flex items-center gap-1 group/link"
                  title={link.type}
                >
                  {link.icon === "Github" && <Github size={14} />}
                  {link.icon === "Globe" && <Globe size={14} />}
                  {link.icon === "FileText" && <FileText size={14} />}
                  <span className="text-[10px] font-bold uppercase">
                    {link.type}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm text-zinc-500 mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </BlurFade>
  );
}
