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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-0 pb-12 sm:py-20 space-y-20 sm:space-y-32">
        {children}
        <footer className="pt-20 pb-16 sm:pb-10 border-t border-foreground/10 space-y-12 sm:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between gap-12 sm:gap-8">
            <div className="space-y-4 max-w-sm">
              <h2 className="text-2xl font-bold tracking-tighter italic">
                Herv.Web
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Specialized engineering for independent founders and small
                businesses. Building high-performance systems with architectural
                rigor.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-2 text-sm text-zinc-500">
              <span className="font-bold text-foreground uppercase tracking-widest text-[10px]">
                Links
              </span>
              <a href="#" className="hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
            <div className="flex flex-col gap-4 sm:gap-2 text-sm text-zinc-500">
              <span className="font-bold text-foreground uppercase tracking-widest text-[10px]">
                Stay Updated
              </span>
              <p className="max-w-[200px]">
                Follow the development of next-gen systems.
              </p>
              <div className="flex gap-4 pt-2">
                {Object.entries(DATA.contact.social).map(([name, social]) => {
                  const Icon = social.icon === "Github" ? Github : 
                               social.icon === "Linkedin" ? Linkedin : 
                               social.icon === "Facebook" ? Facebook : 
                               Github;
                  return (
                    <a
                      key={name}
                      href={social.url}
                      className="p-2 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors"
                    >
                      <Icon size={18} className="text-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
            <p>© {new Date().getFullYear()} Herv.Web. All rights reserved.</p>
            <p>Built with Next.js & Architectural Rigor</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
