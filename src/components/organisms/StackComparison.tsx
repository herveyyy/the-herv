import { ComparisonItem } from "../molecules/ComparisonItem";
import { SectionTitle } from "../atoms/SectionTitle";
import { BlurFade } from "../atoms/BlurFade";

export function StackComparison() {
  const comparisons = [
    { feature: "Performance", myStack: "Ultra Fast (Bun/Vite)", traditional: "Slow (Node/Webpack)" },
    { feature: "Cost Efficiency", myStack: "Low (Serverless/Edge)", traditional: "High (Dedicated Server)" },
    { feature: "Development Speed", myStack: "Rapid (Drizzle/Next.js)", traditional: "Slow (Legacy PHP/WP)" },
    { feature: "Scalability", myStack: true, traditional: false },
    { feature: "Type Safety", myStack: "100% (TypeScript)", traditional: "None (JS/PHP)" },
    { feature: "Modern AI Ready", myStack: true, traditional: false },
  ];

  return (
    <section id="comparison" className="space-y-8">
      <SectionTitle subtitle="Why choosing the right stack matters for your business.">
        Stack Comparison
      </SectionTitle>
      
      <div className="bg-foreground/5 rounded-2xl border border-foreground/10 overflow-hidden">
        <div className="grid grid-cols-3 py-4 bg-foreground/10 border-b border-foreground/10 text-center font-bold text-xs uppercase tracking-widest">
          <span>Feature</span>
          <span className="text-foreground">My Modern Stack</span>
          <span className="text-zinc-500">Other Stacks</span>
        </div>
        <div className="px-6 pb-6">
          {comparisons.map((item, idx) => (
            <ComparisonItem 
              key={item.feature}
              feature={item.feature}
              myStack={item.myStack}
              traditional={item.traditional}
              delay={idx * 0.05}
            />
          ))}
        </div>
        <BlurFade delay={0.4} className="p-6 bg-foreground/5 text-center italic text-xs text-zinc-500">
          "I prioritize efficiency and scalability, ensuring your startup doesn't outgrow its technology within months."
        </BlurFade>
      </div>
    </section>
  );
}
