interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`px-2 py-0.5 bg-foreground/5 border border-foreground/10 rounded text-[10px] font-mono text-zinc-500 hover:border-foreground/40 hover:bg-foreground hover:text-background transition-all cursor-default ${className}`}
    >
      {children}
    </span>
  );
}
