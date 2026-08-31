import { Navbar } from "../organisms/Navbar";
import { Chat } from "../../components/Chat";
import { DATA } from "../../constants";
import { Github, Linkedin, Facebook } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export function MainLayout({ children, isDark, setIsDark }: MainLayoutProps) {
  return (
    <div className="min-h-screen font-sans selection:bg-foreground selection:text-background transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Chat />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-20 space-y-10 sm:space-y-14">
        {children}
        <footer className="pt-10 pb-16 sm:pb-8 border-t border-foreground/10 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="space-y-3 max-w-sm">
              <h2 className="text-xl font-bold tracking-tighter italic">
                Herv.Web
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Specialized engineering for enterprise clients, founders, and technical teams. Building high-performance software with architectural rigor.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs text-zinc-500">
              <span className="font-bold text-foreground uppercase tracking-widest text-[10px]">
                Links
              </span>
              <a href="#projects" className="hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#experience" className="hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#stack" className="hover:text-foreground transition-colors">
                Architecture
              </a>
            </div>
            <div className="flex flex-col gap-2 text-xs text-zinc-500">
              <span className="font-bold text-foreground uppercase tracking-widest text-[10px]">
                Stay Updated
              </span>
              <p className="max-w-[200px] text-xs">
                Follow the development of autonomous AI systems & web platforms.
              </p>
              <div className="flex gap-3 pt-1">
                {Object.entries(DATA.contact.social).map(([name, social]) => {
                  const Icon = social.icon === "Github" ? Github : 
                               social.icon === "Linkedin" ? Linkedin : 
                               social.icon === "Facebook" ? Facebook : 
                               Github;
                  return (
                    <a
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors text-foreground"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
            <p>© {new Date().getFullYear()} Hervey Mapano. All rights reserved.</p>
            <p>Built with Next.js & Architectural Rigor</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
