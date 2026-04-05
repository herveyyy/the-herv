/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  ChevronRight,
  Globe,
  Cpu,
  Folder,
  Home,
  Sun,
  Moon,
  FileText,
} from "lucide-react";
import { DATA } from "./constants";
import { Chat } from "./components/Chat";

const BLUR_FADE_DELAY = 0.04;

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans selection:bg-foreground selection:text-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 px-4 py-2 bg-foreground/10 backdrop-blur-md border border-foreground/20 rounded-full shadow-2xl"
        >
          {DATA.navbar.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="p-2 hover:bg-foreground/20 rounded-full transition-colors group relative"
            >
              {item.icon === "Home" && <Home size={20} />}
              {item.icon === "Folder" && <Folder size={20} />}
              {item.icon === "Briefcase" && <Briefcase size={20} />}
              {item.icon === "Cpu" && <Cpu size={20} />}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
          <div className="w-px h-6 bg-foreground/20 mx-1" />
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-foreground/20 rounded-full transition-colors group relative"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Toggle Theme
            </span>
          </button>
        </motion.div>
      </nav>

      <Chat />

      <main className="max-w-3xl mx-auto px-6 py-20 space-y-24">
        {/* Hero Section */}
        <section id="home" className="space-y-8">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-8">
            <div className="space-y-4 flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: BLUR_FADE_DELAY }}
                className="text-4xl sm:text-6xl font-bold tracking-tighter"
              >
                Hi, I'm {DATA.name.split(" ")[0]} 👋
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: BLUR_FADE_DELAY * 2 }}
                className="text-xl text-zinc-500 max-w-150 text-balance"
              >
                {DATA.description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: BLUR_FADE_DELAY * 2 }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-foreground/20 grayscale hover:grayscale-0 transition-all duration-500 shadow-[0_0_20px_rgba(var(--foreground),0.1)]"
            >
              <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: BLUR_FADE_DELAY * 3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`mailto:${DATA.contact.email}`}
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors"
            >
              <Mail size={16} /> {DATA.contact.email}
            </a>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={16} /> {DATA.location}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 leading-relaxed text-balance"
          >
            {DATA.summary}
          </motion.p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-12">
            {DATA.work.map((job, idx) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative pl-8 border-l border-foreground/10"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground border-4 border-background group-hover:scale-125 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">
                    {job.company}
                  </h3>
                  <span className="text-sm text-zinc-500 font-mono">
                    {job.start} — {job.end}
                  </span>
                </div>
                <p className="text-sm font-medium text-zinc-400 mb-4">
                  {job.title}
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Projects Section */}
        <section id="work-projects" className="space-y-8">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-tight"
            >
              Work Projects
            </motion.h2>
            <p className="text-zinc-500 text-sm">
              Professional projects developed during my employment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DATA.projects.work.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-foreground/5 border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/30 transition-all hover:shadow-[0_0_30px_rgba(var(--foreground),0.05)]"
              >
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="font-bold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-foreground/10 hover:bg-foreground text-foreground hover:text-background rounded-lg transition-all flex items-center gap-1"
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
                  <p className="text-sm text-zinc-500 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-foreground/5 border border-foreground/10 rounded text-[10px] font-mono text-zinc-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section id="personal-projects" className="space-y-8">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-tight"
            >
              Personal Projects
            </motion.h2>
            <p className="text-zinc-500 text-sm">
              Independent work, open-source contributions, and experimental
              apps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DATA.projects.personal.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-foreground/5 border border-foreground/10 rounded-xl overflow-hidden hover:border-foreground/30 transition-all hover:shadow-[0_0_30px_rgba(var(--foreground),0.05)]"
              >
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="font-bold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-foreground/10 hover:bg-foreground text-foreground hover:text-background rounded-lg transition-all flex items-center gap-1"
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
                  <p className="text-sm text-zinc-500 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-foreground/5 border border-foreground/10 rounded text-[10px] font-mono text-zinc-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tight"
          >
            Skills & Technologies
          </motion.h2>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="px-3 py-1.5 bg-foreground/5 border border-foreground/10 rounded-lg text-sm font-medium hover:border-foreground/40 hover:bg-foreground hover:text-background transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tighter">
              Get In Touch
            </h2>
            <p className="text-zinc-500 max-w-125 mx-auto text-balance">
              You can reach out to {DATA.name} through the following contact
              channels. Feel free to connect if you have any questions about his
              projects!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <a
                key={name}
                href={social.url}
                className="p-3 bg-foreground/5 border border-foreground/10 rounded-2xl hover:bg-foreground hover:text-background transition-all group"
              >
                {social.icon === "Github" && <Github size={24} />}
                {social.icon === "Linkedin" && <Linkedin size={24} />}
                {social.icon === "Facebook" && <Facebook size={24} />}
              </a>
            ))}
          </motion.div>
          <a
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:opacity-80 transition-all"
          >
            Say Hello <ChevronRight size={20} />
          </a>
        </section>

        <footer className="pt-20 pb-10 border-t border-foreground/10 text-center text-zinc-500 text-sm">
          <p>
            © {new Date().getFullYear()} {DATA.name}. Built with React &
            Tailwind.
          </p>
        </footer>
      </main>
    </div>
  );
}
