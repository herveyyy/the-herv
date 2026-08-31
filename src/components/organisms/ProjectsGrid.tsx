import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sparkles, LayoutGrid } from "lucide-react";
import { DATA } from "../../constants";
import { ProjectCard } from "../molecules/ProjectCard";
import { SectionTitle } from "../atoms/SectionTitle";
import { BlurFade } from "../atoms/BlurFade";

function byYearAsc<T extends { dates: string }>(a: T, b: T) {
  return Number(b.dates) - Number(a.dates);
}

const FILTER_TAGS = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & MCP Servers", keyword: ["AI", "MCP", "RAG", "LLM", "Gemini", "OpenAI", "Agent"] },
  { id: "next", label: "Next.js", keyword: ["Next.js"] },
  { id: "frappe", label: "Frappe / Vue 3 / NestJS", keyword: ["Frappe", "Vue 3", "NestJS", "ERPNext"] },
  { id: "orm", label: "Drizzle & Databases", keyword: ["Drizzle", "PostgreSQL", "MySQL", "DrizzleORM", "Drizzle ORM"] },
];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allProjects = useMemo(() => {
    const work = [...DATA.projects.work].map((p) => ({ ...p, category: "work" }));
    const personal = [...DATA.projects.personal].map((p) => ({ ...p, category: "personal" }));
    return [...work, ...personal].sort(byYearAsc);
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const searchLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !searchLower ||
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies?.some((tech) => tech.toLowerCase().includes(searchLower));

      if (!matchesSearch) return false;

      if (selectedCategory === "all") return true;

      const activeTag = FILTER_TAGS.find((t) => t.id === selectedCategory);
      if (!activeTag || !activeTag.keyword) return true;

      const projectTechs = (project.technologies || []).map((t) => t.toLowerCase());
      const titleDesc = (project.title + " " + project.description).toLowerCase();

      return activeTag.keyword.some(
        (kw) =>
          projectTechs.some((t) => t.includes(kw.toLowerCase())) ||
          titleDesc.includes(kw.toLowerCase())
      );
    });
  }, [allProjects, selectedCategory, searchQuery]);

  return (
    <div id="projects" className="space-y-10 py-6">
      {/* Header & Title */}
      <div className="space-y-4">
        <SectionTitle subtitle="Enterprise LMS, SMS, ERP, custom Model Context Protocol (MCP) servers, and full-stack web applications.">
          Project Portfolio Collage
        </SectionTitle>

        {/* Filter Controls */}
        <BlurFade delay={0.1}>
          <div className="p-4 rounded-3xl bg-foreground/5 border border-foreground/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
                <LayoutGrid size={14} className="text-foreground" />
                <span>2-Column Collage Filter</span>
              </div>

              {/* Search Box */}
              <div className="relative flex-1 max-w-xs">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Filter by technology (e.g. Next.js, RAG)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-4 py-1.5 bg-background border border-foreground/10 rounded-full text-xs placeholder:text-zinc-500 focus:outline-none focus:border-foreground/30 transition-all"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {FILTER_TAGS.map((tag) => {
                const isActive = selectedCategory === tag.id;
                const count = tag.id === "all"
                  ? allProjects.length
                  : allProjects.filter((p) => {
                      const projectTechs = (p.technologies || []).map((t) => t.toLowerCase());
                      const titleDesc = (p.title + " " + p.description).toLowerCase();
                      return tag.keyword?.some(
                        (kw) =>
                          projectTechs.some((t) => t.includes(kw.toLowerCase())) ||
                          titleDesc.includes(kw.toLowerCase())
                      );
                    }).length;

                return (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedCategory(tag.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-foreground text-background font-bold shadow-md scale-105"
                        : "bg-background hover:bg-foreground/10 text-zinc-500 border border-foreground/10"
                    }`}
                  >
                    <span>{tag.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive ? "bg-background/20 text-background" : "bg-foreground/10 text-zinc-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </BlurFade>
      </div>

      {/* 2-Column Masonry Collage Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-foreground/5 border border-foreground/10 space-y-3">
          <Sparkles className="mx-auto text-zinc-400" size={28} />
          <h3 className="text-base font-bold">No matching projects found</h3>
          <p className="text-xs text-zinc-500">
            Try adjusting your search query or clicking "All Projects" to view the complete list.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 text-xs bg-foreground text-background font-bold rounded-full hover:scale-105 transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isFeatured = (selectedCategory === "all" && (idx === 0 || idx === 3));

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="break-inside-avoid inline-block w-full"
                >
                  <ProjectCard project={project} delay={idx * 0.02} isFeatured={isFeatured} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Footer link */}
      <BlurFade delay={0.3} className="text-center pt-4">
        <p className="text-zinc-500 text-xs sm:text-sm">
          Want to explore full source code & active repositories? Check out{" "}
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-bold hover:underline"
          >
            GitHub @herveyyy
          </a>
        </p>
      </BlurFade>
    </div>
  );
}
