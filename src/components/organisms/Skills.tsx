import { Badge } from "../atoms/Badge";
import { BlurFade } from "../atoms/BlurFade";
import { SectionTitle } from "../atoms/SectionTitle";
import { Code, Layout, Server, Database, Bot, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages & Runtimes",
    icon: Code,
    skills: ["TypeScript", "JavaScript (ES6+)", "Node.js", "Bun.js", "Python", "Java (OOP)", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Frameworks",
    icon: Layout,
    skills: ["Next.js (App Router/SSR)", "React.js (Vite)", "Vue 3", "Tailwind CSS", "shadcn/ui", "Responsive Design"],
  },
  {
    title: "Backend & Microservices",
    icon: Server,
    skills: ["NestJS", "Frappe Framework v15", "ERPNext", "RESTful APIs", "Auth.js / NextAuth", "Zod", "Turborepo"],
  },
  {
    title: "Databases & ORMs",
    icon: Database,
    skills: ["Drizzle ORM", "PostgreSQL", "MySQL", "SQLite3", "Firebase", "Schema Modeling"],
  },
  {
    title: "AI & Custom MCP Tooling",
    icon: Bot,
    skills: ["RAG Architecture", "OpenAI SDK", "Gemini SDK", "Claude SDK", "Custom MCP Servers", "Token Optimization"],
  },
  {
    title: "Cloud & Developer Tools",
    icon: Wrench,
    skills: ["Git / GitHub", "Vercel", "Amazon S3", "Linux Server Hosting", "PayMongo & Stripe APIs", "Figma UI Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-8 py-4">
      <SectionTitle subtitle="Core technical competencies grouped by domain and architectural layer.">
        Core Technical Competencies
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <BlurFade key={cat.title} delay={idx * 0.05}>
              <div className="p-5 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all space-y-3 h-full">
                <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                  <Icon size={16} className="text-zinc-500" />
                  <span>{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} className="text-[11px] px-2.5 py-1 font-mono font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
