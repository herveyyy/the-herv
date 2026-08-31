import { SectionTitle } from "../atoms/SectionTitle";
import { BlurFade } from "../atoms/BlurFade";
import { CheckCircle2, Code2, Cpu, Database, ShieldCheck, Zap } from "lucide-react";

export function StackComparison() {
  const standards = [
    {
      icon: Code2,
      title: "End-to-End Type Safety",
      detail: "100% TypeScript & Zod schema validation across client, server actions, REST APIs, and Drizzle database models.",
    },
    {
      icon: Cpu,
      title: "Custom MCP & Agent Workflows",
      detail: "Custom Model Context Protocol (MCP) servers bridging ERPNext, Google Workspace, and Discord APIs directly to LLM tool bindings.",
    },
    {
      icon: Database,
      title: "Sub-Second Query Performance",
      detail: "Drizzle ORM schema indexing over PostgreSQL & MySQL engines, ensuring zero N+1 query overhead under heavy concurrency.",
    },
    {
      icon: ShieldCheck,
      title: "Role-Gated RAG Security",
      detail: "Permissions-aware Retrieval-Augmented Generation restricting vector retrieval strictly to authenticated user privilege levels.",
    },
    {
      icon: Zap,
      title: "Institutional LMS & ERP Architecture",
      detail: "Dual-backend microservices combining NestJS & Frappe v15 for complex academic scheduling, grading, and multi-tenancy.",
    },
    {
      icon: CheckCircle2,
      title: "Token Economics & Quotas",
      detail: "Real-time AI token monitoring ('Silid Fleet') tracking storage quotas and token utilization across enterprise accounts.",
    },
  ];

  return (
    <section id="comparison" className="space-y-8 py-8">
      <SectionTitle subtitle="Production benchmarks and software engineering standards applied across all enterprise systems.">
        Engineering Standards & Capabilities
      </SectionTitle>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {standards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <BlurFade key={item.title} delay={idx * 0.05}>
              <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.07] transition-all space-y-3 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-base">
                    <Icon size={18} className="text-emerald-500 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Production Standard
                  </span>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>

      <BlurFade delay={0.3} className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 text-center italic text-xs sm:text-sm text-zinc-500">
        "I prioritize clean architecture, strict data integrity, and modular codebases to build software systems that scale seamlessly with organizational demands."
      </BlurFade>
    </section>
  );
}
