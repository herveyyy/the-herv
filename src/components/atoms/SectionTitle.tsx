import { BlurFade } from "./BlurFade";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  delay?: number;
}

export function SectionTitle({ children, subtitle, delay = 0 }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <BlurFade delay={delay}>
        <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
      </BlurFade>
      {subtitle && (
        <BlurFade delay={delay + 0.1}>
          <p className="text-zinc-500 text-sm">{subtitle}</p>
        </BlurFade>
      )}
    </div>
  );
}
