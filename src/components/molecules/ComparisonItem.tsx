import { Check, X } from "lucide-react";
import { BlurFade } from "../atoms/BlurFade";

interface ComparisonItemProps {
  feature: string;
  myStack: string | boolean;
  traditional: string | boolean;
  delay?: number;
}

export function ComparisonItem({ feature, myStack, traditional, delay = 0 }: ComparisonItemProps) {
  return (
    <BlurFade delay={delay} className="grid grid-cols-3 py-4 border-b border-foreground/5 items-center">
      <span className="text-sm font-medium text-zinc-500">{feature}</span>
      <div className="flex justify-center">
        {typeof myStack === "boolean" ? (
          myStack ? <Check className="text-green-500" size={18} /> : <X className="text-red-500" size={18} />
        ) : (
          <span className="text-xs font-bold text-foreground px-2 py-1 bg-foreground/5 rounded">{myStack}</span>
        )}
      </div>
      <div className="flex justify-center">
        {typeof traditional === "boolean" ? (
          traditional ? <Check className="text-zinc-400" size={18} /> : <X className="text-zinc-400" size={18} />
        ) : (
          <span className="text-xs text-zinc-400">{traditional}</span>
        )}
      </div>
    </BlurFade>
  );
}
