import { motion } from "motion/react";
import { Home, Folder, Briefcase, Cpu, Code, BrainIcon } from "lucide-react";
import { DATA } from "../../constants";
import { ThemeToggle } from "../atoms/ThemeToggle";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export function Navbar({ isDark, setIsDark }: NavbarProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border border-foreground/20 rounded-full shadow-2xl"
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
            {item.icon === "Brain" && <BrainIcon size={20} />}
            {item.icon === "Cpu" && <Cpu size={20} />}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
        <div className="w-px h-6 bg-foreground/20 mx-1" />
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </motion.div>
    </nav>
  );
}
